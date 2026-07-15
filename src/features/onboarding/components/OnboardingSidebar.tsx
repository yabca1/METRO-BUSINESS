// src/features/onboarding/components/OnboardingSidebar.tsx
'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Check } from "lucide-react"
import { Logo } from "@/components/brand/Logo"
import { cn } from "@/lib/utils"
import { ONBOARDING_GUIDE } from "../constants"
import { ProgressRing } from "./ProgressRing"

interface OnboardingSidebarProps {
  /** Guide steps completed so far, drives both the ring and item checkmarks. */
  completedIds?: string[]
}

/** Left "Setup Guide" rail — real navigation between the guide's top-level steps. */
export function OnboardingSidebar({ completedIds = [] }: OnboardingSidebarProps) {
  const pathname = usePathname()
  const percent = Math.round((completedIds.length / ONBOARDING_GUIDE.length) * 100)

  return (
    <aside className="flex h-full w-79.75 shrink-0 flex-col bg-[#f7f7f7] px-7.75">
      <div className="pt-11.25">
        <Logo />
      </div>

      <h2 className="mt-8.5 text-2xl font-bold leading-[1.4] text-brand-primary">Setup Guide</h2>
      <div className="mt-0.5 flex items-center gap-1.5">
        <ProgressRing percent={percent} />
        <span className="text-xs text-brand-muted">{percent}% Completed</span>
      </div>

      <ul className="mt-7.75 space-y-6.5">
        {ONBOARDING_GUIDE.map(({ id, href, icon: Icon, title, subtitle }) => {
          const active = pathname === href
          const completed = completedIds.includes(id)
          return (
            <li key={id}>
              <Link
                href={href}
                className={cn(
                  "flex items-center gap-3.5 rounded-2xl p-1 transition",
                  active ? "bg-brand-white" : "hover:bg-brand-white/60",
                )}
              >
                <span className="relative flex size-11.5 shrink-0 items-center justify-center rounded-full bg-brand-secondary/70 text-brand-primary">
                  <Icon className="size-6" />
                  {completed && (
                    <span className="absolute -bottom-0.5 -right-0.5 flex size-4 items-center justify-center rounded-full bg-brand-success text-brand-white ring-2 ring-[#f7f7f7]">
                      <Check className="size-2.5" strokeWidth={3} />
                    </span>
                  )}
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-base font-semibold leading-[1.4] text-brand-primary">{title}</span>
                  <span className="block truncate text-xs leading-[1.35] text-brand-muted">{subtitle}</span>
                </span>
              </Link>
            </li>
          )
        })}
      </ul>

      <p className="mt-auto pb-7.25 text-center text-xs leading-6 text-brand-primary">
        Copyright © 2026 Metro Financial Technologies.
        <br /> All rights reserved.
      </p>
    </aside>
  )
}
