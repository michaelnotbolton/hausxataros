import { useState } from 'react'
import WikiSearch from '../components/wiki/WikiSearch'
import CategoryNav from '../components/wiki/CategoryNav'
import WikiEntryCard from '../components/wiki/WikiEntryCard'
import { wikiEntries, wikiCategories } from '../data/wiki'

export default function Wiki() {
  const [activeCategory, setActiveCategory] = useState<string>()
  const [searchQuery, setSearchQuery] = useState('')

  const filtered = wikiEntries.filter((entry) => {
    if (activeCategory && entry.category !== activeCategory) return false
    if (searchQuery && !entry.title.toLowerCase().includes(searchQuery.toLowerCase())) return false
    return true
  })

  function handleSearch(query: string) {
    setSearchQuery(query)
  }

  return (
    <>
      <h1>The Wiki</h1>
      <WikiSearch onSearch={handleSearch} />
      <CategoryNav
        categories={wikiCategories}
        activeCategory={activeCategory}
        onSelect={setActiveCategory}
      />
      <section data-testid="search-results">
        {filtered.map((entry) => (
          <WikiEntryCard
            key={entry.slug}
            title={entry.title}
            slug={entry.slug}
            definition={entry.definition}
            category={entry.category}
          />
        ))}
      </section>
    </>
  )
}
