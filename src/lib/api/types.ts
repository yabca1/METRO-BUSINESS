// src/lib/api/types.ts
export interface PaginatedResponse<T> {
  items: T[]
  total: number
  page: number
  pageSize: number
}

export class ApiError extends Error {
  constructor(message: string, public status?: number) {
    super(message)
    this.name = 'ApiError'
  }
}
