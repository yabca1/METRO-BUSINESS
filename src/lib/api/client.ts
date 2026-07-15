// src/lib/api/client.ts
import axios from 'axios'
import { ApiError } from './types'

// Simple helper to get token from cookies on client-side if needed
const getSessionToken = () => {
  if (typeof window === 'undefined') return null
  const match = document.cookie.match(/(^| )next-auth.session-token=([^;]+)/)
  return match ? match[2] : null
}

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 15_000,
})

// Attach auth token from session
apiClient.interceptors.request.use((config) => {
  const token = getSessionToken() // your auth util
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

// Normalize errors
apiClient.interceptors.response.use(
  (res) => res.data,
  (error) => {
    const message = error.response?.data?.message ?? 'Something went wrong'
    return Promise.reject(new ApiError(message, error.response?.status))
  }
)
