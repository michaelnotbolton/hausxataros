import { render, screen } from '@testing-library/react'
import ServiceCard from '../../../components/hire-us/ServiceCard'

const service = {
  name: 'Strategic Consultation',
  description: 'Help with business strategy, creative direction, and long-term planning.',
  duration: '60 min',
  price: '$$',
}

describe('ServiceCard', () => {
  it('renders with data-testid="service-card"', () => {
    render(<ServiceCard {...service} />)
    expect(screen.getByTestId('service-card')).toBeInTheDocument()
  })

  it('displays the service name as a heading', () => {
    render(<ServiceCard {...service} />)
    expect(screen.getByRole('heading', { name: service.name })).toBeInTheDocument()
  })

  it('displays the description', () => {
    render(<ServiceCard {...service} />)
    expect(screen.getByTestId('service-description')).toHaveTextContent(service.description)
  })

  it('displays the typical duration', () => {
    render(<ServiceCard {...service} />)
    expect(screen.getByTestId('service-duration')).toHaveTextContent(service.duration)
  })

  it('displays the price range', () => {
    render(<ServiceCard {...service} />)
    expect(screen.getByTestId('service-price')).toHaveTextContent(service.price)
  })
})
