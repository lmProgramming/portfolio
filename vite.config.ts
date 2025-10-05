import { defineConfig } from "vite";
import { resolve } from "path";

const BASE_PATH = "/portfolio";

export default defineConfig({
  root: ".",
  base: process.env.NODE_ENV === "production" ? BASE_PATH : "/",
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
      },
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
