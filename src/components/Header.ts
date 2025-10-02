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
        <div class="nav-links">
          <a href="/" data-navigo>Home</a>
          <a href="/about" data-navigo>About</a>
          <a href="/projects" data-navigo>Projects</a>
          <a href="/contact" data-navigo>Contact</a>
          <a href="/dashboard" data-navigo>Dashboard</a>
        </div>
        <div class="nav-actions">
          <button id="theme-toggle" class="btn btn-secondary">🌙</button>
        </div>
      </nav>
    `;
  }

  protected override attachEventListeners(): void {
    const themeToggle = this.querySelector("#theme-toggle");
    if (themeToggle) {
      themeToggle.addEventListener("click", this.toggleTheme.bind(this));
    }
  }

  private toggleTheme(): void {
    const body = document.body;
    const isDark = body.classList.toggle("dark-theme");
    const themeToggle = this.querySelector("#theme-toggle");
    if (themeToggle) {
      themeToggle.textContent = isDark ? "☀️" : "🌙";
    }
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }
}
