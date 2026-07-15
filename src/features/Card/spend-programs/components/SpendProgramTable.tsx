'use client'

import { DataTable, useAnimatedDetail, useDataTable } from "@/components/ui/DataTable"
import { spendPrograms, SPEND_PROGRAM_COUNT } from "../data"
import type { SpendProgram } from "../types"
import { sortSpendPrograms } from "../sortSpendPrograms"
import { SpendProgramDetailPanel } from "./SpendProgramDetailPanel"
import { SpendProgramToolbar } from "./SpendProgramToolbar"
import { spendProgramColumns } from "./spendProgramColumns"

export function SpendProgramTable() {
  const table = useDataTable()
  const detail = useAnimatedDetail<SpendProgram>()
  const query = table.state.search.toLowerCase()
  const filteredRows = spendPrograms.filter((program) => {
    const matchesSearch = !query || program.name.toLowerCase().includes(query) || program.createdBy.toLowerCase().includes(query)
    const matchesStatus = table.state.tab === "all" || program.status === table.state.tab
    return matchesSearch && matchesStatus
  })
  const rows = sortSpendPrograms(filteredRows, table.state.sort)

  return (
    <div className="mx-auto min-h-[calc(100vh-7rem)] w-full rounded-t-3xl bg-brand-white px-4 py-7 sm:px-8">
      <SpendProgramToolbar controller={table} />
      <div className={`detail-split-grid items-start ${detail.item ? "is-open" : ""}`}>
        <div className="detail-split-main min-w-0 pr-2.5">
          <DataTable columns={spendProgramColumns} rows={rows} rowKey={(row) => row.id}
            onRowClick={detail.open} selectedKey={detail.item?.id ?? null}
            sort={table.state.sort} onSortToggle={table.toggleSort}
            headerLead={<>All <span className="mx-1">{"\u2022"}</span> {SPEND_PROGRAM_COUNT}</>}
            className="h-73.25 [&>[role=row]]:px-3" rowClassName="min-h-11.75 rounded-none px-2" emptyMessage="No spend programs found" />
        </div>
        {detail.item && (
          <SpendProgramDetailPanel key={detail.item.id} program={detail.item} closing={detail.closing}
            onClose={detail.close} onExitComplete={detail.finishClose} />
        )}
      </div>
    </div>
  )
}
