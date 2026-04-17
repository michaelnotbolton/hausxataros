import PatreonTiers from '../components/support/PatreonTiers'

const tiers = [
  {
    name: 'Acolyte — $5/month',
    includes: [
      'Early access to all new releases',
      'Monthly studio newsletter',
      'Name in credits',
    ],
  },
  {
    name: 'Practitioner — $15/month',
    includes: [
      'Everything in Acolyte',
      'Access to exclusive PDF supplements',
      'Monthly Q&A session',
      'Patron Discord access',
    ],
  },
  {
    name: 'Vector — $30/month',
    includes: [
      'Everything in Practitioner',
      'Access to work-in-progress drafts',
      'Vote on future project directions',
      'One free 30-min consultation per quarter',
    ],
  },
]

const monthlyUpdate = {
  month: 'March 2026',
  content:
    'This month we shipped Chapter 3 of The Zeitgeist Chronicles, launched the updated Creativity Channeling workbook, and welcomed 12 new Patrons. Thank you for making this work possible.',
}

export default function Support() {
  return (
    <>
      <h1>Support Haus Xataros</h1>
      <p data-testid="support-purpose">
        Your support sustains independent creative work that centers queer voices, experimental
        game design, and rigorous creative methodology. Every contribution directly funds new
        releases, free community resources, and our consulting sliding scale.
      </p>

      <PatreonTiers tiers={tiers} />

      <div>
        <a href="https://www.patreon.com/hausxataros" rel="noopener noreferrer">
          Support on Patreon
        </a>
        <a href="https://ko-fi.com/hausxataros" rel="noopener noreferrer">
          Buy Me a Coffee
        </a>
      </div>

      <section data-testid="monthly-update">
        <h2>Monthly Update — {monthlyUpdate.month}</h2>
        <p>{monthlyUpdate.content}</p>
      </section>
    </>
  )
}
