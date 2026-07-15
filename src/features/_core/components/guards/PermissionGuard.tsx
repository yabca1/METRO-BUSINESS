// src/features/_core/components/guards/PermissionGuard.tsx
'use client'

import { usePermissions } from '../../hooks/usePermissions'

interface Props {
  scope: string
  fallback?: React.ReactNode
  children: React.ReactNode
}

export function PermissionGuard({ scope, fallback = null, children }: Props) {
  const { can } = usePermissions()
  return can(scope) ? <>{children}</> : <>{fallback}</>
}
