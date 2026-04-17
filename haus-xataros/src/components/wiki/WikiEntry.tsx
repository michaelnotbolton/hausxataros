import { Link } from 'react-router-dom'

interface WikiLink {
  label: string
  href: string
}

interface WikiEntryProps {
  title: string
  definition: string
  body: string
  relatedLinks: WikiLink[]
  referencedIn: WikiLink[]
  breadcrumbs: { label: string; href: string }[]
}

export default function WikiEntry({
  title,
  definition,
  body,
  relatedLinks,
  referencedIn,
  breadcrumbs,
}: WikiEntryProps) {
  return (
    <article data-testid="wiki-entry">
      <nav aria-label="breadcrumb">
        {breadcrumbs.map(({ label, href }, i) => (
          <span key={href}>
            {i > 0 && ' / '}
            <Link to={href}>{label}</Link>
          </span>
        ))}
      </nav>

      <h1>{title}</h1>
      <p data-testid="entry-definition">{definition}</p>
      <div data-testid="entry-body" dangerouslySetInnerHTML={{ __html: body }} />

      <section data-testid="related-links">
        <h2>Related</h2>
        <ul>
          {relatedLinks.map(({ label, href }) => (
            <li key={href}><Link to={href}>{label}</Link></li>
          ))}
        </ul>
      </section>

      <section data-testid="referenced-in">
        <h2>Referenced In</h2>
        <ul>
          {referencedIn.map(({ label, href }) => (
            <li key={href}><Link to={href}>{label}</Link></li>
          ))}
        </ul>
      </section>
    </article>
  )
}
