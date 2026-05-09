# Jenco IT Solutions - Industry Landing Page Template

A modern, reusable landing page template for IT services targeting multiple industries. Built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- **Reusable Template**: Swap between 5 industry verticals without rebuilding
- **Modern Design**: Clean, professional UI with smooth animations
- **Responsive**: Optimized for all device sizes
- **SEO Optimized**: Meta tags and structured data
- **Smooth Scrolling**: Lenis-powered scroll experience
- **Dark Theme**: Professional dark color scheme

## Industries Supported

- Construction
- Healthcare
- Manufacturing
- Real Estate
- Education

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Build Tool**: Vite
- **Styling**: Custom CSS with CSS Variables
- **Fonts**: Inter (body), Sora (headings)
- **Animations**: Lenis smooth scrolling, Intersection Observer reveals
- **Icons**: Custom CSS-based hamburger menu

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Nav.tsx
│   │   └── Footer.tsx (not implemented)
│   └── sections/
│       ├── Hero.tsx
│       ├── TrustStrip.tsx
│       ├── PainCards.tsx
│       ├── ComplianceStrip.tsx
│       ├── CaseStudy.tsx
│       ├── FAQ.tsx
│       └── FinalCTA.tsx
├── data/
│   ├── types.ts
│   └── industries/
│       ├── index.ts
│       ├── construction.ts
│       ├── healthcare.ts
│       ├── manufacturing.ts
│       ├── realestate.ts
│       └── education.ts
├── hooks/
│   ├── useLenis.ts
│   └── useReveal.ts
├── pages/
│   └── IndustryPage.tsx
├── router/
│   └── AppRouter.tsx
├── styles/
│   ├── global.css
│   ├── animation.css
│   └── utilities.css
└── main.tsx
```

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview production build**:
   ```bash
   npm run preview
   ```

## Local URLs

After running `npm run dev`, visit:

- **Construction**: http://localhost:5173/construction
- **Healthcare**: http://localhost:5173/healthcare
- **Manufacturing**: http://localhost:5173/manufacturing
- **Real Estate**: http://localhost:5173/real-estate
- **Education**: http://localhost:5173/education

## Template Structure

The template is structured around data-driven components. Each industry has its own data file with:

- Meta information (title, description)
- Hero content (headline, subtext, image, CTAs)
- Trust stats
- Pain points
- Compliance items
- Case study
- FAQ section
- Final CTA

## Customization

To add a new industry:

1. Create a new data file in `src/data/industries/`
2. Export it from `src/data/industries/index.ts`
3. Add the route in `src/router/AppRouter.tsx` (optional, as it uses dynamic routing)

## Performance

- Optimized bundle size (~35KB JS)
- Lazy-loaded images with proper alt text
- CSS custom properties for theming
- Intersection Observer for animation triggers
- Lenis smooth scrolling for better UX

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile devices
- Responsive design tested on desktop, tablet, mobile

## Deployment

Ready for deployment to Vercel, Netlify, or any static hosting service. The build output is in the `dist/` folder.

## License

This project is for demonstration purposes.