import { useState } from 'react'
import SelectablePill from '../ui/SelectablePill'
import styles from './FAQ.module.css'

interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  items: FAQItem[]
}

export default function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className={styles.section} data-testid="faq">
      <div className={styles.header}>
        <p className={styles.kicker}>Q&A</p>
        <h2 className={styles.title}>Questions clients usually ask before we begin</h2>
      </div>
      {items.map(({ question, answer }, i) => (
        <div className={styles.item} key={i} data-testid="faq-item">
          <SelectablePill
            className={styles.trigger}
            selected={openIndex === i}
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            {question}
          </SelectablePill>
          <p
            className={styles.answer}
            hidden={openIndex !== i}
          >
            {answer}
          </p>
        </div>
      ))}
    </section>
  )
}
