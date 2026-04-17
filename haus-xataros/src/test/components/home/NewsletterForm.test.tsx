import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import NewsletterForm from '../../../components/home/NewsletterForm'

describe('NewsletterForm', () => {
  it('renders with data-testid="newsletter-form"', () => {
    render(<NewsletterForm />)
    expect(screen.getByTestId('newsletter-form')).toBeInTheDocument()
  })

  it('has an email input', () => {
    render(<NewsletterForm />)
    expect(screen.getByRole('textbox', { name: /email/i })).toBeInTheDocument()
  })

  it('has a submit button', () => {
    render(<NewsletterForm />)
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument()
  })

  it('calls onSubmit with the email value when submitted', async () => {
    const user = userEvent.setup()
    const onSubmit = vi.fn()
    render(<NewsletterForm onSubmit={onSubmit} />)
    await user.type(screen.getByRole('textbox', { name: /email/i }), 'test@example.com')
    await user.click(screen.getByRole('button', { name: /subscribe/i }))
    expect(onSubmit).toHaveBeenCalledWith('test@example.com')
  })
})
