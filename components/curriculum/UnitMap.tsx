import Link from 'next/link'
import type { Unit } from '@/content/schema'
import { Card } from '@/components/ui'

export const UnitMap = ({ trackSlug, units }: { trackSlug: string; units: Unit[] }) => (
  <div className='grid gap-4'>
    {units.map((unit) => (
      <Link key={unit.id} href={`/${trackSlug}/${unit.slug}`}>
        <Card>
          <h3 className='text-xl'>{unit.title}</h3>
          <p className='mt-2 text-sm text-[var(--text-secondary)]'>{unit.summary}</p>
        </Card>
      </Link>
    ))}
  </div>
)
