import { DEV_BASE_PATH, PRODUCTION_BASE_PATH } from "./constants";

export function getBasePath(): string {
  return window.location.hostname.includes("github.io")
    ? PRODUCTION_BASE_PATH
    : DEV_BASE_PATH;
}
