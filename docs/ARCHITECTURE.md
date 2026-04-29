# Living Design Doc

## Overview
- Purpose: Personal portfolio site with a sci-fi, chip-design inspired visual system.
- Primary audience: Recruiters, collaborators, and research teams.
- Status: Living document; update when structure, styling, or content changes.

## Goals
- Showcase hardware, software, and research projects clearly.
- Maintain a bold sci-fi/semiconductor visual theme.
- Keep the site fast, responsive, and easy to update.

## Non-goals
- CMS integration (for now).
- Heavy backend services beyond contact email handling.

## Tech Stack
- Framework: Next.js (App Router)
- Styling: Tailwind CSS + global CSS tokens
- Animation: Framer Motion
- UI icons: React Icons

## Information Architecture
- Sections: Home, About, Projects, Skills, Experience, Activities, Contact
- Navigation: Single-page anchor navigation with active section highlighting.

## Design System (High Level)
- Color tokens live in globals CSS (accent, glow, surfaces).
- Typography: display + sans pairing via next/font.
- Reusable surfaces: glass/chip panels, chip pills, neon accents.

## Content Sources
- Static data lives in lib/data.ts for projects, experience, and activities.
- Images stored in /public and referenced from lib/data.ts.

## Key Components
- Header: sticky nav with active section highlight.
- Intro: hero layout + CTA buttons.
- Projects: card list with image, tags, and animated content.
- Experience: vertical timeline.
- Activities: image cards for awards/research.

## File Layout (Key Paths)
- app/ : Next.js routes and global layout
- components/ : UI sections and shared components
- lib/ : data models and hooks
- public/ : images and static assets

## Update Checklist
- New project: add image to public/ and entry in lib/data.ts.
- New experience: update experiencesData in lib/data.ts.
- Visual theme change: update tokens in app/globals.css.
- Layout changes: update relevant component in components/.

## Open Questions / TODO
- TODO: Add accessibility pass (focus states, aria labels).
- TODO: Add metrics/analytics if needed.
- TODO: Document any future API routes or backend services.
