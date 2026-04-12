<div align="center">
  <img src="src/assets/images/lgc_logo_new_trans.png" alt="Lincolnshire Game Company Logo" width="200" />
</div>

<br>

# Lincolnshire Game Company

A modern, professional e-commerce platform for premium wild game product sourcing, with full traceability and sustainability at its core.

Site can be viewed from either URL. Redirecting to 'roamingfree.org'.

https://www.roamingfree.org/

https://www.roamingfree.uk/

coming soon --> https://www.lincolnshiregame.co.uk

## Overview

The Lincolnshire Game Company website is a TypeScript/React application designed to showcase and facilitate the distribution of responsibly sourced, fully traceable wild game products. The platform emphasizes heritage, quality, and ethical sourcing while providing customers with comprehensive product information and seamless ordering capabilities.

## Features

### Core Functionality
- **Product Catalog** – Browse, filter, and search premium game products across multiple categories (Feedlot, Standard, Wagyu, Other)
- **Shopping Cart** – Add products to cart with persistent state management
- **Detailed Product Pages** – Rich product information with animations and enhanced visuals
- **Contact Management** – EmailJS-integrated contact form with order and inquiry submissions
- **User Authentication** – Context-based auth system for secure customer interactions

### Design & UX
- **Professional Aesthetic** – Clean, elegant design inspired by Willo Game (Shopify-style)
- **Responsive Design** – Mobile-first approach with comprehensive breakpoints (480px, 768px, 1024px+)
- **Smooth Animations** – Subtle CSS animations (fade-in, slide-up) for polished user experience
- **Accessibility** – WCAG 2.1 Level AA compliance with semantic HTML and keyboard navigation
- **Dark Theme** – Premium dark backgrounds with gold accent colors (#F1B647)

### Pages
- **Home** – Hero section and featured products
- **Shop** – Product catalog with filtering and category selection
- **Product Detail** – Individual product showcase with animations and detailed information
- **About Us** – Heritage, standards, and company credentials
- **Awards** – Industry recognition and certifications
- **Partnerships** – Strategic business partnerships and sponsorships
- **Sponsors** – Event sponsorships and community involvement
- **Blogs** – Articles on game products and sustainability
- **Contact** – Customer inquiries and order requests

## Tech Stack

### Frontend
- **React** 18+ with TypeScript (strict mode)
- **React Router** – Client-side navigation
- **CSS3** – Component-scoped styling with CSS custom properties for theming
- **EmailJS** – Email form submissions

### State Management
- **Context API** – AuthContext, CartContext, LSModalContext
- **Custom Hooks** – useAuth, useLSModal

### Build & Deployment
- **Create React App** – Development and build pipeline
- **CSS Variables** – Dynamic theming system
- **SVG Icons** – Scalable icon assets

## Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Set up environment variables
# Create .env file with:
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
```

### Development

```bash
# Start development server (localhost:3000)
npm start

# Run tests
npm test

# Build for production
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── common/              # Shared components (Navigation, Footer, Containers)
│   └── layout/              # Layout components
├── views/                   # Page components
│   ├── home/
│   ├── shop/
│   ├── product/
│   ├── aboutUs/
│   ├── awards/
│   ├── partnerships/
│   ├── sponsors/
│   ├── blogs/
│   └── contact/
├── contexts/                # Context providers (Auth, Cart, Modal)
├── hooks/                   # Custom React hooks
├── services/                # API and data services
├── styles/                  # Global styles and themes
├── utils/                   # Helper functions
└── interfaces/              # TypeScript type definitions
```

## Code Standards

### TypeScript
- Strict mode enabled
- Proper typing for all function parameters and returns
- Interfaces for component props and state

### React Components
- Functional components only (no class components)
- Custom hooks for shared logic
- Props typed with interfaces
- Context API for state management

### Styling (CSS)
- BEM naming convention: `.block__element--modifier`
- CSS custom properties for theming
- Mobile-first responsive approach
- Color contrast ≥ 4.5:1 for accessibility

### Testing
- Unit tests for utilities and hooks (targeting 80%+ coverage)
- Integration tests for critical components
- Test accessibility and keyboard navigation

## Design System

### Color Palette
- **Primary Background**: #0B0B0B
- **Accent Gold**: #F1B647
- **White (100%)**: #FFFFFF
- **White (50% opacity)**: rgba(255, 255, 255, 0.5)

### Typography
- **Responsive Scaling**: clamp() functions for fluid text sizing
- **Font Weights**: 300 (light), 600 (semibold), 700 (bold)
- **Line Height**: 1.6-1.8 for readability

### Spacing
- **System**: CSS custom properties (--space-xs through --space-3xl)
- **Breakpoints**: 480px, 768px, 1024px

### Animations
- **Duration**: 0.3s-0.8s
- **Easing**: cubic-bezier(0.34, 1.56, 0.64, 1) for smooth transitions
- **Keyframes**: fadeInUp, slideUp, float, subtleGradientShift

## Development Workflow

### Feature Implementation
1. Review specification in `/docs/`
2. Check existing component patterns
3. Understand data models and services
4. Code following DEVELOPMENT_STANDARDS
5. Test against acceptance criteria
6. Submit PR with clear description

### Commit Message Format
```
<type>(<scope>): <subject>

<body>

Spec: docs/[DOCUMENT].md#Section
```

**Example**:
```
feat(Shop): add product filtering
Spec: docs/FEATURE_SPECIFICATIONS.md#Section-2
```

## Deployment

### Production Build
```bash
npm run build
```

Builds optimized bundle in `/build/` directory ready for static hosting.

### Environment Variables
Ensure these are configured in production:
- `REACT_APP_EMAILJS_SERVICE_ID`
- `REACT_APP_EMAILJS_PUBLIC_KEY`
- `REACT_APP_EMAILJS_TEMPLATE_ID`

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility

- WCAG 2.1 Level AA compliance
- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Color contrast validation

## Performance

- Code splitting with React Router
- Lazy loading for images
- Optimized CSS and JavaScript bundles
- Web Vitals monitoring

## Contributing

1. Create feature branch from `main`
2. Follow code standards (TypeScript strict, ESLint, Prettier)
3. Test thoroughly including accessibility
4. Submit PR with specification reference
5. Ensure CI/CD passes before merge

## License

© 2024 Lincolnshire Game Company. All rights reserved.

## Contact

**Lincolnshire Game Company**  
Email: orders@lincolnshiregame.co.uk  
Phone: (+44) 1205 822882  
Website: www.lincolnshiregame.co.uk

---

**Last Updated**: April 2024  
**Version**: 1.0.0
