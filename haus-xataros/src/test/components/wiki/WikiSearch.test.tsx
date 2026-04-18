import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useState } from 'react'
import WikiSearch from '../../../components/wiki/WikiSearch'

function ControlledWikiSearch({ onSearch }: { onSearch: (value: string) => void }) {
  const [value, setValue] = useState('')

  return (
    <WikiSearch
      value={value}
      onSearch={(nextValue) => {
        setValue(nextValue)
        onSearch(nextValue)
      }}
    />
  )
}

describe('WikiSearch', () => {
  it('renders a search input', () => {
    render(<WikiSearch value="" onSearch={vi.fn()} />)
    expect(screen.getByRole('searchbox')).toBeInTheDocument()
  })

  it('calls onSearch when the user types', async () => {
    const user = userEvent.setup()
    const onSearch = vi.fn()
    render(<ControlledWikiSearch onSearch={onSearch} />)
    await user.type(screen.getByRole('searchbox'), 'Vector')
    expect(onSearch).toHaveBeenCalledWith(expect.stringContaining('Vector'))
  })

  it('has an accessible label', () => {
    render(<WikiSearch value="" onSearch={vi.fn()} />)
    expect(screen.getByRole('searchbox', { name: /search/i })).toBeInTheDocument()
  })
})
