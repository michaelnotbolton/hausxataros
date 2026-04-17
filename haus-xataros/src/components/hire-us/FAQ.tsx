import { useState } from 'react'
import styles from './FAQ.module.css'

interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  items: FAQItem[]
}

export default function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className={styles.section} data-testid="faq">
      {items.map(({ question, answer }, i) => (
        <div className={styles.item} key={i} data-testid="faq-item">
          <button className={styles.trigger} onClick={() => setOpenIndex(openIndex === i ? null : i)}>
            {question}
          </button>
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
