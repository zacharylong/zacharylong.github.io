# Zachary Long Personal Website

This repository contains the source code for my personal website: [zacharylong.com](https://zacharylong.com).

The site is a personal and professional hub for my work across analytics, higher education, storytelling, books, films, and media projects. It combines a professional portfolio with a more personal archive of what I am reading, watching, writing, and thinking about.

## About the Site

The website is built around a few connected sections:

* **Home** — a landing page introducing my work, current interests, and latest updates.
* **Work** — professional background, analytics projects, dashboards, institutional research, and technical business analysis.
* **Books** — reading life, reviews, science fiction, fantasy, and long-form book-related projects.
* **Films** — film diary, reviews, and reflections.
* **Transmissions** — podcast episodes, YouTube videos, and other media updates.
* **About / Resume / Now** — background, current focus, and professional profile.

The goal of the site is to bring together the professional and personal sides of my work: data, systems thinking, storytelling, and worldbuilding.

## Tech Stack

This site is built with:

* [Astro](https://astro.build/)
* TypeScript
* CSS
* GitHub Pages
* RSS-powered integrations for recent books, films, and media updates

## Local Development

To run the site locally:

```bash
npm install
npm run dev
```

Astro will start a local development server and show the local URL in the terminal.

## Build

To generate a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```text
.
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable Astro components
│   ├── config/          # Theme and site configuration
│   ├── data/            # Resume and structured site data
│   ├── layouts/         # Page layouts
│   ├── pages/           # Site pages and routes
│   ├── styles/          # Global and theme styles
│   └── utils/           # RSS and data helpers
├── astro.config.mjs     # Astro configuration
├── package.json         # Project scripts and dependencies
└── README.md
```

## Deployment

The site is deployed as a GitHub Pages site for the `zacharylong.github.io` repository and is configured for the custom domain:

```text
https://zacharylong.com
```

## Notes

This repository originally began from an academic website template, but it has since been rebuilt into a custom Astro personal website. The README has been updated to reflect the current purpose, structure, and development workflow of the project.
