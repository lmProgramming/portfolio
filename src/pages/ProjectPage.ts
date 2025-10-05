import { Match } from "navigo";
import { Project, Tech } from "../types";
import { projects } from "../utils/constants";
import { Page } from "./Page";

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
