import { FeatureCard } from "../components/FeatureCard";
import { Page } from "./Page";

export class HomePage extends Page {
  public override render(): string {
    this.setTitle("Home");
    return `
      <div class="hero-section">
        <h1 class="hero-title">Mikołaj Kubś</h1>
        <p class="hero-subtitle">A warm welcome to my portfolio page!</p>
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
          ${new FeatureCard(
            "Game development",
            "Type-safe development with modern tooling"
          ).render()}
          ${new FeatureCard(
            "SPA Routing",
            "Client-side navigation with Navigo"
          ).render()}
          ${new FeatureCard(
            "GitHub Pages",
            "Deployed and hosted on GitHub Pages"
          ).render()}
        </div>
      </section>
    `;
  }
}
