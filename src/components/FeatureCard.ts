import { Component } from "./Header";

export class FeatureCard extends Component {
  constructor(private heading: string, private description: string) {
    super();
  }

  public render(): string {
    return `
        <div class="feature-card">
            <h3>${this.heading}</h3>
            <p>${this.description}</p>
        </div>
        `;
  }
}
