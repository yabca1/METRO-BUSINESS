// src/components/brand/Wordmark.tsx
import { cn } from "@/lib/utils"

interface WordmarkProps {
  className?: string
}

/** The "Metro" text logo used on the authentication screens. */
export function Wordmark({ className }: WordmarkProps) {
  return (
    <span
      className={cn(
        "font-orbitron-bold font-bold tracking-tight text-brand-primary select-none",
        "text-fig-40 leading-[normal]",
        className,
      )}
    >
      Metro
    </span>
  )
}
