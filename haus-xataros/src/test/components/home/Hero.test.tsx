import { render, screen } from '@testing-library/react'
import Hero from '../../../components/home/Hero'

describe('Hero', () => {
  const props = {
    heading: 'Haus Xataros',
    subheading: 'A creative studio where drag meets design.',
  }

  it('renders with data-testid="hero"', () => {
    render(<Hero {...props} />)
    expect(screen.getByTestId('hero')).toBeInTheDocument()
  })

  it('displays the heading', () => {
    render(<Hero {...props} />)
    expect(screen.getByRole('heading', { name: props.heading })).toBeInTheDocument()
  })

  it('displays a statement of purpose', () => {
    render(<Hero {...props} />)
    expect(screen.getByText(props.subheading)).toBeInTheDocument()
  })
})
