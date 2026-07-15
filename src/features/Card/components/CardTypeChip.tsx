// src/features/Card/components/CardTypeChip.tsx
import { cn } from "@/lib/utils"
import type { CardType } from "../types"

const CHIP_STYLES: Record<CardType, string> = {
  virtual: "card-surface-virtual",
  metal: "card-surface-metal",
  standard: "card-surface-standard",
}

/** Small rounded card-shaped swatch used as the row/detail-panel avatar. */
export function CardTypeChip({ type, className }: { type: CardType; className?: string }) {
  return (
    <span
      className={cn(
        "card-surface relative h-8 w-13 shrink-0 text-brand-white shadow-sm",
        CHIP_STYLES[type],
        className,
      )}
    >
      <span className="absolute right-1.5 top-1 font-orbitron text-fig-7 font-semibold leading-none">M</span>
    </span>
  )
}
