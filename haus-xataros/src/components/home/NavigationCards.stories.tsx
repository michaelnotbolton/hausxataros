import type { Meta, StoryObj } from '@storybook/react'
import NavigationCards from './NavigationCards'

const meta = {
  title: 'Home/NavigationCards',
  component: NavigationCards,
  parameters: {
    layout: 'padded',
  },
  args: {
    cards: [
      { label: 'Our Work', to: '/work', description: 'Explore our creative projects' },
      {
        label: "The Drag Queen's Guide",
        to: '/drag-queens-guide',
        description: 'Read essays, guidance, and creative reflections',
      },
      { label: 'Hire Us', to: '/hire-us', description: 'Work with us on strategy and storytelling' },
    ],
  },
} satisfies Meta<typeof NavigationCards>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
