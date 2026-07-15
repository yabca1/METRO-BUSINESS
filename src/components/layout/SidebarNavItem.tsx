// src/components/layout/SidebarNavItem.tsx
'use client'

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { BrandMark } from "@/components/brand/BrandMark"
import { ChevronIcon } from "@/components/icons/vuesax-nav"
import type { NavItem } from "@/constants/navigation"

const rowBase = "flex w-full items-center gap-3.5 rounded-xl px-3 py-2 text-sm font-medium transition"

function RowInner({ item, active }: { item: NavItem; active: boolean }) {
  const Icon = item.icon
  return (
    <>
      {item.mark ? (
        <BrandMark variant={active ? "light" : "dark"} className="size-7 rounded-lg" />
      ) : (
        <Icon className={cn("size-6", active ? "text-brand-white" : "text-brand-primary")} />
      )}
      <span className="flex-1 text-left">{item.label}</span>
    </>
  )
}

export function SidebarNavItem({ item }: { item: NavItem }) {
  const pathname = usePathname()
  const hasChildren = !!item.children?.length
  const childActive = item.children?.some((child) => pathname === child.href || pathname.startsWith(`${child.href}/`)) ?? false
  /** Parent stays muted when a child route is active (e.g. Merchant → Payment link). */
  const active = pathname === item.href && !childActive
  const [open, setOpen] = React.useState((active || childActive) && hasChildren)
  const expanded = open || childActive

  const rowClass = cn(
    rowBase,
    active ? "bg-brand-primary text-brand-white" : "text-brand-primary hover:bg-brand-surface",
  )

  return (
    <li>
      {hasChildren ? (
        <div className={rowClass}>
          <Link href={item.href} className="flex min-w-0 flex-1 items-center gap-3.5">
            <RowInner item={item} active={active} />
          </Link>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={`${expanded ? "Collapse" : "Expand"} ${item.label}`}
            aria-expanded={expanded}
            className="flex size-6 cursor-pointer items-center justify-center rounded-full"
          >
            <ChevronIcon className={cn("size-3.5 transition-transform", active ? "text-brand-white" : "text-brand-primary", expanded && "rotate-180")} />
          </button>
        </div>
      ) : (
        <Link href={item.href} className={rowClass}>
          <RowInner item={item} active={active} />
        </Link>
      )}

      {hasChildren && expanded && (
        <ul className="mt-1 space-y-1">
          {item.children!.map((child) => {
            const childOn = pathname === child.href || pathname.startsWith(`${child.href}/`)
            return (
              <li key={child.href}>
                <Link
                  href={child.href}
                  className={cn(
                    "block rounded-lg py-2 pl-13.25 text-sm transition",
                    childOn ? "bg-brand-primary font-medium text-brand-white" : "text-brand-primary hover:bg-brand-surface",
                  )}
                >
                  {child.label}
                </Link>
              </li>
            )
          })}
        </ul>
      )}
    </li>
  )
}
