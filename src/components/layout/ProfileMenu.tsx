'use client'

import * as React from "react"
import { useRouter } from "next/navigation"
import { signOut, useSession } from "next-auth/react"
import { LoginIcon } from "@/components/icons/vuesax-nav"
import { ROUTES } from "@/constants/routes"
import { cn } from "@/lib/utils"

interface ProfileMenuProps {
  initials: string
}

/** Avatar button in the top nav that opens a small account dropdown (Log Out). */
export function ProfileMenu({ initials }: ProfileMenuProps) {
  const [open, setOpen] = React.useState(false)
  const rootRef = React.useRef<HTMLDivElement>(null)
  const router = useRouter()
  const { data: session } = useSession()

  React.useEffect(() => {
    if (!open) return
    const onPointerDown = (e: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    document.addEventListener("pointerdown", onPointerDown)
    document.addEventListener("keydown", onKey)
    return () => {
      document.removeEventListener("pointerdown", onPointerDown)
      document.removeEventListener("keydown", onKey)
    }
  }, [open])

  const handleLogout = async () => {
    document.cookie = "mock-session=; path=/; max-age=0"
    if (session) await signOut({ redirect: false })
    router.push(ROUTES.LOGIN)
  }

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Account menu"
        className={cn(
          "flex size-9 items-center justify-center rounded-full bg-brand-primary text-brand-white transition cursor-pointer",
          open && "ring-2 ring-brand-secondary",
        )}
      >
        <span className="font-poppins-medium text-base font-medium tracking-tight">{initials}</span>
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 top-full z-20 mt-2 w-44 overflow-hidden rounded-2xl border border-brand-border bg-brand-white p-1 shadow-lg"
        >
          <button
            type="button"
            role="menuitem"
            onClick={() => { setOpen(false); void handleLogout() }}
            className="flex w-full items-center gap-3.5 rounded-xl px-3 py-2.5 text-sm font-medium text-brand-ink transition hover:bg-brand-surface cursor-pointer"
          >
            <LoginIcon className="size-6" />
            Log Out
          </button>
        </div>
      )}
    </div>
  )
}
