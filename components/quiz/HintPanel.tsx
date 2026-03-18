export const HintPanel = ({ hints, used }: { hints: readonly [string, string, string]; used: number }) => (
  <div className='space-y-2'>
    {hints.slice(0, used).map((hint, index) => <div key={hint} className='rounded-[var(--radius-md)] border border-[var(--border)] p-3 text-sm text-[var(--text-secondary)]'><strong>Hint {index + 1}:</strong> {hint}</div>)}
  </div>
)
