import type { MetroNotification } from "./types"

export const INITIAL_NOTIFICATIONS: MetroNotification[] = [
  { id: "transfer-approved", kind: "transfer", title: "Transfer approved", description: "Selam approved Salary Payment for 5 recipients.", time: "2 min", unread: true, meta: "50,000 ETB" },
  { id: "card-limit", kind: "card", title: "Card limit at 82%", description: "Virtual card \u2022 1234 is approaching its monthly limit.", time: "18 min", unread: true, meta: "24,600 ETB" },
  { id: "team-member", kind: "team", title: "New teammate joined", description: "Marta accepted your invite to Metro Business.", time: "1 hr", unread: true, meta: "Team" },
  { id: "security", kind: "security", title: "New sign-in verified", description: "Chrome on Linux \u2022 Addis Ababa, Ethiopia", time: "Yesterday", unread: false, meta: "Secure" },
]
