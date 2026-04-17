export interface WikiEntry {
  title: string
  slug: string
  definition: string
  body: string
  category: string
  relatedLinks: { label: string; href: string }[]
  referencedIn: { label: string; href: string }[]
  breadcrumbs: { label: string; href: string }[]
}

export const wikiEntries: WikiEntry[] = [
  {
    title: 'Vector',
    slug: 'vector',
    definition: 'A conduit through which arcane energy is channeled.',
    body: '<p>Vectors are individuals or objects capable of directing magical force. They act as living bridges between the raw aether and structured spell effects.</p><p>Most Vectors are born with the gift, though the Affirmation System allows trained practitioners to temporarily assume this role.</p>',
    category: 'Core Mechanics',
    relatedLinks: [
      { label: 'Affirmation System', href: '/wiki/affirmation-system' },
      { label: 'Threshold', href: '/wiki/threshold' },
    ],
    referencedIn: [
      { label: 'Core Mechanics Overview', href: '/studio-notes/core-mechanics-overview' },
    ],
    breadcrumbs: [
      { label: 'Wiki', href: '/wiki' },
      { label: 'Core Mechanics', href: '/wiki/core-mechanics' },
      { label: 'Vector', href: '/wiki/vector' },
    ],
  },
  {
    title: 'Threshold',
    slug: 'threshold',
    definition: 'The boundary between the material plane and the Aether.',
    body: '<p>The Threshold is a semi-permeable membrane separating everyday reality from the raw magical substrate known as the Aether. Crossings are dangerous without preparation.</p>',
    category: 'Lore & World',
    relatedLinks: [
      { label: 'Vector', href: '/wiki/vector' },
      { label: 'The Rift', href: '/wiki/the-rift' },
    ],
    referencedIn: [
      { label: 'Chapter 3: The Rift', href: '/work' },
    ],
    breadcrumbs: [
      { label: 'Wiki', href: '/wiki' },
      { label: 'Lore', href: '/wiki/lore' },
      { label: 'Threshold', href: '/wiki/threshold' },
    ],
  },
  {
    title: 'Affirmation System',
    slug: 'affirmation-system',
    definition: 'A ritual framework for temporarily granting Vector abilities to non-gifted practitioners.',
    body: '<p>The Affirmation System was developed by the Archive as a way to expand the pool of available Vectors during the Collapse. Critics argue it commodifies what should be an innate gift.</p>',
    category: 'Core Mechanics',
    relatedLinks: [
      { label: 'Vector', href: '/wiki/vector' },
    ],
    referencedIn: [],
    breadcrumbs: [
      { label: 'Wiki', href: '/wiki' },
      { label: 'Mechanics', href: '/wiki/mechanics' },
      { label: 'Affirmation System', href: '/wiki/affirmation-system' },
    ],
  },
]

export const wikiCategories = [
  'Core Mechanics',
  'Lore & World',
  'Character Creation',
  'Powers & Abilities',
  'Creatures & NPCs',
  'Factions & Organizations',
  'Timeline & History',
]

export function getWikiEntryBySlug(slug: string): WikiEntry | undefined {
  return wikiEntries.find((e) => e.slug === slug)
}

export function getWikiEntriesByCategory(category: string): WikiEntry[] {
  return wikiEntries.filter((e) => e.category === category)
}
