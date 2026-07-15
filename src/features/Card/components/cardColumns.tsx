// src/features/Card/components/cardColumns.tsx
import type { ColumnDef } from "@/components/ui/DataTable"
import { formatAmount } from "@/lib/currency"
import type { Card, CardStatus } from "../types"
import { CardTypeChip } from "./CardTypeChip"

const STATUS_META: Record<CardStatus, { label: string; className: string }> = {
  active:  { label: "Active",  className: "text-brand-success" },
  locked:  { label: "Locked",  className: "text-brand-danger" },
  waiting: { label: "Waiting to be claimed", className: "text-brand-muted" },
}

function Identity({ card }: { card: Card }) {
  return (
    <span className="flex items-center gap-3">
      <CardTypeChip type={card.type} />
      <span className="truncate text-sm font-semibold text-brand-primary">{card.label}</span>
    </span>
  )
}

function StatusCell({ card }: { card: Card }) {
  const meta = STATUS_META[card.status]
  return (
    <span className="flex items-center gap-1.5 text-xs font-semibold">
      <span className={meta.className}>{meta.label}</span>
      {card.riskOfFraud && (
        <>
          <span className="text-brand-muted">•</span>
          <span className="text-brand-danger">Risk of fraud</span>
        </>
      )}
    </span>
  )
}

function LimitCell({ card }: { card: Card }) {
  if (card.limitTotal === 0) {
    return <span className="text-xs font-medium text-brand-muted">No limit set</span>
  }
  return (
    <span className="block text-right">
      <span className="block text-xs font-semibold text-brand-primary">
        {formatAmount(card.limitSpent, card.currency)} / {formatAmount(card.limitTotal, card.currency)}
      </span>
      <span className="block text-[10px] text-brand-muted">{card.limitPeriod}</span>
    </span>
  )
}

export const cardColumns: ColumnDef<Card>[] = [
  {
    id: "identity",
    header: "Card",
    width: "1.4fr",
    cell: (card) => <Identity card={card} />,
  },
  {
    id: "cardholder",
    header: "Cardholder",
    width: "1.3fr",
    sortable: true,
    cell: (card) => <span className="truncate text-xs font-medium text-brand-primary">{card.cardholder}</span>,
  },
  {
    id: "cardNumber",
    header: "Card number",
    width: "0.9fr",
    hideBelow: "md",
    cell: (card) => <span className="text-xs font-medium text-brand-primary">{card.last4 ? `..${card.last4}` : "-"}</span>,
  },
  {
    id: "expiryDate",
    header: "Expiry date",
    width: "0.8fr",
    sortable: true,
    hideBelow: "sm",
    cell: (card) => <span className="text-xs font-medium text-brand-primary">{card.expiryDate || "-"}</span>,
  },
  {
    id: "status",
    header: "Status",
    width: "1.3fr",
    sortable: true,
    cell: (card) => <StatusCell card={card} />,
  },
  {
    id: "spendingProgram",
    header: "Spending program",
    width: "1fr",
    hideBelow: "lg",
    cell: (card) => <span className="text-xs font-medium text-brand-primary">{card.spendingProgram || "-"}</span>,
  },
  {
    id: "limitSpent",
    header: "Limit spent",
    width: "1.1fr",
    align: "right",
    cell: (card) => <LimitCell card={card} />,
  },
]
