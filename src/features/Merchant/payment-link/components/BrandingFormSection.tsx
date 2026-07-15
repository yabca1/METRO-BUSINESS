'use client'

import * as React from 'react'
import { MoreHorizontal, Pencil } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'
import type { BrandingDetails } from '../types'
import { BrandingThemeSwatches } from './BrandingThemeSwatches'

interface BrandingFormSectionProps {
  branding: BrandingDetails
  onBrandingChange: (value: BrandingDetails) => void
  onVisibilityChange: (key: keyof BrandingDetails, value: boolean) => void
  onPublish: () => void
}

export function BrandingFormSection({
  branding,
  onBrandingChange,
  onVisibilityChange,
  onPublish,
}: BrandingFormSectionProps) {
  return (
    <div className="mt-8 space-y-8">
      <section className="rounded-2xl border border-brand-border bg-brand-surface/40 p-4">
        <div className="grid grid-cols-2 gap-4">
          <AssetSlot label="Logo">
            <span className="flex size-14 items-center justify-center rounded-full bg-brand-primary font-orbitron-bold text-xl text-brand-white">
              M
            </span>
          </AssetSlot>
          <AssetSlot label="Cover Image" />
        </div>
        <p className="mt-3 text-fig-10 text-brand-muted">
          When uploading your logo and cover image our terms and conditions apply.
        </p>
      </section>

      <section>
        <div className="mb-3 flex items-center justify-between">
          <p className="text-fig-14 font-urbanist-semibold text-brand-primary">Color</p>
          <span className="text-fig-12 text-brand-muted">Default</span>
        </div>
        <BrandingThemeSwatches
          theme={branding.theme}
          onThemeChange={(theme) => onBrandingChange({ ...branding, theme })}
        />
      </section>

      <section>
        <div className="mb-3 flex items-center justify-between">
          <p className="text-fig-14 font-urbanist-semibold text-brand-primary">Business details</p>
          <button type="button" className="text-fig-12 font-urbanist-semibold text-brand-blue cursor-pointer">
            Edit
          </button>
        </div>
        <div className="space-y-1 rounded-2xl border border-brand-border bg-brand-surface/40 px-4 py-2">
          <DetailToggle
            label="Full address"
            value={branding.address}
            checked={branding.showAddress}
            onChange={(value) => onVisibilityChange('showAddress', value)}
          />
          <DetailToggle
            label="Website"
            value={branding.website}
            checked={branding.showWebsite}
            onChange={(value) => onVisibilityChange('showWebsite', value)}
          />
          <DetailToggle
            label="Phone number"
            value={branding.phone}
            checked={branding.showPhone}
            onChange={(value) => onVisibilityChange('showPhone', value)}
          />
          <DetailToggle
            label="Email"
            value={branding.email}
            checked={branding.showEmail}
            onChange={(value) => onVisibilityChange('showEmail', value)}
          />
        </div>
      </section>

      <Button
        type="button"
        className="h-12 w-full rounded-2xl text-fig-14 font-urbanist-bold uppercase tracking-wide"
        onClick={onPublish}
      >
        Publish
      </Button>
    </div>
  )
}

function AssetSlot({ label, children }: { label: string; children?: React.ReactNode }) {
  return (
    <div className="relative flex min-h-28 flex-col items-center justify-center rounded-2xl border border-dashed border-brand-field-border bg-brand-white">
      {children ?? <span className="text-fig-12 text-brand-muted">{label}</span>}
      <span className="absolute right-2 top-2 flex size-7 items-center justify-center rounded-full bg-brand-secondary text-brand-primary">
        <Pencil className="size-3.5" />
      </span>
      <p className="mt-2 text-fig-10 font-urbanist-medium text-brand-muted">{label}</p>
    </div>
  )
}

function DetailToggle({
  label,
  value,
  checked,
  onChange,
}: {
  label: string
  value: string
  checked: boolean
  onChange: (value: boolean) => void
}) {
  return (
    <div className="flex items-start justify-between gap-3 py-3">
      <div className="min-w-0">
        <p className="text-fig-14 font-urbanist-semibold text-brand-primary">{label}</p>
        <p className="mt-0.5 text-fig-12 text-brand-muted">{value}</p>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={cn(
          'relative mt-1 h-7 w-12 shrink-0 rounded-full transition cursor-pointer',
          checked ? 'bg-brand-primary' : 'bg-brand-secondary',
        )}
      >
        <span
          className={cn(
            'absolute top-0.5 size-6 rounded-full bg-brand-white transition',
            checked ? 'left-5.5' : 'left-0.5',
          )}
        />
      </button>
    </div>
  )
}

