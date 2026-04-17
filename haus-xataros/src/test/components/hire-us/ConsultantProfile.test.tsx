import { render, screen } from '@testing-library/react'
import ConsultantProfile from '../../../components/hire-us/ConsultantProfile'

const consultant = {
  name: 'David M. Daniel',
  alterEgo: 'Leona La\'Roux',
  bio: 'A multidisciplinary creative with decades of experience across fiction, game design, and strategic consulting.',
  philosophy: 'Every problem is a story waiting to be told correctly.',
}

describe('ConsultantProfile', () => {
  it('renders with data-testid="consultant-profile"', () => {
    render(<ConsultantProfile {...consultant} />)
    expect(screen.getByTestId('consultant-profile')).toBeInTheDocument()
  })

  it('displays the consultant name', () => {
    render(<ConsultantProfile {...consultant} />)
    expect(screen.getByTestId('consultant-profile')).toHaveTextContent(consultant.name)
  })

  it('displays the consultant bio', () => {
    render(<ConsultantProfile {...consultant} />)
    expect(screen.getByTestId('consultant-bio')).toHaveTextContent(consultant.bio)
  })

  it('displays the consulting philosophy', () => {
    render(<ConsultantProfile {...consultant} />)
    expect(screen.getByTestId('consultant-philosophy')).toHaveTextContent(consultant.philosophy)
  })
})
