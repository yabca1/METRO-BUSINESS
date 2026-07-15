'use client'

import { CloseIcon, MoreIcon } from "@/components/icons/vuesax"
import { TickDoubleIcon } from "@/components/icons/vuesax-transfer"
import { cn } from "@/lib/utils"
import type { SpendProgram } from "../types"
import { AttachedProgramCards } from "./AttachedProgramCards"
import { ProgramAccountCard, ProgramLimitCard, ProgramMetaCard } from "./SpendProgramInfoCards"

interface Props {
  program: SpendProgram
  closing?: boolean
  onClose: () => void
  onExitComplete?: () => void
}

function IconButton({ label, children, onClick }: { label: string; children: React.ReactNode; onClick?: () => void }) {
  return <button type="button" aria-label={label} onClick={onClick} className="flex size-6 items-center justify-center rounded-full bg-brand-secondary text-brand-primary transition hover:opacity-70 cursor-pointer">{children}</button>
}

export function SpendProgramDetailPanel({ program, closing, onClose, onExitComplete }: Props) {
  return (
    <aside onAnimationEnd={(event) => closing && event.currentTarget === event.target && onExitComplete?.()}
      className={cn("animated-detail-panel detail-split-panel h-[calc(100vh-7rem)] max-h-214.25 overflow-y-auto rounded-2xl border border-brand-border bg-brand-surface/40 p-3", closing && "is-closing")}>
      <div className="flex items-center justify-between">
        <IconButton label="Close spend program" onClick={onClose}><CloseIcon className="size-3" /></IconButton>
        <IconButton label="More options"><MoreIcon className="size-3" /></IconButton>
      </div>

      <header className="mt-4">
        <h2 className="text-detail-title font-urbanist-bold text-brand-primary">{program.name}</h2>
        <p className="mt-1 text-fig-10 text-brand-muted">{program.created}</p>
        <button type="button" className="mt-4 flex h-9 items-center gap-2.5 rounded-full bg-brand-secondary px-4 text-fig-14 font-urbanist-medium text-brand-primary transition hover:opacity-80 cursor-pointer">
          <TickDoubleIcon className="size-6" /> View Report
        </button>
      </header>

      <div className="mt-6.25 space-y-3">
        <ProgramMetaCard program={program} />
        <ProgramAccountCard />
        <ProgramLimitCard program={program} />
        <AttachedProgramCards cards={program.attachedCards} />
      </div>
    </aside>
  )
}
