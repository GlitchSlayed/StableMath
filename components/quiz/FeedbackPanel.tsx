import type { ValidationResult } from '@/lib/question-engine/types'

export const FeedbackPanel = ({ result }: { result: ValidationResult | null }) => result ? (
  <aside className='surface rounded-[var(--radius-lg)] p-4 text-sm'>
    <div className='font-medium'>{result.correct ? 'Correct' : 'Keep going'}</div>
    <p className='mt-2 text-[var(--text-secondary)]'>{result.explanation}</p>
    {result.errorDetail ? <p className='mt-2 text-[var(--color-accent)]'>{result.errorDetail}</p> : null}
  </aside>
) : null
