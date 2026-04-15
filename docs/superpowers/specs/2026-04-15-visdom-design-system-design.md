# Visdom Design System — Design Spec

## Goal

Unified React component library (`@visdom/ui`) with Storybook, extracted from three existing Visdom projects:
- **visdom-main-page** (Astro 6, marketing site)
- **visdom-code-review** (Astro 5, documentation site)
- **virtus-lab-ai-maturity-matrix** (Next.js 16 + React 19, interactive app)

## Architecture: Flat Package

Single npm package, single import path. No monorepo.

```
import { Button, StatCard, HeroSection } from '@visdom/ui'
import '@visdom/ui/styles.css'
```

Consumers:
- Next.js (maturity-matrix): direct import
- Astro (main-page, code-review): via `@astrojs/react` integration

## Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| React | 19 | Component runtime |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 4 | Styling |
| Radix UI | latest | Headless accessibility primitives |
| CVA | 0.7+ | Variant management |
| clsx + tailwind-merge | latest | Class composition (`cn()` utility) |
| lucide-react | latest | Icons |
| framer-motion | latest | Animations (optional peer dep) |
| Storybook | 8 | Documentation & preview |
| Vite | latest | Build (library mode) |
| Vitest | latest | Unit tests |

### Build Output

- ESM + CJS dual output
- TypeScript declarations
- `styles.css` importable separately (tokens + globals)
- Tree-shakeable via named exports

## Design Tokens

### Colors

```css
/* Brand */
--visdom-primary:       #10b981;  /* emerald - all 3 projects */
--visdom-primary-dark:  #059669;
--visdom-primary-light: #ecfdf5;

/* Semantic */
--visdom-blue:    #0693e3;  /* secondary, assess phase */
--visdom-purple:  #9b51e0;  /* accent, enable phase, AI deep review */
--visdom-amber:   #f59e0b;  /* warning, validate phase, AI quick scan */
--visdom-red:     #ef4444;  /* destructive */

/* Neutral (gray scale) */
--visdom-gray-50:  #f9fafb;
--visdom-gray-100: #f3f4f6;
--visdom-gray-200: #e5e7eb;
--visdom-gray-300: #d1d5db;
--visdom-gray-400: #9ca3af;
--visdom-gray-500: #6b7280;
--visdom-gray-600: #4b5563;
--visdom-gray-700: #374151;
--visdom-gray-800: #1f2937;
--visdom-gray-900: #111827;

/* Surface */
--visdom-bg:            #ffffff;
--visdom-surface:       #f8f9fb;
--visdom-surface-light: #f1f3f5;
--visdom-border:        #e5e7eb;
--visdom-border-light:  #f0f0f0;
--visdom-text:          #111827;
--visdom-text-secondary:#6b7280;
--visdom-text-muted:    #9ca3af;
```

Dark mode via `.dark` class:
```css
.dark {
  --visdom-bg:             #111827;
  --visdom-surface:        #1f2937;
  --visdom-surface-light:  #374151;
  --visdom-border:         #374151;
  --visdom-border-light:   #4b5563;
  --visdom-text:           #f9fafb;
  --visdom-text-secondary: #9ca3af;
  --visdom-text-muted:     #6b7280;
}
```

### Typography

```css
--font-heading: 'Montserrat', sans-serif;  /* weights: 600, 700, 800 */
--font-body:    'Inter', system-ui, sans-serif;  /* weights: 400, 500, 600, 700 */
--font-mono:    'JetBrains Mono', monospace;  /* weights: 400, 500 */
```

### Spacing

Tailwind default 4px grid. No custom spacing tokens needed.

### Border Radius

Base: `0.625rem` (10px). Scale: sm, md, lg, xl via calc.

## Components

### Base UI (from shadcn/ui, unified Visdom theme)

| Component | File | Variants |
|---|---|---|
| Button | `ui/button.tsx` | default, destructive, outline, secondary, ghost, link; sizes xs-lg |
| Card | `ui/card.tsx` | compound: Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter |
| Badge | `ui/badge.tsx` | default, secondary, destructive, outline, ghost |
| Input | `ui/input.tsx` | focus ring, dark mode |
| Sheet | `ui/sheet.tsx` | sides: top, right, bottom, left |
| DropdownMenu | `ui/dropdown-menu.tsx` | Radix-based |
| Tooltip | `ui/tooltip.tsx` | Radix-based |
| Progress | `ui/progress.tsx` | progress bar |
| Separator | `ui/separator.tsx` | horizontal, vertical |
| ScrollArea | `ui/scroll-area.tsx` | custom scrollbar |
| Collapsible | `ui/collapsible.tsx` | open/closed |
| Skeleton | `ui/skeleton.tsx` | loading placeholder |
| Sidebar | `ui/sidebar.tsx` | collapse/expand, mobile, keyboard shortcuts |

