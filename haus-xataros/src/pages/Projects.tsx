import Layout from "../components/layout/Layout";
import Container from "../components/layout/Container";
import "./Projects.css";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Data Visualization Suite",
      description:
        "An elegant collection of interactive data visualizations that bring theatrical flair to complex datasets. Built with D3.js and custom styling.",
      tech: ["React", "D3.js", "TypeScript"],
      status: "In Production",
    },
    {
      id: 2,
      title: "Performance Analytics Platform",
      description:
        "A comprehensive analytics dashboard designed for performing arts organizations. Combines box office data with audience engagement metrics.",
      tech: ["Next.js", "PostgreSQL", "Tailwind"],
      status: "Client Project",
    },
    {
      id: 3,
      title: "Editorial Design System",
      description:
        "A complete design system that marries editorial sophistication with modern web standards. Used across multiple client projects.",
      tech: ["CSS", "Figma", "Storybook"],
      status: "Open Source",
    },
  ];

  return (
    <Layout>
      <section className="projects-hero">
        <Container>
          <h1>Our Work</h1>
          <p>Projects where theatrical elegance meets technical precision</p>
        </Container>
      </section>

      <section className="projects-content">
        <Container>
          <div className="projects-grid">
            {projects.map((project) => (
              <article key={project.id} className="project-card">
                <span className="project-status">{project.status}</span>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </Layout>
  );
}
