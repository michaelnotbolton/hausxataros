import { render, type RenderOptions } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import type { ReactElement } from 'react'

interface RouterOptions extends RenderOptions {
  route?: string
}

function WithRouter({ children, route = '/' }: { children: React.ReactNode; route?: string }) {
  return <MemoryRouter initialEntries={[route]}>{children}</MemoryRouter>
}

export function renderWithRouter(ui: ReactElement, options?: RouterOptions) {
  const { route, ...renderOptions } = options ?? {}
  return render(ui, {
    wrapper: ({ children }) => <WithRouter route={route}>{children}</WithRouter>,
    ...renderOptions,
  })
}
