import type { ColumnDef } from "@/components/ui/DataTable"
import { DetailAvatar } from "@/components/ui/DetailPanel"
import type { Recipient } from "../types"

/** Dark avatar with Poppins initials + small Orbitron "M" Metro badge, per Figma. */
function RecipientAvatar({ recipient }: { recipient: Recipient }) {
  return (
    <DetailAvatar
      initials={recipient.initials}
      initialsClassName="font-poppins-medium text-fig-20 font-medium tracking-tight"
      mark={<span className="font-orbitron text-fig-7 font-bold leading-none text-brand-white">M</span>}
    />
  )
}

function Identity({ recipient }: { recipient: Recipient }) {
  return (
    <span className="flex items-center gap-3">
      <RecipientAvatar recipient={recipient} />
      <span className="min-w-0 truncate font-urbanist-semibold text-fig-14 font-semibold text-brand-primary">
        {recipient.name}
      </span>
    </span>
  )
}

const cellText = "font-urbanist-medium text-fig-12 font-medium text-brand-primary"

export const recipientColumns: ColumnDef<Recipient>[] = [
  {
    id: "identity",
    header: "Recipient",
    width: "1.8fr",
    cell: (recipient) => <Identity recipient={recipient} />,
  },
  {
    id: "account",
    header: "Accounts",
    width: "1.2fr",
    align: "right",
    sortable: true,
    cell: (recipient) => <span className={cellText}>{recipient.account}</span>,
  },
  {
    id: "paymentDetail",
    header: "Payment detail",
    width: "1.5fr",
    align: "right",
    cell: (recipient) => <span className={cellText}>{recipient.paymentDetail}</span>,
  },
  {
    id: "type",
    header: "Type",
    width: "1fr",
    align: "right",
    sortable: true,
    cell: (recipient) => <span className={cellText}>{recipient.type}</span>,
  },
]
