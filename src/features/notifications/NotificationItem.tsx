import { CheckCircle2, CreditCard, ShieldCheck, UserRound, WalletCards } from "lucide-react"
import { cn } from "@/lib/utils"
import type { MetroNotification, NotificationKind } from "./types"

const ICONS: Record<NotificationKind, typeof WalletCards> = { transfer: WalletCards, card: CreditCard, team: UserRound, security: ShieldCheck }

export function NotificationItem({ item, onRead }: { item: MetroNotification; onRead: () => void }) {
  const Icon = ICONS[item.kind]
  return (
    <button type="button" onClick={onRead} className={cn("group relative flex w-full gap-3 rounded-2xl px-3 py-3 text-left transition cursor-pointer", item.unread ? "bg-brand-surface" : "hover:bg-brand-surface/70")}>
      {item.unread && <span className="absolute right-3 top-3 size-1.5 rounded-full bg-brand-blue" />}
      <span className={cn("flex size-10 shrink-0 items-center justify-center rounded-2xl border", item.unread ? "border-brand-primary bg-brand-primary text-brand-white" : "border-brand-border bg-brand-white text-brand-muted")}><Icon className="size-4" /></span>
      <span className="min-w-0 flex-1 pr-2">
        <span className="flex items-center gap-2"><strong className="truncate text-fig-14 font-urbanist-semibold text-brand-primary">{item.title}</strong><small className="shrink-0 text-fig-10 text-brand-muted">{item.time}</small></span>
        <span className="mt-0.5 block text-fig-10 leading-relaxed text-brand-muted">{item.description}</span>
        <span className="mt-2 flex items-center justify-between"><span className="rounded-full border border-brand-border bg-brand-white px-2 py-1 text-fig-10 font-urbanist-medium text-brand-primary">{item.meta}</span>{item.unread && <span className="flex items-center gap-1 text-fig-10 text-brand-blue opacity-0 transition group-hover:opacity-100"><CheckCircle2 className="size-3" /> Mark read</span>}</span>
      </span>
    </button>
  )
}
