import { CreditCard, LayoutDashboard, ReceiptText, Send, UserRound, WalletCards } from "lucide-react"
import { ROUTES } from "@/constants/routes"
import type { SearchResult } from "./types"

const iconClass = "size-4"

export const GLOBAL_SEARCH_RESULTS: SearchResult[] = [
  { id: "dashboard", group: "Pages", title: "Dashboard", subtitle: "Accounts, cards and activity", href: ROUTES.DASHBOARD, icon: <LayoutDashboard className={iconClass} />, meta: "Page" },
  { id: "transfers", group: "Pages", title: "Transfers", subtitle: "Move and manage money", href: ROUTES.TRANSFER, icon: <Send className={iconClass} />, meta: "Page" },
  { id: "recipients", group: "Pages", title: "Recipients", subtitle: "People and businesses you pay", href: ROUTES.TRANSFER_RECIPIENT, icon: <UserRound className={iconClass} />, meta: "Page" },
  { id: "cards", group: "Pages", title: "Cards", subtitle: "Virtual, metal and standard cards", href: ROUTES.CARD, icon: <CreditCard className={iconClass} />, meta: "Page" },
  { id: "salary", group: "Transfers", title: "Salary Payment", subtitle: "5 recipients \u2022 Pending review", href: ROUTES.TRANSFER, icon: <ReceiptText className={iconClass} />, meta: "50,000 ETB" },
  { id: "mft234der2", group: "Transfers", title: "MFT234DER2", subtitle: "Abebe Kebede \u2022 Completed", href: ROUTES.TRANSFER, icon: <ReceiptText className={iconClass} />, meta: "5,000 ETB" },
  { id: "abebe", group: "Recipients", title: "Abebe Kebede", subtitle: "Metro Wallet \u2022 @abebekebede", href: ROUTES.TRANSFER_RECIPIENT, icon: <UserRound className={iconClass} />, meta: "Recipient" },
  { id: "virtual-card", group: "Cards", title: "Virtual card \u2022 1234", subtitle: "Abebe Kebede \u2022 Active", href: ROUTES.CARD, icon: <CreditCard className={iconClass} />, meta: "30,000 ETB" },
  { id: "ergonomics", group: "Cards", title: "Ergonomics", subtitle: "Spend program \u2022 4 attached cards", href: ROUTES.CARD_SPEND_PROGRAMS, icon: <WalletCards className={iconClass} />, meta: "Active" },
]
