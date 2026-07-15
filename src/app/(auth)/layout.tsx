// src/app/(auth)/layout.tsx
'use client'

import * as React from "react"
import { Sidebar } from "@/components/layout/Sidebar"
import { TopNav } from "@/components/layout/TopNav"

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = React.useState(false)

  return (
    <div className="flex h-screen overflow-hidden bg-brand-surface font-sans">
      {/* Desktop sidebar */}
      <div className="hidden md:flex">
        <Sidebar />
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-brand-shadow/40" onClick={() => setMobileOpen(false)} />
          <div className="absolute inset-y-0 left-0 shadow-xl">
            <Sidebar />
          </div>
        </div>
      )}

      <div className="flex flex-1 flex-col overflow-hidden">
        <TopNav onMenuClick={() => setMobileOpen(true)} />
        <main className="flex-1 rounded-[30px] overflow-y-auto">{children}</main>
      </div>
    </div>
  )
}
