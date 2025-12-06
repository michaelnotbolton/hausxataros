import Container from "../layout/Container";
import "./AboutSection.css";

export default function AboutSection() {
  return (
    <section className="about-section">
      <Container>
        <h2 className="section-title">About Haus Xataros</h2>
        <div className="about-content">
          <p>
            Haus Xataros is where theatrical elegance meets editorial precision.
            We are a collective of creators, analysts, and storytellers who
            refuse to choose between aesthetic excellence and intellectual
            rigor.
          </p>
          <p>
            Our work spans the intersection of performance art, data science,
            and cultural commentary. We believe that drag aesthetics can inform
            data visualization, that theatrical presentation enhances technical
            communication, and that beauty and precision are not opposing forces
            but complementary ones.
          </p>
          <p>
            Founded on the principle that style without substance is empty and
            substance without style is invisible, we craft experiences that
            command attention and reward engagement. From portfolio showcases to
            consulting services, everything we create embodies our commitment to
            theatrical elegance.
          </p>
          <p>
            We speak to you as an intelligent peer, cutting through obscure
            terminology and euphemism to deliver clear, confident, and warm
            communication. Whether we're analyzing data trends, crafting visual
            narratives, or building digital experiences, our approach remains
            consistent: professional polish with theatrical flair.
          </p>
        </div>
      </Container>
    </section>
  );
}
