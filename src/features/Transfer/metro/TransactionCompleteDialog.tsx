'use client'

import { Check } from 'lucide-react'
import { CloseIcon } from '@/components/icons/vuesax'
import { Dialog } from '@/components/ui/Dialog'

interface TransactionCompleteDialogProps {
  open: boolean
  amount: string
  currency: string
  recipientName: string
  onClose: () => void
  onDone: () => void
  onViewDetails: () => void
}

export function TransactionCompleteDialog({ open, amount, currency, recipientName, onClose, onDone, onViewDetails }: TransactionCompleteDialogProps) {
  return (
    <Dialog open={open} onOpenChange={(next) => !next && onClose()} hideCloseButton contentClassName="h-[550px] max-h-[calc(100vh-2rem)] max-w-[511px] overflow-y-auto border-[0.5px] border-brand-border p-3 shadow-none">
      <div className="px-3">
        <button type="button" onClick={onClose} aria-label="Close transaction confirmation" className="flex size-6 items-center justify-center rounded-full bg-brand-surface">
          <CloseIcon className="size-2" />
        </button>
      </div>
      <div className="flex flex-col gap-[30px] px-3 py-4">
        <div className="flex flex-col gap-3">
          <div className="flex h-40 items-start justify-center">
            <div className="relative flex size-[109px] items-center justify-center rounded-full bg-[#F0F1F3]">
              <div className="flex size-[95px] items-center justify-center rounded-full bg-brand-primary shadow-[0_8px_18px_rgba(24,24,27,0.22)]">
                <Check className="size-9 text-brand-white" strokeWidth={2.4} />
              </div>
            </div>
          </div>
          <div className="h-[162px] text-center text-brand-dark">
            <h2 className="text-[26px] font-semibold leading-[1.4]">You sent {Number(amount).toLocaleString()} {currency} to<br />{recipientName}</h2>
            <p className="mt-4 text-sm opacity-80">Transaction ID: <strong>ABCD4532</strong></p>
          </div>
        </div>
        <div className="flex flex-col gap-2.5">
          <button type="button" onClick={onDone} className="h-12 w-full rounded-2xl border border-brand-dark bg-brand-primary text-base font-semibold text-brand-white">Done</button>
          <button type="button" onClick={onViewDetails} className="h-12 w-full rounded-2xl border border-brand-dark bg-brand-white text-base font-semibold text-brand-dark">Transaction detail</button>
        </div>
      </div>
    </Dialog>
  )
}
