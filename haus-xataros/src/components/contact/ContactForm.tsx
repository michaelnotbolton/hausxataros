import { useState } from 'react'
import styles from './ContactForm.module.css'

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

interface ContactFormProps {
  onSubmit?: (data: ContactFormData) => void
  subjectLabel?: string
  messageLabel?: string
  submitLabel?: string
}

export default function ContactForm({
  onSubmit,
  subjectLabel = 'Subject',
  messageLabel = 'Message',
  submitLabel = 'Send',
}: ContactFormProps) {
  const [fields, setFields] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    onSubmit?.(fields)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className={styles.confirmation}>
        <p className={styles.confirmationText} data-testid="confirmation-message">
          Thank you — we'll be in touch within 48 hours.
        </p>
      </div>
    )
  }

  return (
    <form className={styles.form} data-testid="contact-form" onSubmit={handleSubmit}>
      <label className={styles.label} htmlFor="contact-name">Name</label>
      <input className={styles.input} id="contact-name" name="name" type="text" value={fields.name} onChange={handleChange} />

      <label className={styles.label} htmlFor="contact-email">Email</label>
      <input className={styles.input} id="contact-email" name="email" type="email" value={fields.email} onChange={handleChange} />

      <label className={styles.label} htmlFor="contact-subject">{subjectLabel}</label>
      <input className={styles.input} id="contact-subject" name="subject" type="text" value={fields.subject} onChange={handleChange} />

      <label className={styles.label} htmlFor="contact-message">{messageLabel}</label>
      <textarea className={styles.textarea} id="contact-message" name="message" value={fields.message} onChange={handleChange} />

      <button className={styles.button} type="submit">{submitLabel}</button>
    </form>
  )
}
