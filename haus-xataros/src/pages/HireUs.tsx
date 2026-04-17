import ConsultantProfile from '../components/hire-us/ConsultantProfile'
import ServiceCard from '../components/hire-us/ServiceCard'
import HowItWorks from '../components/hire-us/HowItWorks'
import FAQ from '../components/hire-us/FAQ'
import ContactForm from '../components/contact/ContactForm'
import { services, consultants, howItWorksSteps, faqs } from '../data/services'

export default function HireUs() {
  const consultant = consultants[0]

  return (
    <>
      <h1>Why Hiring an Underemployed Drag Queen Might Be the Smartest Decision You Ever Made</h1>
      <p>
        We bring our expertise in game design, narrative craft, and queer theory to help you build
        something extraordinary.
      </p>

      <ConsultantProfile
        name={consultant.name}
        alterEgo={consultant.alterEgo}
        bio={consultant.bio}
        philosophy={consultant.philosophy}
      />

      <section>
        <h2>Our Services</h2>
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            name={service.title}
            description={service.description}
            duration={service.duration}
            price={service.price}
          />
        ))}
      </section>

      <HowItWorks steps={howItWorksSteps} />

      <section>
        <h2>Book a Discovery Call</h2>
        <a href="https://calendly.com/hausxataros" rel="noopener noreferrer">
          Schedule a Consultation
        </a>
      </section>

      <ContactForm subjectLabel="Service Type" messageLabel="Project Description" />

      <FAQ items={faqs} />
    </>
  )
}
