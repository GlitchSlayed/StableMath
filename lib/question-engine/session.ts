import { generateQuestion } from './generator'
import { templateRegistry } from './templates'
import type { Difficulty, SessionQuestionRecord, SessionSummary } from './types'

export interface SessionState {
  difficulty: Difficulty
  streakCorrect: number
  streakWrong: number
  records: SessionQuestionRecord[]
}

export const createSession = (): SessionState => ({
  difficulty: 1,
  streakCorrect: 0,
  streakWrong: 0,
  records: []
})

export const updateDifficulty = (state: SessionState, correct: boolean): SessionState => {
  const next = { ...state }
  if (correct) {
    next.streakCorrect += 1
    next.streakWrong = 0
    if (next.difficulty === 1 && next.streakCorrect >= 2) next.difficulty = 2
    if (next.difficulty === 2 && next.streakCorrect >= 4) next.difficulty = 3
  } else {
    next.streakWrong += 1
    next.streakCorrect = 0
    if (next.streakWrong >= 2) next.difficulty = Math.max(1, next.difficulty - 1) as Difficulty
  }
  return next
}

export const recordQuestion = (state: SessionState, record: SessionQuestionRecord) => updateDifficulty({ ...state, records: [...state.records, record] }, record.correct)

export const buildSessionQuestions = (templateIds: string[], dateKey: string) => templateIds.slice(0, 10).map((id, index) => {
  const template = templateRegistry[id]
  return { template, generated: generateQuestion(template, [index, dateKey]) }
})

export const summarizeSession = (state: SessionState): SessionSummary => {
  const score = state.records.filter((record) => record.correct).length
  const avgTime = state.records.length ? state.records.reduce((sum, record) => sum + record.timeSpent, 0) / state.records.length : 0
  const errorsByType = state.records.reduce<SessionSummary['errorsByType']>((acc, record) => {
    if (record.errorType) acc[record.errorType] = (acc[record.errorType] ?? 0) + 1
    return acc
  }, {})
  const recommendedReviewTopics = [...new Set(state.records.filter((record) => !record.correct).map((record) => record.templateId.split('-').slice(0, 2).join('-')))]
  return { score, avgTime, errorsByType, recommendedReviewTopics }
}
