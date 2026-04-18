import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Work from '../../pages/Work'
import { renderWithRouter } from '../utils'

describe('Work page', () => {
  it('preselects the matching author from the URL query string', () => {
    renderWithRouter(<Work />, { route: '/work?author=david-m-daniel' })

    expect(screen.getByRole('button', { name: 'David M. Daniel' })).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getAllByTestId('project-card')).toHaveLength(3)
  })

  it('renders a cohesive author filter group alongside category and format', () => {
    renderWithRouter(<Work />)

    expect(screen.getByTestId('filter-category')).toBeInTheDocument()
    expect(screen.getByTestId('filter-format')).toBeInTheDocument()
    expect(screen.getByTestId('filter-author')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'All authors' })).toHaveAttribute('aria-pressed', 'true')
  })
})
