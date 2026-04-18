import { render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import App from '../../App'

describe('App routes', () => {
  afterEach(() => {
    window.history.replaceState({}, '', '/')
  })

  it('renders the consultant page for a valid consultant slug', () => {
    window.history.replaceState({}, '', '/david-m-daniel')

    render(<App />)

    expect(screen.getByRole('heading', { name: /David M\. Daniel/i })).toBeVisible()
    expect(screen.getByRole('link', { name: /Book a discovery call with David/i })).toHaveAttribute(
      'href',
      '/hire-us?consultant=david-m-daniel#book-discovery',
    )
    expect(screen.getByRole('link', { name: /View David's selected work/i })).toHaveAttribute(
      'href',
      '/work?author=david-m-daniel',
    )
  })

  it('keeps the work page reachable when consultant routes are added', () => {
    window.history.replaceState({}, '', '/work')

    render(<App />)

    expect(screen.getByRole('heading', { name: 'Our Work' })).toBeVisible()
  })
})
