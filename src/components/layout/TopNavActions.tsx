'use client'

import * as React from "react"
import Link from "next/link"
import { SearchNormalIcon, Setting2Icon } from "@/components/icons/vuesax"
import { ROUTES } from "@/constants/routes"
import { GlobalSearch } from "@/features/search/GlobalSearch"
import { NotificationPopover } from "@/features/notifications/NotificationPopover"

export function TopNavActions() {
  const [searchOpen, setSearchOpen] = React.useState(false)
  const [notificationsOpen, setNotificationsOpen] = React.useState(false)

  React.useEffect(() => {
    const shortcut = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault()
        setNotificationsOpen(false)
        setSearchOpen((value) => !value)
      }
    }
    document.addEventListener("keydown", shortcut)
    return () => document.removeEventListener("keydown", shortcut)
  }, [])

  return (
    <>
      <div className="flex items-center gap-4 rounded-full bg-brand-white px-3 py-1.5 shadow-sm">
        <button type="button" aria-label="Search" onClick={() => { setNotificationsOpen(false); setSearchOpen(true) }} className="group flex items-center justify-center rounded-full text-brand-primary transition hover:opacity-70 cursor-pointer">
          <SearchNormalIcon className="size-6" /><kbd className="ml-2 hidden rounded-md bg-brand-surface px-1.5 py-0.5 text-fig-10 text-brand-muted lg:block">{"\u2318K"}</kbd>
        </button>
        <Link href={ROUTES.SETTINGS} aria-label="Settings" className="flex items-center justify-center rounded-full text-brand-primary transition hover:opacity-70"><Setting2Icon className="size-6" /></Link>
        <NotificationPopover open={notificationsOpen} onOpenChange={setNotificationsOpen} onRequestOpen={() => { setSearchOpen(false); setNotificationsOpen(true) }} />
      </div>
      <GlobalSearch open={searchOpen} onOpenChange={setSearchOpen} />
    </>
  )
}
