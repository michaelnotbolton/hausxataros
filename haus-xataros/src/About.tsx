import Layout from "./components/layout/Layout";
import Container from "./components/layout/Container";
import "./pages/About.css";

export default function About() {
  return (
    <Layout>
      <section className="about-hero">
        <Container>
          <h1>About Haus Xataros</h1>
          <p>Where theatrical elegance meets editorial precision</p>
        </Container>
      </section>

      <section className="about-full">
        <Container>
          <div className="about-full-content">
            <div className="about-section">
              <h2>Who We Are</h2>
              <p>
                Haus Xataros is a creative collective that refuses to choose
                between aesthetic excellence and intellectual rigor. We are
                designers, developers, analysts, and storytellers who believe
                that theatrical presentation enhances rather than obscures
                technical communication.
              </p>
              <p>
                Founded on the principle that drag aesthetics can inform data
                visualization, that professional polish requires theatrical
                flair, and that beauty and precision are complementary forces,
                we create work that commands attention and rewards engagement.
              </p>
            </div>

            <div className="about-section">
              <h2>What We Do</h2>
              <p>
                Our work spans design, development, and data analysis. We build
                digital experiences, create visual narratives, and develop
                strategies that balance form with function. Every project
                embodies our commitment to theatrical elegance.
              </p>
              <p>
                From portfolio showcases to consulting services, from editorial
                design to data visualization, we approach each engagement with
                the same philosophy: style without substance is empty, and
                substance without style is invisible.
              </p>
            </div>

            <div className="about-section">
              <h2>How We Work</h2>
              <p>
                We speak to our clients and audience as intelligent peers. No
                euphemism, no obscure terminology, no mystical minimalism. Just
                confident, direct, and warm communication that respects your
                time and intelligence.
              </p>
              <p>
                Our process combines iterative collaboration with expert
                execution. We listen carefully, propose clearly, and deliver
                precisely. The result is work that serves your goals while
                maintaining its own integrity.
              </p>
            </div>

            <div className="about-section">
              <h2>Our Aesthetic</h2>
              <p>
                Deep purples, electric gold, charcoal black, and cream accents
                define our visual language. We pair serif body copy with clean
                sans-serif headers, ensuring high contrast and readability while
                maintaining theatrical presence.
              </p>
              <p>
                Think editorial polish meets drag aesthetic: professional,
                polished, and theatrical. Our work looks as considered as it is
                functional, as beautiful as it is effective.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
}
