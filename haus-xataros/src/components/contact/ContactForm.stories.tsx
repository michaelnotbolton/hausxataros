import type { Meta, StoryObj } from '@storybook/react'
import ContactForm from './ContactForm'

const meta = {
  title: 'Contact/ContactForm',
  component: ContactForm,
  args: {
    subjectLabel: 'Service Type',
    messageLabel: 'Project Description',
    submitLabel: 'Send',
  },
} satisfies Meta<typeof ContactForm>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const ConsultingVariant: Story = {
  args: {
    subjectLabel: 'Service Type',
    messageLabel: 'Project Description',
    submitLabel: 'Start the Conversation',
  },
}
