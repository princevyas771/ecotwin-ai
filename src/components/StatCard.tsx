interface StatCardProps {
  title: string
  value: string
  subtitle: string
}

export const StatCard = ({ title, value, subtitle }: StatCardProps) => {
  return (
    <article className="card stat-card" aria-label={title}>
      <h3>{title}</h3>
      <p className="stat-card__value">{value}</p>
      <p className="stat-card__subtitle">{subtitle}</p>
    </article>
  )
}
