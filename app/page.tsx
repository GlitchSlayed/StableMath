import Link from 'next/link'
import { TrackCard } from '@/components/curriculum/TrackCard'
import { TopicChip } from '@/components/curriculum/TopicChip'
import { Button, Card } from '@/components/ui'
import { engineeringTrack, csmlTrack } from '@/content/tracks'

const tracks = [engineeringTrack, csmlTrack]

export default function HomePage() {
  return (
    <div className='space-y-16'>
      <section className='paper-noise rounded-[var(--radius-xl)] border border-[var(--border)] px-8 py-16'>
        <div className='max-w-3xl'>
          <p className='font-[var(--font-display)] text-5xl italic'>Mathematics, clearly.</p>
          <p className='mt-6 max-w-2xl text-lg text-[var(--text-secondary)]'>StableMath is a calm, rigorous learning environment for advanced mathematics. Read precise lessons, practice deterministically generated questions, and review targeted feedback without distraction.</p>
          <div className='mt-8'><Link href='#tracks'><Button>Start Learning</Button></Link></div>
        </div>
      </section>

      <section id='tracks' className='grid gap-6 md:grid-cols-2'>
        {tracks.map((track) => <TrackCard key={track.id} track={track} />)}
      </section>

      <section>
        <h2 className='text-3xl'>What you'll learn</h2>
        <div className='mt-6 flex gap-3 overflow-x-auto pb-2'>
          {tracks.flatMap((track) => track.units.map((unit) => <TopicChip key={unit.id} label={`${track.title}: ${unit.title}`} />))}
        </div>
      </section>

      <section className='grid gap-6 md:grid-cols-3'>
        {['Question', 'Check', 'Feedback'].map((step, index) => (
          <Card key={step}>
            <div className='text-sm text-[var(--text-secondary)]'>Step {index + 1}</div>
            <h3 className='mt-2 text-xl'>{step}</h3>
            <p className='mt-3 text-sm text-[var(--text-secondary)]'>{step === 'Question' ? 'Each practice item is reproducible and generated from a deterministic template.' : step === 'Check' ? 'Answers are validated with hand-authored rules, not black-box inference.' : 'Every result includes explanation, error detail, and recommended review topics.'}</p>
          </Card>
        ))}
      </section>

      <footer className='border-t border-[var(--border)] pt-8 text-sm text-[var(--text-secondary)]'>Open source under MIT. Bring your own hosting, keep your own data, and contribute new lessons or templates through GitHub.</footer>
    </div>
  )
}
