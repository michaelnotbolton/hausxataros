import { useParams, Navigate } from 'react-router-dom'
import ArticleDetail from '../components/blog/ArticleDetail'
import { getArticleBySlug } from '../data/articles'

export default function ArticleDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const article = slug ? getArticleBySlug(slug) : undefined

  if (!article) return <Navigate to="/" replace />

  return (
    <ArticleDetail
      title={article.title}
      author={article.author}
      date={article.date}
      body={article.body}
      relatedArticles={article.relatedArticles}
    />
  )
}