### Domain Components (extracted from projects)

| Component | File | Source | Description |
|---|---|---|---|
| StatCard | `domain/stat-card.tsx` | code-review | Value + label + source, 5 color variants |
| Callout | `domain/callout.tsx` | code-review | info/warning/tip/reference with icons |
| PersonaCard | `domain/persona-card.tsx` | code-review | Name + role + color + slot content |
| ResourceCard | `domain/resource-card.tsx` | code-review | Link card with tag, description, source |
| BeforeAfter | `domain/before-after.tsx` | code-review | Before/after comparison with impact metrics |
| ImpactNumber | `domain/impact-number.tsx` | code-review | Before→after transformation display |
| LayerBadge | `domain/layer-badge.tsx` | code-review | Layer-specific color badge (0-3) |
| Timeline | `domain/timeline.tsx` | code-review | Horizontal (desktop) + vertical (mobile) |
| HeroSection | `domain/hero-section.tsx` | both | Hero banner with headline, subtitle, CTA buttons |
| SolutionCard | `domain/solution-card.tsx` | main-page | Dark glass card with tags, bullets, metrics |
| CtaSection | `domain/cta-section.tsx` | main-page | Grid of CTA cards |
| Terminal | `domain/terminal.tsx` | main-page | Mock terminal/code block |
| LevelCard | `domain/level-card.tsx` | maturity-matrix | Maturity level with practices and guides |
| LevelGateCard | `domain/level-gate-card.tsx` | maturity-matrix | Prerequisites/gates display |

### Layout Components

| Component | File | Source | Description |
|---|---|---|---|
| Nav | `layout/nav.tsx` | main-page | Top navigation with mobile toggle |
| Footer | `layout/footer.tsx` | main-page | Footer with links |
| Section | `layout/section.tsx` | main-page | Section wrapper (padding, container, title) |
| DocLayout | `layout/doc-layout.tsx` | code-review | Layout with breadcrumbs, pagination, sidebar |
| PageNav | `layout/page-nav.tsx` | maturity-matrix | Navigation bar |

### Utilities

| Export | File | Description |
|---|---|---|
| `cn()` | `lib/utils.ts` | clsx + tailwind-merge |
| `useIsMobile()` | `lib/hooks/use-mobile.ts` | Media query hook (768px breakpoint) |

## Agent-Friendly Conventions

These conventions make the codebase easy for AI agents to navigate and modify:

1. **1 component = 1 file** — types, variants, component all in one file
2. **Named exports only** — no `export default`, enables reliable grep/refactor
3. **File name = component name** — `button.tsx` exports `function Button`
4. **Co-located stories** — `button.stories.tsx` next to `button.tsx`
5. **Explicit barrel exports** — `index.ts` lists every public export
6. **Max 2 levels of nesting** under `components/` (ui/, domain/, layout/)
7. **CLAUDE.md** in repo root with:
   - How to add a new component (template)
   - Naming conventions
   - Token usage patterns
   - Test/story requirements
8. **Self-contained files** — no implicit imports, all deps explicit at top

## Project Structure

```
visdom-design-system/
├── src/
│   ├── tokens/
│   │   ├── colors.ts
│   │   ├── typography.ts
│   │   ├── spacing.ts
│   │   └── index.ts
│   ├── styles/
│   │   └── globals.css          # CSS vars, @theme, dark mode
│   ├── lib/
│   │   ├── utils.ts             # cn()
│   │   └── hooks/
│   │       └── use-mobile.ts
│   ├── components/
│   │   ├── ui/                  # 13 base components + stories
│   │   │   ├── button.tsx
│   │   │   ├── button.stories.tsx
│   │   │   ├── ...
│   │   ├── domain/              # 14 domain components + stories
│   │   │   ├── stat-card.tsx
│   │   │   ├── stat-card.stories.tsx
│   │   │   ├── ...
│   │   └── layout/              # 5 layout components + stories
│   │       ├── nav.tsx
│   │       ├── nav.stories.tsx
│   │       ├── ...
│   └── index.ts                 # barrel: all public exports
├── .storybook/
│   ├── main.ts
│   └── preview.ts
├── CLAUDE.md                    # agent conventions
├── package.json
├── tsconfig.json
├── vite.config.ts
└── vitest.config.ts
```

## Migration Strategy

1. **Extract tokens** — unify color/typography definitions from all 3 projects into `src/tokens/` and `src/styles/globals.css`
2. **Port base components** — copy shadcn/ui components from maturity-matrix, apply unified tokens
3. **Convert domain components** — rewrite Astro components (main-page, code-review) as React, using base components where possible
4. **Add stories** — one story file per component with all variants
5. **Build & publish** — configure Vite library mode, publish as `@visdom/ui`
6. **Integrate** — update consumer projects to import from `@visdom/ui`
