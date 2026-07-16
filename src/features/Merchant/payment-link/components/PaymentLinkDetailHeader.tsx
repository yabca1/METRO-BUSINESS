'use client'

// Merchant — Payment Link detail header panel
import * as React from 'react'
import { Check, Copy, Mail, Pause, QrCode } from 'lucide-react'
import { CloseIcon, MoreIcon } from '@/components/icons/vuesax'
import { PanelCard } from '@/components/ui/PanelCard'
import { formatAmount } from '@/lib/currency'
import type { PaymentLink } from '../types'

export function PaymentLinkDetailHeader({
  link,
  onClose,
}: {
  link: PaymentLink
  onClose?: () => void
}) {
  const remaining = Math.max(link.limit - link.used, 0)
  const progress = Math.min((link.used / link.limit) * 100, 100)

  return (
    <div className="mt-4 space-y-3 px-1">
      <div className="flex items-center justify-between">
        <IconButton label="Close panel" onClick={onClose}>
          <CloseIcon className="size-3" />
        </IconButton>
        <IconButton label="More options">
          <MoreIcon className="size-3" />
        </IconButton>
      </div>
      <div>
        <h2 className="font-poppins-semibold text-[28px] leading-[32px] tracking-[-0.02em] align-middle text-brand-primary">
          {link.name}
        </h2>
        <p className="mt-1 text-fig-20 font-poppins-semibold text-brand-primary">
          {formatAmount(link.amount, link.currency)}
        </p>
        <p className="mt-1 text-fig-10 text-brand-muted">{link.createdAt}</p>
      </div>
      <div className="flex gap-3">
        <ActionChip icon={<Pause className="size-4" />} label="Pause" />
        <ActionChip icon={<Check className="size-4" />} label="Mark as completed" />
      </div>
      <PanelCard className="space-y-4 pb-3.5 pt-2.5">
        <InfoRow label="Status" value={<span className={link.status === 'active' ? 'text-brand-completed' : 'text-brand-muted'}>{link.status === 'active' ? 'Active' : link.status === 'paused' ? 'Paused' : 'Completed'}</span>} />
        <InfoRow label="Created by" value={link.createdBy} />
      </PanelCard>
      <PanelCard className="py-2.5">
        <p className="text-fig-12 text-brand-muted">To account</p>
        <div className="mt-2 flex items-center gap-2.5">
          <span className="flex size-11.5 items-center justify-center rounded-full bg-brand-primary font-orbitron-bold text-2xl font-bold text-brand-white">M</span>
          <div>
            <p className="text-fig-14 font-urbanist-semibold text-brand-primary">Main Account</p>
            <p className="text-fig-10 text-brand-muted">Metro business <span className="mx-1">•</span><span className="font-urbanist-light text-brand-primary">@metrobusiness</span></p>
          </div>
        </div>
      </PanelCard>
      <PanelCard>
        <p className="mb-3 text-fig-12 font-urbanist-medium text-brand-muted">Share</p>
        <div className="mb-3 flex items-center justify-between gap-2 rounded-xl bg-brand-white px-3 py-2.5">
          <p className="truncate text-fig-12 font-urbanist-medium text-brand-blue">{truncateUrl(link.url)}</p>
          <button type="button" aria-label="Copy payment link" onClick={() => void navigator.clipboard?.writeText(link.url)} className="shrink-0 text-brand-blue cursor-pointer"><Copy className="size-4" /></button>
        </div>
        <ShareAction icon={<Mail className="size-5" />} label="Send via email" />
        <ShareAction icon={<QrCode className="size-5" />} label="Show QR code" />
      </PanelCard>
      <PanelCard>
        <div className="mb-3 flex items-center justify-between">
          <p className="text-fig-12 font-urbanist-semibold text-brand-primary">Summary</p>
          <p className="text-fig-12 font-urbanist-medium text-brand-muted">{remaining} orders left · {link.used}/{link.limit}</p>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-brand-track"><div className="h-full rounded-full bg-brand-ink" style={{ width: `${progress}%` }} /></div>
        <p className="mt-3 text-fig-10 text-brand-muted">Payment link will be marked complete once all orders are paid</p>
      </PanelCard>
      {link.payers.length > 0 && <PayerList payers={link.payers} />}
    </div>
  )
}

function IconButton({
  label,
  children,
  onClick,
}: {
  label: string
  children: React.ReactNode
  onClick?: () => void
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="flex size-6 items-center justify-center rounded-full bg-brand-secondary text-brand-primary transition hover:opacity-70 cursor-pointer"
    >
      {children}
    </button>
  )
}

function ActionChip({ icon, label }: { icon: React.ReactNode; label: string }) {
  return <button type="button" className="flex flex-1 items-center justify-center gap-2 rounded-full border border-brand-border bg-brand-white px-3 py-2.5 text-fig-12 font-urbanist-semibold text-brand-primary transition hover:bg-brand-surface cursor-pointer">{icon}{label}</button>
}

function InfoRow({ label, value }: { label: string; value: React.ReactNode }) {
  return <div className="flex items-center justify-between gap-3 text-fig-14"><span className="text-brand-muted">{label}</span><span className="font-urbanist-medium text-brand-primary">{value}</span></div>
}

function ShareAction({ icon, label }: { icon: React.ReactNode; label: string }) {
  return <button type="button" className="flex w-full items-center gap-3 py-2 text-fig-14 font-urbanist-medium text-brand-primary cursor-pointer">{icon}{label}</button>
}

function PayerList({ payers }: { payers: PaymentLink['payers'] }) {
  return <PanelCard><p className="mb-3 text-fig-12 font-urbanist-semibold text-brand-primary">Paid by</p><ul className="space-y-3">{payers.map((payer) => <li key={payer.id} className="flex items-center justify-between gap-3"><span className="flex min-w-0 items-center gap-2.5"><span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-primary text-fig-10 font-urbanist-semibold text-brand-white">{initials(payer.name)}</span><span className="min-w-0"><span className="block truncate text-fig-12 font-urbanist-semibold text-brand-primary">{payer.name}</span><span className="block text-fig-10 text-brand-muted">Paid · {payer.paidAt}</span></span></span><button type="button" className="flex shrink-0 items-center gap-1 text-fig-10 font-urbanist-medium text-brand-muted cursor-pointer" onClick={() => void navigator.clipboard?.writeText(payer.reference)}>{payer.reference}<Copy className="size-3" /></button></li>)}</ul></PanelCard>
}

function initials(name: string) {
  return name.split(' ').map((part) => part[0]).join('').slice(0, 2).toUpperCase()
}

function truncateUrl(url: string) {
  if (url.length <= 42) return url
  return `${url.slice(0, 38)}..`
}
