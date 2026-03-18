import Link from 'next/link'
import { Card, ProgressRing } from '@/components/ui'
import { tracks } from '@/content/tracks'

export const Sidebar = () => (
  <aside className='hidden w-[300px] shrink-0 lg:block'>
    <Card className='sticky top-24 space-y-6'>
      <div>
        <div className='text-sm text-[var(--text-secondary)]'>Learning tracks</div>
        <div className='mt-4 space-y-5'>
          {tracks.map((track) => {
            const totalSections = track.units.reduce((sum, unit) => sum + unit.sections.length, 0)

            return (
              <div key={track.id} className='space-y-3'>
                <div className='flex items-center justify-between'>
                  <span className='font-medium'>{track.title}</span>
                  <ProgressRing value={Math.min(100, totalSections * 8)} />
                </div>

                <div className='space-y-3'>
                  {track.units.map((unit) => (
                    <div key={unit.id} className='rounded-2xl border border-[var(--color-border)] p-3'>
                      <Link href={`/${track.slug}/${unit.slug}`} className='block text-sm font-medium hover:text-[var(--color-accent)]'>
                        {unit.title}
                      </Link>
                      <div className='mt-2 space-y-2 pl-3'>
                        {unit.sections.map((section, index) => (
                          <Link
                            key={section.id}
                            href={`/${track.slug}/${unit.slug}/${section.slug}`}
                            className='block text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                          >
                            {index + 1}. {section.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Card>
  </aside>
)
