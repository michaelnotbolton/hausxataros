import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CodeBlock from '../../../components/blog/CodeBlock'

describe('CodeBlock', () => {
  const code = 'const greeting = "Hello, Haus Xataros"'

  it('renders a pre element', () => {
    render(<CodeBlock code={code} />)
    expect(screen.getByRole('region', { name: /code/i })
      .querySelector('pre')).toBeInTheDocument()
  })

  it('displays the code content', () => {
    render(<CodeBlock code={code} />)
    expect(screen.getByText(code)).toBeInTheDocument()
  })

  it('renders a Copy to Clipboard button', () => {
    render(<CodeBlock code={code} />)
    expect(screen.getByRole('button', { name: /copy to clipboard/i })).toBeInTheDocument()
  })

  it('copies code to clipboard when button is clicked', async () => {
    const user = userEvent.setup()
    const writeText = vi.fn().mockResolvedValue(undefined)
    Object.defineProperty(navigator, 'clipboard', {
      value: { writeText },
      configurable: true,
    })
    render(<CodeBlock code={code} />)
    await user.click(screen.getByRole('button', { name: /copy to clipboard/i }))
    expect(writeText).toHaveBeenCalledWith(code)
  })

  it('shows a language label when provided', () => {
    render(<CodeBlock code={code} language="typescript" />)
    expect(screen.getByText(/typescript/i)).toBeInTheDocument()
  })
})
