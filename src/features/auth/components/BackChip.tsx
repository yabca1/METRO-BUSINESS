// src/features/auth/components/BackChip.tsx
import { ArrowLeft } from "lucide-react"

/** The pill-shaped "← back" control used across the auth cards. */
export function BackChip({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex h-[30px] w-[85px] items-center justify-center gap-1.5 rounded-full bg-brand-secondary/30 text-fig-10 font-semibold tracking-wide text-brand-primary transition hover:bg-brand-secondary/50 active:scale-95 cursor-pointer"
    >
      <ArrowLeft className="size-4" />
      <span>back</span>
    </button>
  )
}
