import { cn } from '@/lib/utils/cn'

export const Card = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => <div className={cn('surface card-hover rounded-[var(--radius-lg)] p-6', className)} {...props} />
