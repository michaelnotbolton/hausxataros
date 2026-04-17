import ContactForm from '../components/contact/ContactForm'

export default function Contact() {
  return (
    <>
      <h1>Contact Us</h1>
      <p>
        We'd love to hear from you. Use the form below or reach us directly at{' '}
        <a data-testid="contact-email" href="mailto:hello@hausxataros.com">hello@hausxataros.com</a>.
      </p>
      <p data-testid="response-time">We aim to respond within 48 hours.</p>

      <ContactForm />
    </>
  )
}
