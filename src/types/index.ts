export type ResourceKey = 'electricity' | 'water' | 'waste'

export type Severity = 'low' | 'medium' | 'high'

export type BuildingStatus = 'optimal' | 'watch' | 'critical'

export interface DailyMetric {
  date: string
  electricity: number
  water: number
  waste: number
}

export interface Building {
  id: string
  name: string
  zone: string
  type: string
  occupancy: number
  status: BuildingStatus
  currentStatus: string
  metrics: DailyMetric[]
}

export interface EfficiencyIndicator {
  label: string
  value: string
  trend: string
  direction: 'positive' | 'negative' | 'neutral'
}

export interface Anomaly {
  id: string
  buildingId: string
  resource: ResourceKey
  severity: Severity
  date: string
  currentValue: number
  baselineValue: number
  deviationPercent: number
  explanation: string
}

export interface Alert {
  id: string
  anomalyId: string
  title: string
  description: string
  severity: Severity
  buildingId: string
  resource: ResourceKey
  timestamp: string
}

export interface AIInsight {
  id: string
  anomalyId: string
  title: string
  summary: string
  recommendations: string[]
  disclaimer: string
}

export interface ActivityItem {
  id: string
  timestamp: string
  message: string
  category: 'system' | 'operations' | 'sustainability'
}
