// src/constants/roles.ts
import { SCOPES } from './scopes'

export const ROLE_SCOPES: Record<string, string[]> = {
  ADMIN:   Object.values(SCOPES),
  MANAGER: [SCOPES.INVOICES_READ, SCOPES.INVOICES_CREATE],
  VIEWER:  [SCOPES.INVOICES_READ],
}
