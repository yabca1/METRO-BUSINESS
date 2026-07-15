// src/components/ErrorBoundary.tsx
'use client'
import { Component, type ReactNode } from 'react'

interface State { hasError: boolean; error?: Error }

export class ErrorBoundary extends Component<
  { children: ReactNode; fallback?: ReactNode },
  State
> {
  state: State = { hasError: false }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? (
        <div className="p-6 text-sm text-red-600">
          Something went wrong. <button onClick={() => this.setState({ hasError: false })}>
            Try again
          </button>
        </div>
      )
    }
    return this.props.children
  }
}
