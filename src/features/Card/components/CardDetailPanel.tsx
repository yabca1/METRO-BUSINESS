'use client'

import * as React from "react"
import { CloseIcon, MoreIcon } from "@/components/icons/vuesax"
import { cn } from "@/lib/utils"
import type { Card as CardModel } from "../types"
import { CardFace } from "./CardFace"
import { CardActionRow } from "./CardActionRow"
import { CardInfoCard } from "./CardInfoCard"
import { CardLimitCard } from "./CardLimitCard"
import { CardHistoryCard } from "./CardHistoryCard"

interface CardDetailPanelProps {
  card: CardModel
  onClose?: () => void
  closing?: boolean
  onExitComplete?: () => void
}

export function CardDetailPanel({ card, onClose, closing, onExitComplete }: CardDetailPanelProps) {
  const [revealed, setRevealed] = React.useState(true)
  const [frozen, setFrozen] = React.useState(card.status === "locked")

  const initials = card.cardholder.split(" ").map((p) => p[0]).join("").slice(0, 2).toUpperCase() || "AK"

  return (
    <aside onAnimationEnd={(event) => closing && event.currentTarget === event.target && onExitComplete?.()} className={cn("card-detail-panel detail-split-panel h-[calc(100vh-7rem)] max-h-214.5 overflow-y-auto rounded-2xl border border-brand-border bg-brand-surface/40 p-3", closing && "is-closing")}>
      <div className="flex items-center justify-between">
        <IconButton label="Close panel" onClick={onClose}><CloseIcon className="size-3" /></IconButton>
        <IconButton label="More options"><MoreIcon className="size-3" /></IconButton>
      </div>

      <div className="mt-4 space-y-5 rounded-2xl border border-brand-border bg-brand-surface/40 px-3 pb-4 pt-2.5">
        <CardFace card={card} revealed={revealed} />
        <CardActionRow
          revealed={revealed}
          onToggleReveal={() => setRevealed((v) => !v)}
          frozen={frozen}
          onToggleFreeze={() => setFrozen((v) => !v)}
        />
      </div>

      <div className="mt-3 space-y-3">
        <CardInfoCard card={card} />
        <CardLimitCard card={card} />
        <CardHistoryCard cardholder={card.cardholder} initials={initials} transactions={card.transactions} />
      </div>
    </aside>
  )
}

function IconButton({ label, onClick, children }: { label: string; onClick?: () => void; children: React.ReactNode }) {
  return (
    <button type="button" aria-label={label} onClick={onClick} className="flex size-6 items-center justify-center rounded-full bg-brand-secondary text-brand-primary transition hover:opacity-70 cursor-pointer">
      {children}
    </button>
  )
}
