'use client'

// Merchant — Payment Link preview (desktop/mobile modes)
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import type { BrandingDetails } from '../types'

interface PaymentLinkPreviewProps {
  title?: string
  amountLabel: string
  merchantName: string
  branding: BrandingDetails
  mode: 'desktop' | 'mobile'
  onModeChange: (mode: 'desktop' | 'mobile') => void
  showCover?: boolean
}

export function PaymentLinkPreview({
  amountLabel,
  merchantName,
  branding,
  mode,
  onModeChange,
  showCover = false,
}: PaymentLinkPreviewProps) {
  return (
    <div className="flex h-full flex-col">
      <div className="mb-4 flex justify-end">
        <div className="inline-flex rounded-full bg-brand-surface p-1">
          {(['desktop', 'mobile'] as const).map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => onModeChange(value)}
              className={cn(
                'rounded-full px-4 py-1.5 text-fig-12 font-poppins-semibold capitalize transition cursor-pointer',
                mode === value
                  ? 'bg-brand-primary text-brand-white'
                  : 'text-brand-primary hover:bg-brand-secondary',
              )}
            >
              {value}
            </button>
          ))}
        </div>
      </div>

      <div
        className={cn(
          'mx-auto flex w-full flex-1 flex-col rounded-[28px] bg-brand-surface px-5 py-8',
          mode === 'mobile' ? 'max-w-sm' : 'max-w-xl',
        )}
      >
        <div className="rounded-[32px] bg-brand-white px-6 py-8 shadow-sm ring-1 ring-brand-border">
          <p className="text-fig-12 font-poppins-semibold uppercase tracking-[0.26em] text-brand-primary/60">
            Payment request
          </p>
          <p className="mt-4 text-[24px] leading-[120%] font-protest-strike text-brand-primary tracking-[0em]">
            Pay {amountLabel}
          </p>
          <p className="mt-3 text-fig-14 font-poppins-medium text-brand-muted">
            Send this link to collect payment from your customer.
          </p>

          <div className="mt-6 rounded-[28px] bg-brand-surface px-4 py-4">
            <div className="flex items-center justify-between gap-3">
              <span className="text-fig-12 font-poppins-semibold text-brand-primary">Merchant</span>
              <span className="rounded-full bg-brand-white px-3 py-1 text-fig-12 font-poppins-semibold text-brand-primary">
                {merchantName}
              </span>
            </div>
            <div className="mt-3 flex items-center justify-between gap-3">
              <span className="text-fig-12 font-poppins-regular text-brand-muted">Payment type</span>
              <span className="text-fig-12 font-poppins-semibold text-brand-primary">Multi payment</span>
            </div>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <p className="text-fig-14 font-poppins-semibold text-brand-primary">Choose a payment method</p>
          <MethodRow label="Metro Pay" action={<PrimaryPay>Metro Pay</PrimaryPay>} />
          <MethodRow label="Credit or debit card" action={<SoftPay>Pay with card</SoftPay>} />
          <MethodRow label="Apple Pay" action={<PrimaryPay> Pay</PrimaryPay>} />
          <MethodRow label="Pay by bank" action={<SoftPay>Select bank</SoftPay>} />
        </div>

        <div className="mt-auto space-y-1 pt-10 text-center text-fig-10 text-brand-muted">
          {(branding.showEmail || !showCover) && <p>{branding.email}</p>}
          <p>
            {(branding.showPhone || !showCover) && branding.phone}
            {(branding.showAddress || !showCover) && (
              <>
                {' · '}
                {branding.address}
              </>
            )}
          </p>
          {(branding.showWebsite || !showCover) && <p>{branding.website}</p>}
          <p className="pt-4 text-brand-primary">
            Powered by <span className="font-poppins-semibold">Metro</span> Business
          </p>
          <p>Copyright © 2026 Metro Financial Technologies S.C.</p>
          <p>
            View our <span className="font-poppins-semibold text-brand-blue">Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  )
}

function MethodRow({ label, action }: { label: string; action: ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-fig-12 font-urbanist-medium text-brand-primary">{label}</span>
      {action}
    </div>
  )
}

function PrimaryPay({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex min-w-28 items-center justify-center rounded-lg bg-brand-primary px-4 py-2 text-[12px] leading-[135%] font-urbanist-semibold text-brand-white tracking-[0em]">
      {children}
    </span>
  )
}

function SoftPay({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex min-w-28 items-center justify-center rounded-lg bg-[#D7F6F4] px-4 py-2 text-[12px] leading-[135%] font-urbanist-semibold text-[#0F766E] tracking-[0em]">
      {children}
    </span>
  )
}
// TODO: Review merchant page logic
