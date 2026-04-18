interface VaultFileInput {
  path: string
  content: string
}

interface WikiLinkResult {
  label: string
  href: string | null
  status: 'resolved' | 'unresolved'
  targetSlug: string
}

interface WikiPageResult {
  id: string
  slug: string
  routePath: string
  sectionSlug: string
  sectionTitle: string
  title: string
  isSectionIndex: boolean
  summary: string
  sidebarSections: Array<{
    slug: string
    title: string
    routePath: string
    isActive: boolean
    pages: Array<{
      title: string
      routePath: string
      isActive: boolean
    }>
  }>
  relatedGroups: Array<{
    title: string
    tone: 'resolved' | 'mixed' | 'unresolved'
    items: WikiLinkResult[]
  }>
  content: Array<{ type: string }>
  links: WikiLinkResult[]
}

interface WikiSectionResult {
  title: string
  routePath: string
  articleCount: number
}

// @ts-ignore The implementation lives in a Node-friendly .mjs module used by the generator script.
import * as wikiGenerator from '../../../scripts/wiki/generateWikiContent.mjs'

export const normalizeWikiRoutePath = wikiGenerator.normalizeWikiRoutePath as (
  vaultPath: string,
) => string

export const resolveWikiLink = wikiGenerator.resolveWikiLink as (
  rawMarkup: string,
  pages: Array<{ slug: string; routePath: string }>,
) => WikiLinkResult

export const generateWikiContent = wikiGenerator.generateWikiContent as (
  vaultFiles: VaultFileInput[],
  allowSections?: string[],
) => {
  sections: WikiSectionResult[]
  pages: WikiPageResult[]
}
