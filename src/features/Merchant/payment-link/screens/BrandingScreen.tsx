'use client'

// Merchant — Branding screen (brand assets customization)
import * as React from 'react'
import { useRouter } from 'next/navigation'
import { MoreHorizontal } from 'lucide-react'
import { BackChip } from '@/features/auth/components/BackChip'
import { ROUTES } from '@/constants/routes'
import { DEFAULT_BRANDING } from '../data'
import type { BrandingDetails } from '../types'
import { PaymentLinkPreview } from '../components/PaymentLinkPreview'
import { BrandingFormSection } from '../components/BrandingFormSection'

export function BrandingScreen() {
  const router = useRouter()
  const [branding, setBranding] = React.useState<BrandingDetails>(DEFAULT_BRANDING)
  const [previewMode, setPreviewMode] = React.useState<'desktop' | 'mobile'>('desktop')

  const setVisibility = (key: keyof BrandingDetails, value: boolean) => {
    setBranding((current) => ({ ...current, [key]: value }))
  }

  return (
    <div className="mx-auto w-full rounded-t-3xl bg-brand-white px-6 py-7">
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">
        <div className="max-w-xl">
          <div className="flex items-center justify-between">
            <BackChip onClick={() => router.push(ROUTES.MERCHANT_PAYMENT_LINK_SETTINGS)} />
            <button
              type="button"
              aria-label="More options"
              className="flex size-8 items-center justify-center rounded-full text-brand-muted cursor-pointer"
            >
              <MoreHorizontal className="size-5" />
            </button>
          </div>

          <h1 className="mt-6 text-fig-28 font-urbanist-semibold text-brand-primary">Branding</h1>
          <p className="mt-1 text-fig-12 text-brand-muted">
            Manage your brand asset including logos, color, bio and more.
          </p>

          <BrandingFormSection
            branding={branding}
            onBrandingChange={setBranding}
            onVisibilityChange={setVisibility}
            onPublish={() => router.push(ROUTES.MERCHANT_PAYMENT_LINK)}
          />
        </div>

        <PaymentLinkPreview
          amountLabel="0 ETB"
          merchantName={branding.merchantName}
          branding={branding}
          mode={previewMode}
          onModeChange={setPreviewMode}
          showCover
        />
      </div>
    </div>
  )
}

// TODO: Review merchant page logic
