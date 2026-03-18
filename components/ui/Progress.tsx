import { cn } from '@/lib/utils/cn'

export const ProgressBar = ({ value, className }: { value: number; className?: string }) => (
  <div className={cn('h-2 w-full overflow-hidden rounded-full bg-[var(--border)]', className)}>
    <div className='h-full rounded-full bg-[var(--color-accent)]' style={{ width: `${Math.max(0, Math.min(100, value))}%` }} />
  </div>
)

export const ProgressRing = ({ value }: { value: number }) => {
  const circumference = 2 * Math.PI * 18
  const offset = circumference - (value / 100) * circumference
  return (
    <svg viewBox='0 0 48 48' className='h-12 w-12'>
      <circle cx='24' cy='24' r='18' fill='none' stroke='var(--border)' strokeWidth='4' />
      <circle cx='24' cy='24' r='18' fill='none' stroke='var(--color-accent)' strokeWidth='4' strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap='round' transform='rotate(-90 24 24)' />
    </svg>
  )
}
