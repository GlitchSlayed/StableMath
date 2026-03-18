import { hintTrees } from '@/lib/question-engine/hints'
import { validateBayes } from '@/lib/question-engine/validator'
import type { QuestionTemplate } from '@/lib/question-engine/types'
import { round } from '@/lib/utils/math'

export const bayesTemplates: QuestionTemplate[] = [1, 2, 3].map((difficulty) => ({
  id: `prob-bayes-${difficulty}`,
  topicId: 'bayes',
  difficulty: difficulty as 1 | 2 | 3,
  type: 'numeric',
  generate: () => {
    const pA = 0.2 + difficulty * 0.05
    const pBgivenA = 0.7 + difficulty * 0.05
    const pBgivenNotA = 0.1 + difficulty * 0.03
    const numerator = pBgivenA * pA
    const evidence = numerator + pBgivenNotA * (1 - pA)
    const posterior = round(numerator / evidence, 4)
    return {
      prompt: `An event A has prior ${pA.toFixed(2)}. Evidence B occurs with P(B|A)=${pBgivenA.toFixed(2)} and P(B|\neg A)=${pBgivenNotA.toFixed(2)}. Find P(A|B).`,
      params: { pA, pBgivenA, pBgivenNotA },
      correctAnswer: posterior,
      metadata: { numerator: round(numerator, 4), reversedConditional: round(pBgivenA, 4) },
      steps: [
        { label: 'Posterior numerator', explanation: 'Multiply evidence likelihood by the prior.', result: numerator.toFixed(4) },
        { label: 'Evidence probability', explanation: 'Use the law of total probability.', result: evidence.toFixed(4) },
        { label: 'Normalize', explanation: 'Divide numerator by evidence.', result: posterior.toFixed(4) }
      ]
    }
  },
  validate: validateBayes,
  hints: hintTrees['prob-bayes-2']
}))
