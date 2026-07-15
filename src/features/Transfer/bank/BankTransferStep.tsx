'use client'

import * as React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { SearchIcon } from '@/components/icons/vuesax'
import { TextField } from '@/components/ui/TextField'
import { BankSelectorDialog } from './BankSelectorDialog'
import { BankRecipientRow } from './BankRecipientRow'
import { RECENT_BANK_RECIPIENTS } from './data'
import { ContinueButton, FlowTopControls } from '../metro/FlowControls'
import { ChevronRightIcon } from '../metro/TransferFlowIcons'
import type { MetroRecipient } from '../metro/types'

const bankTransferSchema = Yup.object({
  bank: Yup.string().required('Select a bank'),
  accountNumber: Yup.string().trim().matches(/^\d{8,18}$/, 'Enter a valid account number').required('Account number is required'),
})

export function BankTransferStep({ onContinue }: { onContinue: (recipient: MetroRecipient) => void }) {
  const [selectorOpen, setSelectorOpen] = React.useState(false)
  const [tab, setTab] = React.useState<'recent' | 'saved'>('recent')
  const [searching, setSearching] = React.useState(false)
  const formik = useFormik({
    initialValues: { bank: '', accountNumber: '' },
    validationSchema: bankTransferSchema,
    onSubmit: ({ bank, accountNumber }) => onContinue({
      id: `${bank}-${accountNumber}`,
      name: 'Abebe Kebede',
      wallet: bank,
      handle: accountNumber,
      initials: 'AK',
      channel: 'bank',
    }),
  })

  return (
    <div className="mx-auto flex h-full min-h-full w-full max-w-[987px] flex-col justify-center px-5 py-8">
      <div className="mb-7 max-w-4xl"><FlowTopControls /></div>
      <div className="grid w-full rounded-2xl border-[0.5px] border-brand-border bg-transfer-surface/40 p-3 lg:h-[385px] lg:grid-cols-[514px_372px] lg:gap-[37px]">
        <form onSubmit={formik.handleSubmit} className="flex min-h-[354px] flex-col rounded-2xl border-[0.5px] border-brand-border bg-transfer-surface/40 p-5">
          <h2 className="text-2xl font-semibold leading-tight text-brand-primary">Bank Transfer</h2>
          <p className="mt-2 text-xs leading-snug text-brand-gray">Select bank and enter the account number to transfer</p>
          <button type="button" onClick={() => setSelectorOpen(true)} className="mt-7 flex h-13.5 items-center rounded-2xl border border-brand-field-border bg-brand-white px-4 text-sm">
            <span className={formik.values.bank ? 'text-brand-primary' : 'text-brand-muted'}>{formik.values.bank || 'Select bank'}</span>
            <ChevronRightIcon className="ml-auto size-5" />
          </button>
          {formik.submitCount > 0 && formik.errors.bank && <p className="mt-1 text-fig-10 text-brand-danger">{formik.errors.bank}</p>}
          <TextField
            name="accountNumber"
            inputMode="numeric"
            value={formik.values.accountNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter account number"
            className="mt-4"
          />
          {formik.touched.accountNumber && formik.errors.accountNumber && <p className="mt-1 text-fig-10 text-brand-danger">{formik.errors.accountNumber}</p>}
          <div className="mt-auto pt-6"><ContinueButton /></div>
        </form>

        <aside className="mt-3 rounded-2xl border-[0.5px] border-brand-border bg-transfer-surface/50 p-3 lg:mt-0">
          <div className="flex h-8 items-center gap-2">
            <button type="button" onClick={() => setTab('recent')} className={`rounded-full px-1.5 py-1 text-fig-10 ${tab === 'recent' ? 'bg-brand-dark text-brand-white' : 'bg-brand-white'}`}>Recent</button>
            <button type="button" onClick={() => setTab('saved')} className={`rounded-full px-1.5 py-1 text-fig-10 ${tab === 'saved' ? 'bg-brand-dark text-brand-white' : 'bg-brand-white'}`}>Saved recipient</button>
            <button type="button" onClick={() => setSearching((value) => !value)} aria-label="Search bank recipients" className="ml-auto flex size-7 items-center justify-center rounded-full bg-brand-white">
              <SearchIcon className="size-3" />
            </button>
          </div>
          {searching && <input autoFocus placeholder="Search recipients" className="mt-2 h-8 w-full rounded-full border border-brand-border bg-brand-white px-3 text-xs outline-none" />}
          <div className="mt-2 space-y-1">
            {RECENT_BANK_RECIPIENTS.map((recipient) => <BankRecipientRow key={recipient.id} recipient={recipient} onSelect={onContinue} />)}
          </div>
        </aside>
      </div>
      <BankSelectorDialog
        open={selectorOpen}
        selected={formik.values.bank}
        onClose={() => setSelectorOpen(false)}
        onSelect={(bank) => {
          formik.setFieldValue('bank', bank)
          setSelectorOpen(false)
        }}
      />
    </div>
  )
}
