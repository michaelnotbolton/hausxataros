import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const DEFAULT_SECTION_ORDER = [
  'glossary',
  'tags',
  'combat',
  'powers',
  'types',
  'jotunnberg',
  'you-died',
]

function slugify(value) {
  return value
    .trim()
    .toLowerCase()
    .replace(/['"]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function stripFrontmatter(markdown) {
  if (!markdown.startsWith('---\n')) {
    return { frontmatter: {}, body: markdown.trim() }
  }

  const end = markdown.indexOf('\n---', 4)
  if (end === -1) {
    return { frontmatter: {}, body: markdown.trim() }
  }

  const rawFrontmatter = markdown.slice(4, end).trim()
  const body = markdown.slice(end + 4).trim()
  const frontmatter = {}

  for (const line of rawFrontmatter.split('\n')) {
    const separatorIndex = line.indexOf(':')
    if (separatorIndex === -1) continue

    const key = line.slice(0, separatorIndex).trim()
    const rawValue = line.slice(separatorIndex + 1).trim()

    if (rawValue.startsWith('[') && rawValue.endsWith(']')) {
      frontmatter[key] = rawValue
        .slice(1, -1)
        .split(',')
        .map((item) => item.trim().replace(/^['"]|['"]$/g, ''))
        .filter(Boolean)
      continue
    }

    frontmatter[key] = rawValue.replace(/^['"]|['"]$/g, '')
  }

  return { frontmatter, body }
}

function parseWikiLinkMarkup(markup) {
  const inner = markup.slice(2, -2)
  const [target, label] = inner.split('|')
  const cleanTarget = target.trim()

  return {
    target: cleanTarget,
    targetSlug: slugify(cleanTarget.split('/').pop() ?? cleanTarget),
    label: (label ?? cleanTarget).trim(),
  }
}

export function normalizeWikiRoutePath(vaultPath) {
  const withoutExtension = vaultPath.replace(/\.md$/i, '')
  const route = withoutExtension.endsWith('/_index')
    ? withoutExtension.slice(0, -'/_index'.length)
    : withoutExtension

  return `/wiki/${route}`.replace(/\/+/g, '/')
}

export function resolveWikiLink(rawMarkup, pages) {
  const parsed = parseWikiLinkMarkup(rawMarkup)
  const matchingPage = pages.find((page) => page.slug === parsed.targetSlug)

  return {
    label: parsed.label,
    href: matchingPage?.routePath ?? null,
    status: matchingPage ? 'resolved' : 'unresolved',
    targetSlug: parsed.targetSlug,
  }
}

function parseInlineSpans(text, pages) {
  const spans = []
  const pattern = /(\[\[[^\]]+\]\]|\*\*[^*]+\*\*|\*[^*]+\*)/g
  let lastIndex = 0

  for (const match of text.matchAll(pattern)) {
    const [token] = match
    const start = match.index ?? 0

    if (start > lastIndex) {
      spans.push({ type: 'text', text: text.slice(lastIndex, start) })
    }

    if (token.startsWith('[[')) {
      const link = resolveWikiLink(token, pages)
      spans.push({
        type: 'wiki-link',
        text: link.label,
        href: link.href,
        status: link.status,
      })
    } else if (token.startsWith('**')) {
      spans.push({ type: 'strong', text: token.slice(2, -2) })
    } else {
      spans.push({ type: 'emphasis', text: token.slice(1, -1) })
    }

    lastIndex = start + token.length
  }

  if (lastIndex < text.length) {
    spans.push({ type: 'text', text: text.slice(lastIndex) })
  }

  return spans.length > 0 ? spans : [{ type: 'text', text }]
}

function isBlank(line) {
  return line.trim().length === 0
}

function buildSummary(body, title) {
  const summaryLine = body
    .split('\n')
    .map((line) => line.trim())
    .find((line) => {
      if (!line || line === '---') return false
      if (line === `# ${title}`) return false
      return !line.startsWith('#')
    })

  if (!summaryLine) return ''

  return summaryLine
    .replace(/\[\[([^\]|]+)\|?([^\]]+)?\]\]/g, (_, target, label) => label ?? target)
    .replace(/\*+/g, '')
}

function parseMarkdownBlocks(body, pages, title) {
  const lines = body.split('\n')
  const blocks = []
  let index = 0
  let skippedTitleHeading = false

  while (index < lines.length) {
    const line = lines[index]

    if (isBlank(line) || line.trim() === '---') {
      index += 1
      continue
    }

    if (line.startsWith('```')) {
      const language = line.slice(3).trim() || null
      index += 1
      const codeLines = []
      while (index < lines.length && !lines[index].startsWith('```')) {
        codeLines.push(lines[index])
        index += 1
      }
      index += 1
      blocks.push({ type: 'code', language, code: codeLines.join('\n') })
      continue
    }

    const headingMatch = line.match(/^(#{1,6})\s+(.*)$/)
    if (headingMatch) {
      const [, hashes, rawText] = headingMatch
      const text = rawText.trim()

      if (!skippedTitleHeading && hashes.length === 1 && slugify(text) === slugify(title)) {
        skippedTitleHeading = true
        index += 1
        continue
      }

      blocks.push({
        type: 'heading',
        level: hashes.length,
        text,
        id: slugify(text),
      })
      index += 1
      continue
    }

    if (/^>\s?(.*)$/.test(line)) {
      const quoteLines = []
      while (index < lines.length && /^>\s?(.*)$/.test(lines[index])) {
        quoteLines.push(lines[index].replace(/^>\s?(.*)$/, '$1').trim())
        index += 1
      }
      blocks.push({
        type: 'blockquote',
        spans: parseInlineSpans(quoteLines.join(' '), pages),
      })
      continue
    }

    if (/^-\s+(.*)$/.test(line)) {
      const items = []
      while (index < lines.length && /^-\s+(.*)$/.test(lines[index])) {
        items.push(parseInlineSpans(lines[index].replace(/^-\s+(.*)$/, '$1'), pages))
        index += 1
      }
      blocks.push({ type: 'list', ordered: false, items })
      continue
    }

    if (/^\|.*\|$/.test(line) && index + 1 < lines.length && /^\|.*\|$/.test(lines[index + 1])) {
      const tableLines = []
      while (index < lines.length && /^\|.*\|$/.test(lines[index])) {
        tableLines.push(lines[index].trim())
        index += 1
      }

      const rows = tableLines.map((row) => row.slice(1, -1).split('|').map((cell) => cell.trim()))
      const [header, separator, ...bodyRows] = rows
      if (header && separator) {
        blocks.push({ type: 'table', header, rows: bodyRows })
      }
      continue
    }

    const paragraphLines = [line.trim()]
    index += 1
    while (index < lines.length && !isBlank(lines[index]) && lines[index].trim() !== '---') {
      const next = lines[index]
      if (
        next.startsWith('```') ||
        /^(#{1,6})\s+(.*)$/.test(next) ||
        /^-\s+(.*)$/.test(next) ||
        /^>\s?(.*)$/.test(next) ||
        /^\|.*\|$/.test(next)
      ) {
        break
      }
      paragraphLines.push(next.trim())
      index += 1
    }

    blocks.push({
      type: 'paragraph',
      spans: parseInlineSpans(paragraphLines.join(' '), pages),
    })
  }

  return blocks
}

function titleCase(value) {
  return value
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')
}

function dedupeLinks(links) {
  const seen = new Set()
  return links.filter((link) => {
    const key = `${link.targetSlug}:${link.label}:${link.status}`
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })
}

function collectRawPages(vaultFiles, allowSections) {
  const markdownFiles = vaultFiles.filter(({ path: filePath }) => {
    if (!filePath.endsWith('.md')) return false
    const topLevel = filePath.split('/')[0]
    return allowSections.includes(topLevel)
  })

  const rawPages = markdownFiles.map(({ path: filePath, content }) => {
    const { frontmatter, body } = stripFrontmatter(content)
    const routePath = normalizeWikiRoutePath(filePath)
    const relative = filePath.replace(/\.md$/i, '')
    const parts = relative.split('/')
    const sectionSlug = parts[0]
    const isSectionIndex = parts.at(-1) === '_index'
    const slug = isSectionIndex ? sectionSlug : slugify(parts.at(-1) ?? sectionSlug)
    const title = frontmatter.title ?? (isSectionIndex ? titleCase(sectionSlug) : titleCase(slug))

    return {
      id: filePath,
      routePath,
      frontmatter,
      body,
      sectionSlug,
      slug,
      isSectionIndex,
      title,
    }
  })

  const routeCounts = new Map()
  for (const page of rawPages) {
    routeCounts.set(page.routePath, (routeCounts.get(page.routePath) ?? 0) + 1)
  }

  const duplicateRoute = [...routeCounts.entries()].find(([, count]) => count > 1)
  if (duplicateRoute) {
    throw new Error(`Duplicate wiki route generated for ${duplicateRoute[0]}`)
  }

  return rawPages
}

function buildRelatedGroups(page, resolvedFrontmatterLinks, resolvedBodyLinks, unresolvedLinks) {
  const groups = []

  if (resolvedFrontmatterLinks.length > 0) {
    groups.push({
      title: 'See also',
      tone: 'resolved',
      items: resolvedFrontmatterLinks,
    })
  }

  if (resolvedBodyLinks.length > 0) {
    groups.push({
      title: 'Mentioned in this page',
      tone: 'resolved',
      items: resolvedBodyLinks,
    })
  }

  if (unresolvedLinks.length > 0) {
    groups.push({
      title: 'Unresolved references',
      tone: 'unresolved',
      items: unresolvedLinks,
    })
  }

  return groups
}

export function generateWikiContent(vaultFiles, allowSections = DEFAULT_SECTION_ORDER) {
  const rawPages = collectRawPages(vaultFiles, allowSections)
  const basePages = rawPages.map((page) => ({
    id: page.id,
    title: page.title,
    slug: page.slug,
    routePath: page.routePath,
    sectionSlug: page.sectionSlug,
  }))

  const sectionPageBySlug = new Map(
    rawPages
      .filter((page) => page.isSectionIndex)
      .map((page) => [page.sectionSlug, page]),
  )

  const pages = rawPages.map((rawPage) => {
    const sectionTitle = sectionPageBySlug.get(rawPage.sectionSlug)?.title ?? titleCase(rawPage.sectionSlug)
    const childPages = rawPages
      .filter((page) => !page.isSectionIndex && page.sectionSlug === rawPage.sectionSlug)
      .map((page) => ({
        title: page.title,
        routePath: page.routePath,
        summary: buildSummary(page.body, page.title),
      }))

    const breadcrumbs = [
      { label: 'Wiki', href: '/wiki' },
      { label: sectionTitle, href: `/wiki/${rawPage.sectionSlug}` },
    ]

    if (!rawPage.isSectionIndex) {
      breadcrumbs.push({ label: rawPage.title, href: rawPage.routePath })
    }

    return {
      id: rawPage.id,
      title: rawPage.title,
      slug: rawPage.slug,
      routePath: rawPage.routePath,
      sectionSlug: rawPage.sectionSlug,
      sectionTitle,
      isSectionIndex: rawPage.isSectionIndex,
      summary: buildSummary(rawPage.body, rawPage.title),
      breadcrumbs,
      childPages,
      sidebarSections: [],
      relatedGroups: [],
      content: [],
      links: [],
      _frontmatter: rawPage.frontmatter,
      _body: rawPage.body,
    }
  })

  const sectionSidebar = allowSections
    .map((sectionSlug) => {
      const sectionPage = sectionPageBySlug.get(sectionSlug)
      if (!sectionPage) return null

      return {
        slug: sectionSlug,
        title: sectionPage.title,
        routePath: `/wiki/${sectionSlug}`,
        isActive: false,
        pages: rawPages
          .filter((page) => !page.isSectionIndex && page.sectionSlug === sectionSlug)
          .map((page) => ({
            title: page.title,
            routePath: page.routePath,
            isActive: false,
          })),
      }
    })
    .filter(Boolean)

  for (const page of pages) {
    page.content = parseMarkdownBlocks(page._body, pages, page.title)

    const bodyLinks = dedupeLinks(
      [...page._body.matchAll(/\[\[[^\]]+\]\]/g)].map((match) => resolveWikiLink(match[0], pages)),
    )

    const frontmatterRelated = Array.isArray(page._frontmatter.related)
      ? page._frontmatter.related.map((entry) => resolveWikiLink(`[[${entry}|${titleCase(entry)}]]`, pages))
      : []

    const frontmatterTargets = new Set(frontmatterRelated.map((link) => link.targetSlug))
    const unresolvedLinks = bodyLinks.filter((link) => link.status === 'unresolved')
    const resolvedBodyLinks = bodyLinks.filter((link) => link.status === 'resolved' && !frontmatterTargets.has(link.targetSlug))
    const resolvedFrontmatterLinks = frontmatterRelated.filter((link) => link.status === 'resolved')

    page.links = bodyLinks
    page.relatedGroups = buildRelatedGroups(page, resolvedFrontmatterLinks, resolvedBodyLinks, unresolvedLinks)
    page.sidebarSections = sectionSidebar.map((section) => ({
      ...section,
      isActive: section.slug === page.sectionSlug,
      pages: section.pages.map((sectionPage) => ({
        ...sectionPage,
        isActive: sectionPage.routePath === page.routePath,
      })),
    }))
  }

  const sections = allowSections
    .map((sectionSlug) => {
      const sectionPage = sectionPageBySlug.get(sectionSlug)
      if (!sectionPage) return null

      return {
        slug: sectionSlug,
        title: sectionPage.title,
        routePath: `/wiki/${sectionSlug}`,
        summary: buildSummary(sectionPage.body, sectionPage.title),
        articleCount: rawPages.filter((page) => !page.isSectionIndex && page.sectionSlug === sectionSlug).length,
      }
    })
    .filter(Boolean)

  return {
    sections,
    pages: pages.map(({ _frontmatter, _body, ...page }) => page),
  }
}

export function loadVaultFiles(rootDir) {
  const absoluteRoot = path.resolve(rootDir)
  const files = []

  function visit(currentDir) {
    for (const entry of fs.readdirSync(currentDir, { withFileTypes: true })) {
      const fullPath = path.join(currentDir, entry.name)
      if (entry.isDirectory()) {
        visit(fullPath)
        continue
      }

      if (entry.isFile() && entry.name.endsWith('.md')) {
        files.push({
          path: path.relative(absoluteRoot, fullPath).replace(/\\/g, '/'),
          content: fs.readFileSync(fullPath, 'utf8'),
        })
      }
    }
  }

  visit(absoluteRoot)
  return files
}

export function writeGeneratedWikiData({ rootDir, outputFile, allowSections = DEFAULT_SECTION_ORDER }) {
  const files = loadVaultFiles(rootDir)
  const wiki = generateWikiContent(files, allowSections)
  const output = `/* This file is generated by scripts/generate-wiki-data.cjs. */
export const wikiSections = ${JSON.stringify(wiki.sections, null, 2)} as const

export const wikiPages = ${JSON.stringify(wiki.pages, null, 2)} as const
`

  fs.mkdirSync(path.dirname(outputFile), { recursive: true })
  fs.writeFileSync(outputFile, output)
}

const currentFile = fileURLToPath(import.meta.url)
if (process.argv[1] === currentFile) {
  const [, , rootDir, outputFile] = process.argv
  writeGeneratedWikiData({ rootDir, outputFile })
}
