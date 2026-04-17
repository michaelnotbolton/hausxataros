import { screen } from '@testing-library/react'
import { renderWithRouter } from '../../utils'
import ArticleCard from '../../../components/blog/ArticleCard'

const article = {
  title: 'On Being Seen',
  date: '2025-12-01',
  excerpt: 'What does it mean to truly be visible in a world that looks away?',
  readTime: '6 min',
  categories: ['Queer Theory', 'Identity'],
  slug: 'on-being-seen',
  author: 'Leona La\'Roux',
}

describe('ArticleCard', () => {
  it('renders with data-testid="article-card"', () => {
    renderWithRouter(<ArticleCard {...article} />)
    expect(screen.getByTestId('article-card')).toBeInTheDocument()
  })

  it('displays the article title', () => {
    renderWithRouter(<ArticleCard {...article} />)
    expect(screen.getByRole('heading', { name: article.title })).toBeInTheDocument()
  })

  it('displays the date as a time element', () => {
    renderWithRouter(<ArticleCard {...article} />)
    expect(screen.getByTestId('article-card').querySelector('time')).toBeInTheDocument()
  })

  it('displays the excerpt', () => {
    renderWithRouter(<ArticleCard {...article} />)
    expect(screen.getByTestId('article-excerpt')).toHaveTextContent(article.excerpt)
  })

  it('displays the read time', () => {
    renderWithRouter(<ArticleCard {...article} />)
    expect(screen.getByTestId('read-time')).toHaveTextContent(article.readTime)
  })

  it('displays all category tags', () => {
    renderWithRouter(<ArticleCard {...article} />)
    article.categories.forEach((cat) => {
      expect(screen.getAllByTestId('category-tag').find(el => el.textContent === cat)).toBeTruthy()
    })
  })

  it('links to the article detail page', () => {
    renderWithRouter(<ArticleCard {...article} />)
    const link = screen.getByRole('link', { name: article.title })
    expect(link).toHaveAttribute('href', expect.stringContaining(article.slug))
  })
})
