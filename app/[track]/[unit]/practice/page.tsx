import { PracticeExperience } from '@/components/practice/PracticeExperience'

export function generateStaticParams() {
  return Object.entries({ engineering: ['unit1-calc1'], 'cs-ml-ai': ['unit2-probability', 'unit3-optimization'] }).flatMap(([track, units]) => units.map((unit) => ({ track, unit })))
}

export const dynamicParams = false

export default function PracticePage() {
  return <PracticeExperience />
}
