import { Page } from "./Page";

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
