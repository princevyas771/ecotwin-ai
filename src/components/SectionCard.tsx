import type { ReactNode } from 'react'

interface SectionCardProps {
  title: string
  description?: string
  children: ReactNode
}

export const SectionCard = ({ title, description, children }: SectionCardProps) => {
  return (
    <section className="card section-card">
      <header className="section-card__header">
        <h3>{title}</h3>
        {description ? <p>{description}</p> : null}
      </header>
      {children}
    </section>
  )
}
