import type { RepeatFrequency } from './types'

export const REPEAT_LABELS: Record<RepeatFrequency, string> = {
  never: 'Never',
  weekly: 'Weekly',
  biweekly: 'Biweekly',
  monthly: 'Monthly',
  quarterly: 'Quarterly',
}

export function repeatWeekday(date: Date): string {
  return date.toLocaleDateString('en-US', { weekday: 'long' })
}

export function repeatDescription(frequency: RepeatFrequency, date: Date): string {
  const weekday = repeatWeekday(date)
  const day = date.getDate()
  switch (frequency) {
    case 'never':
      return `On ${formatShortDate(date)} only`
    case 'weekly':
      return `Every ${weekday}`
    case 'biweekly':
      return `Every two weeks on ${weekday}`
    case 'monthly':
      return `Day ${day} of every month`
    case 'quarterly':
      return `Day ${day}, of every 3 month`
  }
}

export function formatShortDate(date: Date): string {
  return date.toLocaleDateString('en-US', { day: 'numeric', month: 'short' })
}

export function formatLongDate(date: Date): string {
  return date.toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' })
}

export function formatMediumDate(date: Date): string {
  return date.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })
}

export function repeatsSummary(frequency: RepeatFrequency, endDate: string): string {
  if (frequency === 'never') return ''
  const end = endDate ? formatMediumDate(new Date(endDate)) : ''
  return end ? `Repeats ${REPEAT_LABELS[frequency].toLowerCase()} until ${end}` : `Repeats ${REPEAT_LABELS[frequency].toLowerCase()}`
}
