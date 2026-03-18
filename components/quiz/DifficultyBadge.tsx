export const DifficultyBadge = ({ difficulty }: { difficulty: 1 | 2 | 3 }) => <span className='text-sm text-[var(--text-secondary)]'>{'●'.repeat(difficulty)}{'○'.repeat(3 - difficulty)}</span>
