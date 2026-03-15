---
name: lgc-development
description: "Spec-driven development for Lincolnshire Game Company. Use when: implementing features, fixing bugs, code review, or architectural decisions. Always reference specs in /docs/ before coding."
---

# LGC Development Guide

> **All development is spec-driven. Check specs first, code second.**

---

## 🚀 Quick Start

1. **Features** → Use FEATURE_SPECIFICATIONS patterns
2. **Components** → Follow COMPONENT_ARCHITECTURE patterns
3. **Data** → Use API_DATA_SPECIFICATIONS models
4. **Code style** → Follow DEVELOPMENT_STANDARDS
5. **Before submitting** → Check acceptance criteria, run tests
6. **PR description** → Reference spec patterns used

---

## 📚 Development Standards

This guide encodes best practices:
- TypeScript strict mode (always)
- React functional components with hooks
- BEM CSS naming convention
- Component-based architecture
- Spec-driven development workflow
- Minimum 80% test coverage for new code
- WCAG 2.1 Level AA accessibility
- Mobile-first responsive design (320px, 768px, 1024px breakpoints)

---

## 🔄 Development Workflow

### Implementing Features
```
1. Understand feature requirements and acceptance criteria
2. Review related component patterns in codebase
3. Understand data models and service layer
4. Code following DEVELOPMENT_STANDARDS patterns
5. Test against acceptance criteria
6. Submit PR with clear description of changes
```

### Fixing Bugs
```
1. Identify the expected behavior from feature specification
2. Locate the component in the codebase
3. Debug and fix following established patterns
4. Verify fix against expected behavior
5. Include test coverage in PR
```

### Code Review
```
1. Check: Does code meet requirements?
2. Check: Are standards followed?
3. Check: Is component architecture correct?
4. Check: Are types properly defined?
5. Check: Is accessibility verified?
```

---

## 📝 Commit Message Format

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

---

## ✅ Before Submitting PR

- [ ] TypeScript strict mode passes
- [ ] Tests passing locally (`npm test`)
- [ ] All acceptance criteria met
- [ ] Accessibility verified
- [ ] Responsive design tested (mobile/tablet/desktop)
- [ ] Code follows DEVELOPMENT_STANDARDS.md
- [ ] PR references spec sections

---

## 🚀 Build & Deploy

```bash
npm install        # Install dependencies
npm start          # Run locally on localhost:3000
npm test           # Run tests
npm run build      # Production build
```

---

## 🎯 Key Rules

1. **Code quality first** - Follow established patterns
2. **TypeScript strict mode** - Always enabled
3. **Component patterns** - Use functional components with hooks
4. **Accessibility** - WCAG 2.1 Level AA minimum
5. **Testing** - Minimum 80% coverage for new code
6. **Responsive design** - Mobile first (320px, 768px, 1024px breakpoints)

---

## 📝 Code Standards Summary

### TypeScript
- Strict mode always enabled
- Proper typing for all function parameters and returns
- Interfaces for component props and state

### React Components
- Functional components only (no class components)
- Custom hooks for shared logic
- Props typed with interfaces
- Context API for state management

### Styling (CSS)
- BEM naming convention: `.block__element--modifier`
- CSS custom properties (variables) for theming
- Mobile-first responsive approach
- Accessibility: color contrast ≥ 4.5:1

### Testing
- Unit tests for utilities and hooks
- Integration tests for components
- At least 80% coverage for new code
- Test accessibility and keyboard navigation

### Accessibility
- Semantic HTML (`<button>`, `<form>`, `<header>`, etc.)
- ARIA labels for interactive elements
- Keyboard navigation support
- Color contrast requirements met

---

## 🚀 Build & Deploy

```bash
npm install        # Install dependencies
npm start          # Run locally on localhost:3000
npm test           # Run tests
npm run build      # Production build
```

---

## ✅ Before Submitting PR

- [ ] TypeScript strict mode passes
- [ ] Tests passing locally (`npm test`)
- [ ] All requirements met
- [ ] Accessibility verified
- [ ] Responsive design tested (mobile/tablet/desktop)
- [ ] Code follows standards
- [ ] PR description clearly explains changes
