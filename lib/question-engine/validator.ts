import { inRange, round } from '@/lib/utils/math'
import type { GeneratedQuestion, ValidationResult } from './types'

const parseNumeric = (answer: unknown): number | null => {
  if (typeof answer === 'number' && Number.isFinite(answer)) return answer
  if (typeof answer === 'string') {
    const normalized = answer.trim().replace(/,/g, '')
    const parsed = Number(normalized)
    return Number.isFinite(parsed) ? parsed : null
  }
  return null
}

export const validatePowerRule = (userAnswer: string, generated: GeneratedQuestion): ValidationResult => {
  const { coefficient, power, sign = 1, mode = 0 } = generated.params
  const expectedCoeff = coefficient * power * sign
  const expectedExp = power - 1
  const normalized = userAnswer.replace(/\s+/g, '')
  const match = normalized.match(/^(-?\d+)x\^(\d+)$/)
  if (!match) {
    if (normalized.includes('/')) {
      return { correct: false, errorType: 'conceptual', errorDetail: 'This item asks for a derivative, not an antiderivative.', explanation: 'Differentiate using the power rule: multiply by the exponent and subtract one from the exponent.' }
    }
    return { correct: false, errorType: 'notation', errorDetail: 'Enter the derivative in the form ax^n.', explanation: 'Use a simplified monomial form so the checker can confirm both the coefficient and exponent.' }
  }

  const coeff = Number(match[1])
  const exponent = Number(match[2])
  if (coeff === expectedCoeff && exponent === expectedExp) {
    return { correct: true, explanation: 'Correct — the coefficient was multiplied by the original power, and the exponent decreased by one.' }
  }
  if (coeff === -expectedCoeff && exponent === expectedExp) {
    return { correct: false, errorType: 'sign', errorDetail: 'The exponent is correct, but the sign flipped unexpectedly.', explanation: 'Carry the original sign through the derivative before simplifying.' }
  }
  if (coeff !== expectedCoeff && exponent === expectedExp) {
    return { correct: false, errorType: 'power-rule', errorDetail: 'Exponent decreased correctly but check the coefficient — multiply by the original power.', explanation: 'The power rule needs both pieces: multiply by n, then reduce the exponent to n - 1.' }
  }
  return { correct: false, errorType: 'conceptual', errorDetail: 'The derivative does not match the structure of the original monomial.', explanation: 'Reapply the power rule term-by-term to the original expression.' }
}

export const validateChainRule = (userAnswer: string, generated: GeneratedQuestion): ValidationResult => {
  const expected = String(generated.correctAnswer).replace(/\s+/g, '')
  const normalized = userAnswer.replace(/\s+/g, '')
  const innerDerivative = generated.params.innerDerivative
  const missingInner = String(generated.metadata?.outerOnlyAnswer ?? '').replace(/\s+/g, '')
  if (normalized === expected) {
    return { correct: true, explanation: 'Correct — you differentiated the outer function and multiplied by the derivative of the inner function.' }
  }
  if (normalized === missingInner) {
    return { correct: false, errorType: 'chain-rule', errorDetail: `You differentiated the outer function correctly but forgot to multiply by the derivative of the inner function, which is ${innerDerivative}.`, explanation: 'Whenever one function is nested inside another, finish with the derivative of the inside.' }
  }
  return { correct: false, errorType: 'conceptual', errorDetail: "This derivative needs the chain rule structure outer'(inner) · inner'.", explanation: 'Identify the outer function, differentiate it, then multiply by the derivative of the inner expression.' }
}

export const validateMatrixMultiplication = (userAnswer: unknown, generated: GeneratedQuestion): ValidationResult => {
  const expected = generated.correctAnswer as number[][]
  const candidate = userAnswer as number[][]
  if (!Array.isArray(candidate)) {
    return { correct: false, errorType: 'notation', errorDetail: 'Enter a 2×2 matrix as nested arrays.', explanation: 'Matrix answers should preserve row and column structure.' }
  }
  const isTranspose = candidate.length === expected[0].length && candidate.every((row, i) => Array.isArray(row) && row.every((value, j) => value === expected[j]?.[i]))
  if (isTranspose) {
    return { correct: false, errorType: 'transpose', errorDetail: 'Your entries are correct values but arranged as the transpose of AB.', explanation: 'Matrix multiplication keeps row-by-column order; do not swap the result orientation.' }
  }
  for (let i = 0; i < expected.length; i += 1) {
    for (let j = 0; j < expected[i].length; j += 1) {
      if (candidate[i]?.[j] !== expected[i][j]) {
        return { correct: false, errorType: 'arithmetic', errorDetail: `Entry (${i + 1}, ${j + 1}) is off. Recompute row ${i + 1} · column ${j + 1}.`, explanation: 'Each matrix entry is one row-by-column dot product, so a single slip often stays localized.' }
      }
    }
  }
  return { correct: true, explanation: 'Correct — each entry matches the row-by-column products.' }
}

