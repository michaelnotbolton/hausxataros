import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithRouter } from '../../utils'
import WikiSidebar from '../../../components/wiki/WikiSidebar'

const sections = [
  {
    slug: 'glossary',
    title: 'Glossary',
    routePath: '/wiki/glossary',
    isActive: true,
    pages: [
      { title: 'Affirmation', routePath: '/wiki/glossary/affirmation', isActive: true },
      { title: 'Beat', routePath: '/wiki/glossary/beat', isActive: false },
    ],
  },
]

describe('WikiSidebar', () => {
  it('renders a link back to the main wiki page', () => {
    renderWithRouter(<WikiSidebar sections={sections} />)

    expect(screen.getByRole('link', { name: /main wiki/i })).toHaveAttribute('href', '/wiki')
  })

  it('renders active sections expanded and non-active sections collapsed by default', () => {
    renderWithRouter(
      <WikiSidebar
        sections={[
          ...sections,
          {
            slug: 'jotunnberg',
            title: 'Jotunnberg',
            routePath: '/wiki/jotunnberg',
            isActive: false,
            pages: [{ title: 'Atlas', routePath: '/wiki/jotunnberg/atlas', isActive: false }],
          },
        ]}
      />,
    )

    expect(screen.getByRole('button', { name: 'Glossary' })).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('button', { name: 'Jotunnberg' })).toHaveAttribute('aria-expanded', 'false')
  })

  it('lets the user expand and collapse a section', async () => {
    const user = userEvent.setup()
    renderWithRouter(<WikiSidebar sections={sections} />)

    const glossaryToggle = screen.getByRole('button', { name: 'Glossary' })
    await user.click(glossaryToggle)
    expect(glossaryToggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(glossaryToggle)
    expect(glossaryToggle).toHaveAttribute('aria-expanded', 'true')
  })

  it('marks the current page as selected', () => {
    renderWithRouter(<WikiSidebar sections={sections} />)

    expect(screen.getByTestId('wiki-sidebar-active')).toHaveTextContent('Affirmation')
  })

  it('does not render empty sections', () => {
    renderWithRouter(
      <WikiSidebar
        sections={[
          ...sections,
          { slug: 'combat', title: 'Combat', routePath: '/wiki/combat', isActive: false, pages: [] },
        ]}
      />,
    )

    expect(screen.queryByRole('button', { name: 'Combat' })).not.toBeInTheDocument()
  })
})
