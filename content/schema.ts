import { z } from 'zod'

export const sourceSchema = z.object({
  label: z.string(),
  href: z.string(),
  note: z.string()
})

export const practiceSkillSchema = z.object({
  label: z.string(),
  templateIds: z.array(z.string())
})

export const subsectionSchema = z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string(),
  summary: z.string(),
  conceptualContentPath: z.string(),
  mathContentPath: z.string(),
  sources: z.array(sourceSchema),
  practiceSkills: z.array(practiceSkillSchema),
  moveOnThreshold: z.number().min(0).max(100)
})

export const unitSchema = z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string(),
  summary: z.string(),
  order: z.number().int().nonnegative(),
  estimatedMinutes: z.number().int().positive(),
  shared: z.boolean().default(false),
  sections: z.array(subsectionSchema)
})

export const trackSchema = z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string(),
  audience: z.string(),
  description: z.string(),
  units: z.array(unitSchema)
})

export type Source = z.infer<typeof sourceSchema>
export type PracticeSkill = z.infer<typeof practiceSkillSchema>
export type Subsection = z.infer<typeof subsectionSchema>
export type Unit = z.infer<typeof unitSchema>
export type Track = z.infer<typeof trackSchema>
