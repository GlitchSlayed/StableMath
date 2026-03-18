import { notFound } from 'next/navigation'
import { AdaptivePractice } from '@/components/practice/AdaptivePractice'
import { getSection, trackRegistry } from '@/content/tracks'

export function generateStaticParams() {
  return Object.values(trackRegistry).flatMap((track) =>
    track.units.flatMap((unit) => unit.sections.map((section) => ({ track: track.slug, unit: unit.slug, section: section.slug })))
  )
}

export const dynamicParams = false

export default async function SectionPracticePage({ params }: { params: Promise<{ track: string; unit: string; section: string }> }) {
  const { track: trackSlug, unit: unitSlug, section: sectionSlug } = await params
  const section = getSection(trackSlug, unitSlug, sectionSlug)
  if (!section) notFound()

  return <AdaptivePractice title={section.title} skills={section.practiceSkills} moveOnThreshold={section.moveOnThreshold} />
}
