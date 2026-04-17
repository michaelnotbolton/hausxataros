import { render, screen } from '@testing-library/react'
import Footer from '../../../components/layout/Footer'

describe('Footer', () => {
  it('renders a footer element', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders all 4 social media links', () => {
    render(<Footer />)
    const expectedLinks = ['Substack', 'Bluesky', 'Facebook', 'Instagram']
    expectedLinks.forEach((label) => {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    })
  })

  it('social media links open in a new tab', () => {
    render(<Footer />)
    const links = ['Substack', 'Bluesky', 'Facebook', 'Instagram']
    links.forEach((label) => {
      expect(screen.getByRole('link', { name: label })).toHaveAttribute('target', '_blank')
    })
  })

  it('social media links have noopener rel for security', () => {
    render(<Footer />)
    const links = ['Substack', 'Bluesky', 'Facebook', 'Instagram']
    links.forEach((label) => {
      expect(screen.getByRole('link', { name: label })).toHaveAttribute('rel', expect.stringContaining('noopener'))
    })
  })

  it('displays copyright text for Haus Xataros', () => {
    render(<Footer />)
    expect(screen.getByText(/© Haus Xataros/)).toBeInTheDocument()
  })
})
