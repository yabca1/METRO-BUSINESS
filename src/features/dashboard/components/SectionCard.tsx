// src/features/dashboard/components/SectionCard.tsx
import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionCardProps {
  title: React.ReactNode
  action?: React.ReactNode
  children: React.ReactNode
  className?: string
  bodyClassName?: string
  headerClassName?: string
}

/** Right-rail widget shell shared by Requests, Cards, Products and Total wealth. */
export function SectionCard({ title, action, children, className, bodyClassName, headerClassName }: SectionCardProps) {
  return (
    <section className={cn("rounded-2xl border border-brand-border bg-brand-surface/40 p-3", className)}>
      <div className={cn("flex items-center justify-between px-1 pb-3 pt-1", headerClassName)}>
        <h2 className="text-sm font-semibold tracking-tight text-brand-primary">{title}</h2>
        {action}
      </div>
      <div className={bodyClassName}>{children}</div>
    </section>
  )
}
