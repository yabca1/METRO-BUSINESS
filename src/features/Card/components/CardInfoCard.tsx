// src/features/Card/components/CardInfoCard.tsx
import { InfoRow } from "@/components/ui/DetailPanel"
import { PanelCard } from "@/components/ui/PanelCard"
import type { Card, CardStatus } from "../types"

const STATUS_META: Record<CardStatus, { label: string; className: string }> = {
  active:  { label: "Active",  className: "text-brand-success" },
  locked:  { label: "Locked",  className: "text-brand-danger" },
  waiting: { label: "Waiting to be claimed", className: "text-brand-muted" },
}

/** Card holder + status summary card in the detail panel. */
export function CardInfoCard({ card }: { card: Card }) {
  const status = STATUS_META[card.status]
  return (
    <PanelCard className="space-y-5 pb-4 pt-2.5">
      <InfoRow label="Card holder" value={card.cardholder} className="py-0" />
      <InfoRow label="Status" value={<span className={status.className}>{status.label}</span>} className="py-0" />
    </PanelCard>
  )
}
