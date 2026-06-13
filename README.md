# Personal Website

My personal website — built with React, TypeScript, and Tailwind CSS. It showcases my background, experience, projects, and writing.

**Live site:** (https://ethanyangwj.com/)

## Stack

- **Vite** — build tool and dev server
- **React** — component-based UI
- **TypeScript** — typed data models and components
- **Tailwind CSS** — utility-first styling

## Project Structure

```
src/
├── components/
│   ├── layout/      # Navbar, Footer
│   ├── sections/    # Hero, About, Experience, Projects, Skills, Blog
│   └── ui/          # Reusable cards: ProjectCard, ExperienceItem, BlogCard
├── data/            # Content: projects, experience, skills, blog
├── types/           # TypeScript interfaces
└── App.tsx          # Root component
```

All content lives in `src/data/` as typed arrays — adding a project or job means editing one file, not the components.

## Running Locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Build

```bash
npm run build
```

Outputs static files to `dist/`.
