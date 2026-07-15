// src/components/brand/BrandMark.tsx
import * as React from "react"
import { cn } from "@/lib/utils"

interface BrandMarkProps {
  /** dark = black tile / white glyph, light = white tile / black glyph */
  variant?: "dark" | "light"
  className?: string
}

/** The Metro "M" logo tile — reused in the sidebar, top nav and QR card. */
export function BrandMark({ variant = "dark", className }: BrandMarkProps) {
  const isDark = variant === "dark"
  return (
    <span
      className={cn(
        "inline-flex font-orbitron-bold items-center justify-center rounded-xl",
        isDark ? "bg-brand-primary" : "bg-brand-white border border-brand-border",
        "size-11",
        className,
      )}
    >
      <svg viewBox="0 0 24 24" className="size-4/5" aria-hidden>
        <text
          x="50%"
          y="52%"
          textAnchor="middle"
          dominantBaseline="central"
          fontSize="18"
          className={cn(
            "font-orbitron-bold font-bold",
            isDark ? "fill-brand-white" : "fill-brand-primary",
          )}
        >
          M
        </text>
      </svg>
    </span>
  )
}
