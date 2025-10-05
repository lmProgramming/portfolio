import { Page } from "./Page";

export class NotFoundPage extends Page {
  public override render(): string {
    this.setTitle("404 - Page Not Found");
    return `
      <div class="error-page">
        <div class="error-content">
          <h1 class="error-title">404</h1>
          <h2>Page Not Found</h2>
          <p>The page you're looking for doesn't exist.</p>
          <button class="btn btn-primary" data-action="navigate" data-route="/">
            Go Home
          </button>
        </div>
      </div>
    `;
  }
}
