import { randomInt } from '@/lib/question-engine/generator'
import { hintTrees } from '@/lib/question-engine/hints'
import { validateGradientDescent } from '@/lib/question-engine/validator'
import type { QuestionTemplate } from '@/lib/question-engine/types'

export const gradientDescentTemplates: QuestionTemplate[] = [1, 2, 3].map((difficulty) => ({
  id: `opt-gradient-descent-${difficulty}`,
  topicId: 'gradient-descent',
  difficulty: difficulty as 1 | 2 | 3,
  type: 'numeric',
  generate: (rng) => {
    const x = randomInt(rng, 2, 4 + difficulty)
    const eta = Number((0.1 * difficulty).toFixed(1))
    const gradient = 2 * x
    const correctAnswer = Number((x - eta * gradient).toFixed(2))
    return {
      prompt: `For f(x)=x^2, starting at x=${x} with learning rate η=${eta}, compute one gradient descent update.`,
      params: { x, eta, gradient },
      correctAnswer,
      metadata: { ascentAnswer: Number((x + eta * gradient).toFixed(2)) },
      steps: [
        { label: 'Differentiate', explanation: 'The gradient of x² is 2x.', result: `${gradient}` },
        { label: 'Scale', explanation: 'Multiply the gradient by the learning rate.', result: `${(eta * gradient).toFixed(2)}` },
        { label: 'Update', explanation: 'Subtract the scaled gradient from the current x.', result: `${correctAnswer}` }
      ]
    }
  },
  validate: validateGradientDescent,
  hints: hintTrees['opt-gradient-descent-1']
}))
