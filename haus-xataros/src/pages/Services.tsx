import Layout from "../components/layout/Layout";
import Container from "../components/layout/Container";
import "./Services.css";

export default function Services() {
  const services = [
    {
      id: 1,
      name: "Design Consulting",
      description:
        "Bring theatrical elegance to your brand identity, digital presence, and visual communications. We craft experiences that command attention.",
      rate: "$150/hour",
      includes: [
        "Brand identity development",
        "Design system creation",
        "Visual design & art direction",
        "Style guide documentation",
      ],
    },
    {
      id: 2,
      name: "Data Visualization",
      description:
        "Transform complex datasets into compelling visual narratives. We make data accessible without sacrificing sophistication.",
      rate: "$175/hour",
      includes: [
        "Custom data visualizations",
        "Interactive dashboards",
        "Infographic design",
        "Data storytelling",
      ],
    },
    {
      id: 3,
      name: "Web Development",
      description:
        "Build digital experiences with polish and precision. From concept to deployment, we deliver functional excellence with aesthetic flair.",
      rate: "$200/hour",
      includes: [
        "Custom web applications",
        "Responsive design implementation",
        "Performance optimization",
        "Technical documentation",
      ],
    },
    {
      id: 4,
      name: "Content Strategy",
      description:
        "Develop editorial approaches that balance intellectual rigor with engaging presentation. We help you find your voice and share it effectively.",
      rate: "$125/hour",
      includes: [
        "Content planning & strategy",
        "Editorial style guides",
        "Writing & editing",
        "Publication workflows",
      ],
    },
  ];

  return (
    <Layout>
      <section className="services-hero">
        <Container>
          <h1>Hire Us</h1>
          <p>
            Consulting services that bring polish and precision to your projects
          </p>
        </Container>
      </section>

      <section className="services-content">
        <Container>
          <div className="services-intro">
            <p>
              We work with clients who value both substance and style. Our
              consulting services combine technical expertise with theatrical
              presentation, delivering results that are as effective as they are
              elegant.
            </p>
            <p>
              All engagements include direct collaboration with our team,
              iterative feedback, and documentation that ensures your investment
              continues to deliver value.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article key={service.id} className="service-card">
                <div className="service-header">
                  <h2>{service.name}</h2>
                  <span className="service-rate">{service.rate}</span>
                </div>
                <p className="service-description">{service.description}</p>
                <div className="service-includes">
                  <h3>Includes:</h3>
                  <ul>
                    {service.includes.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <div className="services-cta">
            <h2>Ready to Start?</h2>
            <p>
              Contact us to discuss your project. We'll schedule a consultation
              to understand your needs and propose an approach that fits your
              timeline and budget.
            </p>
            <button className="cta-button">Get in Touch</button>
          </div>
        </Container>
      </section>
    </Layout>
  );
}
