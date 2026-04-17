import { render, screen } from '@testing-library/react'
import AboutSection from '../../../components/home/AboutSection'

const paragraphs = [
  'Haus Xataros is a creative studio and drag collective.',
  'We specialize in tabletop RPG design, fiction, and queer theory.',
  'Our methodology, Creativity Channeling, transforms how you tell stories.',
  'We offer professional consulting for creative and editorial work.',
]

describe('AboutSection', () => {
  it('renders with data-testid="about-section"', () => {
    render(<AboutSection paragraphs={paragraphs} />)
    expect(screen.getByTestId('about-section')).toBeInTheDocument()
  })

  it('renders all provided paragraphs', () => {
    render(<AboutSection paragraphs={paragraphs} />)
    paragraphs.forEach((text) => {
      expect(screen.getByText(text)).toBeInTheDocument()
    })
  })

  it('renders at least 3 paragraphs', () => {
    render(<AboutSection paragraphs={paragraphs} />)
    const ps = screen.getByTestId('about-section').querySelectorAll('p')
    expect(ps.length).toBeGreaterThanOrEqual(3)
  })
})
