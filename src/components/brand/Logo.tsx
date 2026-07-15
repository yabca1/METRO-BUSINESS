// src/components/brand/Logo.tsx
import { BrandMark } from "./BrandMark"
import { cn } from "@/lib/utils"

interface LogoProps {
  /** Hide the "Business" wordmark and show only the tile. */
  compact?: boolean
  className?: string
}

/** The "M Business" lockup used in the sidebar header and top nav. */
export function Logo({ compact = false, className }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-3 select-none", className)}>
      <BrandMark variant="dark" />
      {!compact && (
        <span className="text-2xl font-semibold font-orbitron tracking-tight text-brand-primary ">
          Business
        </span>
      )}
    </span>
  )
}
