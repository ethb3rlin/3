# Repository Guidelines

## Project Structure & Module Organization
- `src/pages/` holds Gatsby page components and routes (e.g., `src/pages/about.jsx`).
- `src/components/` contains reusable UI components and hooks (`Layout.jsx`, `useBreakpoint.jsx`).
- `src/assets/` and `src/images/` store images, fonts, and media used across pages.
- `src/styles/` contains shared CSS/Tailwind styling.
- `static/` is for files copied verbatim to the build output (e.g., favicons).

## Build, Test, and Development Commands
- `npm install` installs dependencies.
- `npm run develop` (or `npx gatsby develop`) starts the local dev server.
- `npm run build` builds the production site.
- `npm run serve` serves the built site locally.
- `npm run clean` clears Gatsby cache and build artifacts.
- `npm run deploy` publishes `build/` via `gh-pages` and writes `CNAME`.

## Coding Style & Naming Conventions
- Indentation: 2 spaces, semicolons, and double quotes (match existing JSX).
- Components: `PascalCase` filenames and exports (e.g., `Sidebar.jsx`).
- Hooks: `camelCase` and `use*` naming (`useSiteMetadata.jsx`).
- Tailwind utility classes are the primary styling approach; keep class lists readable and consistent.

## Testing Guidelines
- No automated test framework is configured in this repo. If you add tests, document the runner and add a script in `package.json`.

## Commit & Pull Request Guidelines
- Commit messages are short, imperative, and often lowercase (e.g., “update contact email”).
- PRs should include a concise summary of changes and motivation.
- Link related issues when applicable.
- Include screenshots or recordings for UI-visible changes.

## Configuration Tips
- Site settings live in `gatsby-config.js` and `gatsby-browser.js`. Update these when adding plugins or global styles.
