import type { Meta, StoryObj } from '@storybook/react'
import SelectablePill from './SelectablePill'

const meta = {
  title: 'UI/SelectablePill',
  component: SelectablePill,
  args: {
    children: 'David M. Daniel',
  },
} satisfies Meta<typeof SelectablePill>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Selected: Story = {
  args: {
    selected: true,
    children: 'Selected author',
  },
}
