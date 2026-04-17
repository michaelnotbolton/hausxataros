import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import WikiSearch from '../../../components/wiki/WikiSearch'

describe('WikiSearch', () => {
  it('renders a search input', () => {
    render(<WikiSearch onSearch={vi.fn()} />)
    expect(screen.getByRole('searchbox')).toBeInTheDocument()
  })

  it('calls onSearch when the user types', async () => {
    const user = userEvent.setup()
    const onSearch = vi.fn()
    render(<WikiSearch onSearch={onSearch} />)
    await user.type(screen.getByRole('searchbox'), 'Vector')
    expect(onSearch).toHaveBeenCalledWith(expect.stringContaining('Vector'))
  })

  it('has an accessible label', () => {
    render(<WikiSearch onSearch={vi.fn()} />)
    expect(screen.getByRole('searchbox', { name: /search/i })).toBeInTheDocument()
  })
})
