import { PanelCard } from "@/components/ui/PanelCard"
import type { SpendProgram } from "../types"

const rowClass = "flex items-center justify-between text-sm/5"

export function ProgramMetaCard({ program }: { program: SpendProgram }) {
  return (
    <PanelCard className="space-y-5 pb-3.5 pt-2.5">
      <div className={rowClass}><span className="text-brand-muted">Created by</span><span className="font-urbanist-medium text-brand-primary">{program.createdBy}</span></div>
      <div className={rowClass}><span className="text-brand-muted">Status</span><span className="font-urbanist-semibold capitalize text-brand-completed">{program.status}</span></div>
    </PanelCard>
  )
}

export function ProgramAccountCard() {
  return (
    <PanelCard className="py-2.5">
      <div className="flex items-center justify-between text-fig-14">
        <span className="text-brand-muted">From account</span>
        <button type="button" className="text-fig-12 font-urbanist-semibold text-brand-blue cursor-pointer">Manage</button>
      </div>
      <div className="mt-2 flex items-center gap-2.25">
        <span className="flex size-11.5 items-center justify-center rounded-full bg-brand-primary font-orbitron-bold text-2xl font-bold text-brand-white">M</span>
        <div>
          <p className="text-fig-14 font-urbanist-semibold text-brand-primary">Main Account</p>
          <p className="text-fig-10 text-brand-muted">Metro business <span className="mx-1">{"\u2022"}</span><span className="font-urbanist-light text-brand-primary">@metrobusiness</span></p>
        </div>
      </div>
    </PanelCard>
  )
}

export function ProgramLimitCard({ program }: { program: SpendProgram }) {
  const limits = [
    ["Daily Limit", program.dailyLimit, ""],
    ["Monthly limit", program.monthlyLimit === "-" ? "-" : `${program.monthlySpent} / ${program.monthlyLimit}`, "Monthly"],
    ["All time limit", program.allTimeLimit, ""],
  ]
  return (
    <PanelCard className="pb-3.5 pt-2.5">
      <div className="flex items-center justify-between">
        <span className="text-fig-12 font-urbanist-semibold">Limit</span>
        <button type="button" className="text-fig-12 font-urbanist-semibold text-brand-blue cursor-pointer">Manage</button>
      </div>
      <div className="mt-5 space-y-5">
        {limits.map(([label, value, period]) => (
          <div key={label} className="flex items-center justify-between text-sm/5">
            <span className="text-brand-muted">{label}</span>
            <span className="text-right font-urbanist-semibold">{value}{period && <small className="block text-sm/5 font-urbanist-medium text-brand-muted">{period}</small>}</span>
          </div>
        ))}
      </div>
    </PanelCard>
  )
}
