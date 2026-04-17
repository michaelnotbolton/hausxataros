import { useState } from 'react'
import ProjectCard from '../components/work/ProjectCard'
import FilterBar from '../components/work/FilterBar'
import { projects } from '../data/projects'

const categories = ['TTRPG', 'Fiction', 'Methodology']
const formats = ['PDF', 'Ebook']

export default function Work() {
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null)
  const [formatFilter, setFormatFilter] = useState<string | null>(null)

  const filtered = projects.filter((p) => {
    if (categoryFilter && p.category !== categoryFilter) return false
    if (formatFilter && p.format !== formatFilter) return false
    return true
  })

  return (
    <>
      <h1>Our Work</h1>
      <FilterBar
        categories={categories}
        formats={formats}
        onCategoryChange={setCategoryFilter}
        onFormatChange={setFormatFilter}
      />
      <section>
        {filtered.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </section>
    </>
  )
}
