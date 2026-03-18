import { notFound } from 'next/navigation'
import { AdaptivePractice } from '@/components/practice/AdaptivePractice'
import { getUnit, trackRegistry } from '@/content/tracks'

export function generateStaticParams() {
  return Object.values(trackRegistry).flatMap((track) => track.units.map((unit) => ({ track: track.slug, unit: unit.slug })))
}

export const dynamicParams = false

export default function PracticePage({ params }: { params: { track: string; unit: string } }) {
  const unit = getUnit(params.track, params.unit)
  if (!unit) notFound()

  return (
    <AdaptivePractice
      title={`${unit.title} mixed practice`}
      skills={unit.sections.flatMap((section) => section.practiceSkills)}
      moveOnThreshold={90}
    />
  )
}
