import type { ColumnDef } from "@/components/ui/DataTable"
import type { SpendProgram } from "../types"

const text = "text-fig-12 font-urbanist-medium text-brand-primary"
const limit = (value: string, period: string) => value === "-" ? "-" : (
  <span className="font-urbanist-semibold">{value}<span className="font-urbanist-regular"> / {period}</span></span>
)

export const spendProgramColumns: ColumnDef<SpendProgram>[] = [
  { id: "name", header: "Program", width: "1.55fr", sortable: true, cell: (row) => <span className="text-fig-14 font-urbanist-semibold text-brand-primary">{row.name}</span> },
  { id: "created", header: "Created", width: "1.08fr", sortable: true, cell: (row) => <span className={text}>{row.created}</span> },
  { id: "createdBy", header: "Created by", width: "1fr", sortable: true, cell: (row) => <span className={text}>{row.createdBy}</span> },
  { id: "status", header: "Status", width: ".68fr", sortable: true, cell: (row) => <span className="text-fig-12 font-urbanist-semibold capitalize text-brand-completed">{row.status}</span> },
  { id: "account", header: "Account", width: "1.18fr", sortable: true, cell: (row) => <span className={text}>{row.account}<span className="mx-1.5 text-brand-muted">{"\u2022"}</span>{row.currency}</span> },
  { id: "daily", header: "Daily limit", width: ".65fr", sortable: true, cell: (row) => <span className={text}>{row.dailyLimit}</span> },
  { id: "monthly", header: "Monthly limit", width: "1.2fr", sortable: true, cell: (row) => <span className={text}>{limit(row.monthlyLimit, "Monthly")}</span> },
  { id: "allTime", header: "All time limit", width: "1.08fr", sortable: true, cell: (row) => <span className={text}>{limit(row.allTimeLimit, "All time")}</span> },
]
