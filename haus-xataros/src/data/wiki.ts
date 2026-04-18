import { wikiPages as generatedWikiPages, wikiSections as generatedWikiSections } from './wiki.generated'

export interface WikiBreadcrumb {
  label: string
  href: string
}

export interface WikiChildPage {
  title: string
  routePath: string
  summary: string
}

export interface WikiLinkReference {
  label: string
  href: string | null
  status: 'resolved' | 'unresolved'
  targetSlug: string
}

export interface WikiReferenceGroup {
  title: string
  tone: 'resolved' | 'mixed' | 'unresolved'
  items: WikiLinkReference[]
}

export interface WikiSidebarPage {
  title: string
  routePath: string
  isActive: boolean
}

export interface WikiSidebarSection {
  slug: string
  title: string
  routePath: string
  isActive: boolean
  pages: WikiSidebarPage[]
}

export interface WikiTextSpan {
  type: 'text' | 'strong' | 'emphasis' | 'wiki-link'
  text: string
  href?: string | null
  status?: 'resolved' | 'unresolved'
}

export type WikiContentBlock =
  | { type: 'heading'; level: number; text: string; id: string }
  | { type: 'paragraph'; spans: WikiTextSpan[] }
  | { type: 'blockquote'; spans: WikiTextSpan[] }
  | { type: 'list'; ordered: boolean; items: WikiTextSpan[][] }
  | { type: 'table'; header: string[]; rows: string[][] }
  | { type: 'code'; language: string | null; code: string }

export interface WikiPageRecord {
  id: string
  title: string
  slug: string
  routePath: string
  sectionSlug: string
  sectionTitle: string
  isSectionIndex: boolean
  summary: string
  breadcrumbs: WikiBreadcrumb[]
  childPages: WikiChildPage[]
  sidebarSections: WikiSidebarSection[]
  relatedGroups: WikiReferenceGroup[]
  content: WikiContentBlock[]
  links: WikiLinkReference[]
}

export interface WikiSectionRecord {
  slug: string
  title: string
  routePath: string
  summary: string
  articleCount: number
}

export const wikiSections = generatedWikiSections as unknown as WikiSectionRecord[]
export const wikiPages = generatedWikiPages as unknown as WikiPageRecord[]

export function getWikiPageByRoutePath(routePath: string): WikiPageRecord | undefined {
  return wikiPages.find((page) => page.routePath === routePath)
}

export function getDefaultWikiPage(): WikiPageRecord | undefined {
  return wikiPages.find((page) => page.routePath === '/wiki/glossary')
    ?? wikiPages.find((page) => page.isSectionIndex)
}

export function searchWikiPages(query: string): WikiPageRecord[] {
  const normalizedQuery = query.trim().toLowerCase()

  if (!normalizedQuery) {
    return []
  }

  return wikiPages.filter((page) => {
    if (page.isSectionIndex) return false

    const haystack = [page.title, page.summary, page.sectionTitle]
      .join(' ')
      .toLowerCase()

    return haystack.includes(normalizedQuery)
  })
}
