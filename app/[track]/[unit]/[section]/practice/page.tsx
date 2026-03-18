import { notFound } from 'next/navigation'
import { AdaptivePractice } from '@/components/practice/AdaptivePractice'
import { getSection, trackRegistry } from '@/content/tracks'

export function generateStaticParams() {
  return Object.values(trackRegistry).flatMap((track) =>
    track.units.flatMap((unit) => unit.sections.map((section) => ({ track: track.slug, unit: unit.slug, section: section.slug })))
  )
}

export const dynamicParams = false

export default function SectionPracticePage({ params }: { params: { track: string; unit: string; section: string } }) {
  const section = getSection(params.track, params.unit, params.section)
  if (!section) notFound()

  return <AdaptivePractice title={section.title} skills={section.practiceSkills} moveOnThreshold={section.moveOnThreshold} />
}
