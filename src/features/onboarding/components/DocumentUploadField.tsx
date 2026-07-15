// src/features/onboarding/components/DocumentUploadField.tsx
'use client'

import * as React from "react"
import { DocumentIcon, EditBadgeIcon, PreviewEyeIcon } from "@/components/icons/vuesax-onboarding"

interface DocumentUploadFieldProps {
  label: string
  hint: string
  /** Pre-filled file name, e.g. "Business_license.pdf" — shows the preview/Change affordances. */
  defaultFileName?: string
  required?: boolean
  onFileChange?: (file: File | null) => void
}

/** File-upload row for the "Legal Documents" step, matching the Figma spec exactly. */
export function DocumentUploadField({ label, hint, defaultFileName = "", required, onFileChange }: DocumentUploadFieldProps) {
  const [fileName, setFileName] = React.useState(defaultFileName)
  const hasFile = fileName.length > 0

  return (
    <label className="block cursor-pointer">
      <span className="mb-1.5 block text-sm font-semibold leading-[1.2] text-[#3c3c3c]">
        {label}
        {required && <span className="text-brand-danger"> *</span>}
      </span>
      <span className="flex h-15.75 w-full items-center gap-3.5 rounded-2xl border border-brand-border bg-brand-surface/30 px-3.5">
        <DocumentIcon className="size-7 shrink-0 text-brand-primary" />
        <span className="min-w-0 flex-1">
          <span className="block truncate text-sm font-medium leading-[1.4] text-brand-ink">{label}</span>
          <span className="flex items-center gap-1.5 text-[10px] leading-[1.35] text-brand-muted">
            <span className="truncate">{hasFile ? fileName : hint}</span>
            {hasFile && <PreviewEyeIcon className="size-4 shrink-0" />}
          </span>
        </span>
        {hasFile && (
          <span className="flex h-6.75 shrink-0 items-center gap-2 rounded-2xl bg-brand-primary px-2.5 text-[10px] font-bold text-brand-white">
            <EditBadgeIcon className="size-3.5" />
            Change
          </span>
        )}
      </span>
      <input
        type="file"
        accept=".pdf,.png,.jpg,.jpeg"
        className="sr-only"
        onChange={(e) => {
          const file = e.target.files?.[0] ?? null
          setFileName(file?.name ?? "")
          onFileChange?.(file)
        }}
      />
    </label>
  )
}
