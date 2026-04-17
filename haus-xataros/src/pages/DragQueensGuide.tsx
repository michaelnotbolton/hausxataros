import ArticleCard from '../components/blog/ArticleCard'
import { getArticlesByBlog } from '../data/articles'

export default function DragQueensGuide() {
  const articles = getArticlesByBlog('drag-queens-guide')

  return (
    <>
      <header>
        <h1>The Drag Queen's Guide</h1>
        <p>Essays on performance, identity, and the art of becoming.</p>
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
