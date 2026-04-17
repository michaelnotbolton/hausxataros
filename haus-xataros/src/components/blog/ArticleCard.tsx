import { Link } from 'react-router-dom'
import Tag from '../ui/Tag'
import styles from './ArticleCard.module.css'

interface ArticleCardProps {
  title: string
  date: string
  excerpt: string
  readTime: string
  categories: string[]
  slug: string
  author: string
}

export default function ArticleCard({
  title,
  date,
  excerpt,
  readTime,
  categories,
  slug,
}: ArticleCardProps) {
  return (
    <article className={styles.card} data-testid="article-card">
      <h2 className={styles.title}><Link className={styles.link} to={`/article/${slug}`}>{title}</Link></h2>
      <time className={styles.date} dateTime={date}>{new Date(date).toLocaleDateString()}</time>
      <p className={styles.excerpt} data-testid="article-excerpt">{excerpt}</p>
      <Tag className={styles.readTime} data-testid="read-time" tone="muted">{readTime}</Tag>
      <div className={styles.tags}>
        {categories.map((cat) => (
          <Tag key={cat} data-testid="category-tag">{cat}</Tag>
        ))}
      </div>
    </article>
  )
}
