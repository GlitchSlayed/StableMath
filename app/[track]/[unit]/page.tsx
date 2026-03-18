import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Button, Card } from '@/components/ui'
import { engineeringTrack, csmlTrack } from '@/content/tracks'

const tracks = { engineering: engineeringTrack, 'cs-ml-ai': csmlTrack }

export function generateStaticParams() {
  return Object.values(tracks).flatMap((track) => track.units.map((unit) => ({ track: track.slug, unit: unit.slug })))
}

export const dynamicParams = false

export default function UnitPage({ params }: { params: { track: keyof typeof tracks; unit: string } }) {
  const track = tracks[params.track]
  const unit = track?.units.find((entry) => entry.slug === params.unit)
  if (!track || !unit) notFound()
  return (
    <div className='space-y-8'>
      <div>
        <h1 className='text-4xl'>{unit.title}</h1>
        <p className='mt-4 text-[var(--text-secondary)]'>{unit.summary}</p>
      </div>
      <div className='grid gap-4'>
        {unit.topics.length ? unit.topics.map((topic) => (
          <Card key={topic.id}>
            <h2 className='text-2xl'>{topic.title}</h2>
            <p className='mt-2 text-sm text-[var(--text-secondary)]'>{topic.summary}</p>
          </Card>
        )) : <Card><p className='text-sm text-[var(--text-secondary)]'>This unit roadmap is scaffolded for contributors and will expand with additional lessons.</p></Card>}
      </div>
      <Link href={`/${track.slug}/${unit.slug}/practice`}><Button>Start practice</Button></Link>
    </div>
  )
}
