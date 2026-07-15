// src/components/ui/DetailPanel/DetailPanel.tsx
'use client'

import * as React from "react"
import { createPortal } from "react-dom"
import { cn } from "@/lib/utils"

// Import other parts for props-driven mode
import { DetailPanelHeader } from "./DetailPanelHeader"
import { DetailPanelBody } from "./DetailPanelBody"
import { DetailPanelActions } from "./DetailPanelActions"
import { DetailSection } from "./DetailSection"
import { InfoRow } from "./InfoRow"
import { DetailTimeline, type TimelineItem } from "./DetailTimeline"
import { DetailAvatar } from "./DetailAvatar"
import { DetailSuccess } from "./DetailSuccess"

const DetailPanelContext = React.createContext<{ close: () => void } | null>(null)

export function useDetailPanel() {
  const ctx = React.useContext(DetailPanelContext)
  if (!ctx) throw new Error("DetailPanel.* must be rendered inside <DetailPanel>")
  return ctx
}

export interface StructuredSection {
  title?: string
  items: {
    label: string
    value: React.ReactNode
    strong?: boolean
    valueClassName?: string
  }[]
}

export interface PanelAction {
  icon?: React.ReactNode
  label: string
  onClick: () => void
  variant?: 'default' | 'outline' | 'ghost' | 'gradient'
}

interface DetailPanelProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  children?: React.ReactNode // Composition mode
  className?: string
  labelledBy?: string

  // Props-driven mode options
  title?: string
  subtitle?: string
  avatarInitials?: string
  avatarMark?: React.ReactNode
  successMessage?: string
  successMeta?: string
  sections?: StructuredSection[]
  timeline?: TimelineItem[]
  actions?: PanelAction[]
  onMore?: () => void
  back?: boolean
}

/** Right-side detail rail matching the Figma transfer/invoice panels. */
export function DetailPanel({
  open,
  onOpenChange,
  children,
  className,
  labelledBy,
  title,
  subtitle,
  avatarInitials,
  avatarMark,
  successMessage,
  successMeta,
  sections,
  timeline,
  actions,
  onMore,
  back
}: DetailPanelProps) {
  const panelRef = React.useRef<HTMLElement>(null)

  React.useEffect(() => {
    if (!open) return
    const previousActive = document.activeElement
    document.body.style.overflow = "hidden"
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && onOpenChange(false)
    document.addEventListener("keydown", onKey)
    requestAnimationFrame(() => panelRef.current?.focus())
    return () => {
      document.body.style.overflow = ""
      document.removeEventListener("keydown", onKey)
      if (previousActive instanceof HTMLElement) previousActive.focus()
    }
  }, [open, onOpenChange])

  if (!open) return null
  const close = () => onOpenChange(false)

  // Default props-driven rendering layout if children is omitted
  const renderContent = () => {
    if (children) return children

    return (
      <>
        {/* Header */}
        <DetailPanelHeader 
          title={title} 
          subtitle={subtitle} 
          onMore={onMore} 
          back={back}
        />

        <DetailPanelBody className="space-y-4">
          {/* Avatar Area */}
          {avatarInitials && (
            <div className="flex justify-center py-2">
              <DetailAvatar initials={avatarInitials} mark={avatarMark} className="size-16 text-lg" />
            </div>
          )}

          {/* Success Card block */}
          {successMessage && (
            <DetailSuccess title={successMessage} meta={successMeta} />
          )}

          {/* Sections List */}
          {sections && sections.map((sec, idx) => (
            <DetailSection key={idx} title={sec.title}>
              <div className="space-y-1">
                {sec.items.map((item, itemIdx) => (
                  <InfoRow 
                    key={itemIdx} 
                    label={item.label} 
                    value={item.value} 
                    strong={item.strong} 
                    className={item.valueClassName}
                  />
                ))}
              </div>
            </DetailSection>
          ))}

          {/* Timeline block */}
          {timeline && (
            <DetailSection title="Timeline">
              <DetailTimeline items={timeline} />
            </DetailSection>
          )}
        </DetailPanelBody>

        {/* Action Buttons footer */}
        {actions && actions.length > 0 && (
          <DetailPanelActions>
            {actions.map((act, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  act.onClick()
                  close()
                }}
                className={cn(
                  "flex items-center justify-center gap-2 font-semibold text-sm transition cursor-pointer px-4 py-3 rounded-xl",
                  act.variant === 'outline' && "border border-brand-secondary hover:bg-brand-surface text-brand-primary bg-brand-white",
                  act.variant === 'ghost' && "hover:bg-brand-surface text-brand-primary bg-transparent",
                  (!act.variant || act.variant === 'default') && "bg-brand-primary text-brand-white hover:bg-brand-dark/90"
                )}
              >
                {act.icon}
                {act.label}
              </button>
            ))}
          </DetailPanelActions>
        )}
      </>
    )
  }

  return createPortal(
    <DetailPanelContext.Provider value={{ close }}>
      <div className="fixed inset-0 z-50">
        <div onClick={close} className="absolute inset-0 bg-brand-shadow/40" />
        <aside
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby={labelledBy}
          tabIndex={-1}
          className={cn(
            "absolute inset-y-0 right-0 flex w-full max-w-sm flex-col overflow-hidden",
            "border-l border-brand-border bg-brand-page p-3 outline-none shadow-2xl",
            className,
          )}
        >
          {renderContent()}
        </aside>
      </div>
    </DetailPanelContext.Provider>,
    document.body,
  )
}
