import { screen } from '@testing-library/react'
import { renderWithRouter } from '../../utils'
import ArticleDetail from '../../../components/blog/ArticleDetail'

const article = {
  title: 'On Being Seen',
  author: "Leona La'Roux",
  date: '2025-12-01',
  body: <p>What does it mean to truly be visible?</p>,
  relatedArticles: [
    { title: 'Queer Theory 101', slug: 'queer-theory-101' },
    { title: 'The Art of Presence', slug: 'art-of-presence' },
  ],
}

describe('ArticleDetail', () => {
  it('renders with data-testid="article-detail"', () => {
    renderWithRouter(<ArticleDetail {...article} />)
    expect(screen.getByTestId('article-detail')).toBeInTheDocument()
  })

  it('displays the article title as an h1', () => {
    renderWithRouter(<ArticleDetail {...article} />)
    expect(screen.getByRole('heading', { name: article.title, level: 1 })).toBeInTheDocument()
  })

  it('displays the author byline', () => {
    renderWithRouter(<ArticleDetail {...article} />)
    expect(screen.getByTestId('author-byline')).toHaveTextContent(article.author)
  })

  it('displays the article body', () => {
    renderWithRouter(<ArticleDetail {...article} />)
    expect(screen.getByTestId('article-body')).toBeInTheDocument()
  })

  it('does not render placeholder share actions', () => {
    renderWithRouter(<ArticleDetail {...article} />)
    expect(screen.queryByTestId('share-facebook')).not.toBeInTheDocument()
    expect(screen.queryByTestId('share-bluesky')).not.toBeInTheDocument()
    expect(screen.queryByTestId('share-email')).not.toBeInTheDocument()
  })

  it('renders a Subscribe to This Series CTA', () => {
    renderWithRouter(<ArticleDetail {...article} />)
    const cta =
      screen.queryByRole('link', { name: /subscribe to this series/i }) ??
      screen.queryByRole('button', { name: /subscribe to this series/i }) ??
      screen.getByText(/subscribe to this series/i)

    expect(cta).toBeInTheDocument()
  })

  it('renders related articles', () => {
    renderWithRouter(<ArticleDetail {...article} />)
    expect(screen.getByTestId('related-articles')).toBeInTheDocument()
    article.relatedArticles.forEach(({ title }) => {
      expect(screen.getByText(title)).toBeInTheDocument()
    })
  })

  it('uses router links for related articles', () => {
    renderWithRouter(<ArticleDetail {...article} />)
    expect(screen.getByRole('link', { name: 'Queer Theory 101' })).toHaveAttribute('href', '/article/queer-theory-101')
  })
})
