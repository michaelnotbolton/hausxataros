import Tag from '../ui/Tag'
import styles from './ProjectCard.module.css'

interface Download {
  label: string
  href: string
}

interface ProjectCardProps {
  title: string
  description: string
  category: string
  format: string
  version: string
  downloads: Download[]
  seriesProgression?: string[]
}

export default function ProjectCard({
  title,
  description,
  category,
  format,
  version,
  downloads,
  seriesProgression,
}: ProjectCardProps) {
  return (
    <article className={styles.card} data-testid="project-card" data-category={category} data-format={format}>
      <div className={styles.meta}>
        <Tag tone="muted">{category}</Tag>
        <Tag tone="muted">{format}</Tag>
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
            <a className={styles.downloadLink} href={href} download>{label}</a>
          </li>
        ))}
      </ul>
    </article>
  )
}
