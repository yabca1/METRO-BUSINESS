// src/features/Recipient/hooks.ts
import { useQuery, keepPreviousData } from '@tanstack/react-query'
import { recipientApi } from './api'
import type { RecipientListParams } from './types'

export const RECIPIENT_KEYS = {
  all: ['recipients'] as const,
  list: (params?: RecipientListParams) => ['recipients', 'list', params] as const,
  detail: (id: string) => ['recipients', 'detail', id] as const,
}

export function useRecipients(params?: RecipientListParams) {
  return useQuery({
    queryKey: RECIPIENT_KEYS.list(params),
    queryFn: () => recipientApi.getAll(params),
    placeholderData: keepPreviousData,
  })
}

export function useRecipient(id: string) {
  return useQuery({
    queryKey: RECIPIENT_KEYS.detail(id),
    queryFn: () => recipientApi.getById(id),
    enabled: !!id,
  })
}
