// src/features/dashboard/components/DashboardContent.tsx
'use client'

import * as React from "react"
import { AccountCard } from "./AccountCard"
import { CardsWidget } from "./CardsWidget"
import { PocketsCard } from "./PocketsCard"
import { ProductsSection } from "./ProductsSection"
import { QuickActions } from "./QuickActions"
import { RequestsPanel } from "./RequestsPanel"
import { TotalWealthPanel } from "./TotalWealthPanel"
import { TransactionsTable } from "./TransactionsTable"

export function DashboardContent() {
  const [amountsHidden, setAmountsHidden] = React.useState(false)

  return (
    <div className="mx-auto w-full max-w-360 px-4 py-6 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.85fr_1fr] lg:gap-7">
        <div className="space-y-5 lg:space-y-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <AccountCard
              amountsHidden={amountsHidden}
              onToggleAmountsHidden={() => setAmountsHidden((value) => !value)}
            />
            <PocketsCard amountsHidden={amountsHidden} />
          </div>
          <QuickActions />
          <TransactionsTable amountsHidden={amountsHidden} />
        </div>

        <div className="space-y-5 lg:space-y-6">
          <RequestsPanel amountsHidden={amountsHidden} />
          <CardsWidget />
          <ProductsSection />
          <TotalWealthPanel amountsHidden={amountsHidden} />
        </div>
      </div>
    </div>
  )
}
