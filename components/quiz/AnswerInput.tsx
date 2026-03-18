'use client'

export const AnswerInput = ({ value, onChange }: { value: string; onChange: (value: string) => void }) => <input value={value} onChange={(event) => onChange(event.target.value)} placeholder='Enter your answer' className='h-11 w-full rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface)] px-4' />
