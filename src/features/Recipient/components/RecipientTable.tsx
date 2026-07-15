'use client'

import { AddIcon } from "@/components/icons/vuesax"
import {
  DataTable, DataTablePagination, DataTableToolbar, useAnimatedDetail, useDataTable, type TableTab,
} from "@/components/ui/DataTable"
import { useRecipients } from "../hooks"
import type { Recipient } from "../types"
import { recipientColumns } from "./recipientColumns"
import { RecipientDetailPanel } from "./RecipientDetailPanel"

const KIND_FILTERS: TableTab[] = [
  { value: "all", label: "All" },
  { value: "individual", label: "Individual" },
  { value: "business", label: "Business" },
]

export function RecipientTable() {
  const table = useDataTable({ initialTab: "all" })
  const { state } = table
  const detail = useAnimatedDetail<Recipient>()

  const query = useRecipients({
    page: state.page,
    search: state.search || undefined,
    kind: state.tab === "all" ? undefined : state.tab,
    sortBy: state.sort?.id,
    sortDir: state.sort?.direction,
  })

  const recipients = query.data?.items ?? []
  const total = query.data?.total ?? 0

  return (
    <div className="mx-auto w-full rounded-t-3xl bg-brand-white px-6 py-7">
      <div className={`detail-split-grid items-start ${detail.item ? "is-open" : ""}`}>
        <div className="detail-split-main space-y-4">
          <DataTableToolbar controller={table} filterOptions={KIND_FILTERS} filterLabel="recipients"
            searchPlaceholder="Search recipients"
            actions={
              <button type="button" className="flex h-8 min-w-21 items-center justify-center gap-2.5 rounded-2xl bg-brand-primary px-6 font-urbanist-semibold text-fig-12 text-brand-white transition hover:opacity-85 cursor-pointer">
                <AddIcon className="size-3.5" /> New
              </button>
            }
          />

          <DataTable<Recipient>
            columns={recipientColumns}
            rows={recipients}
            rowKey={(recipient) => recipient.id}
            onRowClick={detail.open}
            selectedKey={detail.item?.id ?? null}
            sort={state.sort}
            onSortToggle={table.toggleSort}
            isLoading={query.isPending}
            error={query.error}
            onRetry={() => query.refetch()}
            emptyMessage="No recipients found"
            headerLead={<span className="font-poppins-regular text-fig-12 font-normal">All • {total}</span>}
          />

          {query.data && (
            <DataTablePagination pagination={{ page: query.data.page, pageSize: query.data.pageSize, total }}
              onPageChange={table.setPage} />
          )}
        </div>

        {detail.item && (
          <RecipientDetailPanel key={detail.item.id} recipient={detail.item} closing={detail.closing}
            onClose={detail.close} onExitComplete={detail.finishClose} />
        )}
      </div>
    </div>
  )
}
