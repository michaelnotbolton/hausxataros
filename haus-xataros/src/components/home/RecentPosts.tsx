import { Link } from 'react-router-dom'
import styles from './RecentPosts.module.css'

interface Post {
  id: string
  title: string
  date: string
  blog: string
  slug: string
}

interface RecentPostsProps {
  posts: Post[]
}

const BLOGS = ["The Drag Queen's Guide", 'Studio Notes']

function getBlogPath(blogName: string, slug: string) {
  return blogName === "The Drag Queen's Guide"
    ? `/drag-queens-guide/article/${slug}`
    : `/studio-notes/article/${slug}`
}

export default function RecentPosts({ posts }: RecentPostsProps) {
  return (
    <section className={styles.section} data-testid="recent-posts">
      {BLOGS.map((blogName) => (
        <div className={styles.column} key={blogName}>
          <h2 className={styles.title}>{blogName}</h2>
          <ul className={styles.list}>
            {posts
              .filter((p) => p.blog === blogName)
              .map((post) => (
                <li className={styles.item} key={post.id}>
                  <Link className={styles.link} to={getBlogPath(blogName, post.slug)}>{post.title}</Link>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </section>
  )
}
