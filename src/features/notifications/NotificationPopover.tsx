'use client'

import * as React from "react"
import { CheckCheck } from "lucide-react"
import { NotificationIcon } from "@/components/icons/vuesax"
import { cn } from "@/lib/utils"
import { INITIAL_NOTIFICATIONS } from "./data"
import { NotificationItem } from "./NotificationItem"

interface Props { open: boolean; onOpenChange: (open: boolean) => void; onRequestOpen: () => void }

export function NotificationPopover({ open, onOpenChange, onRequestOpen }: Props) {
  const [items, setItems] = React.useState(INITIAL_NOTIFICATIONS)
  const [tab, setTab] = React.useState<"all" | "unread">("all")
  const rootRef = React.useRef<HTMLDivElement>(null)
  const unread = items.filter((item) => item.unread).length
  const visible = tab === "unread" ? items.filter((item) => item.unread) : items

  React.useEffect(() => {
    if (!open) return
    const dismiss = (event: PointerEvent) => rootRef.current && !rootRef.current.contains(event.target as Node) && onOpenChange(false)
    const escape = (event: KeyboardEvent) => event.key === "Escape" && onOpenChange(false)
    document.addEventListener("pointerdown", dismiss)
    document.addEventListener("keydown", escape)
    return () => { document.removeEventListener("pointerdown", dismiss); document.removeEventListener("keydown", escape) }
  }, [open, onOpenChange])

  return (
    <div ref={rootRef} className="relative">
      <button type="button" aria-label={`Notifications, ${unread} unread`} aria-expanded={open} onClick={() => open ? onOpenChange(false) : onRequestOpen()} className="relative flex items-center justify-center rounded-full text-brand-primary transition hover:opacity-70 cursor-pointer">
        <NotificationIcon className="size-6" />{unread > 0 && <span className="absolute -right-0.5 -top-0.5 flex size-3 items-center justify-center rounded-full border-2 border-brand-white bg-brand-blue"><span className="sr-only">{unread} unread</span></span>}
      </button>
      {open && (
        <section aria-label="Notifications" className="topnav-popover fixed right-4 top-24 z-40 w-[calc(100vw-2rem)] max-w-sm overflow-hidden rounded-3xl border border-brand-border bg-brand-white shadow-2xl md:absolute md:right-0 md:top-full md:mt-3">
          <header className="flex items-start justify-between px-5 pb-4 pt-5">
            <div><p className="text-fig-20 font-urbanist-semibold text-brand-primary">Notifications</p><p className="mt-1 text-fig-10 text-brand-muted">{unread ? `${unread} items need your attention` : "You are all caught up"}</p></div>
            <button type="button" disabled={!unread} onClick={() => setItems((current) => current.map((item) => ({ ...item, unread: false })))} className="flex items-center gap-1.5 rounded-full bg-brand-surface px-3 py-2 text-fig-10 font-urbanist-semibold text-brand-primary transition enabled:hover:bg-brand-secondary disabled:opacity-40 cursor-pointer"><CheckCheck className="size-3.5" /> Mark all read</button>
          </header>
          <div className="mx-5 flex rounded-full bg-brand-surface p-1">{(["all", "unread"] as const).map((value) => <button key={value} type="button" onClick={() => setTab(value)} className={cn("flex-1 rounded-full py-2 text-fig-10 font-urbanist-semibold capitalize transition cursor-pointer", tab === value ? "bg-brand-primary text-brand-white shadow-sm" : "text-brand-muted")}>{value}{value === "unread" && unread > 0 ? ` ${unread}` : ""}</button>)}</div>
          <div className="max-h-112 space-y-1 overflow-y-auto p-2.5">{visible.length ? visible.map((item) => <NotificationItem key={item.id} item={item} onRead={() => setItems((current) => current.map((entry) => entry.id === item.id ? { ...entry, unread: false } : entry))} />) : <div className="flex h-48 flex-col items-center justify-center text-center"><CheckCheck className="size-8 text-brand-completed" /><p className="mt-3 text-fig-14 font-urbanist-semibold">Inbox zero</p><p className="mt-1 text-fig-10 text-brand-muted">Nothing new needs your attention.</p></div>}</div>
          <footer className="flex items-center justify-between border-t border-brand-border bg-brand-surface px-5 py-3 text-fig-10 text-brand-muted"><span>METRO SIGNAL</span><span>Live updates</span></footer>
        </section>
      )}
    </div>
  )
}
