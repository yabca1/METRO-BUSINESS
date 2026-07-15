import type * as React from "react"
import { PanelCard } from "@/components/ui/PanelCard"
import { BulkReceiveSquareIcon, BulkSmsIcon } from "@/components/icons/vuesax-transfer"

/** "Share" card: only shown once a transfer is Completed, per Figma. */
export function ShareCard() {
  return (
    <PanelCard>
      <p className="mb-4 text-xs font-medium text-brand-muted">Share</p>
      <ActionLine icon={<BulkSmsIcon className="size-6" />} label="Send via email" />
      <ActionLine icon={<BulkReceiveSquareIcon className="size-6" />} label="Download Statement" />
    </PanelCard>
  )
}

function ActionLine({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button type="button" className="flex w-full items-center gap-4 py-2 text-sm font-medium text-brand-primary cursor-pointer">
      {icon}{label}
    </button>
  )
}
