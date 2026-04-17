import Hero from '../components/home/Hero'
import NavigationCards from '../components/home/NavigationCards'
import AboutSection from '../components/home/AboutSection'
import RecentPosts from '../components/home/RecentPosts'
import NewsletterForm from '../components/home/NewsletterForm'
import { articles } from '../data/articles'

const navCards = [
  { label: 'Our Work', to: '/work', description: 'Explore our creative projects' },
  {
    label: "The Drag Queen's Guide",
    to: '/drag-queens-guide',
    description: 'Read essays, guidance, and creative reflections',
  },
  { label: 'Hire Us', to: '/hire-us', description: 'Work with us on strategy and storytelling' },
]

const aboutParagraphs = [
  'Haus Xataros is a creative studio and drag collective based in the liminal spaces between performance, game design, and queer theory.',
  'We create worlds — tabletop RPGs, fiction, and methodologies — that center marginalized perspectives and challenge conventional narrative structures.',
  'Our consulting practice brings these same principles to organizations and individuals seeking to unlock their creative potential.',
  'We believe every creative act is political, and we embrace that fully.',
]

export default function Home() {
  const dqgPosts = articles.filter((a) => a.blog === 'drag-queens-guide').slice(0, 3)
  const studioNotesPosts = articles.filter((a) => a.blog === 'studio-notes').slice(0, 3)
  const recentPosts = [
    ...dqgPosts.map((a) => ({ id: a.slug, title: a.title, slug: a.slug, date: a.date, blog: "The Drag Queen's Guide" })),
    ...studioNotesPosts.map((a) => ({ id: a.slug, title: a.title, slug: a.slug, date: a.date, blog: 'Studio Notes' })),
  ]

  return (
    <>
      <Hero
        heading="Haus Xataros"
        subheading="A creative studio at the intersection of drag, game design, and queer theory."
      />
      <NavigationCards cards={navCards} />
      <AboutSection paragraphs={aboutParagraphs} />
      <RecentPosts posts={recentPosts} />
      <NewsletterForm />
    </>
  )
}
