# The Hope Project

A complete multi-page charity website built with Next.js App Router, React, Tailwind CSS, Lucide React, React Hot Toast, and browser localStorage.

## Pages

- `/` Home
- `/projects`
- `/about`
- `/volunteer`
- `/blog`
- `/blog/[slug]`
- `/contact`
- `/donate`

## Features

- Responsive desktop/tablet/mobile navigation with hamburger menu
- Reference-inspired charity design with forest green, cream, white and gold palette
- Reusable cards, sections, navbar, footer and page hero components
- Newsletter subscription stored in localStorage
- Volunteer applications stored in localStorage
- Contact submissions stored in localStorage
- Donation demo data stored in localStorage
- React Hot Toast feedback
- Blog search, category filtering, load more and dynamic routes
- Responsive cards, images and content sections

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Production build

```bash
npm run build
npm start
```

## Notes

- The donation page is a frontend demo only and intentionally does not connect to a real payment gateway.
- Photos use external Unsplash image URLs for easy project setup. Replace them with final licensed project imagery if needed.

## Latest update
- Added a responsive “Meet Our Volunteers” section with volunteer names, roles, photos and descriptions on `/volunteer`.
- Replaced the contact-page map placeholder with a working Google Maps embed for Dhaka, Bangladesh on `/contact`.
