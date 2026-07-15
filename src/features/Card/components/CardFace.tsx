// src/features/Card/components/CardFace.tsx
'use client'

import * as React from "react"
import { CopyCardIcon } from "@/components/icons/vuesax-card"
import { cn } from "@/lib/utils"
import type { Card } from "../types"

const FACE_GRADIENT: Record<Card["type"], string> = {
  virtual: "card-surface-virtual",
  metal: "card-surface-metal",
  standard: "card-surface-standard",
}

interface CardFaceProps {
  card: Card
  revealed: boolean
}

/** The dark gradient card visual — number / expiry / CVV with copy-to-clipboard. */
export function CardFace({ card, revealed }: CardFaceProps) {
  const [copied, setCopied] = React.useState<"number" | "cvv" | null>(null)

  const copy = (value: string, field: "number" | "cvv") => {
    navigator.clipboard?.writeText(value)
    setCopied(field)
    setTimeout(() => setCopied(null), 1200)
  }

  const maskedNumber = card.cardNumber.replace(/\d(?=\d{4})/g, "•")
  const displayNumber = revealed ? card.cardNumber : maskedNumber
  const displayCvv = revealed ? card.cvv : "•••"

  return (
    <div className={cn("card-surface relative h-41 w-full text-brand-white", FACE_GRADIENT[card.type])}>
      <span className="absolute left-3.5 top-2.5 rounded-2xl bg-brand-white/10 px-2 py-1 text-fig-10 font-urbanist-medium">{card.label}</span>
      <span className="absolute right-3.5 top-2 font-orbitron text-xl font-semibold">M</span>

      <div className="absolute left-3.5 top-18">
        <p className="text-fig-10 font-urbanist-light tracking-wide text-brand-surface">Card number</p>
        <button type="button" onClick={() => copy(card.cardNumber, "number")} className="mt-1 flex items-center gap-3 cursor-pointer">
          <span className="text-fig-12 font-urbanist-semibold tracking-wide">{displayNumber}</span>
          <CopyCardIcon className="size-3.5 shrink-0" />
        </button>
        {copied === "number" && <span className="sr-only">Card number copied</span>}
      </div>

      <div className="absolute bottom-3.5 left-3.5 flex items-end gap-8">
        <div>
          <p className="text-fig-10 font-urbanist-light tracking-wide text-brand-surface">Expiry date</p>
          <p className="mt-1 text-fig-12 font-urbanist-semibold tracking-wide">{card.expiryDate || "-"}</p>
        </div>
        <div>
          <p className="text-fig-10 font-urbanist-light tracking-wide text-brand-surface">CVV</p>
          <button type="button" onClick={() => copy(card.cvv, "cvv")} className="mt-1 flex items-center gap-3 cursor-pointer">
            <span className="text-fig-12 font-urbanist-semibold tracking-wide">{displayCvv}</span>
            <CopyCardIcon className="size-3.5 shrink-0" />
          </button>
          {copied === "cvv" && <span className="sr-only">CVV copied</span>}
        </div>
      </div>
    </div>
  )
}
