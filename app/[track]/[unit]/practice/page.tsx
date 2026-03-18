import { notFound } from 'next/navigation'
import { AdaptivePractice } from '@/components/practice/AdaptivePractice'
import { getUnit, trackRegistry } from '@/content/tracks'

export function generateStaticParams() {
  return Object.values(trackRegistry).flatMap((track) => track.units.map((unit) => ({ track: track.slug, unit: unit.slug })))
}

export const dynamicParams = false

export default async function PracticePage({ params }: { params: Promise<{ track: string; unit: string }> }) {
  const { track: trackSlug, unit: unitSlug } = await params
  const unit = getUnit(trackSlug, unitSlug)
  if (!unit) notFound()

  return (
    <AdaptivePractice
      title={`${unit.title} mixed practice`}
      skills={unit.sections.flatMap((section) => section.practiceSkills)}
      moveOnThreshold={90}
    />
  )
}
