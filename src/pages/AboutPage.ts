import { Page } from "./Page";

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
