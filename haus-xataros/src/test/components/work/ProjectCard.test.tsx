import { screen } from '@testing-library/react'
import { renderWithRouter } from '../../utils'
import ProjectCard from '../../../components/work/ProjectCard'

const project = {
  title: 'The Zeitgeist Chronicles',
  description: 'A tabletop RPG set in a world of arcane politics.',
  category: 'TTRPG',
  format: 'PDF',
  authorKey: 'david-m-daniel',
  version: 'v1.5',
  downloads: [
    { label: 'Core Rulebook', href: 'downloads/core-rulebook.pdf' },
    { label: 'Character Sheet Template', href: 'downloads/character-sheet.pdf' },
    { label: 'Quick Start Guide', href: 'downloads/quick-start.pdf' },
  ],
}

describe('ProjectCard', () => {
  it('renders with data-testid="project-card"', () => {
    renderWithRouter(<ProjectCard {...project} />)
    expect(screen.getByTestId('project-card')).toBeInTheDocument()
  })

  it('displays the project title', () => {
    renderWithRouter(<ProjectCard {...project} />)
    expect(screen.getByRole('heading', { name: project.title })).toBeInTheDocument()
  })

  it('displays the project description', () => {
    renderWithRouter(<ProjectCard {...project} />)
    expect(screen.getByText(project.description)).toBeInTheDocument()
  })

  it('renders all download links', () => {
    renderWithRouter(<ProjectCard {...project} />)
    project.downloads.forEach(({ label }) => {
      expect(screen.getByRole('link', { name: new RegExp(label, 'i') })).toBeInTheDocument()
    })
  })

  it('prefixes download links with the app base path', () => {
    renderWithRouter(<ProjectCard {...project} />)
    expect(screen.getByRole('link', { name: /core rulebook/i })).toHaveAttribute('href', '/downloads/core-rulebook.pdf')
  })

  it('displays the version label', () => {
    renderWithRouter(<ProjectCard {...project} />)
    expect(screen.getByTestId('version-label')).toHaveTextContent(project.version)
  })

  it('has the correct category', () => {
    renderWithRouter(<ProjectCard {...project} />)
    const card = screen.getByTestId('project-card')
    expect(card).toHaveAttribute('data-category', project.category)
  })

  it('has the correct format', () => {
    renderWithRouter(<ProjectCard {...project} />)
    const card = screen.getByTestId('project-card')
    expect(card).toHaveAttribute('data-format', project.format)
  })

  it('shows the consultant author tag', () => {
    renderWithRouter(<ProjectCard {...project} />)

    expect(screen.getByText('David M. Daniel')).toBeInTheDocument()
    expect(screen.getByTestId('project-card')).toHaveAttribute('data-author', 'David M. Daniel')
  })

  it('marks the card when its author is the active filter', () => {
    renderWithRouter(<ProjectCard {...project} activeAuthor="David M. Daniel" />)

    expect(screen.getByTestId('project-card')).toHaveAttribute('data-author-selected', 'true')
  })
})
