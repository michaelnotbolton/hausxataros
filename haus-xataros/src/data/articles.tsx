import CodeBlock from '../components/blog/CodeBlock'

export type Blog = 'drag-queens-guide' | 'studio-notes'

export interface Article {
  title: string
  slug: string
  author: string
  date: string
  excerpt: string
  readTime: string
  tags: string[]
  blog: Blog
  body: React.ReactNode
  relatedArticles: { title: string; slug: string }[]
}

export const articles: Article[] = [
  {
    title: 'The Architecture of Arcane Systems',
    slug: 'architecture-of-arcane-systems',
    author: 'Vesper Nox',
    date: '2026-02-15',
    excerpt: 'How modular design principles apply to magic system construction in TTRPGs.',
    readTime: '8 min read',
    tags: ['Game Design', 'Mechanics'],
    blog: 'studio-notes',
    body: (
      <>
        <p>
          When building a magic system, modularity is key. Each component should function independently
          while contributing to the whole.
        </p>
        <CodeBlock
          language="typescript"
          code={`interface MagicComponent {
  id: string
  cost: number
  effect: (target: Entity) => void
}`}
        />
        <p>
          By thinking in components, you create a system that players can understand incrementally,
          rather than needing to absorb everything at once.
        </p>
      </>
    ),
    relatedArticles: [
      { title: 'Core Mechanics Overview', slug: 'core-mechanics-overview' },
      { title: 'Balancing Power and Narrative', slug: 'balancing-power-narrative' },
    ],
  },
  {
    title: 'Core Mechanics Overview',
    slug: 'core-mechanics-overview',
    author: 'Vesper Nox',
    date: '2026-01-20',
    excerpt: 'A deep dive into the foundational rules that power the Zeitgeist Chronicles.',
    readTime: '6 min read',
    tags: ['Mechanics', 'Rules'],
    blog: 'studio-notes',
    body: (
      <>
        <p>The core mechanics of Zeitgeist Chronicles are built around three pillars: will, knowledge, and risk.</p>
        <p>Each action a player takes draws from one or more of these pools, creating dynamic tension.</p>
      </>
    ),
    relatedArticles: [
      { title: 'The Architecture of Arcane Systems', slug: 'architecture-of-arcane-systems' },
    ],
  },
  {
    title: 'On Being Seen: Visibility in Drag Performance',
    slug: 'on-being-seen',
    author: "Leona La'Roux",
    date: '2026-02-20',
    excerpt: 'What does it mean to truly be visible? Reflections on performance, identity, and the gaze.',
    readTime: '5 min read',
    tags: ['Performance', 'Identity', 'Queer Theory'],
    blog: 'drag-queens-guide',
    body: (
      <>
        <p>Visibility is a double-edged crown. To be seen is to be judged, celebrated, and misunderstood all at once.</p>
        <p>
          In drag, we choose our visibility deliberately — we construct it, perform it, and claim it as our own.
          That act of construction is itself political.
        </p>
      </>
    ),
    relatedArticles: [
      { title: 'The Craft of Character', slug: 'craft-of-character' },
      { title: 'Queer Theory in Practice', slug: 'queer-theory-practice' },
    ],
  },
  {
    title: 'The Craft of Character',
    slug: 'craft-of-character',
    author: "Leona La'Roux",
    date: '2026-01-10',
    excerpt: 'Building a drag persona that is both authentic and theatrical.',
    readTime: '7 min read',
    tags: ['Performance', 'Craft'],
    blog: 'drag-queens-guide',
    body: (
      <p>
        A drag character is never just costume. It is a philosophy, a posture, a relationship with
        the audience that you negotiate in real time.
      </p>
    ),
    relatedArticles: [
      { title: 'On Being Seen', slug: 'on-being-seen' },
    ],
  },
]

export function getArticlesByBlog(blog: Blog): Article[] {
  return articles
    .filter((a) => a.blog === blog)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug)
}
