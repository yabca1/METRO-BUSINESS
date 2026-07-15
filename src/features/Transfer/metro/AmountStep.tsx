'use client'

import { useFormik } from 'formik'
import * as Yup from 'yup'
import { AmountCard } from './AmountCard'
import { ContinueButton, FlowTopControls, RecipientHero } from './FlowControls'
import { InfoCircleIcon } from './TransferFlowIcons'
import type { MetroRecipient, TransferFundingAccount } from './types'

interface AmountStepProps {
  recipient: MetroRecipient
  initialAmount: string
  fundingAccount: TransferFundingAccount
  onBack: () => void
  onContinue: (amount: string) => void
  onFundingAccountChange: (account: TransferFundingAccount) => void
}

const amountSchema = Yup.object({
  amount: Yup.number().typeError('Enter an amount').positive('Amount must be greater than zero').required('Enter an amount'),
})

export function AmountStep({ recipient, fundingAccount, initialAmount, onBack, onContinue, onFundingAccountChange }: AmountStepProps) {
  const formik = useFormik({
    initialValues: { amount: initialAmount },
    validationSchema: amountSchema,
    onSubmit: ({ amount }) => onContinue(amount),
  })
  const hasAmount = Number(formik.values.amount) > 0

  return (
    <form onSubmit={formik.handleSubmit} className="mx-auto flex min-h-full w-[474px] max-w-[calc(100%_-_2.5rem)] flex-col py-7">
      <FlowTopControls onBack={onBack} saveDraft />
      <div className="mt-5"><RecipientHero recipient={recipient} /></div>
      <div className="mt-7">
        <AmountCard amount={formik.values.amount} account={fundingAccount} onAccountChange={onFundingAccountChange} onAmountChange={(amount) => formik.setFieldValue('amount', amount)} />
        {formik.submitCount > 0 && formik.errors.amount && <p className="mt-1 text-fig-10 text-brand-danger">{formik.errors.amount}</p>}
      </div>
      <div className="mt-auto pt-12">
        {!hasAmount && (
          <div className="flex h-9 items-center justify-center gap-1 rounded-t-2xl bg-brand-secondary/50 text-fig-10 text-brand-primary">
            <InfoCircleIcon className="size-3" /> Enter <strong>amount</strong> to continue
          </div>
        )}
        <ContinueButton disabled={!hasAmount} />
      </div>
    </form>
  )
}
