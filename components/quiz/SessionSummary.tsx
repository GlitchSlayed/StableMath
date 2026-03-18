import type { SessionSummary as SessionSummaryType } from '@/lib/question-engine/types'

export const SessionSummary = ({ summary }: { summary: SessionSummaryType }) => (
  <div className='surface rounded-[var(--radius-lg)] p-6'>
    <h2 className='text-2xl'>Session complete</h2>
    <p className='mt-2 text-[var(--text-secondary)]'>Score: {summary.score}/10 · Average time: {summary.avgTime.toFixed(1)}s</p>
    <div className='mt-4 text-sm text-[var(--text-secondary)]'>Review next: {summary.recommendedReviewTopics.join(', ') || 'None'}</div>
  </div>
)
