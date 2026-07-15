import type { AttachedProgramCard, SpendProgram } from "./types"

const attachedCards: AttachedProgramCard[] = Array.from({ length: 4 }, (_, index) => ({
  id: `attached-${index + 1}`,
  cardholder: "Abebe Kebede",
  status: "active",
  spent: "0 ETB",
  limit: "30,000 ETB",
  period: "Monthly",
  created: "Today, 2:46 AM",
}))

export const SPEND_PROGRAM_COUNT = 3

export const spendPrograms: SpendProgram[] = [
  {
    id: "ergonomics", name: "Ergonomics", created: "Today, 2:46 AM",
    createdBy: "Abebe Kebede", status: "active", account: "Main office", currency: "ETB",
    dailyLimit: "-", monthlyLimit: "30,000 ETB", monthlySpent: "11,000 ETB",
    allTimeLimit: "-", attachedCards,
  },
  {
    id: "marketing", name: "Marketing", created: "Today, 2:46 AM",
    createdBy: "Abebe Kebede", status: "active", account: "Main office", currency: "ETB",
    dailyLimit: "-", monthlyLimit: "-", monthlySpent: "0 ETB",
    allTimeLimit: "30,000 ETB", attachedCards,
  },
]
