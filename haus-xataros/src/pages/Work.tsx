import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProjectCard from '../components/work/ProjectCard'
import FilterBar from '../components/work/FilterBar'
import { projects } from '../data/projects'
import { consultants } from '../data/consultants'

export default function Work() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null)
  const [formatFilter, setFormatFilter] = useState<string | null>(null)
  const initialAuthor = searchParams.get('author')
  const [authorFilter, setAuthorFilter] = useState<string | null>(() => {
    const consultant = consultants.find((item) => item.slug === initialAuthor)
    return consultant?.name ?? null
  })

  const categories = useMemo(() => [...new Set(projects.map((project) => project.category))], [])
  const formats = useMemo(() => [...new Set(projects.map((project) => project.format))], [])
  const authors = useMemo(() => consultants.map((consultant) => consultant.name), [])

  function updateAuthor(author: string | null) {
    setAuthorFilter(author)
    const nextParams = new URLSearchParams(searchParams)
    const consultant = consultants.find((item) => item.name === author)

    if (consultant) {
      nextParams.set('author', consultant.slug)
    } else {
      nextParams.delete('author')
    }

    setSearchParams(nextParams)
  }

  const filtered = projects.filter((p) => {
    if (categoryFilter && p.category !== categoryFilter) return false
    if (formatFilter && p.format !== formatFilter) return false
    if (authorFilter) {
      const consultant = consultants.find((item) => item.authorKey === p.authorKey)
      if (consultant?.name !== authorFilter) return false
    }
    return true
  })

  return (
    <>
      <h1>Our Work</h1>
      <FilterBar
        categories={categories}
        formats={formats}
        authors={authors}
        activeCategory={categoryFilter}
        activeFormat={formatFilter}
        activeAuthor={authorFilter}
        onCategoryChange={setCategoryFilter}
        onFormatChange={setFormatFilter}
        onAuthorChange={updateAuthor}
      />
      <section>
        {filtered.map((project) => (
          <ProjectCard key={project.title} activeAuthor={authorFilter} {...project} />
        ))}
      </section>
    </>
  )
}
