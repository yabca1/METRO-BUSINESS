import { Copy, Link2 } from 'lucide-react'
import type { ColumnDef } from '@/components/ui/DataTable'
import { formatAmount } from '@/lib/currency'
import type { PaymentLink, PaymentLinkStatus } from '../types'

const STATUS_META: Record<PaymentLinkStatus, { label: string; className: string }> = {
  active: { label: 'Active', className: 'text-brand-completed' },
  completed: { label: 'Completed', className: 'text-brand-muted' },
  paused: { label: 'Paused', className: 'text-brand-accent' },
}

function Identity({ link }: { link: PaymentLink }) {
  return (
    <span className="flex items-center gap-3">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-secondary text-brand-primary">
        <img src="/icons/dashboard/quick-action-transfer.svg" alt="Payment link icon" className="h-5 w-5" />
      </span>
      <span className="truncate text-fig-12 font-poppins-semibold text-brand-primary">{link.name}</span>
    </span>
  )
}

export const paymentLinkColumns: ColumnDef<PaymentLink>[] = [
  {
    id: 'name',
    header: 'Payment link',
    width: '1.5fr',
    cell: (link) => <Identity link={link} />,
  },
  {
    id: 'createdAt',
    header: 'Created',
    width: '0.85fr',
    sortable: true,
    hideBelow: 'sm',
    cell: (link) => (
      <span className="text-fig-12 font-urbanist-medium text-brand-primary">{link.createdAt}</span>
    ),
  },
  {
    id: 'createdBy',
    header: 'Created by',
    width: '0.9fr',
    hideBelow: 'lg',
    cell: (link) => (
      <span className="text-fig-12 font-urbanist-medium text-brand-primary">{link.createdBy}</span>
    ),
  },
  {
    id: 'status',
    header: 'Status',
    width: '0.7fr',
    sortable: true,
    cell: (link) => {
      const meta = STATUS_META[link.status]
      return <span className={`text-fig-12 font-urbanist-semibold ${meta.className}`}>{meta.label}</span>
    },
  },
  {
    id: 'limit',
    header: 'Limit',
    width: '0.45fr',
    hideBelow: 'md',
    cell: (link) => (
      <span className="text-fig-12 font-urbanist-medium text-brand-primary">
        {link.used}/{link.limit}
      </span>
    ),
  },
  {
    id: 'account',
    header: 'Account',
    width: '0.95fr',
    hideBelow: 'lg',
    cell: (link) => (
      <span className="text-fig-12 font-urbanist-medium text-brand-primary">{link.account}</span>
    ),
  },
  {
    id: 'amount',
    header: 'Amount',
    width: '0.7fr',
    align: 'right',
    sortable: true,
    cell: (link) => (
      <span className="text-fig-12 font-urbanist-medium text-brand-primary">
        {formatAmount(link.amount, link.currency)}
      </span>
    ),
  },
  {
    id: 'copy',
    header: '',
    width: '0.35fr',
    align: 'right',
    cell: (link) => (
      <button
        type="button"
        aria-label={`Copy link for ${link.name}`}
        onClick={(event) => {
          event.stopPropagation()
          void navigator.clipboard?.writeText(link.url)
        }}
        className="inline-flex size-8 items-center justify-center rounded-full text-brand-blue transition hover:bg-brand-secondary cursor-pointer"
      >
        <Copy className="size-4" />
      </button>
    ),
  },
]
// TODO: Review merchant page logic
