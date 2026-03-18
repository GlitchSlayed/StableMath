import { notFound } from 'next/navigation'
import { ProgressTracker } from '@/components/curriculum/ProgressTracker'
import { UnitMap } from '@/components/curriculum/UnitMap'
import { trackRegistry } from '@/content/tracks'

export function generateStaticParams() {
  return Object.keys(trackRegistry).map((track) => ({ track }))
}

export const dynamicParams = false

export default async function TrackPage({ params }: { params: Promise<{ track: string }> }) {
  const { track: trackSlug } = await params
  const track = trackRegistry[trackSlug]
  if (!track) notFound()

  const totalSections = track.units.reduce((sum, unit) => sum + unit.sections.length, 0)

  return (
    <div className='space-y-8'>
      <div>
        <h1 className='text-4xl'>{track.title}</h1>
        <p className='mt-4 max-w-3xl text-[var(--text-secondary)]'>{track.description}</p>
      </div>
      <ProgressTracker completed={0} total={totalSections} accuracy={0} recommendation='Start with the shared foundations unit.' />
      <UnitMap trackSlug={track.slug} units={track.units} />
    </div>
  )
}
