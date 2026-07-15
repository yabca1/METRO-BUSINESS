import * as React from "react"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface DetailSuccessProps {
  title: React.ReactNode
  meta?: React.ReactNode
  className?: string
}

export function DetailSuccess({ title, meta, className }: DetailSuccessProps) {
  return (
    <div className={cn("flex flex-col items-center px-4 py-6 text-center", className)}>
      <div className="mb-14 mt-2 flex size-24 items-center justify-center rounded-full bg-brand-white shadow-md ring-4 ring-brand-surface">
        <Check className="size-12 stroke-[5] text-brand-primary" />
      </div>
      <h2 className="max-w-sm text-3xl font-bold leading-snug text-brand-dark">{title}</h2>
      {meta && <p className="mt-3 text-sm tracking-wide text-brand-dark/80">{meta}</p>}
    </div>
  )
}
