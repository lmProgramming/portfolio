import Navigo, { Match } from "navigo";
import { StateManager } from "./utils/StateManager";
import { Header } from "./components/Header";
import {
  HomePage,
  AboutPage,
  ProjectGridPage,
  ProjectPage,
  NotFoundPage,
} from "./pages/index";
import { getBasePath } from "./utils/config";
import { darkMode, lightMode, themeKey } from "./utils/constants";
import { Page } from "./types";

export class App {
  private router: any;
  private stateManager: StateManager;
  private header: Header;
  private contentElement: HTMLElement;
  private headerElement: HTMLElement;

  constructor() {
    this.stateManager = new StateManager();
    this.header = new Header(this.getDefaultThemeMode());

    // Get DOM elements
    this.contentElement = document.querySelector("#content") as HTMLElement;
    this.headerElement = document.querySelector("#header") as HTMLElement;

    if (!this.contentElement || !this.headerElement) {
      throw new Error("Required DOM elements not found");
    }

    this.router = new Navigo(getBasePath(), { hash: false });

    // Render header
    this.renderHeader();

    // Setup routes
    this.setupRoutes();

    // Initialize theme
    this.initializeTheme();

    // Make app globally available for debugging
    (window as any).app = this;
  }

  private renderHeader(): void {
    this.headerElement.innerHTML = this.header.render();
    this.header["element"] = this.headerElement;
    this.header["attachEventListeners"]();
  }

  private render(content: string, title: string = "Portfolio"): void {
    document.title = title;
    this.contentElement.innerHTML = content;
    this.attachEventListeners();
    this.stateManager.setLoading(false);
  }

  private async loadPage(
    pageLoader: () => string,
    title: string
  ): Promise<void> {
    this.stateManager.setLoading(true);
    this.showLoading();

    try {
      const content = pageLoader();
      this.render(content, title);
    } catch (error) {
      console.error("Error loading page:", error);
      this.render(new NotFoundPage().render(), "Error");
    }
  }

  private setupRoutes(): void {
    this.router
      .on("/", () => {
        this.loadPage(() => new HomePage().render(), "Home - Portfolio");
        this.stateManager.setCurrentPage(Page.Home);
      })

      .on("/about", () => {
        this.loadPage(() => new AboutPage().render(), "About - Portfolio");
        this.stateManager.setCurrentPage(Page.About);
      })

      .on("/projects", () => {
        this.loadPage(
          () => new ProjectGridPage().render(),
          "projects - Portfolio"
        );
        this.stateManager.setCurrentPage(Page.Projects);
      })
      .on("/projects/:id", (match: Match) => {
        const projectId = match?.data?.id || "unknown";
        this.loadPage(
          () => new ProjectPage().render(match),
          `project ${projectId} - Portfolio`
        );
        this.stateManager.setCurrentPage(Page.Project);
      })

      .on("/contact", () => {
        this.loadPage(() => this.renderContactPage(), "Contact - Portfolio");
        this.stateManager.setCurrentPage(Page.Contact);
      })

      // 404 handler
      .notFound(() => {
        this.render(new NotFoundPage().render(), "404 - Page Not Found");
        this.stateManager.setCurrentPage(Page.NotFound);
      })

      .resolve();
  }

  private renderContactPage(): string {
    return `
      <div class="contact-page">
        <div class="page-header">
          <h1>Contact Me</h1>
          <p class="page-subtitle">Get in touch for collaborations or opportunities</p>
        </div>
        <div class="contact-content">
          <div class="contact-info">
            <h2>Contact Information</h2>
            <div class="contact-item">
              <strong>Email:</strong> 
              <a href="mailto:hello@example.com">hello@example.com</a>
            </div>
            <div class="contact-item">
              <strong>GitHub:</strong> 
              <a href="https://github.com/lmProgramming" target="_blank">github.com/lmProgramming</a>
            </div>
            <div class="contact-item">
              <strong>LinkedIn:</strong> 
              <a href="https://linkedin.com/in/yourprofile" target="_blank">linkedin.com/in/yourprofile</a>
            </div>
          </div>
          <div class="contact-form">
            <h2>Send a Message</h2>
            <form id="contact-form">
              <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>
              </div>
              <div class="form-group">
                <label for="contact-email">Email:</label>
                <input type="email" id="contact-email" name="email" required>
              </div>
              <div class="form-group">
                <label for="message">Message:</label>
                <textarea id="message" name="message" rows="4" required></textarea>
              </div>
              <button type="submit" class="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    `;
  }

  private showLoading(): void {
    const loadingElement = document.getElementById("loading");
    if (loadingElement) {
      loadingElement.style.display = "block";
    }
  }

  private attachEventListeners(): void {
    // Handle navigation buttons
    const buttons = this.contentElement.querySelectorAll(
      "button[data-action], div[data-action]"
    );
    buttons.forEach((button) => {
      button.addEventListener("click", this.handleButtonClick.bind(this));
    });
  }

  private handleButtonClick(event: Event): void {
    const target = event.target as HTMLElement;
    const action = target.dataset.action;

    switch (action) {
      case "navigate":
        const route = target.dataset.route;
        if (route) {
          this.router.navigate(route);
        }
        break;
    }
  }

  private initializeTheme(): void {
    if (this.getDefaultThemeMode() === darkMode) {
      document.body.classList.add("dark-theme");
    }
  }

  private getDefaultThemeMode(): string {
    const savedTheme = localStorage.getItem(themeKey);
    if (savedTheme === darkMode) {
      return darkMode;
    }
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return darkMode;
    }
    return lightMode;
  }

  public getState() {
    return this.stateManager.getState();
  }

  public navigate(route: string): void {
    this.router.navigate(route);
  }
}

// Initialize app when DOM is loaded
window.addEventListener("load", () => {
  new App();
});
