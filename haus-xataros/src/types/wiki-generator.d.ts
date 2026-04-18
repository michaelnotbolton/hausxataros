declare module '../../../scripts/wiki/generateWikiContent.mjs' {
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

  interface WikiSectionResult {
    slug: string
    title: string
    routePath: string
    summary: string
    articleCount: number
  }

  interface WikiPageResult {
    id: string
    title: string
    slug: string
    routePath: string
    sectionSlug: string
    sectionTitle: string
    isSectionIndex: boolean
    summary: string
    breadcrumbs: { label: string; href: string }[]
    childPages: { title: string; routePath: string; summary: string }[]
    content: unknown[]
    links: WikiLinkResult[]
  }

  export function normalizeWikiRoutePath(vaultPath: string): string
  export function resolveWikiLink(
    rawMarkup: string,
    pages: Array<{ slug: string; routePath: string }>,
  ): WikiLinkResult
  export function generateWikiContent(
    vaultFiles: VaultFileInput[],
    allowSections?: string[],
  ): { sections: WikiSectionResult[]; pages: WikiPageResult[] }
}
