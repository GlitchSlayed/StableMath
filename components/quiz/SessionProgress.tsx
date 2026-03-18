import { ProgressBar } from '@/components/ui'
import { DifficultyBadge } from './DifficultyBadge'

export const SessionProgress = ({ current, total, difficulty, elapsed }: { current: number; total: number; difficulty: 1 | 2 | 3; elapsed: number }) => (
  <div className='space-y-3'>
    <div className='flex items-center justify-between text-sm text-[var(--text-secondary)]'>
      <span>Q{current}/{total}</span>
      <DifficultyBadge difficulty={difficulty} />
      <span>{elapsed}s</span>
    </div>
    <ProgressBar value={(current / total) * 100} />
  </div>
)
