# CV

A modern, minimalist, and responsive website for professional profile.

## Features

- Server-rendered localized pages at `/pt` and `/en`
- Full resume at `/pt/cv` and `/en/cv`, with crawlable HTML
- Responsive, keyboard-accessible interface
- Light and dark themes with persisted preference
- Command palette with `Ctrl + K` or `Cmd + K`
- Print-optimized resume for saving as PDF from the browser
- Technical SEO with localized metadata, canonical URLs, hreflang, sitemap, robots, Open Graph images, and JSON-LD

## Tech Stack

- [TypeScript](https://www.typescriptlang.org/)
- [React 18](https://react.dev/)
- [Next.js 15](https://nextjs.org/) App Router and Server Components
- Custom CSS with Tailwind CSS and PostCSS tooling
- [next-themes](https://github.com/pacocoursey/next-themes) for theme persistence
- [Geist](https://vercel.com/font) typography
- [Lucide React](https://lucide.dev/) icons
- [Playwright](https://playwright.dev/) and [axe-core](https://github.com/dequelabs/axe-core) for end-to-end and accessibility tests

## Getting Started

1. Clone the repository
```bash
git clone https://github.com/leandcesar/cv.git
cd cv
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000/pt](http://localhost:3000/pt) with your browser.

## Scripts

```bash
npm run dev        # Start the development server
npm run build      # Create a production build
npm run start      # Serve the production build
npm run lint       # Run ESLint
npm run typecheck  # Run TypeScript checks
npm run test:e2e   # Run Playwright and accessibility tests
```
