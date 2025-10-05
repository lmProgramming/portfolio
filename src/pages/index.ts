import { Match } from "navigo";
import { Component } from "../components/Header";
import { Project, Tech } from "../types/index";

abstract class Page extends Component {
  protected title: string = "";

  public abstract override render(params?: Match): string;

  protected setTitle(title: string): void {
    this.title = title;
    document.title = `${title} - Portfolio`;
  }
}

export class HomePage extends Page {
  public override render(): string {
    this.setTitle("Home");
    return `
      <div class="hero-section">
        <h1 class="hero-title">Welcome to My Portfolio</h1>
        <p class="hero-subtitle">Building amazing web experiences with TypeScript</p>
        <div class="hero-actions">
          <button class="btn btn-primary" data-action="navigate" data-route="/projects">
            View Projects
          </button>
          <button class="btn btn-secondary" data-action="navigate" data-route="/about">
            Learn More
          </button>
        </div>
      </div>
      <section class="features">
        <div class="feature-grid">
          <div class="feature-card">
            <h3>TypeScript</h3>
            <p>Type-safe development with modern tooling</p>
          </div>
          <div class="feature-card">
            <h3>SPA Routing</h3>
            <p>Client-side navigation with Navigo</p>
          </div>
          <div class="feature-card">
            <h3>GitHub Pages</h3>
            <p>Deployed and hosted on GitHub Pages</p>
          </div>
        </div>
      </section>
    `;
  }
}

export class AboutPage extends Page {
  public override render(): string {
    this.setTitle("About");
    return `
      <div class="page-header">
        <h1>About Me</h1>
        <p class="page-subtitle">Full-stack developer passionate about modern web technologies</p>
      </div>
      <div class="content-section">
        <div class="about-content">
          <div class="about-text">
            <h2>Skills & Technologies</h2>
            <ul class="skills-list">
              <li>TypeScript & JavaScript (ES6+)</li>
              <li>React, Vue.js, Angular</li>
              <li>Node.js & Express</li>
              <li>HTML5, CSS3, SASS</li>
              <li>Git & GitHub</li>
            </ul>
          </div>
          <div class="about-image">
            <img src="images/profile.jpg" alt="Profile" class="profile-img">
          </div>
        </div>
      </div>
    `;
  }
}

const projects: Record<string, Project> = {
  golocal: {
    id: "golocal",
    name: "GoLocal",
    description: "A local business directory and review platform.",
    tech: [
      { name: "TypeScript", iconUrl: "icons/typescript.png" },
      { name: "React", iconUrl: "icons/react.png" },
      { name: "Node.js", iconUrl: "icons/nodejs.png" },
    ],
    githubLink: "https://github.com/lmprogramming/golocal",
    demoLink: "https://golocal.example.com",
    category: "Web Development",
    image: "golocal.png",
  },
};

export class ProjectGridPage extends Page {
  public override render(): string {
    this.setTitle("Projects");
    return `
      <div class="page-header">
        <h1>My Projects</h1>
        <p class="page-subtitle">A collection of my work and experiments</p>
      </div>
      <div class="projects-grid">
        <div class="project-card" data-action="navigate" data-route="/projects/spa-framework">
          <img src="images/1.png" alt="SPA Framework">
          <h3>SPA Framework</h3>
          <p>TypeScript-based single-page application framework</p>
          <div class="project-tags">
            <span class="tag">TypeScript</span>
            <span class="tag">SPA</span>
          </div>
        </div>
        <div class="project-card" data-action="navigate" data-route="/projects/e-commerce">
          <img src="images/2.png" alt="E-commerce App">
          <h3>E-commerce Platform</h3>
          <p>Full-stack e-commerce solution with modern UI</p>
          <div class="project-tags">
            <span class="tag">React</span>
            <span class="tag">Node.js</span>
          </div>
        </div>
        <div class="project-card" data-action="navigate" data-route="/projects/portfolio">
          <img src="images/3.png" alt="Portfolio Site">
          <h3>Portfolio Website</h3>
          <p>This very website built with TypeScript and Navigo</p>
          <div class="project-tags">
            <span class="tag">TypeScript</span>
            <span class="tag">GitHub Pages</span>
          </div>
        </div>
      </div>
    `;
  }
}

export class ProjectPage extends Page {
  public override render(params?: Match): string {
    const projectId = params?.data?.id || "unknown";
    this.setTitle(`Project ${projectId}`);

    const project =
      projects[projectId] ||
      ({
        id: projectId,
        name: "Unknown Project",
        description: "Project not found",
        tech: [],
        githubLink: "https://github.com/lmprogramming",
      } as Project);

    return `
      <div class="project-detail">
        <div class="project-header">
          <button class="btn btn-secondary" data-action="navigate" data-route="/projects">
            ← Back to Projects
          </button>
          <h1>${project.name}</h1>
        </div>
        <div class="project-content">
          <div class="project-image">
            <img src="images/${project.image}" alt="${project.name}">
          </div>
          <div class="project-info">
            <p class="project-description">${project.description}</p>
            <div class="tech-stack">
              <h3>Technologies Used:</h3>
              <div class="tech-tags">
                ${project.tech
                  .map(
                    (tech: Tech) =>
                      `<img src="${tech.iconUrl}" alt="${tech.name}" class="tech-icon">`
                  )
                  .join("")}
              </div>
            </div>
            <div class="project-actions">
              <a href="${
                project.githubLink
              }" target="_blank" class="btn btn-primary">
                View on GitHub
              </a>
              <a href="${
                project.demoLink
              }" target="_blank" class="btn btn-secondary">
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

export class NotFoundPage extends Page {
  public override render(): string {
    this.setTitle("404 - Page Not Found");
    return `
      <div class="error-page">
        <div class="error-content">
          <h1 class="error-title">404</h1>
          <h2>Page Not Found</h2>
          <p>The page you're looking for doesn't exist.</p>
          <button class="btn btn-primary" data-action="navigate" data-route="/">
            Go Home
          </button>
        </div>
      </div>
    `;
  }
}
