// src/features/Transfer/hooks.ts
import { useQuery, useMutation, useQueryClient, keepPreviousData } from '@tanstack/react-query'
import { transferApi } from './api'
import type { CreateTransferDto, TransferListParams } from './types'

export const TRANSFER_KEYS = {
  all: ['transfers'] as const,
  list: (params?: TransferListParams) => ['transfers', 'list', params] as const,
  detail: (id: string) => ['transfers', 'detail', id] as const,
}

export function useTransfers(params?: TransferListParams) {
  return useQuery({
    queryKey: TRANSFER_KEYS.list(params),
    queryFn: () => transferApi.getAll(params),
    // Keep the previous page's rows on screen while the next page loads,
    // so pagination/filtering doesn't flash a skeleton on every change.
    placeholderData: keepPreviousData,
  })
}

export function useTransfer(id: string) {
  return useQuery({
    queryKey: TRANSFER_KEYS.detail(id),
    queryFn: () => transferApi.getById(id),
    enabled: !!id,
  })
}

export function useCreateTransfer() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (data: CreateTransferDto) => transferApi.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: TRANSFER_KEYS.all })
    },
  })
}

export function useDeleteTransfer() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: transferApi.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: TRANSFER_KEYS.all })
    },
  })
}
