import { Link } from 'react-router-dom'
import Tag from '../ui/Tag'
import styles from './WikiEntryCard.module.css'

interface WikiEntryCardProps {
  title: string
  slug: string
  definition: string
  category: string
}

export default function WikiEntryCard({ title, slug, definition, category }: WikiEntryCardProps) {
  return (
    <article className={styles.card} data-testid="wiki-entry-card" data-category={category}>
      <Tag tone="muted">{category}</Tag>
      <h3 className={styles.title}>
        <Link className={styles.link} to={`/wiki/${slug}`}>{title}</Link>
      </h3>
      <p className={styles.definition} data-testid="entry-definition">{definition}</p>
    </article>
  )
}
