// src/features/search/types.ts
import type * as React from "react"

export type SearchGroup = "Pages" | "Transfers" | "Recipients" | "Cards"

export interface SearchResult {
  id: string
  group: SearchGroup
  title: string
  subtitle?: string
  href: string
  icon: React.ReactNode
  /** Trailing node — amount, status text, or a "Page" chip. */
  meta?: React.ReactNode
}
