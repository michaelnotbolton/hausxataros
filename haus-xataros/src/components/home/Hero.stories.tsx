import type { Meta, StoryObj } from '@storybook/react'
import Hero from './Hero'

const meta = {
  title: 'Home/Hero',
  component: Hero,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    heading: 'Haus Xataros',
    subheading: 'A creative studio at the intersection of drag, game design, and queer theory.',
  },
} satisfies Meta<typeof Hero>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
