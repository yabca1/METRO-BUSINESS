'use client'

// Merchant — Payment Link table with filters and detail panel
import Link from 'next/link'
import { Plus, Settings } from 'lucide-react'
import {
  DataTable,
  DataTableToolbar,
  useAnimatedDetail,
  useDataTable,
  type TableTab,
} from '@/components/ui/DataTable'
import { ROUTES } from '@/constants/routes'
import { PAYMENT_LINKS } from '../data'
import type { PaymentLink } from '../types'
import { paymentLinkColumns } from './paymentLinkColumns'
import { PaymentLinkDetailPanel } from './PaymentLinkDetailPanel'

const FILTERS: TableTab[] = [
  { value: 'all', label: 'All' },
  { value: 'active', label: 'Active' },
  { value: 'completed', label: 'Completed' },
]

export function PaymentLinkTable() {
  const table = useDataTable({ initialTab: 'all' })
  const { state } = table
  const detail = useAnimatedDetail<PaymentLink>()

  const rows = PAYMENT_LINKS.filter((link) => {
    const matchesTab = state.tab === 'all' || link.status === state.tab
    const query = state.search.trim().toLowerCase()
    const matchesSearch =
      !query ||
      link.name.toLowerCase().includes(query) ||
      link.createdBy.toLowerCase().includes(query)
    return matchesTab && matchesSearch
  })

  return (
    <div className="mx-auto w-full rounded-t-3xl bg-brand-white px-6 py-7">
      <div className={`detail-split-grid items-start ${detail.item ? 'is-open' : ''}`}>
        <div className="detail-split-main space-y-4">
          <DataTableToolbar
            controller={table}
            filterOptions={FILTERS}
            filterLabel="payment links"
            searchPlaceholder="Search payment links"
            actions={
              <>
                <Link
                  href={ROUTES.MERCHANT_PAYMENT_LINK_SETTINGS}
                  className="inline-flex h-8 items-center gap-2 rounded-full bg-brand-surface px-4 text-fig-12 font-urbanist-medium text-brand-primary transition hover:bg-brand-secondary"
                >
                  <Settings className="size-3.5" />
                  Setting
                </Link>
                <Link
                  href={ROUTES.MERCHANT_PAYMENT_LINK_NEW}
                  className="inline-flex h-8 items-center gap-1.5 rounded-full bg-brand-primary px-4 text-fig-12 font-urbanist-semibold text-brand-white transition hover:opacity-90"
                >
                  <Plus className="size-3.5" />
                  Create link
                </Link>
              </>
            }
          />

          <DataTable<PaymentLink>
            columns={paymentLinkColumns}
            rows={rows}
            rowKey={(link) => link.id}
            onRowClick={detail.open}
            selectedKey={detail.item?.id ?? null}
            sort={state.sort}
            onSortToggle={table.toggleSort}
            emptyMessage="No payment links found"
            headerLead={`All • ${rows.length}`}
          />
        </div>

        {detail.item && (
          <PaymentLinkDetailPanel
            key={detail.item.id}
            link={detail.item}
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
