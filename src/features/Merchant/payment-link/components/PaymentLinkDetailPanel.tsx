'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import type { PaymentLink } from '../types'
import { PaymentLinkDetailHeader } from './PaymentLinkDetailHeader'

interface PaymentLinkDetailPanelProps {
  link: PaymentLink
  onClose?: () => void
  closing?: boolean
  onExitComplete?: () => void
}

export function PaymentLinkDetailPanel({
  link,
  onClose,
  closing,
  onExitComplete,
}: PaymentLinkDetailPanelProps) {
  return (
    <aside
      onAnimationEnd={(event) => closing && event.currentTarget === event.target && onExitComplete?.()}
      className={cn(
        'animated-detail-panel detail-split-panel max-h-[calc(100vh-7rem)] overflow-y-auto rounded-2xl border border-brand-border bg-brand-surface/40 p-3',
        closing && 'is-closing',
      )}
    >
      <PaymentLinkDetailHeader link={link} onClose={onClose} />
    </aside>
  )
}
// TODO: Review merchant page logic
