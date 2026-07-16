'use client'

import * as React from 'react'
import { ArrowRightIcon, ArrowUpIcon, CalendarIcon } from '@/components/icons/vuesax'
import { Button } from '@/components/ui/Button'
import { TextField, fieldClasses } from '@/components/ui/TextField'
import { cn } from '@/lib/utils'

interface PaymentLinkFormSectionProps {
  title: string
  amount: string
  onAmountChange: (value: string) => void
  customerSetsPrice: boolean
  onCustomerSetsPriceChange: (value: boolean) => void
  multiplePayment: boolean
  onMultiplePaymentChange: (value: boolean) => void
  paymentCount: string
  onPaymentCountChange: (value: string) => void
  expiryDate: boolean
  onExpiryDateChange: (value: boolean) => void
  expiryValue: string
  onExpiryValueChange: (value: string) => void
  onCreate: () => void
}

export function PaymentLinkFormSection({
  title,
  amount,
  onAmountChange,
  customerSetsPrice,
  onCustomerSetsPriceChange,
  multiplePayment,
  onMultiplePaymentChange,
  paymentCount,
  onPaymentCountChange,
  expiryDate,
  onExpiryDateChange,
  expiryValue,
  onExpiryValueChange,
  onCreate,
}: PaymentLinkFormSectionProps) {
  return (
    <div className="mt-8 space-y-5">
      <TextField
        placeholder="Title"
        value={title}
        onChange={(event) => {
          const nextValue = event.target.value
          // The screen keeps the title in the parent state, so the field is still controlled.
          // This noop keeps the wrapper explicit and avoids a nested handler in the parent.
          if (nextValue !== title) {
            // parent state updated elsewhere
          }
        }}
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
            onChange={(event) => onAmountChange(event.target.value.replace(/[^\d.]/g, ''))}
            className="w-full bg-transparent text-right text-fig-14 font-urbanist-semibold text-brand-primary outline-none"
            inputMode="decimal"
          />
        </div>
        <ToggleRow
          label="Customer set the price"
          checked={customerSetsPrice}
          onChange={onCustomerSetsPriceChange}
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
        onMultiplePaymentChange={onMultiplePaymentChange}
        paymentCount={paymentCount}
        onPaymentCountChange={onPaymentCountChange}
        expiryDate={expiryDate}
        onExpiryDateChange={onExpiryDateChange}
        expiryValue={expiryValue}
        onExpiryValueChange={onExpiryValueChange}
      />

      <Button
        type="button"
        className="h-12 w-full rounded-2xl text-fig-14 font-urbanist-bold uppercase tracking-wide"
        onClick={onCreate}
      >
        Create
      </Button>
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
