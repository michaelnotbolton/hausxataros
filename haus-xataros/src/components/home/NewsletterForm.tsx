import { useState } from 'react'
import styles from './NewsletterForm.module.css'

interface NewsletterFormProps {
  onSubmit?: (email: string) => void
}

export default function NewsletterForm({ onSubmit }: NewsletterFormProps) {
  const [email, setEmail] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    onSubmit?.(email)
  }

  return (
    <form className={styles.form} data-testid="newsletter-form" onSubmit={handleSubmit}>
      <div className={styles.copy}>
        <p className={styles.eyebrow}>Stay in Orbit</p>
        <label className={styles.label} htmlFor="newsletter-email">Email</label>
      </div>
      <input
        className={styles.input}
        id="newsletter-email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className={styles.button} type="submit">Subscribe</button>
    </form>
  )
}
