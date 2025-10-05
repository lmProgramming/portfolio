export abstract class Component {
  protected element: HTMLElement | null = null;

  public abstract render(): string;

  protected attachEventListeners(): void {
    // Override in child classes if needed
  }

  protected querySelector(selector: string): HTMLElement | null {
    return this.element?.querySelector(selector) || null;
  }

  protected querySelectorAll(selector: string): NodeListOf<Element> {
    return (
      this.element?.querySelectorAll(selector) || document.querySelectorAll("")
    );
  }
}

export class Header extends Component {
  public render(): string {
    return `
      <nav class="navbar">
        <div class="nav-brand">
          <a href="/" data-navigo>Portfolio</a>
        </div>
        <button class="hamburger" id="hamburger-menu" aria-label="Toggle menu">
          <span class="material-icons">menu</span>
        </button>
        <div class="nav-links" id="nav-links">
          <a href="/" data-navigo>Home</a>
          <a href="/about" data-navigo>About</a>
          <a href="/projects" data-navigo>Projects</a>
          <a href="/contact" data-navigo>Contact</a>
          <a href="/dashboard" data-navigo>Dashboard</a>
        </div>
        <div class="nav-actions">
          <button id="theme-toggle" class="btn btn-secondary">
            <span class="material-icons">dark_mode</span>
          </button>
        </div>
      </nav>
    `;
  }

  protected override attachEventListeners(): void {
    const themeToggle = this.querySelector("#theme-toggle");
    if (themeToggle) {
      themeToggle.addEventListener("click", this.toggleTheme.bind(this));
    }

    const hamburger = this.querySelector("#hamburger-menu");
    const navLinks = this.querySelector("#nav-links");

    if (hamburger && navLinks) {
      hamburger.addEventListener("click", () => {
        const isActive = navLinks.classList.toggle("active");
        const icon = hamburger.querySelector(".material-icons");
        if (icon) {
          icon.textContent = isActive ? "close" : "menu";
        }
      });

      // Close menu when clicking on a link
      const links = navLinks.querySelectorAll("a");
      links.forEach((link) => {
        link.addEventListener("click", () => {
          navLinks.classList.remove("active");
          const icon = hamburger.querySelector(".material-icons");
          if (icon) {
            icon.textContent = "menu";
          }
        });
      });
    }
  }

  private toggleTheme(): void {
    const body = document.body;
    const isDark = body.classList.toggle("dark-theme");
    const themeToggle = this.querySelector("#theme-toggle");
    const icon = themeToggle?.querySelector(".material-icons");
    if (icon) {
      icon.textContent = isDark ? "light_mode" : "dark_mode";
    }
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }
}
