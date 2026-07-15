// src/features/Card/hooks.ts
import { useQuery, keepPreviousData } from '@tanstack/react-query'
import { cardApi } from './api'
import type { CardListParams } from './types'

export const CARD_KEYS = {
  all: ['cards'] as const,
  list: (params?: CardListParams) => ['cards', 'list', params] as const,
  detail: (id: string) => ['cards', 'detail', id] as const,
}

export function useCards(params?: CardListParams) {
  return useQuery({
    queryKey: CARD_KEYS.list(params),
    queryFn: () => cardApi.getAll(params),
    placeholderData: keepPreviousData,
  })
}

export function useCard(id: string) {
  return useQuery({
    queryKey: CARD_KEYS.detail(id),
    queryFn: () => cardApi.getById(id),
    enabled: !!id,
  })
}
