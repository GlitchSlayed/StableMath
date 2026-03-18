import { hashSeed, mulberry32 } from './prng'
import type { GeneratedQuestion, QuestionTemplate } from './types'

export const generateQuestion = (template: QuestionTemplate, seedParts: Array<string | number>): GeneratedQuestion => {
  const seed = hashSeed(template.id, ...seedParts)
  const rng = mulberry32(seed)
  return template.generate(rng)
}

export const pickFrom = <T>(rng: () => number, values: T[]): T => values[Math.floor(rng() * values.length)]

export const randomInt = (rng: () => number, min: number, max: number) => Math.floor(rng() * (max - min + 1)) + min
