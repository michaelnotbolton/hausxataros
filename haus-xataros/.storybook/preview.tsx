import type { Preview } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'
import '../src/index.css'

const preview: Preview = {
  decorators: [
    (Story) => (
      <MemoryRouter>
        <div style={{ padding: '1rem' }}>
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'centered',
  },
}

export default preview
