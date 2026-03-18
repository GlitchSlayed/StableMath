import Link from 'next/link'
import type { Unit } from '@/content/schema'
import { Badge, Card } from '@/components/ui'

export const UnitMap = ({ trackSlug, units }: { trackSlug: string; units: Unit[] }) => (
  <div className='grid gap-4'>
    {units.map((unit) => (
      <Link key={unit.id} href={`/${trackSlug}/${unit.slug}`}>
        <Card>
          <div className='flex flex-wrap items-center gap-3'>
            {unit.shared ? <Badge>Shared</Badge> : null}
            <h3 className='text-xl'>{unit.title}</h3>
          </div>
          <p className='mt-2 text-sm text-[var(--text-secondary)]'>{unit.summary}</p>
          <div className='mt-4 text-sm text-[var(--text-secondary)]'>{unit.sections.length} sections · {unit.estimatedMinutes} min</div>
        </Card>
      </Link>
    ))}
  </div>
)
