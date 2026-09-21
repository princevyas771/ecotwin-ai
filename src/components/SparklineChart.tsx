interface SparklineChartProps {
  values: number[]
  label: string
}

const getNormalized = (values: number[]) => {
  const min = Math.min(...values)
  const max = Math.max(...values)
  if (max === min) {
    return values.map(() => 50)
  }

  return values.map((value) => 100 - ((value - min) / (max - min)) * 100)
}

export const SparklineChart = ({ values, label }: SparklineChartProps) => {
  if (values.length === 0) {
    return <p className="empty-state">No chart data available.</p>
  }

  const normalized = getNormalized(values)
  const step = 100 / Math.max(values.length - 1, 1)
  const points = normalized.map((value, index) => `${index * step},${value}`).join(' ')

  return (
    <figure className="sparkline" aria-label={label}>
      <svg viewBox="0 0 100 100" role="img" aria-hidden="true">
        <polyline points={points} className="sparkline__line" />
      </svg>
      <figcaption>{label}</figcaption>
    </figure>
  )
}
