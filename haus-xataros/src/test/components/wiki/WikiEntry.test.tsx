import { screen } from '@testing-library/react'
import { renderWithRouter } from '../../utils'
import WikiEntry from '../../../components/wiki/WikiEntry'

const entry = {
  title: 'Vector',
  definition: 'A conduit through which arcane energy is channeled.',
  body: '<p>Vectors are individuals or objects capable of directing magical force.</p>',
  relatedLinks: [
    { label: 'Affirmation System', href: '/wiki/affirmation-system' },
    { label: 'Threshold', href: '/wiki/threshold' },
  ],
  referencedIn: [
    { label: 'Core Mechanics Overview', href: '/studio-notes/core-mechanics' },
  ],
  breadcrumbs: [
    { label: 'Wiki', href: '/wiki' },
    { label: 'Core Mechanics', href: '/wiki/core-mechanics' },
    { label: 'Vector', href: '/wiki/vector' },
  ],
}

describe('WikiEntry', () => {
  it('renders with data-testid="wiki-entry"', () => {
    renderWithRouter(<WikiEntry {...entry} />)
    expect(screen.getByTestId('wiki-entry')).toBeInTheDocument()
  })

  it('displays the entry title as an h1', () => {
    renderWithRouter(<WikiEntry {...entry} />)
    expect(screen.getByRole('heading', { name: entry.title, level: 1 })).toBeInTheDocument()
  })

  it('displays the definition', () => {
    renderWithRouter(<WikiEntry {...entry} />)
    expect(screen.getByTestId('entry-definition')).toHaveTextContent(entry.definition)
  })

  it('renders the entry body', () => {
    renderWithRouter(<WikiEntry {...entry} />)
    expect(screen.getByTestId('entry-body')).toBeInTheDocument()
  })

  it('renders related links', () => {
    renderWithRouter(<WikiEntry {...entry} />)
    expect(screen.getByTestId('related-links')).toBeInTheDocument()
    entry.relatedLinks.forEach(({ label }) => {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    })
  })

  it('renders the Referenced In section', () => {
    renderWithRouter(<WikiEntry {...entry} />)
    expect(screen.getByTestId('referenced-in')).toBeInTheDocument()
    entry.referencedIn.forEach(({ label }) => {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    })
  })

  it('renders breadcrumb navigation', () => {
    renderWithRouter(<WikiEntry {...entry} />)
    const nav = screen.getByRole('navigation', { name: /breadcrumb/i })
    expect(nav).toBeInTheDocument()
    entry.breadcrumbs.forEach(({ label }) => {
      expect(nav).toHaveTextContent(label)
    })
  })
})
