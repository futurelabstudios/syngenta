# Olam Group AI Enablement Microsite

This repository powers the marketing microsite for **Futurelab Studios' AI enablement partnership with Olam Group and Olam Agri Ghana**. The site outlines the modular program (Executive Briefing & AI Foundations → Deep Dive & Discovery → Prototype Sprint & Scaling), highlights the facilitators, and lists pricing for the Essentials and Deepdive packages.

- **Live codebase:** https://github.com/futurelabstudios/olam  
- **Primary contact:** futurelab.ai@gmail.com

## Tech Stack

- [Vite](https://vitejs.dev/) + [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/) component primitives
- [Radix UI](https://www.radix-ui.com/) foundations for accessible interactions

## Getting Started

1. **Clone the repo**
   ```bash
   git clone https://github.com/futurelabstudios/olam.git
   cd olam
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Start the dev server**
   ```bash
   npm run dev
   ```
   Vite will provide a local URL with hot-module reloading.

## Available Scripts

| Command        | Description                                |
| -------------- | ------------------------------------------ |
| `npm run dev`  | Start the Vite development server          |
| `npm run build`| Build the production bundle                |
| `npm run lint` | Run ESLint across the codebase             |
| `npm run preview` | Preview the production build locally   |

## Deployment

The site outputs a static bundle via `npm run build`. Deploy the `dist/` folder to any static hosting provider (Vercel, Netlify, Cloudflare Pages, GitHub Pages, etc.). Remember to set the canonical URL and environment-specific metadata if you duplicate the site for other markets.

## Contributing

1. Create a feature branch from `main`.
2. Make changes + add tests/QA notes if applicable.
3. Run `npm run lint` and `npm run build` before opening a pull request.
4. Submit a PR pointing to `main`.

For questions or partnership requests, reach out to **futurelab.ai@gmail.com**.
