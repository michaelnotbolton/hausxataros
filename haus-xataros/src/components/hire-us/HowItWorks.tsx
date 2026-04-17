import styles from './HowItWorks.module.css'

interface Step {
  number: number
  description: string
}

interface HowItWorksProps {
  steps: Step[]
}

export default function HowItWorks({ steps }: HowItWorksProps) {
  return (
    <section className={styles.section} data-testid="how-it-works">
      <h2 className={styles.title}>How It Works</h2>
      <ol className={styles.list}>
        {steps.map(({ number, description }) => (
          <li className={styles.step} key={number} data-testid="step">
            <span className={styles.number}>{number}</span>
            <p className={styles.description}>{description}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
