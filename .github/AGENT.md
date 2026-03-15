# Agent Development Guide
**Quick Reference for Development**

---

## ⚡ Agent Checklist (Before Every Task)

1. **Find the Feature Spec**
   - Open: `docs/FEATURE_SPECIFICATIONS.md`
   - Copy acceptance criteria

2. **Find Component Spec** 
   - Open: `docs/COMPONENT_ARCHITECTURE.md`
   - Find component props, state, patterns

3. **Find Data Model**
   - Open: `docs/API_DATA_SPECIFICATIONS.md`
   - Verify types and interfaces

4. **Code with Standards**
   - Reference: `docs/DEVELOPMENT_STANDARDS.md`
   - Follow TypeScript, React, CSS rules

5. **Verify Acceptance Criteria**
   - Check each criterion ✓
   - Test responsive design
   - Test accessibility

6. **Submit PR**
   - Use: `.github/PULL_REQUEST_TEMPLATE.md`
   - Reference spec sections
   - List acceptance criteria

---

## 📋 Doc Quick Links

| Need | File | Section |
|------|------|---------|
| Feature details | `FEATURE_SPECIFICATIONS.md` | By name |
| Component structure | `COMPONENT_ARCHITECTURE.md` | Component name |
| Data types | `API_DATA_SPECIFICATIONS.md` | Section 1 |
| Code rules | `DEVELOPMENT_STANDARDS.md` | All sections |
| Business context | `PRD_PRODUCT_REQUIREMENTS.md` | Overview |
| System design | `TECHNICAL_ARCHITECTURE.md` | Overview |

---

## 🚀 Common Tasks

### Implement Feature
```
1. Find feature in FEATURE_SPECIFICATIONS.md
2. Copy component spec from COMPONENT_ARCHITECTURE.md
3. Check data types in API_DATA_SPECIFICATIONS.md
4. Code per DEVELOPMENT_STANDARDS.md
5. Self-check against acceptance criteria
6. Create PR with spec references
```

### Fix Bug
```
1. Find feature in FEATURE_SPECIFICATIONS.md
2. Understand expected behavior (acceptance criteria)
3. Debug using component and data specs
4. Fix per DEVELOPMENT_STANDARDS.md
5. Verify all criteria still pass
6. PR references spec sections
```

### Create Component
```
1. Check COMPONENT_ARCHITECTURE.md Section 11: Template
2. Define props interface from COMPONENT_ARCHITECTURE.md
3. Follow patterns from COMPONENT_ARCHITECTURE.md Section 3
4. Style per DEVELOPMENT_STANDARDS.md Section 7
5. Make accessible per DEVELOPMENT_STANDARDS.md Section 9
6. Test per DEVELOPMENT_STANDARDS.md Section 6
```

---

## ✅ Code Standards (Essential Rules)

### TypeScript
- ✓ `strict: true` enabled
- ✓ Interface for all props: `interface ComponentProps { }`
- ✓ No `any` types
- ✓ Enum for categories: `'venison' | 'poultry' | 'standard' | 'other'`

### React
- ✓ Functional components only
- ✓ Hooks at top level (not in loops/conditions)
- ✓ `const Component: FC<Props> = (props) => { }`
- ✓ useCallback for callbacks, useMemo for computed values

### Naming
- ✓ Files: `ComponentName.tsx` (PascalCase)
- ✓ Variables: `productName` (camelCase)
- ✓ Constants: `MAX_PRODUCTS` (UPPER_SNAKE_CASE)
- ✓ Handlers: `handleClick`, `onSubmit`

### CSS
- ✓ Use CSS variables: `var(--primary-color)`
- ✓ BEM notation: `.component__section { }`
- ✓ Mobile-first responsive design
- ✓ Color contrast ≥ 4.5:1

### Accessibility
- ✓ Semantic HTML: `<button>`, `<nav>`, `<main>`
- ✓ ARIA labels: `aria-label`, `aria-required`
- ✓ Alt text: `alt="description"` on images
- ✓ Keyboard navigation: Tab, Enter, Escape

