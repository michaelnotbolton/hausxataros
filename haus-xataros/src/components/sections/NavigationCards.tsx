import Container from "../layout/Container";
import Card from "../ui/Card";
import "./NavigationCards.css";

export default function NavigationCards() {
  return (
    <section className="navigation-cards">
      <Container>
        <div className="cards-grid">
          <Card
            title="Explore Our Work"
            description="Discover our portfolio of projects where theatrical elegance meets technical precision. From data visualizations to digital experiences."
            to="/projects"
            icon="✨"
          />
          <Card
            title="Read The Guide"
            description="Insights, analysis, and thoughtful perspectives on the intersection of aesthetics, data, and digital culture."
            to="/blog"
            icon="📖"
          />
          <Card
            title="Hire Us"
            description="Consulting services that bring polish and precision to your projects. Let's create something extraordinary together."
            to="/services"
            icon="💼"
          />
        </div>
      </Container>
    </section>
  );
}
