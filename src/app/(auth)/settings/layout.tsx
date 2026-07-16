// src/app/(auth)/settings/layout.tsx
'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'

export default function SettingsLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()

  // Close on Escape key
  React.useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') router.back()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [router])

  return (
    <div
      className="fixed inset-0 z-50 flex overflow-y-auto bg-brand-page/80 backdrop-blur-sm"
      onClick={(e) => { if (e.target === e.currentTarget) router.back() }}
    >
      <div className="flex min-h-full w-full items-start justify-center py-6 sm:py-10">
        {children}
      </div>
    </div>
  )
}
