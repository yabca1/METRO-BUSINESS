'use client'

import { AddIcon, Setting2Icon } from "@/components/icons/vuesax"
import { DataTableToolbar, type DataTableController } from "@/components/ui/DataTable"

const filters = [
  { value: "all", label: "All", count: 3 },
  { value: "active", label: "Active", count: 2 },
  { value: "inactive", label: "Inactive", count: 1 },
]

export function SpendProgramToolbar({ controller }: { controller: DataTableController }) {
  const actions = (
    <>
      <button type="button" className="flex h-7.5 items-center gap-2 rounded-2xl bg-brand-surface px-4 text-fig-12 font-urbanist-semibold text-brand-primary transition hover:bg-brand-secondary cursor-pointer">
        <Setting2Icon className="size-3.5" /> Setting
      </button>
      <button type="button" className="flex h-7.5 items-center gap-2 rounded-2xl bg-brand-primary px-4 text-fig-12 font-urbanist-semibold text-brand-white transition hover:opacity-85 cursor-pointer">
        <AddIcon className="size-3.5" /> Create spend program
      </button>
    </>
  )

  return (
    <div className="mb-5">
      <DataTableToolbar controller={controller} filterOptions={filters} filterLabel="programs"
        searchPlaceholder="Search spend programs" actions={actions} />
    </div>
  )
}
