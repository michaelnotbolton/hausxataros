import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import HireUs from '../../pages/HireUs'
import { renderWithRouter } from '../utils'

describe('Hire Us page', () => {
  it('places How It Works before Our Services', () => {
    renderWithRouter(<HireUs />)

    const howItWorks = screen.getByRole('heading', { name: 'How It Works' })
    const services = screen.getByRole('heading', { name: 'Our Services' })

    expect(howItWorks.compareDocumentPosition(services) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
  })

  it('links the consultant card to the dedicated consultant page', () => {
    renderWithRouter(<HireUs />)

    expect(screen.getByRole('link', { name: /Meet David M\. Daniel/i })).toHaveAttribute('href', '/david-m-daniel')
  })

  it('shows an optional consultant selector in the contact form', () => {
    renderWithRouter(<HireUs />)

    expect(screen.getByLabelText('Consultant')).toHaveValue('')
  })

  it('prefills the consultant selector from the consultant query string', () => {
    renderWithRouter(<HireUs />, { route: '/hire-us?consultant=david-m-daniel' })

    expect(screen.getByLabelText('Consultant')).toHaveValue('david-m-daniel')
  })
})
