import type { Alert, Anomaly, Building } from '../types'

export const getLatestMetricTotals = (buildings: Building[]) => {
  return buildings.reduce(
    (totals, building) => {
      const latest = building.metrics.at(-1)
      if (!latest) {
        return totals
      }

      totals.electricity += latest.electricity
      totals.water += latest.water
      totals.waste += latest.waste
      return totals
    },
    { electricity: 0, water: 0, waste: 0 },
  )
}

export const buildAlertsFromAnomalies = (anomalies: Anomaly[]): Alert[] => {
  return anomalies.map((anomaly, index) => ({
    id: `alert-${index + 1}`,
    anomalyId: anomaly.id,
    title: `${anomaly.resource.toUpperCase()} anomaly detected`,
    description: anomaly.explanation,
    severity: anomaly.severity,
    buildingId: anomaly.buildingId,
    resource: anomaly.resource,
    timestamp: `${anomaly.date}T11:00:00Z`,
  }))
}

export interface SimulationResult {
  reductionPercent: number
  currentDailyElectricity: number
  projectedDailyElectricity: number
  dailySavingsKwh: number
  annualSavingsKwh: number
  annualSavingsUsd: number
  annualCo2ReductionTons: number
}

const ELECTRICITY_COST_USD = 0.12
const CO2_FACTOR_TONS_PER_KWH = 0.0004

export const simulateElectricityReduction = (
  buildings: Building[],
  reductionPercent: number,
): SimulationResult => {
  const { electricity } = getLatestMetricTotals(buildings)
  const sanitizedReduction = Math.max(0, Math.min(50, reductionPercent))
  const projectedDaily = electricity * (1 - sanitizedReduction / 100)
  const dailySavings = electricity - projectedDaily

  return {
    reductionPercent: sanitizedReduction,
    currentDailyElectricity: electricity,
    projectedDailyElectricity: Number(projectedDaily.toFixed(2)),
    dailySavingsKwh: Number(dailySavings.toFixed(2)),
    annualSavingsKwh: Number((dailySavings * 365).toFixed(2)),
    annualSavingsUsd: Number((dailySavings * 365 * ELECTRICITY_COST_USD).toFixed(2)),
    annualCo2ReductionTons: Number((dailySavings * 365 * CO2_FACTOR_TONS_PER_KWH).toFixed(2)),
  }
}
