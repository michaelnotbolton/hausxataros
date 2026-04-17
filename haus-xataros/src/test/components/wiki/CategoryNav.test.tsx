import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CategoryNav from '../../../components/wiki/CategoryNav'

const categories = [
  'Core Mechanics',
  'Lore & World',
  'Character Creation',
  'Powers & Abilities',
  'Creatures & NPCs',
  'Factions & Organizations',
  'Timeline & History',
]

describe('CategoryNav', () => {
  it('renders with data-testid="category-nav"', () => {
    render(<CategoryNav categories={categories} onSelect={vi.fn()} />)
    expect(screen.getByTestId('category-nav')).toBeInTheDocument()
  })

  it('renders all 7 categories', () => {
    render(<CategoryNav categories={categories} onSelect={vi.fn()} />)
    categories.forEach((cat) => {
      expect(screen.getByText(cat)).toBeInTheDocument()
    })
  })

  it('calls onSelect with the category when clicked', async () => {
    const user = userEvent.setup()
    const onSelect = vi.fn()
    render(<CategoryNav categories={categories} onSelect={onSelect} />)
    await user.click(screen.getByText('Core Mechanics'))
    expect(onSelect).toHaveBeenCalledWith('Core Mechanics')
  })

  it('marks the active category', () => {
    render(<CategoryNav categories={categories} activeCategory="Core Mechanics" onSelect={vi.fn()} />)
    expect(screen.getByTestId('active-category')).toHaveTextContent('Core Mechanics')
  })
})
