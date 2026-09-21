import type { BuildingStatus, Severity } from '../types'

type BadgeTone = BuildingStatus | Severity

interface StatusBadgeProps {
  tone: BadgeTone
  label: string
}

export const StatusBadge = ({ tone, label }: StatusBadgeProps) => {
  return <span className={`badge badge--${tone}`}>{label}</span>
}
