// src/features/dashboard/components/TransactionsTable.tsx
'use client'

import * as React from "react"
import { DataTable, type SortState } from "@/components/ui/DataTable"
import { transactions } from "../data"
import type { Transaction } from "../types"
import { transactionColumns } from "./transactionColumns"

function sortTransactions(rows: Transaction[], sort: SortState | null) {
  if (!sort) return rows
  const sorted = [...rows].sort((a, b) => {
    if (sort.id === "amount") return a.amount - b.amount
    if (sort.id === "date") return a.date.localeCompare(b.date)
    return 0
  })
  return sort.direction === "asc" ? sorted : sorted.reverse()
}

interface TransactionsTableProps {
  amountsHidden: boolean
}

export function TransactionsTable({ amountsHidden }: TransactionsTableProps) {
  const [sort, setSort] = React.useState<SortState | null>(null)

  const toggleSort = (id: string) => {
    setSort((prev) => {
      if (prev?.id !== id) return { id, direction: "asc" }
      if (prev.direction === "asc") return { id, direction: "desc" }
      return null
    })
  }

  const rows = React.useMemo(() => sortTransactions(transactions, sort), [sort])
  const columns = React.useMemo(() => transactionColumns(amountsHidden), [amountsHidden])

  return (
    <div className="space-y-3">
      <DataTable<Transaction>
        columns={columns}
        rows={rows}
        rowKey={(transaction) => transaction.id}
        sort={sort}
        onSortToggle={toggleSort}
        emptyMessage="No transactions yet"
      />
      <div className="flex justify-center">
        <button
          type="button"
          className="text-sm font-semibold text-brand-primary transition hover:text-brand-muted cursor-pointer"
        >
          See all
        </button>
      </div>
    </div>
  )
}
