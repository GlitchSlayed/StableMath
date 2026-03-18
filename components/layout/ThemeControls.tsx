'use client'

import { Button } from '@/components/ui'
import { useTheme } from '@/lib/theme/useTheme'
import { accents } from '@/lib/theme/tokens'

export const ThemeControls = () => {
  const { mode, accent, setMode, setAccent } = useTheme()
  return (
    <div className='flex items-center gap-3'>
      <Button variant='secondary' onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}>{mode === 'light' ? 'Dark' : 'Light'} mode</Button>
      <div className='flex gap-2'>
        {accents.map((swatch) => (
          <button key={swatch} aria-label={swatch} onClick={() => setAccent(swatch)} className={`h-8 w-8 rounded-full border ${accent === swatch ? 'border-[var(--text-primary)]' : 'border-[var(--border)]'}`} style={{ background: swatch === 'coral' ? '#E8735A' : swatch === 'iris' ? '#6366F1' : swatch === 'sage' ? '#4A7C6F' : swatch === 'amber' ? '#D97706' : '#475569' }} />
        ))}
      </div>
    </div>
  )
}
