import styles from './Hero.module.css'

interface HeroProps {
  heading: string
  subheading: string
}

export default function Hero({ heading, subheading }: HeroProps) {
  return (
    <section className={styles.hero} data-testid="hero">
      <div className={styles.inner}>
        <span className={styles.kicker}>Creative Studio and Drag Collective</span>
        <h1 className={styles.heading}>{heading}</h1>
        <p className={styles.subheading}>{subheading}</p>
      </div>
    </section>
  )
}
