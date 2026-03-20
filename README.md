# Jeeban Kumar Rout — Portfolio

A production-grade personal portfolio built with **React 18 + Vite 5**. Dark brutalist aesthetic with terminal-inspired typography, scroll animations, and a no-backend contact form.

## 🚀 Quick Start

### Requirements
- Node.js 18+

### Setup

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx       # Fixed nav with scroll spy + mobile menu
│   ├── Footer.jsx       # Footer with links
│   └── ScrollToTop.jsx  # Floating back-to-top button
│
├── sections/            # Page sections (one per route area)
│   ├── Hero.jsx         # Landing with typed animation
│   ├── Achievements.jsx # Stats bar
│   ├── About.jsx        # Bio + education + JSON card
│   ├── Skills.jsx       # Skill categories grid
│   ├── Experience.jsx   # Timeline
│   ├── Projects.jsx     # Project cards with expand
│   └── Contact.jsx      # mailto-based contact form
│
├── hooks/
│   ├── useScrollSpy.js  # Active nav link detection
│   └── useInView.js     # Intersection observer for animations
│
├── utils/
│   └── data.js          # All portfolio content (single source of truth)
│
└── styles/
    └── globals.css      # Design system tokens + global styles
```

## ✉️ Contact Form

The contact form uses a `mailto:` link — no backend, no server, no API keys. When a visitor submits the form, it opens their default email client with the message pre-filled, addressed to `jeebanrout9090@gmail.com`.

## 🎨 Customisation

All portfolio content lives in `src/utils/data.js`. Update:
- `PERSONAL` — name, email, linkedin, location
- `SKILLS` — tech categories
- `EXPERIENCE` — work history
- `PROJECTS` — project cards
- `ACHIEVEMENTS` — metric highlights

## 🌐 Deployment

Works on Vercel, Netlify, or any static host:
```bash
npm run build
# Deploy the /dist folder
```
