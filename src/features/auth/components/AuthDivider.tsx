// src/features/auth/components/AuthDivider.tsx
import { cn } from "@/lib/utils"

/** A horizontal rule with a centered label, e.g. "or". */
export function AuthDivider({ label = "or", className }: { label?: string; className?: string }) {
  return (
    <div className={cn("relative mb-[19px] mt-[21px] h-4 text-center", className)}>
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-brand-border" />
      </div>
      <span className="relative bg-brand-white px-3 text-fig-12 font-normal text-brand-muted">
        {label}
      </span>
    </div>
  )
}
