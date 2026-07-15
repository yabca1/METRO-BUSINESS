import type { SortState } from "@/components/ui/DataTable"
import type { SpendProgram } from "./types"

const valueFor = (program: SpendProgram, column: string): string | number => {
  switch (column) {
    case "name": return program.name
    case "created": return program.created
    case "createdBy": return program.createdBy
    case "status": return program.status
    case "account": return program.account
    case "daily": return amount(program.dailyLimit)
    case "monthly": return amount(program.monthlyLimit)
    case "allTime": return amount(program.allTimeLimit)
    default: return ""
  }
}

const amount = (value: string) => value === "-" ? -1 : Number(value.replace(/[^\d.]/g, ""))

export function sortSpendPrograms(rows: SpendProgram[], sort: SortState | null) {
  if (!sort) return rows

  return [...rows].sort((left, right) => {
    const a = valueFor(left, sort.id)
    const b = valueFor(right, sort.id)
    const result = typeof a === "number" && typeof b === "number"
      ? a - b
      : String(a).localeCompare(String(b))
    return sort.direction === "asc" ? result : -result
  })
}
