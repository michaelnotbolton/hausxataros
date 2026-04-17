import Tag from '../ui/Tag'
import styles from './ServiceCard.module.css'

interface ServiceCardProps {
  name: string
  description: string
  duration: string
  price: string
}

export default function ServiceCard({ name, description, duration, price }: ServiceCardProps) {
  return (
    <article className={styles.card} data-testid="service-card">
      <h2 className={styles.title}>{name}</h2>
      <p className={styles.description} data-testid="service-description">{description}</p>
      <div className={styles.meta}>
        <Tag data-testid="service-duration" tone="muted">{duration}</Tag>
        <Tag data-testid="service-price">{price}</Tag>
      </div>
    </article>
  )
}
