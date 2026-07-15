'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'
import { ROUTES } from '@/constants/routes'
import { DEFAULT_RECIPIENT, TRANSFER_FUNDING_ACCOUNTS } from './data'
import { AmountStep } from './AmountStep'
import { ConfirmTransferDialog } from './ConfirmTransferDialog'
import { DetailsStep } from './DetailsStep'
import { RecipientStep } from './RecipientStep'
import { ReviewTransferDialog } from './ReviewTransferDialog'
import { TransactionCompleteDialog } from './TransactionCompleteDialog'
import type { MetroRecipient, MetroTransferStep } from './types'

interface MetroTransferFlowProps {
  initialRecipient?: MetroRecipient
  initialAccounts?: MetroRecipient[]
  initialStep?: MetroTransferStep
}

export function MetroTransferFlow({ initialRecipient = DEFAULT_RECIPIENT, initialAccounts = [], initialStep = 'recipient' }: MetroTransferFlowProps) {
  const router = useRouter()
  const [step, setStep] = React.useState<MetroTransferStep>(initialStep)
  const [recipient, setRecipient] = React.useState<MetroRecipient>(initialRecipient)
  const [amount, setAmount] = React.useState('')
  const [fundingAccount, setFundingAccount] = React.useState(TRANSFER_FUNDING_ACCOUNTS[0])
  const [reference, setReference] = React.useState('Metro Payment')
  const [reviewOpen, setReviewOpen] = React.useState(false)
  const [confirmOpen, setConfirmOpen] = React.useState(false)
  const [completeOpen, setCompleteOpen] = React.useState(false)

  function selectRecipient(nextRecipient: MetroRecipient) {
    setRecipient(nextRecipient)
    setStep('amount')
  }

  function submitAmount(nextAmount: string) {
    setAmount(nextAmount)
    setStep('details')
  }

  function openReview(nextReference: string) {
    setReference(nextReference)
    setReviewOpen(true)
  }

  function openConfirmation() {
    setReviewOpen(false)
    setConfirmOpen(true)
  }

  function returnToReview() {
    setConfirmOpen(false)
    setReviewOpen(true)
  }


  function completeTransfer() {
    setConfirmOpen(false)
    setCompleteOpen(true)
  }

  function backFromAmount() {
    if (initialStep === 'amount') router.back()
    else setStep('recipient')
  }
  return (
    <div className="h-full min-h-full rounded-t-3xl bg-brand-white">
      <div key={step} className="auth-step-in h-full min-h-full">
        {step === 'recipient' && <RecipientStep onContinue={selectRecipient} />}
        {step === 'amount' && (
          <AmountStep recipient={recipient} fundingAccount={fundingAccount} initialAmount={amount} onFundingAccountChange={setFundingAccount} onBack={backFromAmount} onContinue={submitAmount} />
        )}
        {step === 'details' && (
          <DetailsStep recipient={recipient} accounts={initialAccounts.length ? initialAccounts : [recipient]} fundingAccount={fundingAccount} amount={amount} initialReference={reference} onRecipientChange={setRecipient} onFundingAccountChange={setFundingAccount} onBack={() => setStep('amount')} onContinue={openReview} />
        )}
      </div>
      <ReviewTransferDialog
        open={reviewOpen}
        draft={{ recipient, amount, reference, fundingAccount }}
        destinationLabel={recipient.channel === 'bank' ? 'Bank Account' : 'Metro Wallet Account'}
        onClose={() => setReviewOpen(false)}
        onConfirm={openConfirmation}
      />
      <ConfirmTransferDialog open={confirmOpen} onBack={returnToReview} onComplete={completeTransfer} />
      <TransactionCompleteDialog open={completeOpen} amount={amount} currency={fundingAccount.currency} recipientName={recipient.name} onClose={() => setCompleteOpen(false)} onDone={() => router.push(ROUTES.TRANSFER)} onViewDetails={() => router.push(ROUTES.TRANSFER)} />

    </div>
  )
}
