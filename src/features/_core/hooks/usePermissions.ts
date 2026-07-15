// src/features/_core/hooks/usePermissions.ts
import { useSession } from 'next-auth/react'

export function usePermissions() {
  const { data: session } = useSession()
  const scopes: string[] = session?.user?.scopes ?? []

  return {
    can: (scope: string) => scopes.includes(scope),
    canAll: (...requiredScopes: string[]) =>
      requiredScopes.every((s) => scopes.includes(s)),
    canAny: (...requiredScopes: string[]) =>
      requiredScopes.some((s) => scopes.includes(s)),
  }
}
