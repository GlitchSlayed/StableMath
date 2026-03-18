import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Badge, Card, Button } from '@/components/ui'
import type { Track } from '@/content/schema'

export const TrackCard = ({ track }: { track: Track }) => (
  <Card className='flex h-full flex-col justify-between'>
    <div>
      <div className='flex items-center justify-between'>
        <h3 className='text-2xl'>{track.title}</h3>
        <Badge><ArrowUpRight className='mr-1 h-3 w-3' /> overlap</Badge>
      </div>
      <p className='mt-3 text-[var(--text-secondary)]'>{track.description}</p>
    </div>
    <Link href={`/${track.slug}`} className='mt-6'><Button>Start Learning</Button></Link>
  </Card>
)
