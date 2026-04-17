import type { Meta, StoryObj } from '@storybook/react'
import Tag from './Tag'

const meta = {
  title: 'UI/Tag',
  component: Tag,
  args: {
    children: 'Queer Theory',
  },
} satisfies Meta<typeof Tag>

export default meta

type Story = StoryObj<typeof meta>

export const Gold: Story = {}

export const Muted: Story = {
  args: {
    tone: 'muted',
    children: '6 min read',
  },
}
