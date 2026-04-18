import Tag from '../ui/Tag'
import styles from './ProjectCard.module.css'
import { getConsultantByAuthorKey } from '../../data/consultants'

interface Download {
  label: string
  href: string
}

interface ProjectCardProps {
  title: string
  description: string
  category: string
  format: string
  authorKey: string
  version: string
  downloads: Download[]
  seriesProgression?: string[]
  activeAuthor?: string | null
}

export default function ProjectCard({
  title,
  description,
  category,
  format,
  authorKey,
  version,
  downloads,
  seriesProgression,
  activeAuthor,
}: ProjectCardProps) {
  const basePath = import.meta.env.BASE_URL
  const author = getConsultantByAuthorKey(authorKey)
  const authorSelected = Boolean(activeAuthor && activeAuthor === author?.name)

  return (
    <article
      className={styles.card}
      data-testid="project-card"
      data-category={category}
      data-format={format}
      data-author={author?.name}
      data-author-selected={authorSelected}
    >
      <div className={styles.meta}>
        <Tag tone="muted">{category}</Tag>
        <Tag tone="muted">{format}</Tag>
        {author && <Tag tone={authorSelected ? 'gold' : 'muted'}>{author.name}</Tag>}
        <Tag data-testid="version-label">{version}</Tag>
      </div>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      {seriesProgression && seriesProgression.length > 0 && (
        <ol className={styles.series} data-testid="series-progression">
          {seriesProgression.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      )}
      <ul className={styles.downloads}>
        {downloads.map(({ label, href }) => (
          <li key={label}>
            <a
              className={styles.downloadLink}
              href={`${basePath}${href.replace(/^\/+/, '')}`}
              download
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </article>
  )
}
