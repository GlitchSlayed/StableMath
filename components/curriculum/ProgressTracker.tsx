import { ProgressBar, ProgressRing, Card, Badge } from '@/components/ui'

export const ProgressTracker = ({ completed, total, accuracy, recommendation }: { completed: number; total: number; accuracy: number; recommendation: string }) => {
  const completion = total === 0 ? 0 : Math.round((completed / total) * 100)
  return (
    <Card className='space-y-5'>
      <div className='flex items-center justify-between gap-4'>
        <div>
          <div className='text-sm text-[var(--text-secondary)]'>Progress tracker</div>
          <h3 className='mt-1 text-2xl'>Stay oriented across concept → math → practice</h3>
        </div>
        <ProgressRing value={completion} />
      </div>
      <div className='grid gap-4 md:grid-cols-3'>
        <div>
          <div className='text-sm text-[var(--text-secondary)]'>Sections completed</div>
          <div className='mt-1 text-2xl font-semibold'>{completed}/{total}</div>
        </div>
        <div>
          <div className='text-sm text-[var(--text-secondary)]'>Practice accuracy</div>
          <div className='mt-1 text-2xl font-semibold'>{accuracy}%</div>
        </div>
        <div>
          <div className='text-sm text-[var(--text-secondary)]'>Recommendation</div>
          <Badge className='mt-2'>{recommendation}</Badge>
        </div>
      </div>
      <ProgressBar value={completion} />
    </Card>
  )
}
