import Container from "../layout/Container";
import "./RecentPosts.css";

interface Post {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
}

// Placeholder data for recent posts
const recentPosts: Post[] = [
  {
    id: 1,
    title: "The Art of Data Storytelling",
    excerpt:
      "Exploring how theatrical presentation enhances technical communication and makes complex data accessible.",
    date: "2025-12-01",
    category: "Analysis",
  },
  {
    id: 2,
    title: "Drag Aesthetics in Digital Design",
    excerpt:
      "How performance art principles inform our approach to visual design and user experience.",
    date: "2025-11-28",
    category: "Design",
  },
  {
    id: 3,
    title: "Building with Elegance",
    excerpt:
      "A guide to creating digital experiences that balance polish with functionality.",
    date: "2025-11-25",
    category: "Development",
  },
];

export default function RecentPosts() {
  return (
    <section className="recent-posts">
      <Container>
        <h2 className="section-title">Recent Insights</h2>
        <div className="posts-grid">
          {recentPosts.map((post) => (
            <article key={post.id} className="post-card">
              <span className="post-category">{post.category}</span>
              <h3 className="post-title">{post.title}</h3>
              <p className="post-excerpt">{post.excerpt}</p>
              <time className="post-date">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
