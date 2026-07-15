// src/constants/navigation.ts
import type { ComponentType } from "react"
import { Home } from "lucide-react"
import {
  ArrowSwapHorizontalIcon, LayerIcon, ElementPlusIcon, ShopIcon,
  CardIcon, Profile2UserIcon, GiftIcon, ChartIcon, ReceiptItemIcon,
} from "@/components/icons/vuesax-nav"
import { ROUTES } from "./routes"

export type NavIcon = ComponentType<{ className?: string }>

export interface NavChild {
  label: string
  href: string
}

export interface NavItem {
  label: string
  href: string
  icon: NavIcon
  /** Render the Metro brand tile instead of the icon (used for Home). */
  mark?: boolean
  children?: NavChild[]
}

export const SIDEBAR_NAV: NavItem[] = [
  { label: "Home", href: ROUTES.DASHBOARD, icon: Home, mark: true },
  {
    label: "Transfer", href: ROUTES.TRANSFER, icon: ArrowSwapHorizontalIcon,
    children: [
      { label: "Recipients", href: ROUTES.TRANSFER_RECIPIENT },
    ],
  },
  { label: "Payment", href: ROUTES.PAYMENT, icon: LayerIcon },
  { label: "Expense", href: ROUTES.EXPENSE, icon: ReceiptItemIcon },
  { label: "Products", href: ROUTES.PRODUCTS, icon: ElementPlusIcon },
  {
    label: "Merchant", href: ROUTES.MERCHANT_PAYMENT_LINK, icon: ShopIcon,
    children: [
      { label: "Payment link", href: ROUTES.MERCHANT_PAYMENT_LINK },
      { label: "QR service", href: ROUTES.MERCHANT_QR },
      { label: "In-store", href: ROUTES.MERCHANT_IN_STORE },
    ],
  },
  {
    label: "Card", href: ROUTES.CARD, icon: CardIcon,
    children: [
      { label: "Card requests", href: ROUTES.CARD_REQUESTS },
      { label: "Spend programs", href: ROUTES.CARD_SPEND_PROGRAMS },
    ],
  },
  { label: "Team", href: ROUTES.TEAM, icon: Profile2UserIcon },
  { label: "Rewards", href: ROUTES.REWARDS, icon: GiftIcon },
  { label: "Insight", href: ROUTES.INSIGHT, icon: ChartIcon },
]
