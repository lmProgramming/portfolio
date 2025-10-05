import { Page } from "./Page";
import { projects } from "../utils/constants";
import { ProjectGridCard } from "../components/ProjectGridCard";

export class ProjectGridPage extends Page {
  public override render(): string {
    this.setTitle("Projects");
    return `
      <div class="page-header">
        <h1>My Projects</h1>
        <p class="page-subtitle">A collection of my work and experiments</p>
      </div>
      <div class="projects-grid">
        ${Object.values(projects)
          .map((project) => new ProjectGridCard(project).render())
          .join("")}
      </div>
    `;
  }
}
