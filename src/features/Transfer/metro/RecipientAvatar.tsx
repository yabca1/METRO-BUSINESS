import { cn } from '@/lib/utils'

interface RecipientAvatarProps {
  initials?: string
  className?: string
  channel?: 'metro' | 'bank'
}

export function RecipientAvatar({ initials = 'AK', className, channel = 'metro' }: RecipientAvatarProps) {
  return (
    <span className={cn('relative inline-flex size-11.5 shrink-0 items-center justify-center rounded-full bg-brand-primary font-poppins-medium text-xl text-brand-white', className)}>
      {initials}
      {channel === 'metro' ? (
        <span className="absolute -bottom-0.5 -right-0.5 flex size-3.5 items-center justify-center rounded-full border border-brand-white bg-brand-primary font-orbitron text-fig-7 font-semibold text-brand-white">M</span>
      ) : (
        <span className="absolute -bottom-0.5 -right-0.5 size-3.5 rounded-full border border-brand-border bg-brand-white" />
      )}
    </span>
  )
}

export function MetroAccountAvatar({ className }: { className?: string }) {
  return (
    <span className={cn('inline-flex size-11.5 shrink-0 items-center justify-center rounded-full bg-brand-primary font-orbitron-bold text-2xl font-bold text-brand-white', className)}>
      M
    </span>
  )
}
