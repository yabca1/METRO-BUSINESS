// src/features/auth/components/AuthPanel.tsx
import * as React from "react"
import { cn } from "@/lib/utils"
import { AuthCard } from "./AuthCard"

/** A single-column auth card with the standard padding used by every step. */
export function AuthPanel({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <AuthCard className={cn("flex w-full max-w-[505px] flex-col px-6 py-8 md:min-h-[434px] md:px-[57px] md:pb-[63px] md:pt-9", className)}>
      {children}
    </AuthCard>
  )
}
