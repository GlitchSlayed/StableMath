import { z } from 'zod'

export const topicSchema = z.object({
  id: z.string(),
  title: z.string(),
  summary: z.string(),
  lessonPath: z.string(),
  practiceTemplateIds: z.array(z.string())
})

export const unitSchema = z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string(),
  summary: z.string(),
  order: z.number().int().nonnegative(),
  estimatedMinutes: z.number().int().positive(),
  topics: z.array(topicSchema)
})

export const trackSchema = z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string(),
  audience: z.string(),
  description: z.string(),
  sharedTopicIds: z.array(z.string()),
  units: z.array(unitSchema)
})

export const lessonSchema = z.object({
  title: z.string(),
  topicId: z.string(),
  track: z.enum(['engineering', 'cs-ml-ai', 'shared']),
  summary: z.string(),
  objectives: z.array(z.string()),
  practiceTemplateIds: z.array(z.string())
})

export type Topic = z.infer<typeof topicSchema>
export type Unit = z.infer<typeof unitSchema>
export type Track = z.infer<typeof trackSchema>
export type Lesson = z.infer<typeof lessonSchema>
