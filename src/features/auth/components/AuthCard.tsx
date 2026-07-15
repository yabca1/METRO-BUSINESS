// src/features/auth/components/AuthCard.tsx
import * as React from "react"
import { cn } from "@/lib/utils"

/** The white rounded container that holds an authentication step. */
export function AuthCard({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={cn("w-full rounded-[20px] bg-brand-white transition-all duration-300", className)}>
      {children}
    </div>
  )
}
