import ArticleCard from '../components/blog/ArticleCard'
import { getArticlesByBlog } from '../data/articles'

export default function StudioNotes() {
  const articles = getArticlesByBlog('studio-notes')

  return (
    <>
      <header>
        <h1>Studio Notes</h1>
        <p>Technical writing, game design process, and behind-the-scenes craft.</p>
      </header>
      <section data-testid="article-feed">
        {articles.map((article) => (
          <ArticleCard
            key={article.slug}
            title={article.title}
            slug={article.slug}
            author={article.author}
            date={article.date}
            excerpt={article.excerpt}
            readTime={article.readTime}
            categories={article.tags}
          />
        ))}
      </section>
    </>
  )
}
