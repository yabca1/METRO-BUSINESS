import { Download, QrCode } from 'lucide-react'
import type { ColumnDef } from '@/components/ui/DataTable'
import { formatAmount } from '@/lib/currency'
import type { QrCode as QrCodeModel, QrCodeStatus } from '../types'

const STATUS_META: Record<QrCodeStatus, { label: string; className: string }> = {
  active: { label: 'Active', className: 'text-brand-completed' },
  completed: { label: 'Completed', className: 'text-brand-muted' },
  paused: { label: 'Paused', className: 'text-brand-accent' },
}

function Identity({ qr }: { qr: QrCodeModel }) {
  return (
    <span className="flex items-center gap-3">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-secondary text-brand-primary">
        <img src="/images/qr.svg" alt="QR code icon" className="h-5 w-5" />
      </span>
      <span className="truncate text-fig-12 font-poppins-semibold text-brand-primary">{qr.name}</span>
    </span>
  )
}

export const qrCodeColumns: ColumnDef<QrCodeModel>[] = [
  {
    id: 'name',
    header: 'QR code',
    width: '1.45fr',
    cell: (qr) => <Identity qr={qr} />,
  },
  {
    id: 'createdAt',
    header: 'Created',
    width: '0.85fr',
    sortable: true,
    hideBelow: 'sm',
    cell: (qr) => (
      <span className="text-fig-12 font-urbanist-medium text-brand-primary">{qr.createdAt}</span>
    ),
  },
  {
    id: 'type',
    header: 'Type',
    width: '0.65fr',
    hideBelow: 'md',
    cell: (qr) => (
      <span className="text-fig-12 font-urbanist-medium capitalize text-brand-primary">{qr.type}</span>
    ),
  },
  {
    id: 'status',
    header: 'Status',
    width: '0.7fr',
    sortable: true,
    cell: (qr) => {
      const meta = STATUS_META[qr.status]
      return <span className={`text-fig-12 font-urbanist-semibold ${meta.className}`}>{meta.label}</span>
    },
  },
  {
    id: 'limit',
    header: 'Limit',
    width: '0.45fr',
    hideBelow: 'md',
    cell: (qr) => (
      <span className="text-fig-12 font-urbanist-medium text-brand-primary">
        {qr.limit == null ? '-' : `${qr.used}/${qr.limit}`}
      </span>
    ),
  },
  {
    id: 'account',
    header: 'Account',
    width: '0.95fr',
    hideBelow: 'lg',
    cell: (qr) => (
      <span className="text-fig-12 font-urbanist-medium text-brand-primary">{qr.account}</span>
    ),
  },
  {
    id: 'amount',
    header: 'Amount',
    width: '0.7fr',
    align: 'right',
    sortable: true,
    cell: (qr) => (
      <span className="text-fig-12 font-urbanist-medium text-brand-primary">
        {qr.amount == null ? '-' : formatAmount(qr.amount, qr.currency)}
      </span>
    ),
  },
  {
    id: 'download',
    header: '',
    width: '0.35fr',
    align: 'right',
    cell: (qr) => (
      <button
        type="button"
        aria-label={`Download ${qr.name}`}
        onClick={(event) => event.stopPropagation()}
        className="inline-flex size-8 items-center justify-center rounded-full text-brand-blue transition hover:bg-brand-secondary cursor-pointer"
      >
        <Download className="size-4" />
      </button>
    ),
  },
]
// TODO: Review merchant page logic
