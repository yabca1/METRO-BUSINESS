import * as React from "react"
import { cn } from "@/lib/utils"

/** Bottom action stack. Buttons stretch to the panel width like the Figma popups. */
export function DetailPanelActions({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={cn("flex flex-col gap-2 px-3 pb-3 pt-4 [&>*]:h-12 [&>*]:w-full [&>*]:rounded-2xl", className)}>
      {children}
    </div>
  )
}
