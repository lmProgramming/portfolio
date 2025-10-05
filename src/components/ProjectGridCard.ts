import { Project } from "../types";
import { Component } from "./Header";

export class ProjectGridCard extends Component {
  constructor(private project: Project) {
    super();
  }

  public render(): string {
    return `
        <div class="project-card" data-action="navigate" data-route="/projects/${
          this.project.id
        }">
            <img src="images/${this.project.image}" alt="${this.project.name}">
            <h3>${this.project.name}</h3>
            <p>${this.project.description}</p>
            <div class="project-tags">
            ${this.project.tech
              .map((tech) => `<span class="tag">${tech.name}</span>`)
              .join("")}
            </div>
        </div>
        `;
  }
}
