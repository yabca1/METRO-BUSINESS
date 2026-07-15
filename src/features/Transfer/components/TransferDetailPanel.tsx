// src/features/Transfer/components/TransferDetailPanel.tsx
'use client'

import { PanelCard } from "@/components/ui/PanelCard"
import { formatAmount } from "@/lib/currency"
import { cn, formatDate } from "@/lib/utils"
import type { Transfer } from "../types"
import { FromAccountCard } from "./FromAccountCard"
import { InfoLine } from "./InfoLine"
import { TransferDetailHeader } from "./TransferDetailHeader"
import { TransferTitleBlock } from "./TransferTitleBlock"
import { RecipientsBreakdownCard } from "./RecipientsBreakdownCard"
import { ShareCard } from "./ShareCard"
import { TransferSummaryCard } from "./TransferSummaryCard"

interface TransferDetailPanelProps {
  transfer: Transfer
  onClose?: () => void
  closing?: boolean
  onExitComplete?: () => void
}

const STATUS_META = {
  paid:    { label: "Completed",      className: "text-brand-completed" },
  sent:    { label: "Pending Review", className: "text-brand-pending" },
  draft:   { label: "Draft",          className: "text-brand-muted" },
  overdue: { label: "Overdue",        className: "text-brand-danger" },
} as const

export function TransferDetailPanel({ transfer, onClose, closing, onExitComplete }: TransferDetailPanelProps) {
  const currency = transfer.currency || "USD"
  const amount = formatAmount(transfer.amount, currency)
  const isBulk = !!transfer.recipients?.length
  const isPending = transfer.status === "sent"
  const status = STATUS_META[transfer.status]
  const timestamp = `${formatDate(transfer.createdAt)} at 17:15`

  return (
    <aside onAnimationEnd={(event) => closing && event.currentTarget === event.target && onExitComplete?.()} className={cn("animated-detail-panel detail-split-panel rounded-2xl border border-brand-border bg-brand-surface/40 p-3", closing && "is-closing")}>
      <TransferDetailHeader onClose={onClose}>
        <TransferTitleBlock
          title={isBulk ? transfer.recipientId : `To ${transfer.recipientId}`}
          subtitle={isBulk ? `${transfer.recipients!.length} transfers` : `Metro business  •  @${slug(transfer.recipientId)}`}
          initials={initials(transfer.recipientId)}
          isBulk={isBulk}
          showApproveDecline={isPending}
        />
      </TransferDetailHeader>

      <div className="space-y-3">
        <PanelCard className="space-y-4">
          <InfoLine label="Status" value={status.label} valueClassName={status.className} />
          <InfoLine label="Created by" value="Abebe Kebede" />
          {transfer.approvedBy && <InfoLine label="Approved by" value={transfer.approvedBy} />}
        </PanelCard>

        <FromAccountCard />

        {isBulk && <RecipientsBreakdownCard recipients={transfer.recipients!} />}

        <PanelCard>
          <p className="mb-4 text-xs font-semibold text-brand-primary">Payment details</p>
          <div className="space-y-4">
            <InfoLine label={isBulk ? `Recipient get (${transfer.recipients!.length})` : "Recipient get"} value={amount} />
            <InfoLine label="Fees" value={formatAmount(0, currency)} />
            <div className="border-t border-brand-border" />
            <InfoLine label="Total" value={amount} valueClassName="text-base font-bold" />
          </div>
        </PanelCard>

        <PanelCard>
          <InfoLine label="Note" value={transfer.note ?? "Metro Payment"} />
        </PanelCard>

        {!isPending && <ShareCard />}

        <TransferSummaryCard
          timestamp={timestamp}
          stepsDone={transfer.timelineStepsDone ?? (isPending ? 2 : 5)}
          finalNote={<>We sent <strong>{amount}</strong> to {transfer.recipientId}</>}
        />
      </div>
    </aside>
  )
}

function initials(name: string) {
  return name.split(" ").map((part) => part[0]).join("").slice(0, 2).toUpperCase() || "AK"
}

function slug(name: string) {
  return name.replace(/[^a-z0-9]+/gi, "").toLowerCase() || "abebekebede"
}
