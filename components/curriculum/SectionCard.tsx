import Link from 'next/link'
import type { Subsection } from '@/content/schema'
import { Badge, Button, Card } from '@/components/ui'

export const SectionCard = ({ trackSlug, unitSlug, index, section }: { trackSlug: string; unitSlug: string; index: number; section: Subsection }) => (
  <Card className='space-y-4'>
    <div className='flex flex-wrap items-center gap-3'>
      <Badge>Section {index + 1}</Badge>
      <h3 className='text-2xl'>{section.title}</h3>
    </div>
    <p className='text-[var(--text-secondary)]'>{section.summary}</p>
    <div className='grid gap-3 md:grid-cols-3'>
      <Link href={`/${trackSlug}/${unitSlug}/${section.slug}`}><Button className='w-full'>Conceptual page</Button></Link>
      <Link href={`/${trackSlug}/${unitSlug}/${section.slug}#math`}><Button variant='secondary' className='w-full'>Math tie-in</Button></Link>
      <Link href={`/${trackSlug}/${unitSlug}/${section.slug}/practice`}><Button variant='ghost' className='w-full'>Unlimited practice</Button></Link>
    </div>
  </Card>
)
