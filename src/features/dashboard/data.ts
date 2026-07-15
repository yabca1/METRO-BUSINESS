// src/features/dashboard/data.ts
import {
  Percent, Landmark, ShieldCheck, Wallet, PiggyBank,
} from "lucide-react"
import type {
  DashboardAccount, Pocket, QuickAction, Transaction, FundingRequest,
  CardTile, ProductOffer, WealthBalance, WealthPromo, AccountCurrency, AccountsSummary,
} from "./types"

export const account: DashboardAccount = {
  id: "acc-metro-wallet",
  balance: 75000,
  currency: "ETB",
  currencyCount: 3,
  walletLabel: "Metro wallet",
  handle: "abebekebede",
}

export const pockets: Pocket[] = [
  { id: "pocket-payroll", label: "Payroll", amount: 60500, currency: "ETB", tone: "green", icon: "/icons/dashboard/pocket-coin.svg" },
  { id: "pocket-tax", label: "Tax", amount: 15500, currency: "ETB", tone: "rose", icon: "/icons/dashboard/pocket-percentage.svg" },
]

export const pocketsSummary = { amount: 76000, currency: "ETB", count: 2 }

export const quickActions: QuickAction[] = [
  { id: "action-add", label: "Add", icon: "/icons/dashboard/quick-action-add.svg" },
  { id: "action-transfer", label: "Transfer", icon: "/icons/dashboard/quick-action-transfer.svg" },
  { id: "action-request", label: "Request", icon: "/icons/dashboard/quick-action-request.svg" },
  { id: "action-topup", label: "Topup", icon: "/icons/dashboard/quick-action-topup.svg" },
  { id: "action-exchange", label: "Exchange", icon: "/icons/dashboard/quick-action-exchange.svg" },
  { id: "action-withdraw", label: "Withdraw", icon: "/icons/dashboard/quick-action-withdraw.svg" },
  { id: "action-schedule", label: "Schedule", icon: "/icons/dashboard/quick-action-schedule.svg" },
]

export const transactions: Transaction[] = [
  { id: "txn-1", recipient: "Abebe Kebede", reference: "MFT234DER2", date: "Today, 2:46 AM", createdBy: "Abebe Kebede", status: "completed", amount: 5000, currency: "ETB" },
  { id: "txn-2", recipient: "Abebe Kebede", reference: "MFT234DER3", date: "Today, 2:46 AM", createdBy: "Abebe Kebede", status: "completed", amount: 5000, currency: "ETB" },
  { id: "txn-3", recipient: "Abebe Kebede", reference: "MFT234DER4", date: "Today, 2:46 AM", createdBy: "Abebe Kebede", status: "completed", amount: 5000, currency: "ETB" },
  { id: "txn-4", recipient: "Abebe Kebede", reference: "MFT234DER5", date: "Today, 2:46 AM", createdBy: "Abebe Kebede", status: "pending", amount: 5000, currency: "ETB" },
  { id: "txn-5", recipient: "Abebe Kebede", reference: "MFT234DER6", date: "Today, 2:46 AM", createdBy: "Abebe Kebede", status: "completed", amount: 5000, currency: "ETB" },
  { id: "txn-6", recipient: "Abebe Kebede", reference: "MFT234DER7", date: "Today, 2:46 AM", createdBy: "Abebe Kebede", status: "pending", amount: 5000, currency: "ETB" },
  { id: "txn-7", recipient: "Abebe Kebede", reference: "MFT234DER8", date: "Today, 2:46 AM", createdBy: "Abebe Kebede", status: "completed", amount: 5000, currency: "ETB" },
]

export const requests: FundingRequest[] = [
  { id: "req-1", requester: "Abebe Kebede", initials: "AK", date: "Today, 2:46 AM", amount: 1000, currency: "ETB" },
  { id: "req-2", requester: "Selam Tesfaye", initials: "ST", date: "Today, 1:12 AM", amount: 2500, currency: "ETB" },
]

export const cardTiles: CardTile[] = [
  { id: "card-disposable", label: "Disposable", meta: "Generate", variant: "disposable" },
  { id: "card-virtual", label: "Virtual", meta: "•• 2289", variant: "virtual" },
  { id: "card-add", label: "Get card", variant: "add" },
]

export const productOffers: ProductOffer[] = [
  { id: "product-interest", label: "Interest", description: "Earn up to 9% APY", icon: Percent },
  { id: "product-loan", label: "Loan", description: "Loan products tailored to you", icon: Landmark },
  { id: "product-insurance", label: "Insurance", description: "Insurance products tailored to you", icon: ShieldCheck },
]

export const wealthTotal = { amount: 80500, currency: "ETB" }

export const wealthBalances: WealthBalance[] = [
  { id: "wealth-cash", label: "Cash", amount: 75250, currency: "ETB", icon: Wallet },
  { id: "wealth-pockets", label: "Pockets", amount: 5250, currency: "ETB", icon: PiggyBank },
]

export const wealthPromo: WealthPromo = {
  id: "wealth-interest",
  label: "Interest",
  description: "Earn up to 9% APY",
  icon: Percent,
}

export const accountsSummary: AccountsSummary = { totalAmount: 218200, totalCurrency: "ETB", accountsCount: 3 }

export const accountCurrencies: AccountCurrency[] = [
  { id: "currency-etb", label: "Metro Wallet", code: "ETB", amount: 75000, currency: "ETB", convertedAmount: 75000, convertedCurrency: "ETB", isPrimary: true },
  { id: "currency-usd", label: "United States dollar", code: "USD", amount: 800, currency: "USD", convertedAmount: 123200, convertedCurrency: "ETB", flag: "/icons/dashboard/flag-usd.png" },
  { id: "currency-gbp", label: "British pound", code: "GBP", amount: 100, currency: "GBP", convertedAmount: 20000, convertedCurrency: "ETB", flag: "/icons/dashboard/flag-gbp.png" },
]
