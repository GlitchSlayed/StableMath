import { forwardRef } from 'react'
import { cn } from '@/lib/utils/cn'

const variants = {
  primary: 'bg-[var(--color-accent)] text-[var(--color-accent-text)] hover:bg-[var(--color-accent-hover)]',
  secondary: 'surface text-[var(--text-primary)]',
  ghost: 'text-[var(--color-accent)] hover:bg-[var(--color-accent-subtle)]'
}

export const Button = forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: keyof typeof variants }>(function Button({ className, variant = 'primary', ...props }, ref) {
  return <button ref={ref} className={cn('inline-flex h-10 items-center justify-center rounded-[var(--radius-md)] px-4 text-sm font-medium transition', variants[variant], className)} {...props} />
})
