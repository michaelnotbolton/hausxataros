import { render, screen } from '@testing-library/react'
import PatreonTiers from '../../../components/support/PatreonTiers'

const tiers = [
  { name: 'Supporter', includes: ['Early access to blog posts', 'Monthly newsletter'] },
  { name: 'Collaborator', includes: ['All Supporter perks', 'Exclusive Discord channel', 'Monthly Q&A'] },
  { name: 'Patron', includes: ['All Collaborator perks', 'Monthly tarot reading', 'Name in credits'] },
]

describe('PatreonTiers', () => {
  it('renders with data-testid="patreon-tiers"', () => {
    render(<PatreonTiers tiers={tiers} />)
    expect(screen.getByTestId('patreon-tiers')).toBeInTheDocument()
  })

  it('renders a tier for each entry', () => {
    render(<PatreonTiers tiers={tiers} />)
    expect(screen.getAllByTestId('patreon-tier')).toHaveLength(tiers.length)
  })

  it('displays each tier name', () => {
    render(<PatreonTiers tiers={tiers} />)
    tiers.forEach(({ name }) => {
      expect(screen.getByText(name)).toBeInTheDocument()
    })
  })

  it('each tier shows what it includes', () => {
    render(<PatreonTiers tiers={tiers} />)
    tiers.forEach(({ includes }) => {
      includes.forEach((item) => {
        expect(screen.getAllByTestId('tier-includes').find(el => el.textContent?.includes(item))).toBeTruthy()
      })
    })
  })
})
