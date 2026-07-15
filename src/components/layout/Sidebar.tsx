// src/components/layout/Sidebar.tsx
import Link from "next/link"
import { ROUTES } from "@/constants/routes"
import { SIDEBAR_NAV } from "@/constants/navigation"
import { Logo } from "@/components/brand/Logo"
import { SidebarNavItem } from "./SidebarNavItem"

/** Primary application navigation shown on the left of the authed shell. */
export function Sidebar() {
  return (
    <aside className="flex h-full w-72.5 flex-col  bg-brand-surface">
      <div className="flex h-28.75 items-center px-7.5 pt-5">
        <Link href={ROUTES.DASHBOARD} aria-label="Metro Business home">
          <Logo />
        </Link>
      </div>

      <nav className="flex-1 overflow-y-auto px-7.5 py-6">
        <ul className="space-y-1">
          {SIDEBAR_NAV.map((item) => (
            <SidebarNavItem key={item.href} item={item} />
          ))}
        </ul>
      </nav>

      <p className="px-6 py-6 text-center text-xs font-light leading-relaxed text-brand-muted">
        Copyright © 2026 Metro Financial Technologies. All rights reserved.
      </p>
    </aside>
  )
}
