'use client'

// Merchant — QR Code detail header panel
import * as React from 'react'
import Image from 'next/image'
import { Check, Copy, Download, Mail, Pause } from 'lucide-react'
import { CloseIcon, MoreIcon } from '@/components/icons/vuesax'
import { PanelCard } from '@/components/ui/PanelCard'
import { formatAmount } from '@/lib/currency'
import type { QrCode as QrCodeModel } from '../types'

export function QrCodeDetailHeader({ qr }: { qr: QrCodeModel }) {
  const isDynamic = qr.type === 'dynamic'
  const statusLabel = qr.status === 'active' ? 'Active' : qr.status === 'paused' ? 'Paused' : 'Completed'
  const statusClass = qr.status === 'active' ? 'text-brand-completed' : 'text-brand-muted'

  return (
    <div className="mt-4 space-y-3 px-1">
      <div className="flex items-center justify-between">
        <IconButton label="Close panel"><CloseIcon className="size-3" /></IconButton>
        <IconButton label="More options"><MoreIcon className="size-3" /></IconButton>
      </div>
      <div>
        <h2 className="font-poppins-semibold text-[28px] leading-[32px] tracking-[-0.02em] align-middle text-brand-primary">{qr.name}</h2>
        {isDynamic && qr.amount != null && <p className="mt-1 text-fig-14 font-poppins-semibold text-brand-primary">{formatAmount(qr.amount, qr.currency)}</p>}
        <p className="mt-1 text-fig-10 text-brand-muted">{qr.createdAt}</p>
      </div>
      {isDynamic && <div className="flex gap-3"><ActionChip icon={<Pause className="size-4" />} label="Pause" /><ActionChip icon={<Check className="size-4" />} label="Mark as completed" /></div>}
      <PanelCard className="space-y-4 pb-3.5 pt-2.5">
        <InfoRow label="Status" value={<span className={statusClass}>{statusLabel}</span>} />
        <InfoRow label="Created by" value={qr.createdBy} />
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
        <QrPreviewCard handle={qr.handle} />
        <p className="mb-3 mt-4 text-fig-12 font-urbanist-medium text-brand-muted">Share</p>
        <div className="mb-3 flex items-center justify-between gap-2 rounded-xl bg-brand-white px-3 py-2.5">
          <p className="truncate text-fig-12 font-urbanist-medium text-brand-blue">{truncateUrl(qr.url)}</p>
          <button type="button" aria-label="Copy QR link" onClick={() => void navigator.clipboard?.writeText(qr.url)} className="shrink-0 text-brand-blue cursor-pointer"><Copy className="size-4" /></button>
        </div>
        <ShareAction icon={<Mail className="size-5" />} label="Send via email" />
        <ShareAction icon={<Download className="size-5" />} label="Download QR code" />
      </PanelCard>
    </div>
  )
}

function QrPreviewCard({ handle }: { handle: string }) {
  return <div className="overflow-hidden rounded-xl border border-brand-border bg-brand-white"><div className="bg-brand-primary px-4 py-3 text-center"><p className="font-orbitron-bold text-[16px] leading-none tracking-wide text-transparent bg-clip-text bg-gradient-to-l from-brand-indicator to-brand-secondary">Metro<span className="ml-1 text-[10px] tracking-[0.09em]">Birr</span></p></div><div className="flex flex-col items-center px-6 py-6"><div className="relative flex h-48 w-48 items-center justify-center rounded-lg bg-brand-white p-3 shadow-sm ring-1 ring-brand-border"><Image src="/qr.png" alt="QR code" width={176} height={176} className="rounded-lg object-contain" /></div><span className="mt-4 rounded-full border border-brand-border bg-brand-surface/60 px-3 py-1 text-fig-10 font-poppins-semibold text-brand-primary">{handle}</span></div></div>
}

function IconButton({ label, children }: { label: string; children: React.ReactNode }) {
  return <button type="button" aria-label={label} className="flex size-6 items-center justify-center rounded-full bg-brand-secondary text-brand-primary transition hover:opacity-70 cursor-pointer">{children}</button>
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

function truncateUrl(url: string) {
  if (url.length <= 42) return url
  return `${url.slice(0, 38)}..`
}
