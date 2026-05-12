# My Portfolio

A personal portfolio website built with React, Vite, and Tailwind CSS.

## Overview

This project showcases:

- Responsive hero, about, skills, experience, projects, and contact sections
- Animated UI using `framer-motion`
- Project detail pages with routing via `react-router-dom`
- Contact form integration using `emailjs-com`
- Custom fonts from `@fontsource`

## Tech stack

- React 19
- Vite
- Tailwind CSS
- Framer Motion
- React Router
- EmailJS
- ESLint

## Getting started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project structure

- `public/` — static public files
- `src/`
  - `assets/`
    - `ProjectsImg/`
  - `components/`
    - `About.jsx`
    - `Contact.jsx`
    - `Experience.jsx`
    - `Footer.jsx`
    - `GithubStats.jsx`
    - `Header.jsx`
    - `Hero.jsx`
    - `Projects.jsx`
    - `Separator.jsx`
    - `Skills.jsx`
    - `TechStack.jsx`
  - `ProjectPage/`
    - `HeroSection.jsx`
    - `index.jsx`
    - `Projects.jsx`
    - `projectsData.js`
  - `App.css`
  - `App.jsx`
  - `index.css`
  - `main.jsx`
- `eslint.config.js`
- `package.json`
- `tailwind.config.js`
- `vite.config.js`

## Notes

This repository is intended as a portfolio presentation site. Customize the content, projects, and styling to match your personal brand.
