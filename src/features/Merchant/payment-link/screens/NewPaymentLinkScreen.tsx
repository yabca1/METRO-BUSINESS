'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'
import {
  ArrowRightIcon,
  ArrowUpIcon,
  CalendarIcon,
  MoreIcon,
} from '@/components/icons/vuesax'
import { BackChip } from '@/features/auth/components/BackChip'
import { Button } from '@/components/ui/Button'
import { TextField, fieldClasses } from '@/components/ui/TextField'
import { ROUTES } from '@/constants/routes'
import { cn } from '@/lib/utils'
import { DEFAULT_BRANDING } from '../data'
import { PaymentLinkPreview } from '../components/PaymentLinkPreview'

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
            <TextField
              placeholder="Title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              className="font-urbanist-regular"
            />

            <div>
              <p className="mb-2.5 text-fig-14 font-urbanist-semibold leading-[1.4] text-brand-primary">
                Amount
              </p>
              <div className={cn(fieldClasses, 'flex items-center gap-3')}>
                <button
                  type="button"
                  className="flex items-center gap-1 text-fig-14 font-urbanist-semibold text-brand-primary cursor-pointer"
                >
                  ETB
                  <ArrowRightIcon className="size-4 text-brand-muted" />
                </button>
                <input
                  value={amount}
                  onChange={(event) => setAmount(event.target.value.replace(/[^\d.]/g, ''))}
                  className="w-full bg-transparent text-right text-fig-14 font-urbanist-semibold text-brand-primary outline-none"
                  inputMode="decimal"
                />
              </div>
              <ToggleRow
                label="Customer set the price"
                checked={customerSetsPrice}
                onChange={setCustomerSetsPrice}
              />
            </div>

            <div>
              <p className="mb-2.5 text-fig-14 font-urbanist-semibold leading-[1.4] text-brand-primary">
                To account
              </p>
              <button
                type="button"
                className={cn(
                  fieldClasses,
                  'flex items-center justify-between text-left text-fig-14 font-urbanist-regular text-brand-muted cursor-pointer',
                )}
              >
                Select your account
                <ArrowRightIcon className="size-4" />
              </button>
            </div>

            <AdvancedOptions
              multiplePayment={multiplePayment}
              onMultiplePaymentChange={setMultiplePayment}
              paymentCount={paymentCount}
              onPaymentCountChange={setPaymentCount}
              expiryDate={expiryDate}
              onExpiryDateChange={setExpiryDate}
              expiryValue={expiryValue}
              onExpiryValueChange={setExpiryValue}
            />

            <Button
              type="button"
              className="h-12 w-full rounded-2xl text-fig-14 font-urbanist-bold uppercase tracking-wide"
              onClick={() => router.push(ROUTES.MERCHANT_PAYMENT_LINK)}
            >
              Create
            </Button>
          </div>
        </div>

        <div>
          <PaymentLinkPreview
            amountLabel={amountLabel}
            merchantName={DEFAULT_BRANDING.merchantName}
            branding={DEFAULT_BRANDING}
            mode={previewMode}
            onModeChange={setPreviewMode}
          />
          <p className="mt-4 text-center text-fig-12 font-urbanist-regular text-brand-muted">
            Customize your payments link in{' '}
            <button
              type="button"
              className="font-urbanist-semibold text-brand-blue cursor-pointer"
              onClick={() => router.push(ROUTES.MERCHANT_PAYMENT_LINK_BRANDING)}
            >
              Branding
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}

function AdvancedOptions({
  multiplePayment,
  onMultiplePaymentChange,
  paymentCount,
  onPaymentCountChange,
  expiryDate,
  onExpiryDateChange,
  expiryValue,
  onExpiryValueChange,
}: {
  multiplePayment: boolean
  onMultiplePaymentChange: (value: boolean) => void
  paymentCount: string
  onPaymentCountChange: (value: string) => void
  expiryDate: boolean
  onExpiryDateChange: (value: boolean) => void
  expiryValue: string
  onExpiryValueChange: (value: string) => void
}) {
  return (
    <div>
      <p className="mb-2.5 text-fig-14 font-urbanist-semibold leading-[1.4] text-brand-primary">
        Advanced options
      </p>
      <div className="rounded-2xl border-[0.5px] border-brand-border bg-brand-surface/40 px-3 pb-5">
        <ToggleRow
          label="Accept multiple payment"
          checked={multiplePayment}
          onChange={onMultiplePaymentChange}
          labelClassName="font-urbanist-semibold"
        />

        {multiplePayment && (
          <div className={cn(fieldClasses, 'relative mb-2.5 flex items-center')}>
            <input
              value={paymentCount}
              onChange={(event) => onPaymentCountChange(event.target.value.replace(/\D/g, ''))}
              placeholder="Number of payments"
              inputMode="numeric"
              className="w-full bg-transparent pr-8 text-fig-14 font-urbanist-regular text-brand-dark outline-none placeholder:text-brand-muted"
            />
            <span className="pointer-events-none absolute right-4 flex flex-col items-center text-brand-muted">
              <ArrowUpIcon className="size-2.5" />
              <ArrowUpIcon className="size-2.5 rotate-180" />
            </span>
          </div>
        )}

        <ToggleRow
          label="Expiry date"
          checked={expiryDate}
          onChange={onExpiryDateChange}
          labelClassName="font-urbanist-semibold"
        />

        {expiryDate && (
          <label className={cn(fieldClasses, 'relative flex cursor-pointer items-center justify-between gap-3')}>
            <span className={cn('text-fig-14 font-urbanist-regular', expiryValue ? 'text-brand-dark' : 'text-brand-muted')}>
              {expiryValue || 'Set expiry date'}
            </span>
            <input
              type="date"
              value={expiryValue}
              onChange={(event) => onExpiryValueChange(event.target.value)}
              className="absolute inset-0 cursor-pointer opacity-0"
            />
            <CalendarIcon className="pointer-events-none size-5 shrink-0 text-brand-primary" />
          </label>
        )}
      </div>
    </div>
  )
}

function ToggleRow({
  label,
  checked,
  onChange,
  labelClassName,
}: {
  label: string
  checked: boolean
  onChange: (value: boolean) => void
  labelClassName?: string
}) {
  return (
    <div className="flex items-center justify-between gap-3 py-3.5">
      <span className={cn('text-fig-14 leading-[1.4] text-brand-primary', labelClassName ?? 'font-urbanist-medium')}>
        {label}
      </span>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={cn(
          'relative h-[31px] w-[51px] shrink-0 overflow-hidden rounded-full transition cursor-pointer',
          checked ? 'bg-brand-dark' : 'bg-brand-secondary',
        )}
      >
        <span
          className={cn(
            'absolute top-1/2 size-[27px] -translate-y-1/2 rounded-full bg-brand-white shadow-[0_3px_8px_rgba(0,0,0,0.15)] transition-[left]',
            checked ? 'left-[22px]' : 'left-0.5',
          )}
        />
      </button>
    </div>
  )
}
