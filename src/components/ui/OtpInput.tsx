// src/components/ui/OtpInput.tsx
'use client'

import * as React from "react"
import { cn } from "@/lib/utils"

interface OtpInputProps {
  length?: number
  value: string
  onChange: (value: string) => void
  autoFocus?: boolean
}

/** Segmented one-time-code input with auto-advance, backspace and paste support. */
export function OtpInput({ length = 6, value, onChange, autoFocus }: OtpInputProps) {
  const refs = React.useRef<(HTMLInputElement | null)[]>([])
  const chars = value.split("").slice(0, length)

  const setChar = (i: number, ch: string) => {
    const arr = value.split("")
    while (arr.length < length) arr.push("")
    arr[i] = ch
    onChange(arr.join("").slice(0, length))
  }

  const handleChange = (i: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const digit = e.target.value.replace(/\D/g, "").slice(-1)
    if (!digit) return
    setChar(i, digit)
    if (i < length - 1) refs.current[i + 1]?.focus()
  }

  const handleKeyDown = (i: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace") {
      e.preventDefault()
      if (chars[i]) setChar(i, "")
      else if (i > 0) {
        setChar(i - 1, "")
        refs.current[i - 1]?.focus()
      }
    } else if (e.key === "ArrowLeft" && i > 0) refs.current[i - 1]?.focus()
    else if (e.key === "ArrowRight" && i < length - 1) refs.current[i + 1]?.focus()
  }

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault()
    const text = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, length)
    if (!text) return
    onChange(text)
    refs.current[Math.min(text.length, length - 1)]?.focus()
  }

  return (
    <div className="flex gap-4.5" onPaste={handlePaste}>
      {Array.from({ length }).map((_, i) => (
        <input
          key={i}
          ref={(el) => { refs.current[i] = el }}
          inputMode="numeric"
          maxLength={1}
          autoFocus={autoFocus && i === 0}
          value={chars[i] ?? ""}
          onChange={(e) => handleChange(i, e)}
          onKeyDown={(e) => handleKeyDown(i, e)}
          className={cn(
            "h-16 w-12.5 rounded-2xl border bg-brand-white text-center text-2xl font-semibold text-brand-dark",
            "font-urbanist outline-none transition focus:border-brand-primary focus:ring-1 focus:ring-brand-primary",
            chars[i] ? "border-brand-primary" : "border-brand-field-border",
          )}
        />
      ))}
    </div>
  )
}
