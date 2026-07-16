'use client'

// Merchant — New Payment Link creation screen
import * as React from 'react'
import { useRouter } from 'next/navigation'
import { MoreIcon } from '@/components/icons/vuesax'
import { BackChip } from '@/features/auth/components/BackChip'
import { ROUTES } from '@/constants/routes'
import { DEFAULT_BRANDING } from '../data'
import { PaymentLinkPreviewPanel } from '../components/PaymentLinkPreviewPanel'
import { PaymentLinkFormSection } from '../components/PaymentLinkFormSection'

export function NewPaymentLinkScreen() {
  const router = useRouter()
  const [title, setTitle] = React.useState('')
  const [amount, setAmount] = React.useState('0')
  const [customerSetsPrice, setCustomerSetsPrice] = React.useState(false)
  const [multiplePayment, setMultiplePayment] = React.useState(true)
  const [paymentCount, setPaymentCount] = React.useState('')
  const [expiryDate, setExpiryDate] = React.useState(true)
  const [expiryValue, setExpiryValue] = React.useState('')
  const [previewMode, setPreviewMode] = React.useState<'desktop' | 'mobile'>('desktop')

  const amountLabel = `${Number(amount || 0).toLocaleString()} ETB`

  return (
    <div className="mx-auto w-full rounded-t-3xl bg-brand-white px-6 py-7">
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">
        <div className="max-w-xl">
          <div className="flex items-center justify-between">
            <BackChip onClick={() => router.push(ROUTES.MERCHANT_PAYMENT_LINK)} />
            <button
              type="button"
              aria-label="More options"
              className="flex size-6 items-center justify-center rounded-full bg-brand-secondary text-brand-primary cursor-pointer"
            >
              <MoreIcon className="size-3" />
            </button>
          </div>

          <h1 className="mt-6 text-fig-28 font-urbanist-semibold leading-[1.2] text-brand-primary">
            New payment link
          </h1>
          <p className="mt-1.5 text-fig-12 font-urbanist-regular text-brand-muted">
            Collect payment through multiple options
          </p>

          <div className="mt-8 space-y-5">
            <PaymentLinkFormSection
              title={title}
              amount={amount}
              onAmountChange={setAmount}
              customerSetsPrice={customerSetsPrice}
              onCustomerSetsPriceChange={setCustomerSetsPrice}
              multiplePayment={multiplePayment}
              onMultiplePaymentChange={setMultiplePayment}
              paymentCount={paymentCount}
              onPaymentCountChange={setPaymentCount}
              expiryDate={expiryDate}
              onExpiryDateChange={setExpiryDate}
              expiryValue={expiryValue}
              onExpiryValueChange={setExpiryValue}
              onCreate={() => router.push(ROUTES.MERCHANT_PAYMENT_LINK)}
            />
          </div>
        </div>

        <PaymentLinkPreviewPanel
          amountLabel={amountLabel}
          merchantName={DEFAULT_BRANDING.merchantName}
          branding={DEFAULT_BRANDING}
          previewMode={previewMode}
          onPreviewModeChange={setPreviewMode}
          onBrandingClick={() => router.push(ROUTES.MERCHANT_PAYMENT_LINK_BRANDING)}
        />
      </div>
    </div>
  )
}

// TODO: Review merchant page logic
