import { Navigate, useParams } from 'react-router-dom'
import WikiPage from '../components/wiki/WikiPage'
import { getWikiPageByRoutePath } from '../data/wiki'

export default function WikiEntryPage() {
  const params = useParams()
  const splat = params['*']?.replace(/^\/+/, '') ?? ''
  const routePath = splat ? `/wiki/${splat}` : '/wiki'
  const page = getWikiPageByRoutePath(routePath)

  if (!page || routePath === '/wiki') {
    return <Navigate to="/wiki" replace />
  }

  return <WikiPage page={page} />
}
