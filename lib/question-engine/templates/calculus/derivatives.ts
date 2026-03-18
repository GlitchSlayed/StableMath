import { randomInt } from '@/lib/question-engine/generator'
import { hintTrees } from '@/lib/question-engine/hints'
import { validateChainRule, validatePowerRule } from '@/lib/question-engine/validator'
import type { QuestionTemplate } from '@/lib/question-engine/types'

const powerRuleTemplates: QuestionTemplate[] = [1, 2, 3].map((difficulty) => ({
  id: `calc-power-rule-${difficulty}`,
  topicId: 'derivatives',
  difficulty: difficulty as 1 | 2 | 3,
  type: 'numeric',
  generate: (rng) => {
    const coefficient = randomInt(rng, difficulty, difficulty * 4)
    const power = randomInt(rng, difficulty + 1, difficulty + 4)
    const sign = rng() > 0.5 ? 1 : -1
    return {
      prompt: `Differentiate \(${sign === -1 ? '-' : ''}${coefficient}x^${power}\) with respect to x.`,
      params: { coefficient, power, sign },
      correctAnswer: `${coefficient * power * sign}x^${power - 1}`,
      steps: [
        { label: 'Identify the monomial', explanation: 'Read the coefficient and exponent from the original term.', result: `${sign === -1 ? '-' : ''}${coefficient}x^${power}` },
        { label: 'Apply the power rule', explanation: 'Multiply by the exponent and reduce the exponent by one.', result: `${coefficient * power * sign}x^${power - 1}` }
      ]
    }
  },
  validate: (userAnswer, generated) => validatePowerRule(String(userAnswer), generated),
  hints: hintTrees['calc-power-rule-1']
}))

const chainRuleTemplates: QuestionTemplate[] = [1, 2, 3].map((difficulty) => ({
  id: `calc-chain-rule-${difficulty}`,
  topicId: 'derivatives',
  difficulty: difficulty as 1 | 2 | 3,
  type: 'numeric',
  generate: (rng) => {
    const innerCoeff = randomInt(rng, 2, 4 + difficulty)
    const innerPower = randomInt(rng, 2, 3 + difficulty)
    const outer = 'sin'
    const innerDerivative = `${innerCoeff * innerPower}x^${innerPower - 1}`
    const promptInner = `${innerCoeff}x^${innerPower}`
    const outerOnlyAnswer = `cos(${promptInner})`
    const correctAnswer = `${innerCoeff * innerPower}x^${innerPower - 1}cos(${promptInner})`
    return {
      prompt: `Differentiate \(${outer}(${promptInner})\).`,
      params: { innerDerivative: innerCoeff * innerPower, innerCoeff, innerPower },
      correctAnswer,
      metadata: { outerOnlyAnswer },
      steps: [
        { label: 'Outer derivative', explanation: 'The derivative of sin(u) is cos(u).', result: `cos(${promptInner})` },
        { label: 'Inner derivative', explanation: `Differentiate ${promptInner} with the power rule.`, result: innerDerivative },
        { label: 'Multiply', explanation: 'Chain rule multiplies the two pieces.', result: correctAnswer }
      ]
    }
  },
  validate: (userAnswer, generated) => validateChainRule(String(userAnswer), generated),
  hints: hintTrees['calc-chain-rule-2']
}))

export const derivativeTemplates = [...powerRuleTemplates, ...chainRuleTemplates]
