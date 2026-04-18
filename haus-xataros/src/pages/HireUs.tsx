import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import ConsultantProfile from '../components/hire-us/ConsultantProfile'
import ServiceCard from '../components/hire-us/ServiceCard'
import HowItWorks from '../components/hire-us/HowItWorks'
import FAQ from '../components/hire-us/FAQ'
import ContactForm from '../components/contact/ContactForm'
import { services, howItWorksSteps, faqs } from '../data/services'
import { consultants } from '../data/consultants'
import styles from './HireUs.module.css'

export default function HireUs() {
  const [searchParams] = useSearchParams()
  const consultant = consultants[0]
  const consultantOptions = useMemo(
    () => consultants.map((item) => ({ label: item.name, value: item.slug })),
    [],
  )
  const defaultConsultant = searchParams.get('consultant') ?? ''

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.kicker}>Hire Us</p>
        <h1>Story-led consulting for projects that need clarity, structure, and a sharper point of view.</h1>
        <p className={styles.lede}>
          We bring narrative strategy, performance instinct, and queer creative rigor to help you
          shape work that feels intentional on the page, in the room, and in the hands of your audience.
        </p>
      </section>

      <ConsultantProfile
        name={consultant.name}
        alterEgo={consultant.alterEgo}
        tagline={consultant.tagline}
        bio={consultant.shortBio}
        philosophy={consultant.overview[0]}
        href={`/${consultant.slug}`}
        ctaLabel={`Meet ${consultant.name}`}
      />

      <HowItWorks steps={howItWorksSteps} />

      <section className={styles.services}>
        <h2>Our Services</h2>
        <div className={styles.serviceGrid}>
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              name={service.title}
              description={service.description}
              duration={service.duration}
              price={service.price}
            />
          ))}
        </div>
      </section>

      <section className={styles.booking} id="book-discovery">
        <div className={styles.bookingIntro}>
          <h2>Book a Discovery Call</h2>
          <p>
            Start with a short conversation so we can understand the project, the pressure points,
            and who on our team is the right fit.
          </p>
          <a href="https://calendly.com/hausxataros" rel="noopener noreferrer">
            Schedule a Consultation
          </a>
        </div>
        <div className={styles.formWrap}>
          <ContactForm
            consultants={consultantOptions}
            defaultConsultant={defaultConsultant}
            subjectLabel="Service Type"
            messageLabel="Project Description"
          />
        </div>
      </section>

      <FAQ items={faqs} />
    </div>
  )
}
