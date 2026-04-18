import { screen } from '@testing-library/react'
import { renderWithRouter } from '../../utils'
import WikiSectionCard from '../../../components/wiki/WikiSectionCard'

describe('WikiSectionCard', () => {
  it('renders a section title, summary, and article count link', () => {
    renderWithRouter(
      <WikiSectionCard
        title="Glossary"
        routePath="/wiki/glossary"
        summary="Foundational terms and definitions."
        articleCount={2}
      />,
    )

    expect(screen.getByTestId('wiki-section-card')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Glossary' })).toHaveAttribute('href', '/wiki/glossary')
    expect(screen.getByText('Foundational terms and definitions.')).toBeInTheDocument()
    expect(screen.getByText(/2 articles/i)).toBeInTheDocument()
  })
})
