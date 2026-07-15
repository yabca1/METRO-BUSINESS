'use client'

import * as React from "react"
import { ArrowLeft, MoreHorizontal, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useDetailPanel } from "./DetailPanel"

interface DetailPanelHeaderProps {
  title?: React.ReactNode
  subtitle?: React.ReactNode
  id?: string
  closeLabel?: string
  back?: boolean
  onMore?: () => void
  className?: string
}

const iconButton = "flex size-6 items-center justify-center rounded-full bg-brand-surface text-brand-primary transition hover:bg-brand-secondary cursor-pointer"

export function DetailPanelHeader({ title, subtitle, id, closeLabel, back, onMore, className }: DetailPanelHeaderProps) {
  const { close } = useDetailPanel()
  const CloseIcon = back ? ArrowLeft : X
  return (
    <header className={cn("flex flex-col gap-6 px-3 pb-3", className)}>
      <div className="flex items-center justify-between">
        <button type="button" onClick={close} aria-label={closeLabel ?? (back ? "Go back" : "Close panel")} className={iconButton}>
          <CloseIcon className={back ? "size-4" : "size-3"} />
        </button>
        {onMore && (
          <button type="button" onClick={onMore} aria-label="More options" className={iconButton}>
            <MoreHorizontal className="size-4" />
          </button>
        )}
      </div>
      {title && (
        <div className="min-w-0">
          <h2 id={id} className="text-3xl font-semibold leading-tight text-brand-primary">{title}</h2>
          {subtitle && <div className="mt-2 text-sm font-medium text-brand-muted">{subtitle}</div>}
        </div>
      )}
    </header>
  )
}
