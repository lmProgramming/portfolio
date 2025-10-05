/**
 * Base path for the application when deployed to GitHub Pages
 */
export const BASE_PATH = "/portfolio";

/**
 * Get the base path for the application
 * Returns "/portfolio" for GitHub Pages, "/" otherwise
 */
export function getBasePath(): string {
  return window.location.hostname.includes("github.io") ? BASE_PATH : "/";
}
