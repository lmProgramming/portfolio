export enum PageType {
  Home = "home",
  About = "about",
  Projects = "projects",
  Project = "project",
  Contact = "contact",
  NotFound = "notfound",
}

export interface AppState {
  currentPage: PageType;
  isLoading: boolean;
}

export interface Tech {
  name: string;
  iconUrl: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  tech: Tech[];
  githubLink: string;
  demoLink?: string;
  category?: string;
  image?: string;
}

export type StateListener = (state: AppState) => void;

// Extend the Window interface for global variables
declare global {
  interface Window {
    Navigo: any;
    app: any;
  }
}
