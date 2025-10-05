# TypeScript Portfolio SPA

A modern single-page application portfolio built with TypeScript, Navigo routing, and deployed to GitHub Pages. Bundled with Vite for fast development and optimized builds.

## Development

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start development server**

   ```bash
   npm run dev
   ```

   This will:
   - Compile TypeScript in watch mode
   - Start a local server at `http://localhost:3000`

## Scripts

- `npm run dev` - Start development with file watching
- `npm run build` - Compile TypeScript to JavaScript
- `npm run build:prod` - Build and minify for production
- `npm run serve` - Serve the built files locally
- `npm run deploy` - Build and deploy to GitHub Pages

## Deployment

### Automatic Deployment

On pushing to main, the GitHub Action will automatically deploy to GitHub Pages.
