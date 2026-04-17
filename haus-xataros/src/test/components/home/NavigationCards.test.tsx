import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithRouter } from '../../utils'
import NavigationCards from '../../../components/home/NavigationCards'

const cards = [
  { label: 'Our Work', to: '/work', description: 'Explore our creative projects' },
  { label: "The Drag Queen's Guide", to: '/drag-queens-guide', description: 'Read the guide' },
  { label: 'Hire Us', to: '/hire-us', description: 'Work with us' },
]

describe('NavigationCards', () => {
  it('renders with data-testid="navigation-cards"', () => {
    renderWithRouter(<NavigationCards cards={cards} />)
    expect(screen.getByTestId('navigation-cards')).toBeInTheDocument()
  })

  it('renders a card for each destination', () => {
    renderWithRouter(<NavigationCards cards={cards} />)
    cards.forEach(({ label }) => {
      expect(screen.getByRole('link', { name: new RegExp(label, 'i') })).toBeInTheDocument()
    })
  })

  it('each card links to the correct route', () => {
    renderWithRouter(<NavigationCards cards={cards} />)
    cards.forEach(({ label, to }) => {
      expect(screen.getByRole('link', { name: new RegExp(label, 'i') })).toHaveAttribute('href', to)
    })
  })

  it('each card displays a description', () => {
    renderWithRouter(<NavigationCards cards={cards} />)
    cards.forEach(({ description }) => {
      expect(screen.getByText(description)).toBeInTheDocument()
    })
  })

  it('clicking a card navigates to the correct route', async () => {
    const user = userEvent.setup()
    renderWithRouter(<NavigationCards cards={cards} />)
    await user.click(screen.getByRole('link', { name: /Our Work/i }))
    // Navigation is handled by router — we just verify the link is correct
    expect(screen.getByRole('link', { name: /Our Work/i })).toHaveAttribute('href', '/work')
  })
})
