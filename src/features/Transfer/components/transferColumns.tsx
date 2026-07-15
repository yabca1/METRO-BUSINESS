// src/features/Transfer/components/transferColumns.tsx
import { Banknote, ReceiptText } from "lucide-react"
import type { ColumnDef } from "@/components/ui/DataTable"
import { formatAmount } from "@/lib/currency"
import { formatDate } from "@/lib/utils"
import type { Transfer, TransferStatus } from "../types"

const STATUS_META: Record<TransferStatus, { label: string; className: string }> = {
  paid:    { label: "Completed",      className: "text-brand-completed" },
  sent:    { label: "Pending Review", className: "text-brand-pending" },
  draft:   { label: "Draft",          className: "text-brand-muted" },
  overdue: { label: "Overdue",        className: "text-brand-danger" },
}

function Identity({ transfer }: { transfer: Transfer }) {
  const initials = transfer.recipientId.split(" ").map((p) => p[0]).join("").slice(0, 2).toUpperCase()
  return (
    <span className="flex items-center gap-3">
      <span className="relative flex size-11 shrink-0 items-center justify-center rounded-full bg-brand-primary text-sm font-semibold text-brand-white">
        {transfer.status === "paid" ? initials : <ReceiptText className="size-5" />}
        <span className="absolute bottom-0 right-0 flex size-3 items-center justify-center rounded-full bg-brand-primary ring-2 ring-brand-white">
          <Banknote className="size-2" />
        </span>
      </span>
      <span className="min-w-0">
        <span className="block truncate text-sm font-semibold text-brand-primary">To {transfer.recipientId}</span>
        <span className="block truncate text-detail-meta text-brand-muted">{transfer.number}</span>
      </span>
    </span>
  )
}

export const transferColumns: ColumnDef<Transfer>[] = [
  {
    id: "transaction",
    header: "Transaction",
    width: "1.65fr",
    cell: (transfer) => <Identity transfer={transfer} />,
  },
  {
    id: "createdAt",
    header: "Creation date",
    width: "0.8fr",
    sortable: true,
    hideBelow: "sm",
    cell: (transfer) => <span className="text-xs font-medium text-brand-primary">{formatDate(transfer.createdAt)}</span>,
  },
  {
    id: "recipient",
    header: "Created by",
    width: "0.8fr",
    sortable: true,
    hideBelow: "md",
    cell: (transfer) => <span className="text-xs font-medium text-brand-primary">{transfer.recipientId}</span>,
  },
  {
    id: "status",
    header: "Status",
    width: "0.7fr",
    sortable: true,
    cell: (transfer) => {
      const meta = STATUS_META[transfer.status]
      return <span className={`text-xs font-semibold ${meta.className}`}>{meta.label}</span>
    },
  },
  {
    id: "amount",
    header: "Amount",
    width: "0.65fr",
    align: "right",
    sortable: true,
    cell: (transfer) => (
      <span className="text-xs font-medium text-brand-primary">
        {formatAmount(transfer.amount, transfer.currency || "USD")}
      </span>
    ),
  },
]
