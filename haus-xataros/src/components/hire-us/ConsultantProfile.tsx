import styles from './ConsultantProfile.module.css'

interface ConsultantProfileProps {
  name: string
  alterEgo: string
  bio: string
  philosophy: string
}

export default function ConsultantProfile({
  name,
  alterEgo,
  bio,
  philosophy,
}: ConsultantProfileProps) {
  return (
    <section className={styles.profile} data-testid="consultant-profile">
      <p className={styles.kicker}>Lead Consultant</p>
      <h2 className={styles.name}>{name} / {alterEgo}</h2>
      <p className={styles.bio} data-testid="consultant-bio">{bio}</p>
      <p className={styles.philosophy} data-testid="consultant-philosophy">{philosophy}</p>
    </section>
  )
}
