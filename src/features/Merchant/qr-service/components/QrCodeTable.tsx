'use client'

import { Plus, Settings } from 'lucide-react'
import {
  DataTable,
  DataTableToolbar,
  useAnimatedDetail,
  useDataTable,
  type TableTab,
} from '@/components/ui/DataTable'
import { QR_CODES } from '../data'
import type { QrCode } from '../types'
import { qrCodeColumns } from './qrCodeColumns'
import { QrCodeDetailPanel } from './QrCodeDetailPanel'

const FILTERS: TableTab[] = [
  { value: 'all', label: 'All' },
  { value: 'active', label: 'Active' },
  { value: 'completed', label: 'Completed' },
  { value: 'static', label: 'Static' },
  { value: 'dynamic', label: 'Dynamic' },
]

export function QrCodeTable() {
  const table = useDataTable({ initialTab: 'all' })
  const { state } = table
  const detail = useAnimatedDetail<QrCode>()

  const rows = QR_CODES.filter((qr) => {
    const tab = state.tab
    const matchesTab =
      tab === 'all' ||
      qr.status === tab ||
      qr.type === tab
    const query = state.search.trim().toLowerCase()
    const matchesSearch =
      !query ||
      qr.name.toLowerCase().includes(query) ||
      qr.createdBy.toLowerCase().includes(query)
    return matchesTab && matchesSearch
  })

  return (
    <div className="mx-auto w-full rounded-t-3xl bg-brand-white px-6 py-7">
      <div className={`detail-split-grid items-start ${detail.item ? 'is-open' : ''}`}>
        <div className="detail-split-main space-y-4">
          <DataTableToolbar
            controller={table}
            filterOptions={FILTERS}
            filterLabel="QR codes"
            searchPlaceholder="Search QR codes"
            actions={
              <>
                <button
                  type="button"
                  className="inline-flex h-8 items-center gap-2 rounded-full bg-brand-surface px-4 text-fig-12 font-urbanist-medium text-brand-primary transition hover:bg-brand-secondary cursor-pointer"
                >
                  <Settings className="size-3.5" />
                  Setting
                </button>
                <button
                  type="button"
                  className="inline-flex h-8 items-center gap-1.5 rounded-full bg-brand-primary px-4 text-fig-12 font-urbanist-semibold text-brand-white transition hover:opacity-90 cursor-pointer"
                >
                  <Plus className="size-3.5" />
                  Create QR
                </button>
              </>
            }
          />

          <DataTable<QrCode>
            columns={qrCodeColumns}
            rows={rows}
            rowKey={(qr) => qr.id}
            onRowClick={detail.open}
            selectedKey={detail.item?.id ?? null}
            sort={state.sort}
            onSortToggle={table.toggleSort}
            emptyMessage="No QR codes found"
            headerLead={`All • ${rows.length}`}
          />
        </div>

        {detail.item && (
          <QrCodeDetailPanel
            key={detail.item.id}
            qr={detail.item}
            closing={detail.closing}
            onClose={detail.close}
            onExitComplete={detail.finishClose}
          />
        )}
      </div>
    </div>
  )
}
// TODO: Review merchant page logic
