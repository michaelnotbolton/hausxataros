import { screen } from '@testing-library/react'
import { renderWithRouter } from '../../utils'
import RecentPosts from '../../../components/home/RecentPosts'

const posts = [
  { id: '1', title: 'On Being Seen', date: '2025-12-01', blog: "The Drag Queen's Guide", slug: 'on-being-seen' },
  { id: '2', title: 'Character Design Diary', date: '2025-11-28', blog: 'Studio Notes', slug: 'character-design-diary' },
  { id: '3', title: 'Queer Theory 101', date: '2025-11-20', blog: "The Drag Queen's Guide", slug: 'queer-theory-101' },
  { id: '4', title: 'Building the Wiki', date: '2025-11-15', blog: 'Studio Notes', slug: 'building-the-wiki' },
]

describe('RecentPosts', () => {
  it('renders with data-testid="recent-posts"', () => {
    renderWithRouter(<RecentPosts posts={posts} />)
    expect(screen.getByTestId('recent-posts')).toBeInTheDocument()
  })

  it('shows posts from The Drag Queen\'s Guide', () => {
    renderWithRouter(<RecentPosts posts={posts} />)
    expect(screen.getByText("The Drag Queen's Guide")).toBeInTheDocument()
  })

  it('shows posts from Studio Notes', () => {
    renderWithRouter(<RecentPosts posts={posts} />)
    expect(screen.getByText('Studio Notes')).toBeInTheDocument()
  })

  it('renders each post title', () => {
    renderWithRouter(<RecentPosts posts={posts} />)
    posts.forEach(({ title }) => {
      expect(screen.getByText(title)).toBeInTheDocument()
    })
  })
})
