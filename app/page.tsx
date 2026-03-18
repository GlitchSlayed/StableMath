import Link from 'next/link'
import { ArrowRight, BookOpenCheck, BrainCircuit, Sigma } from 'lucide-react'
import { TrackCard } from '@/components/curriculum/TrackCard'
import { TopicChip } from '@/components/curriculum/TopicChip'
import { Button, Card } from '@/components/ui'
import { tracks } from '@/content/tracks'

export default function HomePage() {
  return (
    <div className='space-y-16'>
      <section className='paper-noise rounded-[var(--radius-xl)] border border-[var(--border)] px-8 py-16'>
        <div className='max-w-4xl'>
          <p className='font-[var(--font-display)] text-5xl italic'>Math content with real structure.</p>
          <p className='mt-6 max-w-3xl text-lg text-[var(--text-secondary)]'>StableMath now organizes lessons into expansive conceptual pages, companion math tie-ins, and unlimited adaptive practice sourced from the style and scope of LibreTexts, OpenStax, MIT OpenCourseWare, and the Deep Learning Book.</p>
          <div className='mt-8 flex flex-wrap gap-3'>
            <Link href='#tracks'><Button>Explore tracks</Button></Link>
            <Link href='/engineering/shared-foundations'><Button variant='secondary'>Open shared foundations</Button></Link>
          </div>
        </div>
      </section>

      <section className='grid gap-6 md:grid-cols-3'>
        {[
          { title: 'Conceptual first', text: 'Every subsection starts with intuition, context, and source-aware explanations before symbol work.', icon: BookOpenCheck },
          { title: 'Math tied in', text: 'Each section then pivots into formulas, relationships, and worked mathematical takeaways.', icon: Sigma },
          { title: 'Practice that adapts', text: 'Unlimited question rotation keeps score always viable and suggests moving on after sustained 90% accuracy.', icon: BrainCircuit }
        ].map(({ title, text, icon: Icon }) => (
          <Card key={title}>
            <Icon className='h-6 w-6 text-[var(--color-accent)]' />
            <h2 className='mt-4 text-2xl'>{title}</h2>
            <p className='mt-3 text-sm text-[var(--text-secondary)]'>{text}</p>
          </Card>
        ))}
      </section>

      <section id='tracks' className='grid gap-6 md:grid-cols-2'>
        {tracks.map((track) => <TrackCard key={track.id} track={track} />)}
      </section>

      <section>
        <div className='flex items-center justify-between gap-3'>
          <h2 className='text-3xl'>Curriculum highlights</h2>
          <ArrowRight className='h-5 w-5 text-[var(--text-secondary)]' />
        </div>
        <div className='mt-6 flex gap-3 overflow-x-auto pb-2'>
          {tracks.flatMap((track) => track.units.flatMap((unit) => unit.sections.map((section) => <TopicChip key={`${track.slug}-${unit.slug}-${section.slug}`} label={`${track.title}: ${section.title}`} />)))}
        </div>
      </section>
    </div>
  )
}
