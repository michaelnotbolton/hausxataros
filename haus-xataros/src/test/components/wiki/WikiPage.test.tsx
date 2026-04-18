import { screen, within } from '@testing-library/react'
import { renderWithRouter } from '../../utils'
import WikiPage from '../../../components/wiki/WikiPage'
import type { WikiPageRecord } from '../../../data/wiki'

const page: WikiPageRecord = {
  id: 'glossary/affirmation.md',
  title: 'Affirmation',
  slug: 'affirmation',
  routePath: '/wiki/glossary/affirmation',
  sectionSlug: 'glossary',
  sectionTitle: 'Glossary',
  isSectionIndex: false,
  summary: 'An identity phrase spoken when a power is activated.',
  breadcrumbs: [
    { label: 'Wiki', href: '/wiki' },
    { label: 'Glossary', href: '/wiki/glossary' },
    { label: 'Affirmation', href: '/wiki/glossary/affirmation' },
  ],
  childPages: [],
  sidebarSections: [
    {
      slug: 'glossary',
      title: 'Glossary',
      routePath: '/wiki/glossary',
      pages: [
        { title: 'Affirmation', routePath: '/wiki/glossary/affirmation', isActive: true },
        { title: 'Beat', routePath: '/wiki/glossary/beat', isActive: false },
      ],
      isActive: true,
    },
  ],
  relatedGroups: [
    {
      title: 'Mentioned in this page',
      tone: 'resolved',
      items: [{ label: 'Beat', href: '/wiki/glossary/beat', status: 'resolved', targetSlug: 'beat' }],
    },
    {
      title: 'Unresolved references',
      tone: 'unresolved',
      items: [{ label: 'Power', href: null, status: 'unresolved', targetSlug: 'power' }],
    },
  ],
  content: [
    { type: 'heading', level: 1, text: 'Affirmation', id: 'affirmation' },
    { type: 'heading', level: 2, text: 'The Mechanic', id: 'the-mechanic' },
    {
      type: 'paragraph',
      spans: [
        { type: 'text', text: 'An Affirmation is linked to ' },
        { type: 'wiki-link', text: 'Beat', href: '/wiki/glossary/beat', status: 'resolved' },
        { type: 'text', text: ' and ' },
        { type: 'wiki-link', text: 'Power', href: null, status: 'unresolved' },
        { type: 'text', text: '.' },
      ],
    },
  ],
  links: [
    { label: 'Beat', href: '/wiki/glossary/beat', status: 'resolved', targetSlug: 'beat' },
    { label: 'Power', href: null, status: 'unresolved', targetSlug: 'power' },
  ],
}

describe('WikiPage', () => {
  it('renders the page title once and suppresses a duplicate body H1', () => {
    renderWithRouter(<WikiPage page={page} />)

    expect(screen.getAllByRole('heading', { level: 1, name: 'Affirmation' })).toHaveLength(1)
  })

  it('renders a docs sidebar with the active page highlighted', () => {
    renderWithRouter(<WikiPage page={page} />)

    expect(screen.getByTestId('wiki-sidebar')).toBeInTheDocument()
    expect(screen.getByTestId('wiki-sidebar-active')).toHaveTextContent('Affirmation')
  })

  it('renders grouped reference surfaces instead of a plain list', () => {
    renderWithRouter(<WikiPage page={page} />)

    const referenceGroups = screen.getAllByTestId('wiki-reference-group')
    expect(referenceGroups).toHaveLength(2)
    expect(within(referenceGroups[0]).getByRole('heading', { name: 'Mentioned in this page' })).toBeInTheDocument()
    expect(within(referenceGroups[1]).getByRole('heading', { name: 'Unresolved references' })).toBeInTheDocument()
    expect(within(referenceGroups[0]).getByTestId('wiki-reference-card')).toHaveTextContent('Beat')
    expect(within(referenceGroups[0]).getByTestId('wiki-reference-card')).not.toHaveTextContent('Mentioned in this page')
  })

  it('keeps section headings in the article body', () => {
    renderWithRouter(<WikiPage page={page} />)

    expect(within(screen.getByTestId('wiki-entry-body')).getByRole('heading', { name: 'The Mechanic' })).toBeInTheDocument()
  })
})
