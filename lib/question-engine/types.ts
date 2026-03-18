export type Difficulty = 1 | 2 | 3
export type QuestionType = 'numeric' | 'multiple-choice' | 'multi-step' | 'true-false' | 'matching'

export type ErrorType =
  | 'sign'
  | 'arithmetic'
  | 'chain-rule'
  | 'power-rule'
  | 'conceptual'
  | 'notation'
  | 'conditioning'
  | 'transpose'
  | 'off-by-one'
  | 'convergence'
  | 'partial'

export interface SolutionStep {
  label: string
  explanation: string
  result: string
}

export type RNG = () => number

export interface GeneratedQuestion {
  prompt: string
  params: Record<string, number>
  correctAnswer: unknown
  distractors?: unknown[]
  steps?: SolutionStep[]
  metadata?: Record<string, unknown>
}

export interface ValidationResult {
  correct: boolean
  errorType?: ErrorType
  errorDetail?: string
  partialCredit?: number
  explanation: string
  relatedTopicIds?: string[]
}

export interface QuestionTemplate {
  id: string
  topicId: string
  difficulty: Difficulty
  type: QuestionType
  generate: (rng: RNG) => GeneratedQuestion
  validate: (userAnswer: unknown, generated: GeneratedQuestion) => ValidationResult
  hints: [string, string, string]
}

export interface SessionQuestionRecord {
  templateId: string
  timeSpent: number
  hintsUsed: number
  errorType?: ErrorType
  correct: boolean
}

export interface SessionSummary {
  score: number
  avgTime: number
  errorsByType: Partial<Record<ErrorType, number>>
  recommendedReviewTopics: string[]
}
