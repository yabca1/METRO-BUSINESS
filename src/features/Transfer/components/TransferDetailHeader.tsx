import type * as React from "react"
import { MoreHorizontal, X } from "lucide-react"

interface TransferDetailHeaderProps {
  onClose?: () => void
  children: React.ReactNode
}

/** Close/more icon row + slot for the title block, shared by every status variant. */
export function TransferDetailHeader({ onClose, children }: TransferDetailHeaderProps) {
  return (
    <>
      <div className="mb-4 flex items-center justify-between">
        <IconButton label="Close panel" onClick={onClose}><X className="size-3" /></IconButton>
        <IconButton label="More options"><MoreHorizontal className="size-3" /></IconButton>
      </div>
      {children}
    </>
  )
}

function IconButton({ label, onClick, children }: { label: string; onClick?: () => void; children: React.ReactNode }) {
  return (
    <button type="button" aria-label={label} onClick={onClick} className="flex size-6 items-center justify-center rounded-full bg-brand-secondary/70 text-brand-primary cursor-pointer">
      {children}
    </button>
  )
}
