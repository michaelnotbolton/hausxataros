import { render, screen } from '@testing-library/react'
import Footer from '../../../components/layout/Footer'

describe('Footer', () => {
  it('renders a footer element', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('does not render placeholder social media links', () => {
    render(<Footer />)
    const expectedLinks = ['Substack', 'Bluesky', 'Facebook', 'Instagram']
    expectedLinks.forEach((label) => {
      expect(screen.queryByRole('link', { name: label })).not.toBeInTheDocument()
    })
  })

  it('displays copyright text for Haus Xataros', () => {
    render(<Footer />)
    expect(screen.getByText(/© Haus Xataros/)).toBeInTheDocument()
  })
})
