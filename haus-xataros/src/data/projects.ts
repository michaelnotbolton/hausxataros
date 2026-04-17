export interface ProjectDownload {
  label: string
  href: string
}

export interface Project {
  title: string
  description: string
  category: string
  format: string
  version: string
  downloads: ProjectDownload[]
  seriesProgression?: string[]
}

export const projects: Project[] = [
  {
    title: 'The Zeitgeist Chronicles',
    description:
      'A tabletop RPG set in a world shaped by collective memory and arcane bureaucracy. Players navigate politics, power, and prophecy.',
    category: 'TTRPG',
    format: 'PDF',
    version: 'v1.2',
    downloads: [
      { label: 'Download Core Rulebook', href: '/downloads/zeitgeist-chronicles-core.pdf' },
      { label: 'Download Character Sheet Template', href: '/downloads/zeitgeist-character-sheet.pdf' },
      { label: 'Download Quick Start Guide', href: '/downloads/zeitgeist-chronicles-quick-start.pdf' },
    ],
    seriesProgression: ['Chapter 1: The Threshold', 'Chapter 2: The Archive', 'Chapter 3: The Rift'],
  },
  {
    title: 'Zeitgeist Chronicles Fiction',
    description:
      'A serialized fiction series set in the same universe as the TTRPG, following a cast of characters through the collapse of the Archive.',
    category: 'Fiction',
    format: 'Ebook',
    version: 'v2.0',
    downloads: [
      { label: 'Download Book 1', href: '/downloads/zeitgeist-fiction-book1.epub' },
      { label: 'Download Book 2', href: '/downloads/zeitgeist-fiction-book2.epub' },
      { label: 'Download Book 3', href: '/downloads/zeitgeist-fiction-book3.epub' },
    ],
    seriesProgression: ['Book 1', 'Book 2', 'Book 3'],
  },
  {
    title: 'Creativity Channeling',
    description:
      'A structured methodology for unlocking creative potential through ritual, reflection, and collaborative play. Suitable for individuals and teams.',
    category: 'Methodology',
    format: 'PDF',
    version: 'v3.1',
    downloads: [
      { label: 'Download Complete Guide', href: '/downloads/creativity-channeling-workbook.pdf' },
      { label: 'Download Quick-Start Resource Pack', href: '/downloads/creativity-channeling-facilitator.pdf' },
    ],
  },
]
