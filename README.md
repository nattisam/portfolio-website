# Nathan Samson – Systems Architect Portfolio

A modern, futuristic portfolio website built with Next.js 14, TypeScript, Tailwind CSS, Framer Motion, and MDX.

## Features

- ⚡ Next.js 14 with App Router
- 🎨 Tailwind CSS with custom dark theme and neon accents
- 🎭 Framer Motion for smooth animations
- 📝 MDX support for rich project case studies
- 📱 Fully responsive design
- 🌙 Dark theme by default
- 🎯 TypeScript for type safety

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
  app/
    layout.tsx          # Root layout with fonts and navigation
    page.tsx            # Home page
    globals.css         # Global styles and Tailwind directives
    projects/
      page.tsx          # Projects listing page
      [projectId]/
        page.mdx        # MDX project case studies
  components/
    Navigation.tsx      # Responsive navigation component
  ui/
    button.tsx          # Button component
    card.tsx            # Card component
  lib/
    utils.ts            # Utility functions (cn helper)
    constants.ts        # Site configuration constants
```

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Content**: MDX
- **Fonts**: Inter (sans-serif), JetBrains Mono (monospace)

## Deployment

This project is optimized for Vercel deployment. Simply push to your repository and deploy on Vercel.

## License

Private project - All rights reserved.

