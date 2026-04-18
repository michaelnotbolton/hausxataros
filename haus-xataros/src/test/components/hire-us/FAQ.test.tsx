import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import FAQ from '../../../components/hire-us/FAQ'

const items = [
  { question: 'Do you work with clients outside your region?', answer: 'Yes, we work remotely with clients worldwide.' },
  { question: "What's your cancellation policy?", answer: '48 hours notice required for a full refund.' },
]

describe('FAQ', () => {
  it('renders with data-testid="faq"', () => {
    render(<FAQ items={items} />)
    expect(screen.getByTestId('faq')).toBeInTheDocument()
  })

  it('renders a FAQ item for each entry', () => {
    render(<FAQ items={items} />)
    expect(screen.getAllByTestId('faq-item')).toHaveLength(items.length)
  })

  it('displays each question', () => {
    render(<FAQ items={items} />)
    items.forEach(({ question }) => {
      expect(screen.getByText(question)).toBeInTheDocument()
    })
  })

  it('displays each answer', () => {
    render(<FAQ items={items} />)
    items.forEach(({ answer }) => {
      expect(screen.getByText(answer)).toBeInTheDocument()
    })
  })

  it('opens the first question by default', () => {
    render(<FAQ items={items} />)

    expect(screen.getByRole('button', { name: items[0].question })).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByText(items[0].answer)).toBeVisible()
  })

  it('answers are accessible via expand/collapse', async () => {
    const user = userEvent.setup()
    render(<FAQ items={items} />)
    const secondQuestion = screen.getByRole('button', { name: items[1].question })
    await user.click(secondQuestion)
    expect(secondQuestion).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByRole('button', { name: items[0].question })).toHaveAttribute('aria-pressed', 'false')
    expect(screen.getByText(items[1].answer)).toBeVisible()
  })
})
