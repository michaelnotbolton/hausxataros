import styles from './WikiSearch.module.css'

interface WikiSearchProps {
  onSearch: (query: string) => void
}

export default function WikiSearch({ onSearch }: WikiSearchProps) {
  return (
    <div className={styles.search}>
      <label className={styles.label} htmlFor="wiki-search">Search the Wiki</label>
      <input
        className={styles.input}
        id="wiki-search"
        type="search"
        role="searchbox"
        aria-label="Search"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  )
}
