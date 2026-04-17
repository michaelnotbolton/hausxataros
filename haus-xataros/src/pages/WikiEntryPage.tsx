import { useParams, Navigate } from 'react-router-dom'
import WikiEntry from '../components/wiki/WikiEntry'
import { getWikiEntryBySlug } from '../data/wiki'

export default function WikiEntryPage() {
  const { slug } = useParams<{ slug: string }>()
  const entry = slug ? getWikiEntryBySlug(slug) : undefined

  if (!entry) return <Navigate to="/wiki" replace />

  return (
    <WikiEntry
      title={entry.title}
      definition={entry.definition}
      body={entry.body}
      relatedLinks={entry.relatedLinks}
      referencedIn={entry.referencedIn}
      breadcrumbs={entry.breadcrumbs}
    />
  )
}
