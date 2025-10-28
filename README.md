# Ticket Management System

A modern, responsive ticket management system built with React, TypeScript, Tailwind CSS and Vite. This README explains the repository layout, how to run the app locally, available scripts, and useful notes for development.

## Quick start

Prerequisites:
- Node.js 18+ (or latest LTS)
- npm, yarn or pnpm

Install dependencies and start the dev server:

```bash
# install deps
npm install

# start dev server (Vite)
npm run dev
```

By default Vite serves on http://localhost:5173 — open that in your browser.

## Available npm scripts

These are defined in `package.json`:

- `dev` — start the Vite dev server
- `build` — bundle a production build using Vite
- `preview` — preview the production build locally
- `lint` — run ESLint across the codebase
- `format` — run Prettier to format files

Examples:

```bash
npm run build
npm run preview
npm run lint
npm run format
```

## Project structure (important files)

Top-level files and folders:

- `index.html` — HTML template used by Vite
- `package.json` — dependencies & scripts
- `vite.config.ts` — Vite configuration
- `tsconfig.json`, `tsconfig.node.json` — TypeScript configurations
- `tailwind.config.js`, `postcss.config.js` — Tailwind/PostCSS
- `src/` — main application source

Key `src/` layout (exact folders/files present in this repo):

- `src/main.tsx` — React entry; mounts the app and wraps with `BrowserRouter`, `AuthProvider`, and `TicketProvider`
- `src/App.tsx` — top-level app component and route container
- `src/index.css` — Tailwind + global CSS imports
- `src/Attributions.md` — credits / attributions

- `src/components/`
  - `Navbar.tsx` — top navigation (also mirrored under `components/layout/`)
  - `ProtectedRoute.tsx` — route guard component
  - `WaveBackground.tsx` — decorative/background component
  - `common/` — shared component fragments (e.g. `WaveBackground.tsx`)
  - `layout/` — layout-specific components (e.g. `Navbar.tsx`)
  - `ui/` — small UI primitives used across the app (Radix/shadcn-style components)
    - `alert-dialog.tsx`, `avatar.tsx`, `badge.tsx`, `button.tsx`, `checkbox.tsx`, `dialog.tsx`, `input.tsx`, `label.tsx`, `select.tsx`, `textarea.tsx`, `use-mobile.ts`, `utils.ts`

- `src/context/`
  - `AuthContext.tsx` — authentication provider and hooks
  - `TicketContext.tsx` — ticket state provider and hooks

- `src/router/`
  - `AppRouter.tsx` — route definitions used by `App.tsx`

- `src/routes/` (page-level views)
  - `auth/` — `AuthPage.tsx` and subcomponents (`AuthHeader`, `AuthForm`, `AuthFooter`)
  - `dashboard/` — `DashboardPage.tsx` and dashboard components (`StatsCard`, `QuickActions`)
  - `landing/` — `LandingPage.tsx` and landing components (`Hero`, `FeatureCard`, `Features`)
  - `tickets/` — `TicketsPage.tsx` and ticket components (`TicketTable`, `TicketRow`, `TicketFormModal`, `TicketFilters`, `DeleteConfirmation`)

- `src/mock/` — `mock.ts`, `mockApi.ts` for local/mock data and API responses
- `src/styles/` — `globals.css` (project-level Tailwind imports)
- `src/types/` — TypeScript types/interfaces for domain models (tickets)
- `src/guidelines/` — design/guidelines notes (`Guidelines.md`)
- `src/README.md` — feature notes and UX summary

This README reflects the actual file layout present in the repository root and `src/` folder.

## How the app is wired

- The app bootstraps in `src/main.tsx` which mounts React and injects global styles.
- Routing is handled with `react-router-dom` and defined in `src/router` / `src/App.tsx`.
- Authentication and ticket state are provided via React Context (`AuthProvider`, `TicketProvider`).
- UI is built with TypeScript + Tailwind CSS and small component primitives under `src/components/ui/`.

## Development tips

- If you change Tailwind configuration, restart the dev server so classes are picked up.
- Use `npm run lint` and `npm run format` before committing.
- The project includes mocked APIs in `src/mock/` for local development. Swap to a real backend by replacing the mock API layer.

## Build & preview

Create a production build and preview it locally:

```bash
npm run build
npm run preview
```

`npm run preview` serves the production bundle so you can verify behaviour before deploying.

## Notes & Troubleshooting

Common issues and how to resolve them:

- Type errors after adding files
  - Run a TypeScript check to see strict diagnostics:

    ```bash
    npm run build
    # or
    npx tsc --noEmit
    ```

  - Fix the reported type errors, or update `src/types` if you added new domain types.

- Tailwind/CSS classes not updating
  - Restart the dev server after changing `tailwind.config.js` or `postcss.config.js`.

- Dev server port already in use
  - Vite will usually prompt to use a different port. To force a different port, set `PORT`:

    ```bash
    PORT=5174 npm run dev
    ```

  - On Windows `bash.exe`/Git Bash you can set the env variable the same way; for PowerShell use:

    ```powershell
    $env:PORT = 5174; npm run dev
    ```

- Network / CORS issues when connecting to a backend
  - Ensure the backend allows requests from the dev origin (http://localhost:5173).
  - For local development you can use a proxy or run the backend with permissive CORS.

- Missing dependencies / broken installs
  - Remove `node_modules` and reinstall:

    ```bash
    rm -rf node_modules package-lock.json
    npm install
    ```

- General tips
  - If you see unexpected runtime errors, check the browser console and terminal for stack traces.
  - Keep Node.js updated (recommended Node 18+). Use nvm / n to manage Node versions.

## Contributing / next steps

Helpful contribution workflow and expectations:

1. Branching
   - Create a short-lived feature branch from `main`:

     ```bash
     git checkout -b feat/describe-what-you-did
     ```

2. Install and run formatting/linting locally
   - Install deps (npm/yarn/pnpm):

     ```bash
     npm install
     # or
     yarn install
     # or
     pnpm install
     ```

   - Format and lint before committing:

     ```bash
     npm run format
     npm run lint
     ```

3. Tests
- This repository does not include tests yet. Recommended next step: add Vitest + React Testing Library and create at least:
     - one unit test for a core UI component
     - one integration test for a key page (e.g., tickets list)

1. Commit messages and PRs
   - Keep commits small and focused. Use descriptive commit messages.
   - Open a Pull Request against `main`. Include a short description of what was changed and why.
   - Request reviews and address feedback in follow-up commits.

2. CI suggestions
   - Add a CI workflow (GitHub Actions) that runs on PRs and does:
     - `npm ci` / `npm install`
     - `npm run lint`
     - `npm run build`
     - `npm test` (when tests are added)

3. Reporting issues / feature requests
   - Open an issue with steps to reproduce, expected behavior, and any error output.