'use client'

import * as React from 'react'
import { BackChip } from '@/features/auth/components/BackChip'
import { MoreIcon } from '@/components/icons/vuesax'

interface PaymentLinkFormHeaderProps {
  onBack: () => void
}

export function PaymentLinkFormHeader({ onBack }: PaymentLinkFormHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <BackChip onClick={onBack} />
      <button
        type="button"
        aria-label="More options"
        className="flex size-6 items-center justify-center rounded-full bg-brand-secondary text-brand-primary cursor-pointer"
      >
        <MoreIcon className="size-3" />
      </button>
    </div>
  )
}
