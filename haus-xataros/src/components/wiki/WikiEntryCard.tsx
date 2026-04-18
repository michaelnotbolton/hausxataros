import { Link } from 'react-router-dom'
import Tag from '../ui/Tag'
import styles from './WikiEntryCard.module.css'

interface WikiEntryCardProps {
  title: string
  routePath: string
  summary: string
  sectionTitle: string
}

export default function WikiEntryCard({
  title,
  routePath,
  summary,
  sectionTitle,
}: WikiEntryCardProps) {
  return (
    <article className={styles.card} data-testid="wiki-article-card">
      <Tag tone="muted">{sectionTitle}</Tag>
      <h3 className={styles.title}>
        <Link className={styles.link} to={routePath}>{title}</Link>
      </h3>
      <p className={styles.definition}>{summary}</p>
    </article>
  )
}
