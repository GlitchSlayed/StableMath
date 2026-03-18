import { notFound } from 'next/navigation'
import { UnitMap } from '@/components/curriculum/UnitMap'
import { engineeringTrack, csmlTrack } from '@/content/tracks'

const tracks = { engineering: engineeringTrack, 'cs-ml-ai': csmlTrack }

export function generateStaticParams() {
  return Object.keys(tracks).map((track) => ({ track }))
}

export const dynamicParams = false

export default function TrackPage({ params }: { params: { track: keyof typeof tracks } }) {
  const track = tracks[params.track]
  if (!track) notFound()
  return (
    <div className='space-y-8'>
      <div>
        <h1 className='text-4xl'>{track.title}</h1>
        <p className='mt-4 max-w-2xl text-[var(--text-secondary)]'>{track.description}</p>
      </div>
      <UnitMap trackSlug={track.slug} units={track.units} />
    </div>
  )
}
