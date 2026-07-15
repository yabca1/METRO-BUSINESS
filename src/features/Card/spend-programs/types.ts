export type SpendProgramStatus = "active" | "inactive"

export interface AttachedProgramCard {
  id: string
  cardholder: string
  status: "active" | "locked"
  spent: string
  limit: string
  period: string
  created: string
}

export interface SpendProgram {
  id: string
  name: string
  created: string
  createdBy: string
  status: SpendProgramStatus
  account: string
  currency: string
  dailyLimit: string
  monthlyLimit: string
  monthlySpent: string
  allTimeLimit: string
  attachedCards: AttachedProgramCard[]
}
