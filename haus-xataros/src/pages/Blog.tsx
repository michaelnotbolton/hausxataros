import Layout from "../components/layout/Layout";
import Container from "../components/layout/Container";
import "./Blog.css";

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "The Art of Data Storytelling",
      excerpt:
        "Exploring how theatrical presentation enhances technical communication and makes complex data accessible to diverse audiences.",
      date: "2025-12-01",
      category: "Analysis",
      readTime: "8 min",
    },
    {
      id: 2,
      title: "Drag Aesthetics in Digital Design",
      excerpt:
        "How performance art principles inform our approach to visual design and create memorable user experiences.",
      date: "2025-11-28",
      category: "Design",
      readTime: "6 min",
    },
    {
      id: 3,
      title: "Building with Elegance",
      excerpt:
        "A comprehensive guide to creating digital experiences that balance theatrical polish with functional excellence.",
      date: "2025-11-25",
      category: "Development",
      readTime: "10 min",
    },
    {
      id: 4,
      title: "Color Theory for Technical Interfaces",
      excerpt:
        "Deep purples, electric gold, and charcoal black: making color choices that serve both form and function.",
      date: "2025-11-20",
      category: "Design",
      readTime: "7 min",
    },
    {
      id: 5,
      title: "Typography as Performance",
      excerpt:
        "Why serif body text and sans-serif headers create the perfect balance between readability and presence.",
      date: "2025-11-15",
      category: "Typography",
      readTime: "5 min",
    },
  ];

  return (
    <Layout>
      <section className="blog-hero">
        <Container>
          <h1>The Guide</h1>
          <p>
            Insights, analysis, and perspectives on aesthetics and precision
          </p>
        </Container>
      </section>

      <section className="blog-content">
        <Container>
          <div className="blog-grid">
            {posts.map((post) => (
              <article key={post.id} className="blog-card">
                <div className="blog-card-header">
                  <span className="blog-category">{post.category}</span>
                  <span className="blog-read-time">{post.readTime}</span>
                </div>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <time className="blog-date">
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
    </Layout>
  );
}
