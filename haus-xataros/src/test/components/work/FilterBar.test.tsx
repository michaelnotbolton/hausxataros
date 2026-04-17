import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import FilterBar from '../../../components/work/FilterBar'

const categories = ['TTRPG', 'Fiction', 'Methodology', 'Tools']
const formats = ['PDF', 'eBook', 'Interactive']

describe('FilterBar', () => {
  it('renders a button for each category', () => {
    render(<FilterBar categories={categories} formats={formats} onCategoryChange={vi.fn()} onFormatChange={vi.fn()} />)
    categories.forEach((cat) => {
      expect(screen.getByRole('button', { name: cat })).toBeInTheDocument()
    })
  })

  it('renders a button for each format', () => {
    render(<FilterBar categories={categories} formats={formats} onCategoryChange={vi.fn()} onFormatChange={vi.fn()} />)
    formats.forEach((fmt) => {
      expect(screen.getByRole('button', { name: fmt })).toBeInTheDocument()
    })
  })

  it('calls onCategoryChange when a category is clicked', async () => {
    const user = userEvent.setup()
    const onCategoryChange = vi.fn()
    render(<FilterBar categories={categories} formats={formats} onCategoryChange={onCategoryChange} onFormatChange={vi.fn()} />)
    await user.click(screen.getByRole('button', { name: 'TTRPG' }))
    expect(onCategoryChange).toHaveBeenCalledWith('TTRPG')
  })

  it('calls onFormatChange when a format is clicked', async () => {
    const user = userEvent.setup()
    const onFormatChange = vi.fn()
    render(<FilterBar categories={categories} formats={formats} onCategoryChange={vi.fn()} onFormatChange={onFormatChange} />)
    await user.click(screen.getByRole('button', { name: 'PDF' }))
    expect(onFormatChange).toHaveBeenCalledWith('PDF')
  })
})
