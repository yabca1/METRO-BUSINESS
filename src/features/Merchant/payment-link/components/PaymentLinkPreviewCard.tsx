'use client'

// Merchant — Payment Link preview card wrapper
import * as React from 'react'
import type { BrandingDetails } from '../types'
import { PaymentLinkPreview } from './PaymentLinkPreview'

interface PaymentLinkPreviewCardProps {
  amountLabel: string
  merchantName: string
  branding: BrandingDetails
  previewMode: 'desktop' | 'mobile'
  onPreviewModeChange: (mode: 'desktop' | 'mobile') => void
}

export function PaymentLinkPreviewCard({
  amountLabel,
  merchantName,
  branding,
  previewMode,
  onPreviewModeChange,
}: PaymentLinkPreviewCardProps) {
  return (
    <PaymentLinkPreview
      amountLabel={amountLabel}
      merchantName={merchantName}
      branding={branding}
      mode={previewMode}
      onModeChange={onPreviewModeChange}
    />
  )
}
