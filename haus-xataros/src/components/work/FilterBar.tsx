import SelectablePill from '../ui/SelectablePill'
import styles from './FilterBar.module.css'

interface FilterBarProps {
  categories: string[]
  formats: string[]
  authors: string[]
  activeCategory: string | null
  activeFormat: string | null
  activeAuthor: string | null
  onCategoryChange: (category: string | null) => void
  onFormatChange: (format: string | null) => void
  onAuthorChange: (author: string | null) => void
}

export default function FilterBar({
  categories,
  formats,
  authors,
  activeCategory,
  activeFormat,
  activeAuthor,
  onCategoryChange,
  onFormatChange,
  onAuthorChange,
}: FilterBarProps) {
  return (
    <div className={styles.bar} data-testid="filter-bar">
      <div className={styles.group} data-testid="filter-category">
        <SelectablePill selected={activeCategory === null} onClick={() => onCategoryChange(null)}>
          All categories
        </SelectablePill>
        {categories.map((cat) => (
          <SelectablePill key={cat} selected={activeCategory === cat} onClick={() => onCategoryChange(cat)}>
            {cat}
          </SelectablePill>
        ))}
      </div>
      <div className={styles.group} data-testid="filter-format">
        <SelectablePill selected={activeFormat === null} onClick={() => onFormatChange(null)}>
          All formats
        </SelectablePill>
        {formats.map((fmt) => (
          <SelectablePill key={fmt} selected={activeFormat === fmt} onClick={() => onFormatChange(fmt)}>
            {fmt}
          </SelectablePill>
        ))}
      </div>
      <div className={styles.group} data-testid="filter-author">
        <SelectablePill selected={activeAuthor === null} onClick={() => onAuthorChange(null)}>
          All authors
        </SelectablePill>
        {authors.map((author) => (
          <SelectablePill key={author} selected={activeAuthor === author} onClick={() => onAuthorChange(author)}>
            {author}
          </SelectablePill>
        ))}
      </div>
    </div>
  )
}
