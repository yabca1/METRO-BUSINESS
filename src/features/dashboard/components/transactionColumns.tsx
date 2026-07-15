// src/features/dashboard/components/transactionColumns.tsx
import type { ColumnDef } from "@/components/ui/DataTable"
import { formatAmount, maskAmount } from "@/lib/currency"
import type { Transaction, TransactionStatus } from "../types"

const STATUS_META: Record<TransactionStatus, { label: string; className: string }> = {
  completed: { label: "Completed", className: "text-brand-success" },
  pending: { label: "Pending Review", className: "text-brand-accent" },
}

function Identity({ transaction }: { transaction: Transaction }) {
  return (
    <span className="flex items-center gap-3">
      <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-brand-primary text-sm font-semibold text-brand-white">
        {transaction.recipient.split(" ").map((p) => p[0]).join("").slice(0, 2).toUpperCase()}
      </span>
      <span className="min-w-0">
        <span className="block truncate text-sm font-semibold text-brand-primary">To {transaction.recipient}</span>
        <span className="block truncate text-detail-meta text-brand-muted">{transaction.reference}</span>
      </span>
    </span>
  )
}

export function transactionColumns(amountsHidden: boolean): ColumnDef<Transaction>[] {
  return [
    {
      id: "transaction",
      header: "Transaction",
      width: "1.65fr",
      cell: (transaction) => <Identity transaction={transaction} />,
    },
    {
      id: "date",
      header: "Date",
      width: "0.8fr",
      sortable: true,
      hideBelow: "sm",
      cell: (transaction) => <span className="text-xs font-medium text-brand-primary">{transaction.date}</span>,
    },
    {
      id: "createdBy",
      header: "Created by",
      width: "0.8fr",
      hideBelow: "md",
      cell: (transaction) => <span className="text-xs font-medium text-brand-primary">{transaction.createdBy}</span>,
    },
    {
      id: "status",
      header: "Status",
      width: "0.7fr",
      cell: (transaction) => {
        const meta = STATUS_META[transaction.status]
        return <span className={`text-xs font-semibold ${meta.className}`}>{meta.label}</span>
      },
    },
    {
      id: "amount",
      header: "Amount",
      width: "0.65fr",
      align: "right",
      sortable: true,
      cell: (transaction) => (
        <span className="text-xs font-medium text-brand-primary">
          {amountsHidden ? maskAmount(transaction.currency) : formatAmount(transaction.amount, transaction.currency)}
        </span>
      ),
    },
  ]
}
