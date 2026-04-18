export interface Service {
  title: string
  description: string
  duration: string
  price: string
}

export const services: Service[] = [
  {
    title: 'Strategic Consultation',
    description: 'A focused session to identify creative or organizational blocks and map practical next steps for your work.',
    duration: '90 minutes',
    price: '$150–$200',
  },
  {
    title: 'Editorial Consultation',
    description: 'Deep editorial guidance on structure, tone, clarity, and how your project lands with its intended audience.',
    duration: '2–3 hours',
    price: '$250–$400',
  },
  {
    title: 'Creative Development',
    description: 'Collaborative support for world-building, story development, performance framing, and concept refinement.',
    duration: '2 hours',
    price: '$200–$350',
  },
  {
    title: 'Directorial Guidance',
    description: 'Outside-eye feedback for staging, presentation, performance choices, and the emotional architecture of a piece.',
    duration: 'Half or full day',
    price: '$500–$1,200',
  },
  {
    title: 'Educational Workshop',
    description: 'Custom learning sessions on queer theory, creative process, storytelling, and collaborative practice.',
    duration: '60–90 minutes',
    price: '$120–$180',
  },
  {
    title: 'Custom Tarot Reading',
    description: 'A guided reading designed to illuminate creative decisions, project energy, and personal crossroads.',
    duration: '3–4 hours',
    price: '$400–$600',
  },
]
export const howItWorksSteps = [
  { number: 1, description: 'We meet for 30 minutes to understand your project and goals.' },
  { number: 2, description: 'We send a tailored proposal outlining scope, timeline, and investment.' },
  { number: 3, description: 'You review, approve, and sign our simple service agreement.' },
  { number: 4, description: 'We dive into the work — sessions, reviews, workshops, or audits.' },
  { number: 5, description: 'You receive all deliverables with full documentation.' },
  { number: 6, description: 'A 30-minute follow-up call to answer questions and set next steps.' },
]

export const faqs = [
  {
    question: 'Do you work with first-time creators?',
    answer: 'Absolutely. We tailor our approach to your experience level and goals.',
  },
  {
    question: 'Are sessions remote or in-person?',
    answer: 'All sessions are currently remote via video call. In-person workshops can be arranged for Portland, OR.',
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'Cancellations with 48+ hours notice receive a full refund. Later cancellations receive a credit toward future sessions.',
  },
  {
    question: 'Do you offer sliding scale pricing?',
    answer: 'Yes. We reserve a portion of our schedule for sliding scale clients. Reach out to discuss.',
  },
]