export const validateEigenvalues = (userAnswer: unknown, generated: GeneratedQuestion): ValidationResult => {
  const values = Array.isArray(userAnswer) ? userAnswer.map(parseNumeric) : []
  const expected = (generated.correctAnswer as number[]).map((value) => round(value, 4)).sort((a, b) => a - b)
  const sorted = values.filter((value): value is number => value !== null).map((value) => round(value, 4)).sort((a, b) => a - b)
  if (sorted.length === expected.length && sorted.every((value, index) => inRange(value, expected[index]))) {
    return { correct: true, explanation: 'Correct — the characteristic polynomial factors to those eigenvalues.' }
  }
  const trace = generated.params.trace
  const determinant = generated.params.determinant
  const traceDetRoots = generated.metadata?.traceDetRoots as number[] | undefined
  if (traceDetRoots && sorted.length === traceDetRoots.length && sorted.every((value, index) => inRange(value, round(traceDetRoots[index], 4)))) {
    return { correct: false, errorType: 'arithmetic', errorDetail: `You used trace ${trace} and determinant ${determinant}, but solved the characteristic polynomial incorrectly.`, explanation: 'After forming λ² − (trace)λ + det = 0, solve that quadratic carefully.' }
  }
  return { correct: false, errorType: 'sign', errorDetail: 'Check the signs in det(A − λI) = 0; a subtraction likely flipped.', explanation: 'When subtracting λ on the diagonal, both diagonal terms change before expanding the determinant.' }
}

export const validateBayes = (userAnswer: unknown, generated: GeneratedQuestion): ValidationResult => {
  const numeric = parseNumeric(userAnswer)
  const answer = Number(generated.correctAnswer)
  if (numeric !== null && inRange(numeric, answer, 1e-3)) {
    return { correct: true, explanation: 'Correct — you used the posterior numerator and normalized by the total probability of the evidence.' }
  }
  const reversed = generated.metadata?.reversedConditional
  if (typeof reversed === 'number' && numeric !== null && inRange(numeric, reversed, 1e-3)) {
    return { correct: false, errorType: 'conditioning', errorDetail: 'You computed P(B|A) instead of P(A|B).', explanation: "Bayes' theorem reverses the condition only after multiplying by the prior and dividing by P(B)." }
  }
  const numerator = generated.metadata?.numerator
  if (typeof numerator === 'number' && numeric !== null && inRange(numeric, numerator, 1e-3)) {
    return { correct: false, errorType: 'conceptual', errorDetail: "You have the numerator P(B|A)P(A) — don't forget to divide by P(B) = P(B|A)P(A) + P(B|¬A)P(¬A).", explanation: 'The posterior must be normalized because the evidence can arise from multiple underlying cases.' }
  }
  return { correct: false, errorType: 'arithmetic', errorDetail: 'The setup may be right, but the probability arithmetic does not match the posterior.', explanation: 'Compute the numerator and denominator separately, then divide and simplify.' }
}

export const validateGradientDescent = (userAnswer: unknown, generated: GeneratedQuestion): ValidationResult => {
  const numeric = parseNumeric(userAnswer)
  const expected = Number(generated.correctAnswer)
  if (numeric !== null && inRange(numeric, expected)) {
    return { correct: true, explanation: 'Correct — gradient descent moves opposite the gradient scaled by the learning rate.' }
  }
  const ascent = generated.metadata?.ascentAnswer
  if (typeof ascent === 'number' && numeric !== null && inRange(numeric, ascent)) {
    return { correct: false, errorType: 'sign', errorDetail: 'Gradient descent subtracts the gradient — adding it would be ascent.', explanation: 'Use xₙ₊₁ = xₙ − η∇f(xₙ), not a plus sign.' }
  }
  return { correct: false, errorType: 'arithmetic', errorDetail: 'Check where the learning rate multiplies the gradient term.', explanation: 'Only the gradient is scaled by η before subtracting from the current point.' }
}
