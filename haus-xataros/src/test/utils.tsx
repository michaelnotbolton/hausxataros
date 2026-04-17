import { render, type RenderOptions } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import type { ReactElement } from 'react'

function WithRouter({ children }: { children: React.ReactNode }) {
  return <MemoryRouter>{children}</MemoryRouter>
}

export function renderWithRouter(ui: ReactElement, options?: RenderOptions) {
  return render(ui, { wrapper: WithRouter, ...options })
}
