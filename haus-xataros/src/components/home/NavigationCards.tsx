import { Link } from 'react-router-dom'
import styles from './NavigationCards.module.css'

interface NavigationCard {
  label: string
  to: string
  description: string
}

interface NavigationCardsProps {
  cards: NavigationCard[]
}

export default function NavigationCards({ cards }: NavigationCardsProps) {
  return (
    <div className={styles.grid} data-testid="navigation-cards">
      {cards.map(({ label, to, description }) => (
        <article className={styles.card} key={to}>
          <Link className={styles.link} to={to}>{label}</Link>
          <p className={styles.description}>{description}</p>
        </article>
      ))}
    </div>
  )
}
