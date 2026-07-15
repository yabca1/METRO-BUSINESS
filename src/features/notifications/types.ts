export type NotificationKind = "transfer" | "card" | "team" | "security"

export interface MetroNotification {
  id: string
  kind: NotificationKind
  title: string
  description: string
  time: string
  unread: boolean
  meta?: string
}
