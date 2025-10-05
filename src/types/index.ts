export interface AppState {
  currentPage: string;
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
