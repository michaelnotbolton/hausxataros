import type { ComponentProps } from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import FilterBar from '../../../components/work/FilterBar'

const categories = ['TTRPG', 'Fiction', 'Methodology', 'Tools']
const formats = ['PDF', 'eBook', 'Interactive']
const authors = ['David M. Daniel']

function renderFilterBar(overrides?: Partial<ComponentProps<typeof FilterBar>>) {
  return render(
    <FilterBar
      activeAuthor={null}
      activeCategory={null}
      activeFormat={null}
      authors={authors}
      categories={categories}
      formats={formats}
      onAuthorChange={vi.fn()}
      onCategoryChange={vi.fn()}
      onFormatChange={vi.fn()}
      {...overrides}
    />,
  )
}

describe('FilterBar', () => {
  it('renders a button for each category', () => {
    renderFilterBar()
    categories.forEach((cat) => {
      expect(screen.getByRole('button', { name: cat })).toBeInTheDocument()
    })
  })

  it('renders a button for each format', () => {
    renderFilterBar()
    formats.forEach((fmt) => {
      expect(screen.getByRole('button', { name: fmt })).toBeInTheDocument()
    })
  })

  it('renders a button for each author', () => {
    renderFilterBar()
    authors.forEach((author) => {
      expect(screen.getByRole('button', { name: author })).toBeInTheDocument()
    })
  })

  it('calls onCategoryChange when a category is clicked', async () => {
    const user = userEvent.setup()
    const onCategoryChange = vi.fn()
    renderFilterBar({ onCategoryChange })
    await user.click(screen.getByRole('button', { name: 'TTRPG' }))
    expect(onCategoryChange).toHaveBeenCalledWith('TTRPG')
  })

  it('calls onFormatChange when a format is clicked', async () => {
    const user = userEvent.setup()
    const onFormatChange = vi.fn()
    renderFilterBar({ onFormatChange })
    await user.click(screen.getByRole('button', { name: 'PDF' }))
    expect(onFormatChange).toHaveBeenCalledWith('PDF')
  })

  it('shows selected state for the active author filter', () => {
    renderFilterBar({ activeAuthor: 'David M. Daniel' })

    expect(screen.getByRole('button', { name: 'David M. Daniel' })).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByRole('button', { name: 'All authors' })).toHaveAttribute('aria-pressed', 'false')
  })
})
