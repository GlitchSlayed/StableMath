import Link from 'next/link'
import { Card, ProgressRing } from '@/components/ui'
import { tracks } from '@/content/tracks'

export const Sidebar = () => (
  <aside className='hidden w-[260px] shrink-0 lg:block'>
    <Card className='sticky top-24 space-y-6'>
      <div>
        <div className='text-sm text-[var(--text-secondary)]'>Learning tracks</div>
        <div className='mt-4 space-y-4'>
          {tracks.map((track) => {
            const totalSections = track.units.reduce((sum, unit) => sum + unit.sections.length, 0)
            return (
              <div key={track.id}>
                <div className='mb-2 flex items-center justify-between'>
                  <span className='font-medium'>{track.title}</span>
                  <ProgressRing value={Math.min(100, totalSections * 10)} />
                </div>
                <div className='space-y-2'>
                  {track.units.map((unit) => <Link key={unit.id} href={`/${track.slug}/${unit.slug}`} className='block text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)]'>{unit.title}</Link>)}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Card>
  </aside>
)
