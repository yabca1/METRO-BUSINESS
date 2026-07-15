// src/features/Transfer/components/TransferTable.tsx
'use client'

import Link from "next/link"
import { Building2, Repeat2, ScanLine } from "lucide-react"
import {
  DataTable, DataTableToolbar, DataTablePagination, useAnimatedDetail, useDataTable, type TableTab,
} from "@/components/ui/DataTable"
import { ROUTES } from "@/constants/routes"
import { cn } from "@/lib/utils"
import { useTransfers } from "../hooks"
import type { Transfer } from "../types"
import { transferColumns } from "./transferColumns"
import { TransferDetailPanel } from "./TransferDetailPanel"

const TABS: TableTab[] = [
  { value: "all",   label: "All" },
  { value: "draft", label: "Draft" },
  { value: "sent",  label: "Upcoming" },
  { value: "paid",  label: "Past" },
]

const ACTIONS = [
  { eyebrow: "Metro", title: "Transfer", href: ROUTES.METRO_TRANSFER, icon: <span className="font-orbitron text-3xl font-semibold">M</span> },
  { eyebrow: "Bank",  title: "Transfer", href: ROUTES.BANK_TRANSFER, icon: <Building2 className="size-7" /> },
  { eyebrow: "Bulk",  title: "Transfer", icon: <Repeat2 className="size-7" /> },
  { eyebrow: "Scan",  title: "Bill",     icon: <ScanLine className="size-7" /> },
]

export function TransferTable() {
  const table = useDataTable({ initialTab: "all" })
  const { state } = table

  const query = useTransfers({
    page: state.page,
    search: state.search || undefined,
    status: state.tab === "all" ? undefined : state.tab,
    sortBy: state.sort?.id,
    sortDir: state.sort?.direction,
  })

  const transfers = query.data?.items ?? []
  const total = query.data?.total ?? 0
  const detail = useAnimatedDetail<Transfer>()

  return (
    <div className="mx-auto w-full rounded-t-3xl bg-brand-white px-6 py-7">
      <div className="mb-7 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-7">
        {ACTIONS.map((action) => <ActionCard key={action.eyebrow} {...action} />)}
      </div>

      <div className={`detail-split-grid items-start ${detail.item ? "is-open" : ""}`}>
        <div className="detail-split-main space-y-4">
          <DataTableToolbar controller={table} tabs={TABS} searchPlaceholder="Search transfers" filterLabel="transfers" />

          <DataTable<Transfer>
            columns={transferColumns}
            rows={transfers}
            rowKey={(transfer) => transfer.id}
            onRowClick={detail.open}
            selectedKey={detail.item?.id ?? null}
            sort={state.sort}
            onSortToggle={table.toggleSort}
            isLoading={query.isPending}
            error={query.error}
            onRetry={() => query.refetch()}
            emptyMessage="No transfers found"
            headerLead={`All • ${total}`}
          />

          {query.data && (
            <DataTablePagination
              pagination={{ page: query.data.page, pageSize: query.data.pageSize, total }}
              onPageChange={table.setPage}
            />
          )}
        </div>

        {detail.item && <TransferDetailPanel key={detail.item.id} transfer={detail.item} closing={detail.closing} onClose={detail.close} onExitComplete={detail.finishClose} />}
      </div>
    </div>
  )
}

function ActionCard({ eyebrow, title, icon, href }: { eyebrow: string; title: string; icon: React.ReactNode; href?: string }) {
  const className = "flex min-h-20 items-center justify-between rounded-2xl border border-brand-border bg-brand-surface/40 px-5 py-4 text-left transition hover:bg-brand-surface cursor-pointer"
  const content = (
    <>
      <span>
        <span className="block text-detail-meta text-brand-muted">{eyebrow}</span>
        <span className="block text-xl font-semibold text-brand-primary">{title}</span>
      </span>
      <span className="flex size-12 items-center justify-center rounded-full bg-brand-secondary text-brand-primary">{icon}</span>
    </>
  )
  if (href) return <Link href={href} className={cn(className)}>{content}</Link>
  return <button type="button" className={cn(className)}>{content}</button>
}
