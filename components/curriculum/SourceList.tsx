import type { Source } from '@/content/schema'

export const SourceList = ({ sources }: { sources: Source[] }) => (
  <ul className='space-y-3 text-sm text-[var(--text-secondary)]'>
    {sources.map((source) => (
      <li key={`${source.label}-${source.href}`}>
        <a href={source.href} target='_blank' rel='noreferrer' className='font-medium text-[var(--text-primary)] underline underline-offset-4'>
          {source.label}
        </a>
        <span>{` — ${source.note}`}</span>
      </li>
    ))}
  </ul>
)
