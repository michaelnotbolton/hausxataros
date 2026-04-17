import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ContactForm from '../../../components/contact/ContactForm'

describe('ContactForm', () => {
  it('renders with data-testid="contact-form"', () => {
    render(<ContactForm />)
    expect(screen.getByTestId('contact-form')).toBeInTheDocument()
  })

  it('has a Name field', () => {
    render(<ContactForm />)
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument()
  })

  it('has an Email field', () => {
    render(<ContactForm />)
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
  })

  it('has a Subject field', () => {
    render(<ContactForm />)
    expect(screen.getByLabelText(/subject/i)).toBeInTheDocument()
  })

  it('has a Message field', () => {
    render(<ContactForm />)
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument()
  })

  it('has a submit button', () => {
    render(<ContactForm />)
    expect(screen.getByRole('button', { name: /send/i })).toBeInTheDocument()
  })

  it('shows a confirmation message after submission', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    await user.type(screen.getByLabelText(/name/i), 'Test User')
    await user.type(screen.getByLabelText(/email/i), 'test@example.com')
    await user.type(screen.getByLabelText(/subject/i), 'Hello')
    await user.type(screen.getByLabelText(/message/i), 'This is a test message')
    await user.click(screen.getByRole('button', { name: /send/i }))
    expect(screen.getByTestId('confirmation-message')).toBeInTheDocument()
  })

  it('calls onSubmit with form data when submitted', async () => {
    const user = userEvent.setup()
    const onSubmit = vi.fn()
    render(<ContactForm onSubmit={onSubmit} />)
    await user.type(screen.getByLabelText(/name/i), 'Test User')
    await user.type(screen.getByLabelText(/email/i), 'test@example.com')
    await user.type(screen.getByLabelText(/subject/i), 'Hello')
    await user.type(screen.getByLabelText(/message/i), 'Test message')
    await user.click(screen.getByRole('button', { name: /send/i }))
    expect(onSubmit).toHaveBeenCalledWith({
      name: 'Test User',
      email: 'test@example.com',
      subject: 'Hello',
      message: 'Test message',
    })
  })
})
