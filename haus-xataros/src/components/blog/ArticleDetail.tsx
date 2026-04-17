import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import styles from './ArticleDetail.module.css'

interface RelatedArticle {
  title: string
  slug: string
}

interface ArticleDetailProps {
  title: string
  author: string
  date: string
  body: ReactNode
  relatedArticles: RelatedArticle[]
}

export default function ArticleDetail({
  title,
  author,
  date,
  body,
  relatedArticles,
}: ArticleDetailProps) {
  return (
    <article className={styles.article} data-testid="article-detail">
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.author} data-testid="author-byline">{author}</p>
      <time className={styles.date} dateTime={date}>{new Date(date).toLocaleDateString()}</time>

      <div className={styles.body} data-testid="article-body">
        {body}
      </div>

      <a className={styles.cta} href="#subscribe">Subscribe to This Series</a>

      <section className={styles.related} data-testid="related-articles">
        <h2 className={styles.relatedTitle}>Related Articles</h2>
        {relatedArticles.map(({ title, slug }) => (
          <article className={styles.relatedCard} key={slug} data-testid="article-card">
            <Link className={styles.relatedLink} to={`/article/${slug}`}>{title}</Link>
          </article>
        ))}
      </section>
    </article>
  )
}
