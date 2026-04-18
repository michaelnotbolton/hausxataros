import { Link } from 'react-router-dom'
import styles from './WikiSectionCard.module.css'

interface WikiSectionCardProps {
  title: string
  routePath: string
  summary: string
  articleCount: number
}

export default function WikiSectionCard({
  title,
  routePath,
  summary,
  articleCount,
}: WikiSectionCardProps) {
  return (
    <article className={styles.card} data-testid="wiki-section-card">
      <div className={styles.eyebrow}>Vault Section</div>
      <h2 className={styles.title}>
        <Link className={styles.link} to={routePath}>{title}</Link>
      </h2>
      <p className={styles.summary}>{summary}</p>
      <p className={styles.meta}>{articleCount} {articleCount === 1 ? 'article' : 'articles'}</p>
    </article>
  )
}
