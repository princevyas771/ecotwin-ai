import type { AIInsight, Anomaly, Building } from '../types'

const resourceSuggestion: Record<Anomaly['resource'], string[]> = {
  electricity: [
    'Shift non-critical HVAC loads to off-peak windows.',
    'Validate temperature setpoints and occupancy scheduling for this building.',
    'Prioritize preventive maintenance for high-draw equipment clusters.',
  ],
  water: [
    'Inspect plumbing and fixture telemetry for sustained nighttime flow.',
    'Introduce targeted leak testing in high-consumption wings.',
    'Enable short-interval metering for suspected utility lines.',
  ],
  waste: [
    'Audit waste segregation compliance in this building.',
    'Introduce localized recycling prompts at high-volume disposal zones.',
    'Coordinate with facilities to rebalance collection frequency.',
  ],
}

export const generateDemoInsights = (anomalies: Anomaly[], buildingMap: Map<string, Building>): AIInsight[] => {
  return anomalies.map((anomaly) => {
    const building = buildingMap.get(anomaly.buildingId)
    const buildingName = building?.name ?? anomaly.buildingId

    return {
      id: `insight-${anomaly.id}`,
      anomalyId: anomaly.id,
      title: `Demo AI insight: ${buildingName} ${anomaly.resource} pattern`,
      summary: `This demo insight indicates ${anomaly.resource} behavior in ${buildingName} is ${anomaly.deviationPercent}% above deterministic baseline. Pattern suggests an operational issue rather than random fluctuation.`,
      recommendations: resourceSuggestion[anomaly.resource],
      disclaimer:
        'AI-generated demo insight (placeholder). Replace this service with Amazon Bedrock inference during AWS integration.',
    }
  })
}
