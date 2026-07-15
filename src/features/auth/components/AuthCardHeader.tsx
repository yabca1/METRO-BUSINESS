// src/features/auth/components/AuthCardHeader.tsx
import * as React from "react"
import { cn } from "@/lib/utils"
import { Wordmark } from "@/components/brand/Wordmark"
import { BackChip } from "./BackChip"

interface AuthCardHeaderProps {
  title: string
  description?: React.ReactNode
  /** When provided, renders the "back" chip beside the wordmark. */
  onBack?: () => void
  /** Allow the description to wrap instead of staying on one line (md+). */
  wrapDescription?: boolean
}

/** Wordmark + optional back chip + title + description, shared by every auth card. */
export function AuthCardHeader({ title, description, onBack, wrapDescription }: AuthCardHeaderProps) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <Wordmark />
        {onBack && <BackChip onClick={onBack} />}
      </div>
      <div className="mt-[29px]">
        <h2 className="text-2xl font-semibold leading-tight text-brand-primary">{title}</h2>
        {description && (
          <p className={cn("mt-1.5 text-fig-12 font-normal text-brand-gray", !wrapDescription && "md:whitespace-nowrap")}>
            {description}
          </p>
        )}
      </div>
    </div>
  )
}
