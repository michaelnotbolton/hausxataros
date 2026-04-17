import type { Meta, StoryObj } from '@storybook/react'
import ArticleCard from './ArticleCard'

const meta = {
  title: 'Blog/ArticleCard',
  component: ArticleCard,
  args: {
    title: 'On Being Seen',
    date: '2026-02-20',
    excerpt: 'What does it mean to truly be visible? Reflections on performance, identity, and the gaze.',
    readTime: '5 min read',
    categories: ['Performance', 'Identity', 'Queer Theory'],
    slug: 'on-being-seen',
    author: "Leona La'Roux",
  },
} satisfies Meta<typeof ArticleCard>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
