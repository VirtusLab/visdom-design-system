# Visdom Design System

React component library (`@visdom/ui`) with Storybook.

## Commands

- `npm run dev` — Storybook dev server on :6006
- `npm run build` — Vite library build → dist/
- `npm run test` — Vitest
- `npm run lint` — TypeScript check

## Adding a Component

1. Create `src/components/{ui|domain|layout}/my-component.tsx`
2. Create `src/components/{ui|domain|layout}/my-component.stories.tsx` beside it
3. Export from `src/index.ts` (named export + type export)
4. Run `npm run dev` to verify in Storybook

## Conventions

- **1 component per file** — types, variants, component together
- **Named exports only** — no `export default`
- **File name = component name** — `button.tsx` → `export function Button`
- **Use `cn()` for class merging** — `import { cn } from "@/lib/utils"`
- **Use semantic tokens** — `text-foreground`, `bg-card`, `border-border` (not raw colors)
- **Domain colors via Tailwind** — `text-emerald-600`, `bg-blue-50` etc. for domain-specific variants
- **All components accept `className` prop** for consumer overrides
- **Types exported separately** — `export type { ButtonProps }` at end of file

## Structure

- `src/components/ui/` — base shadcn/ui components (Button, Card, Badge, etc.)
- `src/components/domain/` — Visdom-specific components (StatCard, Callout, Timeline, etc.)
- `src/components/layout/` — page structure (Nav, Footer, Section, DocLayout)
- `src/lib/` — utilities and hooks
- `src/styles/globals.css` — design tokens and theme
