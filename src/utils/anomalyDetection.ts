import type { Anomaly, Building, ResourceKey, Severity } from '../types'

const RESOURCES: ResourceKey[] = ['electricity', 'water', 'waste']

const severityFromDeviation = (deviationPercent: number): Severity => {
  if (deviationPercent >= 25) {
    return 'high'
  }
  if (deviationPercent >= 15) {
    return 'medium'
  }
  return 'low'
}

const toTitle = (value: ResourceKey): string => value.charAt(0).toUpperCase() + value.slice(1)

export const detectAnomalies = (buildingList: Building[]): Anomaly[] => {
  const anomalies: Anomaly[] = []

  for (const building of buildingList) {
    for (const resource of RESOURCES) {
      if (building.metrics.length < 4) {
        continue
      }

      const latest = building.metrics.at(-1)
      if (!latest) {
        continue
      }

      const historical = building.metrics.slice(0, -1).map((metric) => metric[resource])
      const baseline = historical.reduce((sum, value) => sum + value, 0) / historical.length

      const variance =
        historical.reduce((sum, value) => sum + (value - baseline) ** 2, 0) / historical.length
      const stdDev = Math.sqrt(variance)
      const threshold = baseline + Math.max(stdDev * 1.6, baseline * 0.08)
      const latestValue = latest[resource]

      const prev = building.metrics.at(-2)
      const prevValue = prev ? prev[resource] : baseline
      const suddenSpike = latestValue > prevValue * 1.12

      if (latestValue > threshold || suddenSpike) {
        const deviationPercent = ((latestValue - baseline) / baseline) * 100
        const severity = severityFromDeviation(deviationPercent)

        anomalies.push({
          id: `${building.id}-${resource}-${latest.date}`,
          buildingId: building.id,
          resource,
          severity,
          date: latest.date,
          currentValue: latestValue,
          baselineValue: Number(baseline.toFixed(2)),
          deviationPercent: Number(deviationPercent.toFixed(1)),
          explanation: `${toTitle(resource)} usage is ${deviationPercent.toFixed(1)}% above the building baseline and exceeds deterministic threshold checks.`,
        })
      }
    }
  }

  return anomalies.sort((a, b) => b.deviationPercent - a.deviationPercent)
}
