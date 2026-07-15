import * as React from "react"
import { cn } from "@/lib/utils"

/** Scrollable content region below the icon/title header. */
export function DetailPanelBody({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={cn("flex-1 overflow-y-auto px-3 py-4", className)}>
      {children}
    </div>
  )
}
