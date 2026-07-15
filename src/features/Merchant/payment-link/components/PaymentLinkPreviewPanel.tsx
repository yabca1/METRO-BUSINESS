'use client'

import * as React from 'react'
import type { BrandingDetails } from '../types'
import { PaymentLinkPreview } from './PaymentLinkPreview'

interface PaymentLinkPreviewPanelProps {
  amountLabel: string
  merchantName: string
  branding: BrandingDetails
  previewMode: 'desktop' | 'mobile'
  onPreviewModeChange: (mode: 'desktop' | 'mobile') => void
  onBrandingClick: () => void
}

export function PaymentLinkPreviewPanel({
  amountLabel,
  merchantName,
  branding,
  previewMode,
  onPreviewModeChange,
  onBrandingClick,
}: PaymentLinkPreviewPanelProps) {
  return (
    <div>
      <PaymentLinkPreview
        amountLabel={amountLabel}
        merchantName={merchantName}
        branding={branding}
        mode={previewMode}
        onModeChange={onPreviewModeChange}
      />
      <p className="mt-4 text-center text-fig-12 font-urbanist-regular text-brand-muted">
        Customize your payments link in{' '}
        <button
          type="button"
          className="font-urbanist-semibold text-brand-blue cursor-pointer"
          onClick={onBrandingClick}
        >
          Branding
        </button>
      </p>
    </div>
  )
}
