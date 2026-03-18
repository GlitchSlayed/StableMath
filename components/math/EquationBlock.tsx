import { KatexRenderer } from './KatexRenderer'

export const EquationBlock = ({ expression, label }: { expression: string; label?: string }) => (
  <div className='surface rounded-[var(--radius-lg)] p-4'>
    {label ? <div className='mb-2 text-sm text-[var(--text-secondary)]'>{label}</div> : null}
    <KatexRenderer expression={expression} displayMode />
  </div>
)
