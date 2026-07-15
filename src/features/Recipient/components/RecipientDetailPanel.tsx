'use client'

import type * as React from "react"
import { cn } from "@/lib/utils"
import { DetailAvatar } from "@/components/ui/DetailPanel"
import { CalendarIcon, CloseIcon, MessageEditIcon, MoreIcon } from "@/components/icons/vuesax"
import type { Recipient } from "../types"
import { PaymentDetailsCard } from "./PaymentDetailsCard"
import { PaymentHistoryCard } from "./PaymentHistoryCard"

import { RecipientSendAction } from "./RecipientSendAction"
interface RecipientDetailPanelProps {
  recipient: Recipient
  onClose?: () => void
  closing?: boolean
  onExitComplete?: () => void
}

export function RecipientDetailPanel({ recipient, onClose, closing, onExitComplete }: RecipientDetailPanelProps) {
  return (
    <aside onAnimationEnd={(event) => closing && event.currentTarget === event.target && onExitComplete?.()} className={cn("animated-detail-panel detail-split-panel rounded-2xl border border-brand-border bg-brand-surface/40 p-3", closing && "is-closing")}>
      <div className="mb-4 flex items-center justify-between">
        <IconButton label="Close panel" onClick={onClose}><CloseIcon className="size-3" /></IconButton>
        <IconButton label="More options"><MoreIcon className="size-3" /></IconButton>
      </div>

      <div className="mb-5 flex items-center justify-between gap-4">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <h2 className="truncate font-poppins-semibold text-fig-28 font-semibold tracking-tight text-brand-primary">
              {recipient.name}
            </h2>
            <button type="button" aria-label="Edit recipient" className="shrink-0 text-brand-blue cursor-pointer">
              <MessageEditIcon className="size-4" />
            </button>
          </div>
          <p className="mt-1 font-poppins-regular text-fig-10 font-normal text-brand-muted">{recipient.type}</p>
        </div>
        <DetailAvatar
          initials={recipient.initials}
          initialsClassName="font-poppins-medium text-fig-20 font-medium tracking-tight"
          mark={<span className="font-orbitron text-fig-7 font-bold leading-none text-brand-white">M</span>}
        />
      </div>

      <div className="mb-4 flex items-center gap-4">
        <RecipientSendAction recipient={recipient} />
        <button type="button" className="flex items-center gap-2.5 rounded-full border border-brand-border bg-brand-secondary/10 px-4 py-1.5 font-urbanist-medium text-fig-14 font-medium tracking-wide text-brand-primary cursor-pointer">
          <CalendarIcon className="size-6" /> Schedule
        </button>
      </div>

      <div className="space-y-3">
        <PaymentDetailsCard methods={recipient.paymentMethods} />
        <PaymentHistoryCard
          recipientName={recipient.name}
          initials={recipient.initials}
          transactions={recipient.transactions}
        />
      </div>
    </aside>
  )
}

function IconButton({ label, onClick, children }: { label: string; onClick?: () => void; children: React.ReactNode }) {
  return (
    <button type="button" aria-label={label} onClick={onClick} className="flex size-6 items-center justify-center rounded-full bg-brand-secondary/70 text-brand-primary cursor-pointer">
      {children}
    </button>
  )
}
