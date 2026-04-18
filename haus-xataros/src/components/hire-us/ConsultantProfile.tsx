import { Link } from 'react-router-dom'
import styles from './ConsultantProfile.module.css'

interface ConsultantProfileProps {
  name: string
  alterEgo: string
  tagline?: string
  bio: string
  philosophy: string
  href?: string
  ctaLabel?: string
}

export default function ConsultantProfile({
  name,
  alterEgo,
  tagline,
  bio,
  philosophy,
  href,
  ctaLabel,
}: ConsultantProfileProps) {
  return (
    <section className={styles.profile} data-testid="consultant-profile">
      <p className={styles.kicker}>Lead Consultant</p>
      <h2 className={styles.name}>{name} / {alterEgo}</h2>
      {tagline && <p className={styles.tagline}>{tagline}</p>}
      <p className={styles.bio} data-testid="consultant-bio">{bio}</p>
      <p className={styles.philosophy} data-testid="consultant-philosophy">{philosophy}</p>
      {href && ctaLabel && (
        <Link className={styles.link} to={href}>{ctaLabel}</Link>
      )}
    </section>
  )
}
