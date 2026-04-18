import { Link, Navigate, useParams } from 'react-router-dom'
import { getConsultantBySlug } from '../data/consultants'
import styles from './ConsultantPage.module.css'

export default function ConsultantPage() {
  const { consultantSlug } = useParams<{ consultantSlug: string }>()
  const consultant = consultantSlug ? getConsultantBySlug(consultantSlug) : undefined

  if (!consultant) {
    return <Navigate to="/" replace />
  }

  return (
    <article className={styles.page} data-testid="consultant-page">
      <section className={styles.hero}>
        <img
          alt={`${consultant.name} headshot`}
          className={styles.headshot}
          src={consultant.headshot}
        />
        <div className={styles.heroCopy}>
          <p className={styles.kicker}>Consultant Profile</p>
          <h1>{consultant.name}</h1>
          <p className={styles.alterEgo}>Also known as {consultant.alterEgo}</p>
          <p className={styles.tagline}>{consultant.tagline}</p>
          <div className={styles.actions}>
            <Link to={`/hire-us?consultant=${consultant.slug}#book-discovery`}>
              {consultant.bookingLabel}
            </Link>
            <Link className={styles.secondaryAction} to={`/work?author=${consultant.slug}`}>
              {consultant.portfolioLinkLabel}
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.panel}>
        <h2>Overview</h2>
        {consultant.overview.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>

      <section className={styles.panel}>
        <h2>Core Competencies</h2>
        <ul className={styles.competencies}>
          {consultant.competencies.map((competency) => (
            <li key={competency}>{competency}</li>
          ))}
        </ul>
      </section>

      {consultant.sections.map((section) => (
        <section className={styles.panel} key={section.title}>
          <h2>{section.title}</h2>
          <div className={styles.timeline}>
            {section.items.map((item) => (
              <article className={styles.timelineCard} key={item.title}>
                <p className={styles.years}>{item.years}</p>
                <h3>{item.title}</h3>
                <p className={styles.role}>{item.role}</p>
                <p>{item.summary}</p>
              </article>
            ))}
          </div>
        </section>
      ))}

      <section className={styles.panel}>
        <p className={styles.kicker}>Why David</p>
        <h2>{consultant.philosophyTitle}</h2>
        <p>{consultant.philosophy}</p>
      </section>
    </article>
  )
}
