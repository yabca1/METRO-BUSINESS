'use client'

// Merchant — QR Code detail panel wrapper
import * as React from 'react'
import { cn } from '@/lib/utils'
import type { QrCode as QrCodeModel } from '../types'
import { QrCodeDetailHeader } from './QrCodeDetailHeader'

interface QrCodeDetailPanelProps {
  qr: QrCodeModel
  onClose?: () => void
  closing?: boolean
  onExitComplete?: () => void
}

export function QrCodeDetailPanel({
  qr,
  onClose,
  closing,
  onExitComplete,
}: QrCodeDetailPanelProps) {
  return (
    <aside
      onAnimationEnd={(event) => closing && event.currentTarget === event.target && onExitComplete?.()}
      className={cn(
        'animated-detail-panel detail-split-panel max-h-[calc(100vh-7rem)] overflow-y-auto rounded-2xl border border-brand-border bg-brand-surface/40 p-3',
        closing && 'is-closing',
      )}
    >
      <QrCodeDetailHeader qr={qr} />
    </aside>
  )
}
// TODO: Review merchant page logic