---

## 🧪 Testing

### Before Submitting PR
```bash
# Run locally
npm test

# Build check
npm run build

# No console errors
# No TypeScript errors
# All tests passing
```

### Acceptance Criteria Check
- [ ] Feature works as spec says
- [ ] Responsive: mobile, tablet, desktop
- [ ] Accessible: keyboard nav, screen reader
- [ ] Edge cases handled
- [ ] Error states shown

---

## 📝 Commit Message Format

```
<type>(<scope>): <subject>

Spec: docs/FEATURE_SPECIFICATIONS.md#Section-Name
```

**Types**: `feat`, `fix`, `refactor`, `docs`, `style`, `test`

**Examples**:
```
feat(ProductCard): add product rating
Spec: docs/FEATURE_SPECIFICATIONS.md#Feature-4

fix(Contact): validate email format
Spec: docs/FEATURE_SPECIFICATIONS.md#Feature-3
```

---

## 🤖 Agent Decision Tree

```
TASK ASSIGNED
  ↓
Is it a feature? → YES → Check FEATURE_SPECIFICATIONS.md
  ↓ NO            → Check COMPONENT_ARCHITECTURE.md
  ↓
Find acceptance criteria
  ↓
Check data types (API_DATA_SPECIFICATIONS.md)
  ↓
Review component structure (COMPONENT_ARCHITECTURE.md)
  ↓
Code per standards (DEVELOPMENT_STANDARDS.md)
  ↓
Self-test against criteria
  ↓
Create PR with spec references
  ↓
DONE ✓
```

---

## 🚨 Red Flags (Stop & Ask)

- Requirement not in spec documents → Ask PM
- Feature conflicts with existing code → Ask team
- Data model unclear → Check API_DATA_SPECIFICATIONS.md
- Styling inconsistency → Check DEVELOPMENT_STANDARDS.md Section 7
- Accessibility question → Check DEVELOPMENT_STANDARDS.md Section 9
- Architecture decision → Ask tech lead

---

## 🔗 Key Files

**Specs** (read-only reference):
- `docs/FEATURE_SPECIFICATIONS.md` - What to build
- `docs/COMPONENT_ARCHITECTURE.md` - How components work
- `docs/DEVELOPMENT_STANDARDS.md` - How to code
- `docs/API_DATA_SPECIFICATIONS.md` - Data models
- `docs/README.md` - Documentation index

**GitHub Templates** (PR/issue structure):
- `.github/INSTRUCTIONS.md` - Development workflow
- `.github/PULL_REQUEST_TEMPLATE.md` - PR format
- `.github/ISSUE_TEMPLATE/` - Issue templates

**Configuration**:
- `tsconfig.json` - TypeScript strict mode
- `package.json` - Dependencies
- `.env.local` - Environment (not committed)

**Key Source Files**:
- `src/App.tsx` - Root component
- `src/views/` - Page components
- `src/components/` - Reusable components
- `src/styles/` - Global styles
- `src/interfaces/` - Type definitions
- `src/data/` - Static data

---

## 💡 Pro Tips for Agents

1. **Read spec first** - All answers are there
2. **Check similar code** - Pattern already exists
3. **Copy from templates** - Use COMPONENT_ARCHITECTURE.md#11
4. **Test thoroughly** - All acceptance criteria must pass
5. **Reference specs in PR** - Makes review faster
6. **Use TypeScript strictly** - Catches errors early
7. **Make accessible** - WCAG 2.1 AA standard
8. **Mobile first** - Test on 320px+ screens

---

## 📚 Full Documentation

For detailed information, see:
- `docs/README.md` - Complete index with read times
- `docs/COMPONENT_ARCHITECTURE.md` - Section 11 for templates
- `docs/DEVELOPMENT_STANDARDS.md` - Sections 1-2 for code rules
- `docs/FEATURE_SPECIFICATIONS.md` - Each feature in detail

---

**Last Updated**: March 2026  
**For Quick Reference**: Keep this file open while developing  
**For Details**: Refer to spec documents in `docs/`
