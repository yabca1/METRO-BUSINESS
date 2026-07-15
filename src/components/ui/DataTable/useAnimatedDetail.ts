'use client'

import * as React from "react"

export function useAnimatedDetail<T>() {
  const [item, setItem] = React.useState<T | null>(null)
  const [closing, setClosing] = React.useState(false)

  const open = (nextItem: T) => {
    setItem(nextItem)
    setClosing(false)
  }

  const close = () => setClosing(true)

  const finishClose = () => {
    setItem(null)
    setClosing(false)
  }

  return { item, closing, open, close, finishClose }
}
