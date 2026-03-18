import { notFound } from 'next/navigation'
import { ProgressTracker } from '@/components/curriculum/ProgressTracker'
import { SectionCard } from '@/components/curriculum/SectionCard'
import { Card } from '@/components/ui'
import { getUnit, trackRegistry } from '@/content/tracks'

export function generateStaticParams() {
  return Object.values(trackRegistry).flatMap((track) => track.units.map((unit) => ({ track: track.slug, unit: unit.slug })))
}

export const dynamicParams = false

export default function UnitPage({ params }: { params: { track: string; unit: string } }) {
  const track = trackRegistry[params.track]
  const unit = getUnit(params.track, params.unit)
  if (!track || !unit) notFound()

  return (
    <div className='space-y-8'>
      <div>
        <h1 className='text-4xl'>{unit.title}</h1>
        <p className='mt-4 max-w-3xl text-[var(--text-secondary)]'>{unit.summary}</p>
      </div>
      <ProgressTracker completed={0} total={unit.sections.length} accuracy={0} recommendation={unit.shared ? 'Use this shared unit before branching into track-specific work.' : 'Work through each section in order and use practice until you clear 90%.'} />
      <div className='grid gap-4'>
        {unit.sections.map((section, index) => <SectionCard key={section.id} trackSlug={track.slug} unitSlug={unit.slug} index={index} section={section} />)}
      </div>
      <Card>
        <p className='text-sm text-[var(--text-secondary)]'>Each section includes a conceptual page, a math tie-in segment on the same page, and unlimited adaptive practice with a move-on recommendation once your accuracy exceeds 90%.</p>
      </Card>
    </div>
  )
}
