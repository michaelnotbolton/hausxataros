import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Review from '../../pages/Review'
import { renderWithRouter } from '../utils'

describe('Review page', () => {
  it('explains the hidden review surface', () => {
    renderWithRouter(<Review />)

    expect(screen.getByRole('heading', { name: 'Designer Review Hub' })).toBeVisible()
    expect(screen.getByTestId('review-purpose')).toHaveTextContent('component-by-component critique')
  })

  it('links to the root Storybook surface and direct component stories', () => {
    renderWithRouter(<Review />)

    expect(screen.getByTestId('storybook-root-link')).toHaveAttribute('href', '/review/storybook/')
    expect(screen.getByRole('link', { name: 'Header' })).toHaveAttribute(
      'href',
      '/review/storybook/?path=/story/layout-header--default',
    )
    expect(screen.getByRole('link', { name: 'Contact Form' })).toHaveAttribute(
      'href',
      '/review/storybook/?path=/story/contact-contactform--default',
    )
    expect(screen.getByRole('link', { name: 'Pill' })).toHaveAttribute(
      'href',
      '/review/storybook/?path=/story/ui-selectablepill--default',
    )
  })
})
