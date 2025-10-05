export const BASE_PATH = "/portfolio";

export function getBasePath(): string {
  return window.location.hostname.includes("github.io") ? BASE_PATH : "/";
}
