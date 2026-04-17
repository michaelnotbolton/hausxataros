import { screen } from '@testing-library/react'
import { renderWithRouter } from '../../utils'
import Header from '../../../components/layout/Header'

describe('Header', () => {
  it('renders a header element', () => {
    renderWithRouter(<Header />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
  })

  it('displays the Haus Xataros logo', () => {
    renderWithRouter(<Header />)
    expect(screen.getByText('Haus Xataros')).toBeInTheDocument()
  })

  it('renders all 8 navigation links', () => {
    renderWithRouter(<Header />)
    const expectedLinks = [
      'Home',
      'Our Work',
      "The Drag Queen's Guide",
      'Studio Notes',
      'Hire Us',
      'The Wiki',
      'Support Us',
      'Contact',
    ]
    expectedLinks.forEach((label) => {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    })
  })

  it('nav links point to the correct routes', () => {
    renderWithRouter(<Header />)
    expect(screen.getByRole('link', { name: 'Our Work' })).toHaveAttribute('href', '/work')
    expect(screen.getByRole('link', { name: 'Hire Us' })).toHaveAttribute('href', '/hire-us')
    expect(screen.getByRole('link', { name: 'The Wiki' })).toHaveAttribute('href', '/wiki')
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '/contact')
  })

  it('marks the active route with aria-current page', () => {
    renderWithRouter(<Header />, { route: '/work' })
    expect(screen.getByRole('link', { name: 'Our Work' })).toHaveAttribute('aria-current', 'page')
  })
})
