import styles from './Review.module.css'

const storySections = [
  {
    title: 'Layout and brand framing',
    entries: [
      { label: 'Header', storyId: 'layout-header--default' },
      { label: 'Footer', storyId: 'layout-footer--default' },
      { label: 'Hero', storyId: 'home-hero--default' },
    ],
  },
  {
    title: 'Home page building blocks',
    entries: [
      { label: 'Navigation Cards', storyId: 'home-navigationcards--default' },
      { label: 'Tag', storyId: 'ui-tag--gold' },
      { label: 'Pill', storyId: 'ui-selectablepill--default' },
    ],
  },
  {
    title: 'Content and conversion components',
    entries: [
      { label: 'Article Card', storyId: 'blog-articlecard--default' },
      { label: 'Project Card', storyId: 'work-projectcard--default' },
      { label: 'Contact Form', storyId: 'contact-contactform--default' },
    ],
  },
]

function joinBasePath(basePath: string, path: string) {
  return `${basePath}${path}`.replace(/([^:]\/)\/+/g, '$1')
}

export default function Review() {
  const appBasePath = import.meta.env.BASE_URL ?? '/'
  const storybookRoot = joinBasePath(appBasePath, 'review/storybook/')

  return (
    <section className={styles.reviewPage} data-testid="review-page">
      <div className={styles.hero}>
        <p className={styles.eyebrow}>Hidden Review Surface</p>
        <h1>Designer Review Hub</h1>
        <p data-testid="review-purpose">
          This page exists for component-by-component critique without adding Storybook to the
          public navigation. Share this URL directly with reviewers who need a stable way to
          inspect the system in isolation.
        </p>
      </div>

      <div className={styles.actions}>
        <a href={storybookRoot} data-testid="storybook-root-link">
          Open the full Storybook
        </a>
      </div>

      <div className={styles.guidance}>
        <h2>Suggested review flow</h2>
        <ol>
          <li>Start in Storybook and leave feedback on one component at a time.</li>
          <li>Note copy, hierarchy, spacing, and state issues before page-level polish.</li>
          <li>Use the links below for the most likely first-pass critique targets.</li>
        </ol>
      </div>

      <div className={styles.grid} data-testid="review-story-groups">
        {storySections.map((section) => (
          <section key={section.title} className={styles.card}>
            <h2>{section.title}</h2>
            <ul>
              {section.entries.map((entry) => (
                <li key={entry.storyId}>
                  <a href={`${storybookRoot}?path=/story/${entry.storyId}`}>{entry.label}</a>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  )
}
