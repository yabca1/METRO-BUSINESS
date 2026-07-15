'use client'

import * as React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { AmountCard } from './AmountCard'
import { ContinueButton, FlowTopControls, RecipientHero } from './FlowControls'
import { TransferOptionsCard } from './TransferOptionsCard'
import { TransferAccountDropdown } from './TransferAccountDialog'
import type { MetroRecipient, TransferFundingAccount } from './types'

interface DetailsStepProps {
  recipient: MetroRecipient
  accounts?: MetroRecipient[]
  amount: string
  fundingAccount: TransferFundingAccount
  initialReference: string
  onBack: () => void
  onContinue: (reference: string) => void
  onRecipientChange?: (recipient: MetroRecipient) => void
  onFundingAccountChange: (account: TransferFundingAccount) => void
}

const detailsSchema = Yup.object({
  reference: Yup.string().trim().required('Reference is required'),
})

export function DetailsStep({ recipient, accounts = [], fundingAccount, amount, initialReference, onBack, onContinue, onRecipientChange, onFundingAccountChange }: DetailsStepProps) {
  const [accountsOpen, setAccountsOpen] = React.useState(false)
  const formik = useFormik({
    initialValues: { reference: initialReference },
    validationSchema: detailsSchema,
    onSubmit: ({ reference }) => onContinue(reference),
  })

  return (
    <form onSubmit={formik.handleSubmit} className="mx-auto flex min-h-full w-[474px] max-w-[calc(100%_-_2.5rem)] flex-col py-7">
      <FlowTopControls onBack={onBack} saveDraft />
      <div className="relative z-30 mt-5">
        <RecipientHero recipient={recipient} expandable onExpand={() => setAccountsOpen((open) => !open)} />
        {accountsOpen && (
          <>
            <button type="button" aria-label="Close account options" onClick={() => setAccountsOpen(false)} className="fixed inset-0 z-10 cursor-default bg-transparent" />
            <TransferAccountDropdown accounts={accounts} selected={recipient} onClose={() => setAccountsOpen(false)} onSelect={(account) => { onRecipientChange?.(account); setAccountsOpen(false) }} />
          </>
        )}
      </div>
      <div className="mt-7"><AmountCard amount={amount} account={fundingAccount} onAccountChange={onFundingAccountChange} /></div>
      <div className="mt-[17px]"><TransferOptionsCard account={fundingAccount} onAccountChange={onFundingAccountChange} /></div>
      <label className="mt-5 flex h-[63px] flex-col justify-center rounded-xl bg-transfer-surface px-2.5">
        <span className="text-fig-10 text-brand-muted">Reference</span>
        <input
          name="reference"
          value={formik.values.reference}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="bg-transparent text-base font-medium text-brand-primary outline-none"
        />
      </label>
      {formik.touched.reference && formik.errors.reference && <p className="mt-1 text-fig-10 text-brand-danger">{formik.errors.reference}</p>}
      <div className="mt-auto pt-10"><ContinueButton /></div>
    </form>
  )
}
