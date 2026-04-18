import type { Meta, StoryObj } from '@storybook/react'
import ProjectCard from './ProjectCard'

const meta = {
  title: 'Work/ProjectCard',
  component: ProjectCard,
  args: {
    title: 'The Zeitgeist Chronicles',
    description: 'A tabletop RPG set in a world shaped by collective memory and arcane bureaucracy.',
    category: 'TTRPG',
    format: 'PDF',
    authorKey: 'david-m-daniel',
    version: 'v1.2',
    downloads: [
      { label: 'Download Core Rulebook', href: '/downloads/zeitgeist-chronicles-core.pdf' },
      { label: 'Download Character Sheet Template', href: '/downloads/zeitgeist-character-sheet.pdf' },
      { label: 'Download Quick Start Guide', href: '/downloads/zeitgeist-chronicles-quick-start.pdf' },
    ],
    seriesProgression: ['Chapter 1: The Threshold', 'Chapter 2: The Archive', 'Chapter 3: The Rift'],
  },
} satisfies Meta<typeof ProjectCard>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
