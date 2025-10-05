import { Page } from "./Page";
import { projects } from "../utils/constants";

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
          .map(
            (project) => `
          <div class="project-card" data-action="navigate" data-route="/projects/${
            project.id
          }">
            <img src="images/${project.image}" alt="${project.name}">
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <div class="project-tags">
              ${project.tech
                .map((tech) => `<span class="tag">${tech.name}</span>`)
                .join("")}
            </div>
          </div>
        `
          )
          .join("")}
      </div>
    `;
  }
}
