interface CategoryNavProps {
  categories: string[]
  activeCategory?: string
  onSelect: (category: string) => void
}

export default function CategoryNav({ categories, activeCategory, onSelect }: CategoryNavProps) {
  return (
    <nav data-testid="category-nav" aria-label="Wiki categories">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          aria-pressed={cat === activeCategory}
          {...(cat === activeCategory ? { 'data-testid': 'active-category' } : {})}
        >
          {cat}
        </button>
      ))}
    </nav>
  )
}
