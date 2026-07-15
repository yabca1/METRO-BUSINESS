// src/components/ui/Dialog.tsx
import * as React from "react"
import { createPortal } from "react-dom"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

interface DialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  children: React.ReactNode
  /** Overrides the default content wrapper sizing/spacing (max-w-lg, p-6, rounded-2xl, ...). */
  contentClassName?: string
  /** Hides the built-in top-right close button. Esc / overlay click still close the dialog. */
  hideCloseButton?: boolean
  /** id of the element that labels this dialog, wired to aria-labelledby. */
  ariaLabelledBy?: string
}

export function Dialog({ open, onOpenChange, children, contentClassName, hideCloseButton, ariaLabelledBy }: DialogProps) {
  const [mounted, setMounted] = React.useState(open)
  const [visible, setVisible] = React.useState(false)
  const [prevOpen, setPrevOpen] = React.useState(open)
  const contentRef = React.useRef<HTMLDivElement>(null)
  const previouslyFocused = React.useRef<HTMLElement | null>(null)

  // Mount as soon as `open` flips true; the close transition below unmounts after it plays.
  if (open !== prevOpen) {
    setPrevOpen(open)
    if (open) {
      setMounted(true)
    } else {
      setVisible(false)
    }
  }

  React.useEffect(() => {
    if (!open) return
    previouslyFocused.current = document.activeElement as HTMLElement | null
    document.body.style.overflow = 'hidden'
    const raf = requestAnimationFrame(() => setVisible(true))
    return () => cancelAnimationFrame(raf)
  }, [open])

  React.useEffect(() => {
    if (open || !mounted) return
    document.body.style.overflow = 'unset'
    const timeout = setTimeout(() => setMounted(false), 200)
    return () => clearTimeout(timeout)
  }, [open, mounted])

  React.useEffect(() => {
    if (visible) {
      contentRef.current?.focus()
    } else if (!open) {
      previouslyFocused.current?.focus()
    }
  }, [visible, open])

  React.useEffect(() => {
    if (!open) return
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') onOpenChange(false)
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open, onOpenChange])

  React.useEffect(() => () => {
    document.body.style.overflow = 'unset'
  }, [])

  if (!mounted) return null

  // Portal to body
  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        aria-hidden
        className={cn("fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-200", visible ? "opacity-100" : "opacity-0")}
        onClick={() => onOpenChange(false)}
      />
      {/* Content wrapper */}
      <div
        ref={contentRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={ariaLabelledBy}
        tabIndex={-1}
        className={cn(
          "relative z-50 w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl transition-all duration-200 border border-zinc-100 sm:rounded-2xl focus:outline-none",
          visible ? "scale-100 opacity-100" : "scale-95 opacity-0",
          contentClassName,
        )}
      >
        {children}
        {!hideCloseButton && (
          <button
            onClick={() => onOpenChange(false)}
            aria-label="Close"
            className="absolute right-4 top-4 rounded-full p-1 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-900 transition-colors cursor-pointer"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
        )}
      </div>
    </div>,
    document.body
  )
}

export function DialogContent({ children, className }: { children: React.ReactNode, className?: string }) {
  return <div className={cn("space-y-4", className)}>{children}</div>
}

export function DialogHeader({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col space-y-1.5 text-center sm:text-left">{children}</div>
}

export function DialogTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-lg font-semibold tracking-tight text-zinc-900">{children}</h2>
}
