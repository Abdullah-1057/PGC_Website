# PGC Dhamyal Website

A modern, responsive website for Punjab Group of Colleges, Dhamyal campus built with React, Tailwind CSS, and Framer Motion.

## Features

- **Modern Design**: Clean, professional design with brand colors extracted from the logo
- **Responsive**: Fully responsive design that works on all devices
- **Accessible**: WCAG AA compliant with proper focus management and screen reader support
- **Animated**: Smooth animations and micro-interactions using Framer Motion
- **Fast**: Optimized for performance with code splitting and lazy loading
- **SEO Ready**: Proper meta tags and semantic HTML structure

## Brand Colors

The color palette has been extracted from the PGC Dhamyal logo:

- **Primary Red**: `#ef4444` - Main brand color from the logo's red elements
- **Secondary Navy**: `#334155` - From the logo's blue/navy elements  
- **Accent Purple**: `#d946ef` - Gradient accent color
- **Neutral Grays**: Various shades for text and backgrounds

## Pages

1. **Home** - Hero, Programs, Why PGC, Stats, Events, Admissions CTA (exactly 6 sections)
2. **About** - Mission, facilities, achievements
3. **Courses** - Filterable course listings with detailed pages
4. **Faculty** - Searchable faculty directory
5. **Events** - Upcoming events and activities
6. **Fee Structure** - Transparent fee structure in PKR
7. **Admissions** - Application form with validation
8. **Contact** - Contact information and inquiry form

## Technology Stack

- **React 18** - Modern React with hooks
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework with custom brand colors
- **Framer Motion** - Animation library with reduced motion support
- **Heroicons** - Icon library
- **React Hot Toast** - Toast notifications
- **Vite** - Fast build tool and dev server

## Getting Started

1. **Install dependencies:**
   \`\`\`bash
   npm install
   \`\`\`

2. **Start development server:**
   \`\`\`bash
   npm run dev
   \`\`\`

3. **Build for production:**
   \`\`\`bash
   npm run build
   \`\`\`

## Updating Brand Colors

To update the brand colors from a new logo:

1. Replace `/public/images/logo.png` with the new logo
2. Extract the primary colors from the logo
3. Update the color palette in `tailwind.config.js`:
   \`\`\`js
   colors: {
     brand: {
       primary: { /* red shades */ },
       secondary: { /* navy shades */ },
       accent: { /* accent shades */ },
       // ... other colors
     }
   }
   \`\`\`

## Content Management

All content is stored in JSON files in the `src/data/` directory:

- `courses.js` - Course information and curriculum
- `events.js` - Events and activities
- `faculty.js` - Faculty and staff directory
- `pricing.js` - Fee structure and fee plans

To update content, simply edit these files and the changes will be reflected throughout the site.

## Currency Formatting

All prices are displayed in Pakistani Rupees (PKR) using the `en-PK` locale:

\`\`\`js
price.toLocaleString('en-PK') // Formats as: 15,000
\`\`\`

## Accessibility Features

- Semantic HTML structure
- Proper ARIA labels and roles
- Keyboard navigation support
- Focus management
- Screen reader optimized
- High contrast ratios (WCAG AA compliant)
- Reduced motion support for users with vestibular disorders

## Performance Optimizations

- Code splitting with React Router
- Lazy loading for images below the fold
- Optimized animations (200-450ms duration)
- Minimal bundle size
- Fast loading with Vite

## Contact Form API

The contact form submits to `/api/contact` which accepts:

\`\`\`js
{
  name: string,
  email: string,
  phone?: string,
  program?: string,
  city?: string,
  subject?: string,
  message: string,
  type: 'contact' | 'admission' | 'quick-contact'
}
\`\`\`

## License

© 2025 Punjab Group of Colleges, Dhamyal. All rights reserved.
# PGC_Website
