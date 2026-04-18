import { describe, expect, it } from 'vitest'
import {
  generateWikiContent,
  normalizeWikiRoutePath,
  resolveWikiLink,
} from './generateWikiContent'

const vaultFiles = [
  {
    path: 'glossary/_index.md',
    content: `---
title: Glossary
---
*(This folder is ready. First articles coming soon.)*`,
  },
  {
    path: 'glossary/affirmation.md',
    content: `---
title: Affirmation
related: [power, beat]
---

# Affirmation

An Affirmation is linked to [[power|Power]] and [[beat|Beat]].

> **Affirmation syllable count = bonus d6 dice added to the activation roll.**`,
  },
  {
    path: 'glossary/beat.md',
    content: `---
title: Beat
---

# Beat

A Beat is the basic unit of game time.`,
  },
]

describe('normalizeWikiRoutePath', () => {
  it('builds a wiki route path from a vault markdown path', () => {
    expect(normalizeWikiRoutePath('glossary/affirmation.md')).toBe('/wiki/glossary/affirmation')
  })

  it('maps folder index files to their section route', () => {
    expect(normalizeWikiRoutePath('glossary/_index.md')).toBe('/wiki/glossary')
  })
})

describe('resolveWikiLink', () => {
  it('resolves matching wiki pages by slug', () => {
    const pages = [
      { slug: 'affirmation', routePath: '/wiki/glossary/affirmation' },
      { slug: 'beat', routePath: '/wiki/glossary/beat' },
    ]

    expect(resolveWikiLink('[[beat|Beat]]', pages)).toEqual({
      label: 'Beat',
      href: '/wiki/glossary/beat',
      status: 'resolved',
      targetSlug: 'beat',
    })
  })

  it('marks missing wiki targets as unresolved', () => {
    expect(resolveWikiLink('[[power|Power]]', [])).toEqual({
      label: 'Power',
      href: null,
      status: 'unresolved',
      targetSlug: 'power',
    })
  })
})

describe('generateWikiContent', () => {
  it('creates docs-shell navigation data from Obsidian files', () => {
    const wiki = generateWikiContent(vaultFiles, ['glossary'])

    expect(wiki.sections).toEqual([
      expect.objectContaining({
        title: 'Glossary',
        routePath: '/wiki/glossary',
        articleCount: 2,
      }),
    ])

    expect(wiki.pages).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          title: 'Affirmation',
          routePath: '/wiki/glossary/affirmation',
          sectionSlug: 'glossary',
        }),
        expect.objectContaining({
          title: 'Beat',
          routePath: '/wiki/glossary/beat',
          sectionSlug: 'glossary',
        }),
      ]),
    )

    const affirmation = wiki.pages.find((page) => page.slug === 'affirmation')
    expect(affirmation?.sidebarSections).toEqual([
      expect.objectContaining({
        title: 'Glossary',
        isActive: true,
        pages: expect.arrayContaining([
          expect.objectContaining({
            title: 'Affirmation',
            isActive: true,
          }),
          expect.objectContaining({
            title: 'Beat',
            isActive: false,
          }),
        ]),
      }),
    ])
  })

  it('captures both resolved and unresolved Obsidian links for a page', () => {
    const wiki = generateWikiContent(vaultFiles, ['glossary'])
    const affirmation = wiki.pages.find((page) => page.slug === 'affirmation')

    expect(affirmation?.links).toEqual([
      {
        label: 'Power',
        href: null,
        status: 'unresolved',
        targetSlug: 'power',
      },
      {
        label: 'Beat',
        href: '/wiki/glossary/beat',
        status: 'resolved',
        targetSlug: 'beat',
      },
    ])
  })

  it('groups references and suppresses a duplicate body H1 in generated content', () => {
    const wiki = generateWikiContent(vaultFiles, ['glossary'])
    const affirmation = wiki.pages.find((page) => page.slug === 'affirmation')

    expect(affirmation?.content[0]).toEqual(
      expect.objectContaining({
        type: 'paragraph',
      }),
    )

    expect(affirmation?.relatedGroups).toEqual([
      expect.objectContaining({
        title: 'See also',
        items: [
          {
            label: 'Beat',
            href: '/wiki/glossary/beat',
            status: 'resolved',
            targetSlug: 'beat',
          },
        ],
      }),
      expect.objectContaining({
        title: 'Unresolved references',
        items: [
          {
            label: 'Power',
            href: null,
            status: 'unresolved',
            targetSlug: 'power',
          },
        ],
      }),
    ])
  })
})
