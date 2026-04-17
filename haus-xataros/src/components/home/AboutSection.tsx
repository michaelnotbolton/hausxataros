import styles from './AboutSection.module.css'

interface AboutSectionProps {
  paragraphs: string[]
}

export default function AboutSection({ paragraphs }: AboutSectionProps) {
  return (
    <section className={styles.section} data-testid="about-section">
      <div className={styles.header}>
        <p className={styles.eyebrow}>Manifesto</p>
        <h2 className={styles.title}>What We Build</h2>
      </div>
      {paragraphs.map((text, i) => (
        <p className={styles.paragraph} key={i}>{text}</p>
      ))}
    </section>
  )
}
