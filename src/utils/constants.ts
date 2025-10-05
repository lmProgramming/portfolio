import { Project } from "../types";

export const PRODUCTION_BASE_PATH = "/portfolio";
export const DEV_BASE_PATH = "/";

export const themeKey = "theme";
export const darkMode = "dark_mode";
export const lightMode = "light_mode";

export const projects: Record<string, Project> = {
  golocal: {
    id: "golocal",
    name: "GoLocal",
    description: "A local business directory and review platform.",
    tech: [
      { name: "TypeScript", iconUrl: "icons/typescript.png" },
      { name: "React", iconUrl: "icons/react.png" },
      { name: "Node.js", iconUrl: "icons/nodejs.png" },
    ],
    githubLink: "https://github.com/lmprogramming/golocal",
    demoLink: "https://golocal.example.com",
    category: "Web Development",
    image: "golocal.png",
  },
  golocal2: {
    id: "golocal2",
    name: "GoLocal 222",
    description: "A local business directory and review platform.",
    tech: [
      { name: "TypeScript", iconUrl: "icons/typescript.png" },
      { name: "React", iconUrl: "icons/react.png" },
      { name: "Node.js", iconUrl: "icons/nodejs.png" },
    ],
    githubLink: "https://github.com/lmprogramming/golocal",
    demoLink: "https://golocal.example.com",
    category: "Web Development",
    image: "golocal.png",
  },
  golocal3: {
    id: "golocal3",
    name: "GoLocal 333",
    description: "A local business directory and review platform.",
    tech: [
      { name: "TypeScript", iconUrl: "icons/typescript.png" },
      { name: "React", iconUrl: "icons/react.png" },
      { name: "Node.js", iconUrl: "icons/nodejs.png" },
    ],
    githubLink: "https://github.com/lmprogramming/golocal",
    demoLink: "https://golocal.example.com",
    category: "Web Development",
    image: "golocal.png",
  },
  golocal4: {
    id: "golocal4",
    name: "GoLocal 444",
    description: "A local business directory and review platform.",
    tech: [
      { name: "TypeScript", iconUrl: "icons/typescript.png" },
      { name: "React", iconUrl: "icons/react.png" },
      { name: "Node.js", iconUrl: "icons/nodejs.png" },
    ],
    githubLink: "https://github.com/lmprogramming/golocal",
    demoLink: "https://golocal.example.com",
    category: "Web Development",
    image: "golocal.png",
  },
};
