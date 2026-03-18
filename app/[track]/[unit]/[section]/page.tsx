import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ProgressTracker } from '@/components/curriculum/ProgressTracker'
import { SourceList } from '@/components/curriculum/SourceList'
import { InlineMathText } from '@/components/math/InlineMathText'
import { Badge, Button, Card } from '@/components/ui'
import { getSection, getUnit, trackRegistry } from '@/content/tracks'
import { loadMarkdownBlocks } from '@/lib/content/markdown'

export function generateStaticParams() {
  return Object.values(trackRegistry).flatMap((track) =>
    track.units.flatMap((unit) => unit.sections.map((section) => ({ track: track.slug, unit: unit.slug, section: section.slug })))
  )
}

export const dynamicParams = false

const MarkdownContent = ({ blocks }: { blocks: Awaited<ReturnType<typeof loadMarkdownBlocks>> }) => (
  <div className='space-y-4 text-[var(--text-secondary)]'>
    {blocks.map((block, index) => (
      block.type === 'paragraph'
        ? <InlineMathText key={`${block.type}-${index}`} text={block.content} />
        : (
          <ul key={`${block.type}-${index}`} className='list-disc space-y-2 pl-5'>
            {block.items.map((item) => <InlineMathText key={item} as='li' text={item} />)}
          </ul>
        )
    ))}
  </div>
)

export default async function SectionPage({ params }: { params: Promise<{ track: string; unit: string; section: string }> }) {
  const { track: trackSlug, unit: unitSlug, section: sectionSlug } = await params
  const track = trackRegistry[trackSlug]
  const unit = getUnit(trackSlug, unitSlug)
  const section = getSection(trackSlug, unitSlug, sectionSlug)
  if (!track || !unit || !section) notFound()

  const [conceptualBlocks, mathBlocks] = await Promise.all([
    loadMarkdownBlocks(section.conceptualContentPath),
    loadMarkdownBlocks(section.mathContentPath)
  ])

  return (
    <div className='space-y-8'>
      <div className='space-y-3'>
        <Badge>{unit.title}</Badge>
        <h1 className='text-4xl'>{section.title}</h1>
        <p className='max-w-3xl text-[var(--text-secondary)]'>{section.summary}</p>
      </div>

      <ProgressTracker completed={0} total={3} accuracy={0} recommendation='Read the concept, connect the math, then use unlimited practice.' />

      <Card className='space-y-4'>
        <h2 className='text-2xl'>Conceptual page</h2>
        <MarkdownContent blocks={conceptualBlocks} />
      </Card>

      <Card id='math' className='space-y-4'>
        <h2 className='text-2xl'>Math tied in</h2>
        <MarkdownContent blocks={mathBlocks} />
      </Card>

      <Card className='space-y-4'>
        <h2 className='text-2xl'>Source alignment</h2>
        <SourceList sources={section.sources} />
      </Card>

      <Link href={`/${track.slug}/${unit.slug}/${section.slug}/practice`}>
        <Button>Open unlimited practice</Button>
      </Link>
    </div>
  )
}
