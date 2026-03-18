import { randomInt } from '@/lib/question-engine/generator'
import { hintTrees } from '@/lib/question-engine/hints'
import { validateEigenvalues } from '@/lib/question-engine/validator'
import type { QuestionTemplate } from '@/lib/question-engine/types'

export const eigenvalueTemplates: QuestionTemplate[] = [1, 2, 3].map((difficulty) => ({
  id: `la-eigenvalues-${difficulty}`,
  topicId: 'eigenvalues',
  difficulty: difficulty as 1 | 2 | 3,
  type: 'numeric',
  generate: (rng) => {
    const lambda1 = randomInt(rng, 1, 2 + difficulty)
    const lambda2 = randomInt(rng, lambda1 + 1, lambda1 + 3 + difficulty)
    const a = lambda1 + 1
    const d = lambda2 + 1
    const b = 1
    const c = (a * d) - (lambda1 * lambda2)
    const trace = a + d
    const determinant = a * d - b * c
    return {
      prompt: `Find the eigenvalues of \begin{bmatrix}${a} & ${b}\\ ${c} & ${d}\end{bmatrix}.`,
      params: { trace, determinant },
      correctAnswer: [lambda1, lambda2],
      metadata: { traceDetRoots: [trace - determinant, determinant] },
      steps: [
        { label: 'Characteristic polynomial', explanation: 'Compute det(A - λI).', result: `λ^2 - ${trace}λ + ${determinant}` },
        { label: 'Solve', explanation: 'Factor or apply the quadratic formula.', result: `${lambda1}, ${lambda2}` }
      ]
    }
  },
  validate: validateEigenvalues,
  hints: hintTrees['la-eigenvalues-2']
}))
