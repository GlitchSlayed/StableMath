'use client'

import { useState } from 'react'
import { Button, Card } from '@/components/ui'

export const WorkedExample = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const [open, setOpen] = useState(false)
  return (
    <Card>
      <div className='flex items-center justify-between gap-4'>
        <h3 className='text-lg font-medium'>{title}</h3>
        <Button variant='secondary' onClick={() => setOpen((value) => !value)}>{open ? 'Hide' : 'Show'} steps</Button>
      </div>
      {open ? <div className='mt-4 text-sm text-[var(--text-secondary)]'>{children}</div> : null}
    </Card>
  )
}
