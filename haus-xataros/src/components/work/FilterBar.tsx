import styles from './FilterBar.module.css'

interface FilterBarProps {
  categories: string[]
  formats: string[]
  onCategoryChange: (category: string) => void
  onFormatChange: (format: string) => void
}

export default function FilterBar({
  categories,
  formats,
  onCategoryChange,
  onFormatChange,
}: FilterBarProps) {
  return (
    <div className={styles.bar} data-testid="filter-bar">
      <div className={styles.group} data-testid="filter-category">
        {categories.map((cat) => (
          <button className={styles.button} key={cat} onClick={() => onCategoryChange(cat)}>{cat}</button>
        ))}
      </div>
      <div className={styles.group} data-testid="filter-format">
        {formats.map((fmt) => (
          <button className={styles.button} key={fmt} onClick={() => onFormatChange(fmt)}>{fmt}</button>
        ))}
      </div>
    </div>
  )
}
