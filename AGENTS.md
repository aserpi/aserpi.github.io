# Code Repository Understanding and Synthesis Helper

This document provides essential information for AI agents to effectively work within this codebase.

## Project Overview

This is a personal portfolio website built as a React single-page application (SPA). It is bootstrapped with Vite and uses Chakra UI for the component library and React Router for navigation.

## Commands

The following commands are available through npm scripts:

- **`npm start`**: Starts the Vite development server. This is the primary command for local development.
- **`npm run build`**: Compiles and bundles the application for production into the `dist` directory.
- **`npm run serve`**: Serves the production-ready build locally to preview it.
- **`npm run lint`**: Runs Prettier to format all files, then ESLint to lint all files. Both are also run automatically as a pre-commit hook via `lint-staged` + `husky`.
- **`npx prettier --write --ignore-unknown .`**: Formats all files in the project using Prettier.
- **`npx eslint .`**: Lints all files using ESLint.

## Code Organization

The project structure is organized as follows:

- `src/`: Contains all the application's source code.
  - `components/`: Reusable React components, grouped by functionality.
    - `layout/`: Components related to the overall page structure (Navbar, Footer, Drawer, Tag, etc.).
    - `icons/`: Custom SVG icon components for companies/organizations.
    - `logos/`: Logo components (rotating logo, text logo).
    - `showcase-card/`: Card components for showcasing projects or certifications.
    - `timeline/`: Timeline components for the experience page.
    - `user-interaction/`: Components for user actions like theme switching, social links, tooltips.
    - Each subdirectory often has an `index.js` file that exports all components from that directory for convenient imports.
  - `pages/`: Top-level components that correspond to a specific page/route (e.g., `Home`, `Experience`, `Projects`, `Certifications`, `Courses`).
  - `images/`: Static image assets used throughout the application.
  - `system.js`: Configuration file for the Chakra UI theme, including colors, fonts, and component styles.
  - `app.jsx`: The main application component where routing is defined using `react-router`.
  - `index.jsx`: The entry point of the React application.

## Naming Conventions and Style Patterns

- **Components**: PascalCase (e.g., `Navbar.jsx`, `ExperienceTimelineElement`).
- **Files**: kebab-case for non-component files is preferred, but PascalCase is used for component files.
- **Styling**: The project uses [Chakra UI](https://chakra-ui.com/) for styling. Instead of traditional CSS, it relies on Chakra's style props and themeable component system. Global styles and theme customizations are defined in `src/system.js`.
- **Path Aliases**: The project is configured with a path alias `@/` that points to the `src/` directory. Always use this alias for imports to avoid deep relative paths (e.g., `import { Navbar } from '@/components/layout/navbar';`).
- **Exports**: Barrel exports are used within the `src/components` subdirectories via `index.js` files. This allows importing multiple components from a single path.

## Important Gotchas

- **Chakra UI Theme**: Most styling (colors, spacing, fonts) should be done through the theme object in `src/system.js` or using Chakra's style props. Avoid writing custom CSS files unless absolutely necessary. Colors like `bg`, `accent`, and `fg` are defined in the theme and change based on the color mode (light/dark).
- **Routing**: All pages are managed through `react-router`. To add a new page, you need to create a component in `src/pages` and add a new `<Route>` in `src/app.jsx`.
- **Linting and Formatting**: The project is configured with ESLint 10 (flat config in `eslint.config.mjs`) and Prettier. `lint-staged` and `husky` are set up to automatically format and lint files on commit. Ensure your changes adhere to the established rules. The Prettier configuration is defined in `package.json`.
- **Vite 8 (Rolldown)**: Vite 8 uses [Rolldown](https://rolldown.rs/) under the hood instead of Rollup/esbuild. The deprecated `build.rollupOptions` still works but `build.rolldownOptions` is the preferred config key going forward. If you need esbuild-specific features, it must be installed as a separate dev dependency. Note: the current `vite.config.js` only uses the react plugin and the `@/` path alias.
- **React 19**: The project uses React 19. All dependencies are compatible. Be aware of React 19 changes such as the removal of `propTypes` runtime checking. However, the `prop-types` package is still used throughout the codebase for type validation and should not be removed.
