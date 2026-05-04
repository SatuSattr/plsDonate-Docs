# Project Context: plsDonate-Docs

Official documentation for the **plsDonate** Minecraft PaperMC plugin suite, built with Next.js and Nextra.

## Project Overview
- **Purpose**: Provides detailed guides and references for plsDonate Express (Lite) and plsDonate Full versions.
- **Main Technologies**: 
  - **Framework**: [Nextra](https://nextra.site/) (Next.js-based documentation framework)
  - **Theme**: `nextra-theme-docs`
  - **UI Icons**: `lucide-react`
  - **Styles**: Custom CSS in `styles/globals.css` using a Red (#8C181C) and Gold (#ffc10f) color palette.
  - **Routing**: File-based routing in the `pages/` directory.

## Building and Running
| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the development server at `http://localhost:3000`. |
| `npm run build` | Generates a production-ready build in `.next/`. |
| `npm run start` | Serves the production build. |

## Development Conventions

### Content Structure
- All documentation pages are located in the `pages/` directory as `.md` or `.mdx` files.
- Navigation order and sidebar labels are managed by `pages/_meta.json`.
- Static assets (images, logos) should be placed in the `public/` directory.

### UI & Styling
- **Theme Configuration**: Managed in `theme.config.jsx`. This file defines the logo, sidebar behavior, and custom components like the theme switcher.
- **Custom Icons**: The `iconMap` in `theme.config.jsx` maps route paths to Lucide icons for the sidebar.
- **Design Tokens**: Defined in `styles/globals.css`.
  - Primary Hue: `355deg` (Deep Red).
  - Border Radius: `12px` for most components.
- **Custom Components**:
  - `CustomThemeSwitch`: A custom button in the navbar to toggle between Light, Dark, and System modes.

### Best Practices
- Use MDX for pages requiring custom React components or advanced layout.
- When adding new pages, ensure they are registered in `pages/_meta.json` to appear in the sidebar.
- Follow the brand's sharp-edged but modern design (12px rounded corners, bold typography).

## Key Files
- `theme.config.jsx`: Central configuration for the Nextra documentation theme.
- `pages/_app.jsx`: Custom Next.js App component (includes NProgress for page transitions).
- `styles/globals.css`: Global styles and brand color definitions.
- `next.config.js`: Next.js configuration, integrating Nextra.
