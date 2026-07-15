'use client'

import * as React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { SearchIcon } from '@/components/icons/vuesax'
import { TextField } from '@/components/ui/TextField'
import { DEFAULT_RECIPIENT, RECENT_RECIPIENTS } from './data'
import { ContinueButton, FlowTopControls } from './FlowControls'
import { RecipientRow } from './RecipientRow'
import type { MetroRecipient } from './types'

interface RecipientStepProps {
  onContinue: (recipient: MetroRecipient) => void
}

const recipientSchema = Yup.object({
  identifier: Yup.string().trim().required('Enter a Metrotag, phone number or short code'),
})

export function RecipientStep({ onContinue }: RecipientStepProps) {
  const [tab, setTab] = React.useState<'recent' | 'saved'>('recent')
  const [searching, setSearching] = React.useState(false)
  const formik = useFormik({
    initialValues: { identifier: '' },
    validationSchema: recipientSchema,
    onSubmit: () => onContinue(DEFAULT_RECIPIENT),
  })

  return (
    <div className="mx-auto flex h-full min-h-full w-full max-w-[987px] flex-col justify-center px-5 py-8">
      <div className="mb-7 max-w-4xl"><FlowTopControls /></div>
      <div className="grid w-full rounded-2xl border-[0.5px] border-brand-border bg-transfer-surface/40 p-3 lg:h-[385px] lg:grid-cols-[514px_372px] lg:gap-[37px]">
        <form onSubmit={formik.handleSubmit} className="flex min-h-[354px] flex-col rounded-2xl border-[0.5px] border-brand-border bg-transfer-surface/40 p-5">
          <h2 className="text-2xl font-semibold leading-tight text-brand-primary">Metro Transfer (Customer or Business)</h2>
          <p className="mt-2 max-w-sm text-xs leading-snug text-brand-gray">
            Enter the @Metrotag, phone or short code of Metro Business or customer account to transfer
          </p>
          <TextField
            name="identifier"
            value={formik.values.identifier}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter @Metrotag, phone or short code"
            className="mt-7"
          />
          {formik.touched.identifier && formik.errors.identifier && (
            <p className="mt-1 text-fig-10 text-brand-danger">{formik.errors.identifier}</p>
          )}
          <div className="mt-auto pt-8"><ContinueButton /></div>
        </form>

        <aside className="mt-3 rounded-2xl border-[0.5px] border-brand-border bg-transfer-surface/50 p-3 lg:mt-0">
          <div className="flex h-8 items-center gap-2">
            <button type="button" onClick={() => setTab('recent')} className={`rounded-full px-1.5 py-1 text-fig-10 ${tab === 'recent' ? 'bg-brand-dark text-brand-white' : 'bg-transfer-surface text-brand-primary'}`}>Recent</button>
            <button type="button" onClick={() => setTab('saved')} className={`rounded-full px-1.5 py-1 text-fig-10 ${tab === 'saved' ? 'bg-brand-dark text-brand-white' : 'bg-transfer-surface text-brand-primary'}`}>Saved recipient</button>
            <button type="button" onClick={() => setSearching((value) => !value)} aria-label="Search recipients" className="ml-auto flex size-7 items-center justify-center rounded-full bg-brand-surface">
              <SearchIcon className="size-3" />
            </button>
          </div>
          {searching && <input autoFocus placeholder="Search recipients" className="mt-2 h-8 w-full rounded-full border border-brand-border bg-brand-white px-3 text-xs outline-none" />}
          <div className="mt-2 space-y-1">
            {RECENT_RECIPIENTS.map((recipient) => <RecipientRow key={recipient.id} recipient={recipient} onSelect={onContinue} />)}
          </div>
        </aside>
      </div>
    </div>
  )
}
