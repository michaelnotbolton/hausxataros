import { render, screen } from '@testing-library/react'
import HowItWorks from '../../../components/hire-us/HowItWorks'

const steps = [
  { number: 1, description: 'Select your service from the menu above' },
  { number: 2, description: 'Fill out a brief intake form' },
  { number: 3, description: "We'll confirm availability and send a contract" },
  { number: 4, description: 'Schedule your session via Calendly' },
  { number: 5, description: 'Consultation happens via Zoom, in-person, or phone' },
  { number: 6, description: 'You receive follow-up notes and resources' },
]

describe('HowItWorks', () => {
  it('renders a "How It Works" heading', () => {
    render(<HowItWorks steps={steps} />)
    expect(screen.getByRole('heading', { name: /how it works/i })).toBeInTheDocument()
  })

  it('renders with data-testid="how-it-works"', () => {
    render(<HowItWorks steps={steps} />)
    expect(screen.getByTestId('how-it-works')).toBeInTheDocument()
  })

  it('renders exactly 6 steps', () => {
    render(<HowItWorks steps={steps} />)
    expect(screen.getAllByTestId('step')).toHaveLength(6)
  })

  it('renders each step description', () => {
    render(<HowItWorks steps={steps} />)
    steps.forEach(({ description }) => {
      expect(screen.getByText(description)).toBeInTheDocument()
    })
  })

  it('renders step numbers', () => {
    render(<HowItWorks steps={steps} />)
    steps.forEach(({ number }) => {
      expect(screen.getByText(String(number))).toBeInTheDocument()
    })
  })
})
