# Zachary Melancon's Portfolio 🎨💻

Welcome to my personal developer portfolio — a playful and professional blend of web nostalgia and modern design. This React + TypeScript app showcases my development background, major projects, and some quirky touches that make it uniquely mine.

## 🧠 Overview

This portfolio has two major themes:

- **MyOldSpace**: A glittery, chaotic, and heartfelt homage to the golden days of MySpace. Complete with Top Friends, glitter stickers, a customizable music playlist, and a switchable retro/modern theme.
- **Modern Portfolio**: A sleek, minimal experience focused on showcasing my projects, blog posts, and technical skills as a senior front-end engineer.

## 🛠️ Built With

- **React** + **TypeScript**
- **Material UI** (for the modern view)
- **Lottie** (animated glitter replacements in modern theme)
- **CSS** and **CSS Modules** (for classic styling)
- **Jest** (100% test coverage on project components)
- **React Router DOM** (multi-page navigation)
- **Vite** (for fast dev & build)

## 📁 Folder Structure

```
/src
  /assets         # Images, stickers, and animations
  /components     # Reusable UI components
  /pages
    /MyOldSpace   # MySpace-style theme and components
    /Portfolio    # Modern portfolio layout
  /styles         # CSS for classic and modern themes
  /appdata        # Mock data (friends, playlists, blog posts)
  /hooks, /utils  # Custom logic and helpers
```

## 🚀 Running Locally

```bash
git clone https://github.com/zacharymelancon/portfolio.git
cd portfolio
npm install
npm run dev
```

Visit `http://localhost:5173` in your browser.

### 🏗 Building for Production

```bash
npm run build
```

To preview the built app:

```bash
npm run preview
```

## 🎵 Features

- 🎛️ **Theme Switcher** between modern and nostalgic layouts.
- 🧙‍♂️ **Magic Canvas Page** — wave your wand (literally) to paint rainbows and drop stickers!
- 🎶 **Playlist Player** with autoplay (only on the first track), complete with visible YouTube embeds.
- 🧑‍💻 **Blog Posts** showcasing real project experience:
  - BillGO Console
  - BillGO Experience
  - SailPoint Design System
- 🤝 **Top Friends** MySpace-style (with mocked data for fun).

## 🔒 Tech Highlights

- Uses `vite.config.ts` for smart aliasing and optimal builds.
- CSS + image module declarations to support TypeScript imports.
- Full test coverage where applicable.
- Responsive layout with custom theming logic.

## 📸 Screenshot

![MyOldSpace Screenshot](./src/assets/screenshot-myoldspace.png)

## 📬 Contact

Made with 💖 and too much coffee by [Zachary Melancon](https://your-website-link.com).
