// src/components/layout/TopNav.tsx
'use client'

import * as React from "react"
import { usePathname } from "next/navigation"
import { ChevronDown, Menu } from "lucide-react"
import { ProfileMenu } from "@/components/layout/ProfileMenu"
import { TopNavActions } from "@/components/layout/TopNavActions"
import { SIDEBAR_NAV } from "@/constants/navigation"
import { ROUTES } from "@/constants/routes"

interface TopNavProps {
  merchantName?: string
  userInitials?: string
  onMenuClick?: () => void
}

/** Flatten the nav tree into an href → label map for the page title. */
const TITLES: Record<string, string> = {
  ...Object.fromEntries(
    SIDEBAR_NAV.flatMap((item): [string, string][] => [
      [item.href, item.label],
      ...(item.children?.map((c): [string, string] => [c.href, c.label]) ?? []),
    ]),
  ),
  [ROUTES.MERCHANT_PAYMENT_LINK]: "Payment link",
  [ROUTES.MERCHANT_PAYMENT_LINK_NEW]: "Payment link",
  [ROUTES.MERCHANT_PAYMENT_LINK_SETTINGS]: "Payment link",
  [ROUTES.MERCHANT_PAYMENT_LINK_BRANDING]: "Payment link",
  [ROUTES.MERCHANT_QR]: "QR service",
  [ROUTES.MERCHANT_QR_NEW]: "QR service",
  [ROUTES.MERCHANT_QR_SETTINGS]: "QR service",
  [ROUTES.MERCHANT_IN_STORE]: "In-Store",
}


export function TopNav({ merchantName = "Test Merchant", userInitials = "AK", onMenuClick }: TopNavProps) {
  const pathname = usePathname()
  const parentTitle = SIDEBAR_NAV.find((item) => pathname.startsWith(`${item.href}/`))?.label
  const title = TITLES[pathname] ?? parentTitle ?? "Home"

  return (
    <header className="flex h-28.75 shrink-0 items-center justify-between gap-4  bg-brand-surface px-4 pt-5 md:pl-0 md:pr-8">
      <div className="flex min-w-0 items-center gap-3">
        {onMenuClick && (
          <button
            type="button"
            aria-label="Open menu"
            onClick={onMenuClick}
            className="flex size-9 items-center justify-center rounded-full text-brand-primary transition hover:bg-brand-surface md:hidden cursor-pointer"
          >
            <Menu className="size-5" />
          </button>
        )}
        <h1 className="truncate font-protest-strike text-fig-28 font-normal text-brand-primary">{title}</h1>
      </div>

      <div className="flex items-center gap-3">
        <TopNavActions />

        <button
          type="button"
          className="hidden items-center gap-1.5 rounded-full bg-brand-white py-1.5 pl-2 pr-2.5 transition hover:bg-brand-surface sm:flex cursor-pointer"
        >
          <span className="flex size-6 items-center justify-center rounded-full bg-brand-secondary">
            <span className="font-orbitron-bold text-xs font-bold text-brand-primary">M</span>
          </span>
          <span className="font-urbanist-semibold text-fig-12 font-semibold tracking-wide text-brand-primary">{merchantName}</span>
          <ChevronDown className="size-3 text-brand-primary" />
        </button>

        <ProfileMenu initials={userInitials} />
      </div>
    </header>
  )
}
