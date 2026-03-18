import { cn } from '@/lib/utils/cn'

export const Badge = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => <span className={cn('inline-flex items-center rounded-full bg-[var(--color-accent-subtle)] px-3 py-1 text-xs font-medium text-[var(--color-accent)]', className)} {...props} />
