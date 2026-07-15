import * as React from "react"
import { cn } from "@/lib/utils"

interface DetailAvatarProps {
  initials?: string
  mark?: React.ReactNode
  className?: string
  /** Override the initials typography (default: Orbitron). */
  initialsClassName?: string
}

export function DetailAvatar({ initials = "M", mark, className, initialsClassName }: DetailAvatarProps) {
  return (
    <span className={cn("relative flex size-11 shrink-0 items-center justify-center rounded-full bg-brand-primary text-brand-white", className)}>
      <span className={cn("font-orbitron text-2xl font-semibold leading-none", initialsClassName)}>{initials}</span>
      {mark && (
        <span className="absolute bottom-0 right-0 flex size-3 items-center justify-center rounded-full bg-brand-primary ring-2 ring-brand-white">
          {mark}
        </span>
      )}
    </span>
  )
}
