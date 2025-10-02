# TypeScript Portfolio SPA

A modern single-page application portfolio built with TypeScript, Navigo routing, and deployed to GitHub Pages.

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

3. **Build for production**

   ```bash
   npm run build:prod
   ```

## 📁 Project Structure

```text
src/
├── components/          # Reusable UI components
│   └── Header.ts
├── pages/              # Page components
│   └── index.ts        # All page exports
├── types/              # TypeScript type definitions
│   └── index.ts
├── utils/              # Utility classes
│   └── StateManager.ts
└── main.ts             # Application entry point

dist/                   # Compiled JavaScript (auto-generated)
.github/workflows/      # GitHub Actions for deployment
```

## 🔧 Scripts

- `npm run dev` - Start development with file watching
- `npm run build` - Compile TypeScript to JavaScript
- `npm run build:prod` - Build and minify for production
- `npm run serve` - Serve the built files locally
- `npm run deploy` - Build and deploy to GitHub Pages

## 🚀 Deployment

### Automatic Deployment (Recommended)

The project uses GitHub Actions for automatic deployment to GitHub Pages:

1. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: "GitHub Actions"

2. **Push to main branch**

   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

The GitHub Action will automatically:

- Install dependencies
- Compile TypeScript
- Deploy to GitHub Pages

### Manual Deployment

```bash
npm run build:prod
git add dist/
git commit -m "Build for deployment"
git push origin main
```

## 🎨 Customization

### Adding New Pages

1. **Create page component** in `src/pages/`:

   ```typescript
   export class MyNewPage extends Page {
     public override render(): string {
       this.setTitle('My New Page');
       return `<div>My new page content</div>`;
     }
   }
   ```

2. **Add route** in `src/main.ts`:

   ```typescript
   .on("/my-new-page", () => {
     this.loadPage(() => new MyNewPage().render(), "My New Page");
   })
   ```

3. **Add navigation link** in `src/components/Header.ts`

### Styling

- Modify `style.css` for global styles
- Use CSS custom properties for theming
- Dark theme automatically supported via `.dark-theme` class

## 🔍 TypeScript Configuration

- **Target**: ES2020
- **Module**: ES2020 modules
- **Strict mode**: Enabled with comprehensive type checking
- **Source maps**: Generated for debugging

## 📱 Browser Support

- Modern browsers with ES2020 support
- Chrome 80+, Firefox 72+, Safari 13.1+, Edge 80+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Commit changes: `git commit -m "Add my feature"`
4. Push to branch: `git push origin feature/my-feature`
5. Open a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Live Demo

Visit the live site: [https://lmprogramming.github.io](https://lmprogramming.github.io)
