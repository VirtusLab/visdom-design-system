# Visdom Design System Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build `@visdom/ui` — a React component library with Storybook, extracting and unifying components from visdom-main-page, visdom-code-review, and virtus-lab-ai-maturity-matrix.

**Architecture:** Flat npm package built with Vite library mode. React 19 + Tailwind CSS v4 + shadcn/ui base + domain components converted from Astro. Co-located stories. Named exports only.

**Tech Stack:** React 19, TypeScript, Tailwind CSS 4, Radix UI, CVA, clsx, tailwind-merge, lucide-react, framer-motion (peer), Storybook 8, Vite, Vitest

---

## File Map

```
visdom-design-system/
├── package.json
├── tsconfig.json
├── tsconfig.build.json
├── vite.config.ts
├── vitest.config.ts
├── CLAUDE.md
├── .storybook/
│   ├── main.ts
│   └── preview.ts
├── src/
│   ├── styles/
│   │   └── globals.css
│   ├── lib/
│   │   ├── utils.ts
│   │   └── hooks/
│   │       └── use-mobile.ts
│   ├── components/
│   │   ├── ui/
│   │   │   ├── button.tsx + button.stories.tsx
│   │   │   ├── card.tsx + card.stories.tsx
│   │   │   ├── badge.tsx + badge.stories.tsx
│   │   │   ├── input.tsx + input.stories.tsx
│   │   │   ├── separator.tsx + separator.stories.tsx
│   │   │   ├── skeleton.tsx + skeleton.stories.tsx
│   │   │   ├── progress.tsx + progress.stories.tsx
│   │   │   ├── tooltip.tsx + tooltip.stories.tsx
│   │   │   ├── collapsible.tsx + collapsible.stories.tsx
│   │   │   ├── scroll-area.tsx + scroll-area.stories.tsx
│   │   │   ├── sheet.tsx + sheet.stories.tsx
│   │   │   └── dropdown-menu.tsx + dropdown-menu.stories.tsx
│   │   ├── domain/
│   │   │   ├── stat-card.tsx + stat-card.stories.tsx
│   │   │   ├── callout.tsx + callout.stories.tsx
│   │   │   ├── persona-card.tsx + persona-card.stories.tsx
│   │   │   ├── resource-card.tsx + resource-card.stories.tsx
│   │   │   ├── before-after.tsx + before-after.stories.tsx
│   │   │   ├── impact-number.tsx + impact-number.stories.tsx
│   │   │   ├── layer-badge.tsx + layer-badge.stories.tsx
│   │   │   ├── timeline.tsx + timeline.stories.tsx
│   │   │   ├── hero-section.tsx + hero-section.stories.tsx
│   │   │   ├── solution-card.tsx + solution-card.stories.tsx
│   │   │   ├── cta-card.tsx + cta-card.stories.tsx
│   │   │   ├── terminal.tsx + terminal.stories.tsx
│   │   │   ├── level-card.tsx + level-card.stories.tsx
│   │   │   └── level-gate-card.tsx + level-gate-card.stories.tsx
│   │   └── layout/
│   │       ├── nav.tsx + nav.stories.tsx
│   │       ├── footer.tsx + footer.stories.tsx
│   │       ├── section.tsx + section.stories.tsx
│   │       └── doc-layout.tsx + doc-layout.stories.tsx
│   └── index.ts
```

---

### Task 1: Project Scaffolding

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `tsconfig.build.json`
- Create: `vite.config.ts`
- Create: `vitest.config.ts`

- [ ] **Step 1: Create package.json**

```json
{
  "name": "@visdom/ui",
  "version": "0.1.0",
  "type": "module",
  "main": "./dist/index.cjs",
  "module": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.js",
      "require": "./dist/index.cjs",
      "types": "./dist/index.d.ts"
    },
    "./styles.css": "./dist/styles.css"
  },
  "files": ["dist"],
  "sideEffects": ["*.css"],
  "scripts": {
    "dev": "storybook dev -p 6006",
    "build": "vite build && tsc -p tsconfig.build.json --emitDeclarationOnly",
    "build:storybook": "storybook build",
    "test": "vitest run",
    "test:watch": "vitest",
    "lint": "tsc --noEmit"
  },
  "peerDependencies": {
    "react": "^18.0.0 || ^19.0.0",
    "react-dom": "^18.0.0 || ^19.0.0",
    "framer-motion": "^11.0.0 || ^12.0.0"
  },
  "peerDependenciesMeta": {
    "framer-motion": { "optional": true }
  },
  "dependencies": {
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "lucide-react": "^0.576.0",
    "radix-ui": "^1.4.3",
    "tailwind-merge": "^3.5.0"
  },
  "devDependencies": {
    "@storybook/addon-essentials": "^8.6.0",
    "@storybook/react": "^8.6.0",
    "@storybook/react-vite": "^8.6.0",
    "@tailwindcss/vite": "^4",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "@vitejs/plugin-react": "^4.5.0",
    "framer-motion": "^12.34.4",
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "storybook": "^8.6.0",
    "tailwindcss": "^4",
    "tw-animate-css": "^1.4.0",
    "typescript": "^5",
    "vite": "^6",
    "vite-plugin-dts": "^4",
    "vitest": "^4"
  }
}
```

- [ ] **Step 2: Create tsconfig.json**

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "moduleResolution": "bundler",
    "jsx": "react-jsx",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true,
    "outDir": "./dist",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist", "**/*.stories.tsx", "**/*.test.tsx"]
}
```

- [ ] **Step 3: Create tsconfig.build.json**

```json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "declaration": true,
    "declarationDir": "./dist",
    "emitDeclarationOnly": true
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist", "**/*.stories.tsx", "**/*.test.tsx"]
}
```

- [ ] **Step 4: Create vite.config.ts**

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es", "cjs"],
      fileName: "index",
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "framer-motion",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    cssCodeSplit: false,
  },
});
```

- [ ] **Step 5: Create vitest.config.ts**

```ts
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  test: {
    environment: "jsdom",
    globals: true,
  },
});
```

- [ ] **Step 6: Install dependencies**

Run: `cd /Users/askowronski/Projects/visdom-design-system && npm install`
Expected: node_modules created, no errors

- [ ] **Step 7: Verify TypeScript compiles**

Run: `cd /Users/askowronski/Projects/visdom-design-system && npx tsc --noEmit`
Expected: may warn about no input files (ok, src/ is empty)

- [ ] **Step 8: Commit**

```bash
git init
git add package.json tsconfig.json tsconfig.build.json vite.config.ts vitest.config.ts package-lock.json
git commit -m "chore: scaffold project with Vite, TypeScript, Storybook, Vitest"
```

---

### Task 2: Storybook Configuration

**Files:**
- Create: `.storybook/main.ts`
- Create: `.storybook/preview.ts`

- [ ] **Step 1: Create .storybook/main.ts**

```ts
import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-essentials"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};

export default config;
```

- [ ] **Step 2: Create .storybook/preview.ts**

```ts
import type { Preview } from "@storybook/react";
import "../src/styles/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
```

- [ ] **Step 3: Commit**

```bash
git add .storybook/
git commit -m "chore: configure Storybook 8 with Vite"
```

---

### Task 3: Design Tokens & Global Styles

**Files:**
- Create: `src/styles/globals.css`

- [ ] **Step 1: Create src/styles/globals.css**

This unifies tokens from all three projects. Uses shadcn/ui's CSS variable pattern (from maturity-matrix) as the canonical format since base components depend on it.

```css
@import "tailwindcss";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark *));

@theme inline {
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --radius-2xl: calc(var(--radius) + 8px);

  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);

  /* Visdom extended palette — used by domain components */
  --color-visdom-green: var(--visdom-green);
  --color-visdom-green-light: var(--visdom-green-light);
  --color-visdom-green-dark: var(--visdom-green-dark);
  --color-visdom-blue: var(--visdom-blue);
  --color-visdom-purple: var(--visdom-purple);
  --color-visdom-amber: var(--visdom-amber);

  --font-heading: 'Montserrat', sans-serif;
  --font-body: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}

:root {
  --radius: 0.625rem;

  /* shadcn semantic tokens — emerald primary */
  --background: oklch(0.93 0.005 250);
  --foreground: oklch(0.15 0.005 250);
  --card: oklch(0.97 0.003 250);
  --card-foreground: oklch(0.15 0.005 250);
  --popover: oklch(0.97 0.003 250);
  --popover-foreground: oklch(0.15 0.005 250);
  --primary: oklch(0.62 0.17 155);
  --primary-foreground: oklch(1 0 0);
  --secondary: oklch(0.94 0.005 250);
  --secondary-foreground: oklch(0.25 0.01 250);
  --muted: oklch(0.94 0.004 250);
  --muted-foreground: oklch(0.5 0.01 250);
  --accent: oklch(0.94 0.005 155);
  --accent-foreground: oklch(0.25 0.01 155);
  --destructive: oklch(0.577 0.245 27.325);
  --border: oklch(0.88 0.006 250);
  --input: oklch(0.88 0.006 250);
  --ring: oklch(0.62 0.17 155);
  --chart-1: oklch(0.62 0.17 155);
  --chart-2: oklch(0.55 0.15 200);
  --chart-3: oklch(0.5 0.12 260);
  --chart-4: oklch(0.75 0.15 85);
  --chart-5: oklch(0.65 0.2 30);
  --sidebar: oklch(0.94 0.005 250);
  --sidebar-foreground: oklch(0.15 0.005 250);
  --sidebar-primary: oklch(0.62 0.17 155);
  --sidebar-primary-foreground: oklch(1 0 0);
  --sidebar-accent: oklch(0.94 0.005 155);
  --sidebar-accent-foreground: oklch(0.25 0.01 155);
  --sidebar-border: oklch(0.88 0.006 250);
  --sidebar-ring: oklch(0.62 0.17 155);

  /* Visdom extended palette */
  --visdom-green: #10b981;
  --visdom-green-light: #ecfdf5;
  --visdom-green-dark: #059669;
  --visdom-blue: #0693e3;
  --visdom-purple: #9b51e0;
  --visdom-amber: #f59e0b;
}

.dark {
  --background: oklch(0.13 0.005 260);
  --foreground: oklch(0.93 0.005 250);
  --card: oklch(0.17 0.008 260);
  --card-foreground: oklch(0.93 0.005 250);
  --popover: oklch(0.17 0.008 260);
  --popover-foreground: oklch(0.93 0.005 250);
  --primary: oklch(0.72 0.19 155);
  --primary-foreground: oklch(0.13 0.005 260);
  --secondary: oklch(0.21 0.01 260);
  --secondary-foreground: oklch(0.93 0.005 250);
  --muted: oklch(0.21 0.01 260);
  --muted-foreground: oklch(0.6 0.01 250);
  --accent: oklch(0.21 0.01 260);
  --accent-foreground: oklch(0.93 0.005 250);
  --destructive: oklch(0.704 0.191 22.216);
  --border: oklch(1 0 0 / 10%);
  --input: oklch(1 0 0 / 15%);
  --ring: oklch(0.72 0.19 155);
  --chart-1: oklch(0.72 0.19 155);
  --chart-2: oklch(0.55 0.15 200);
  --chart-3: oklch(0.65 0.15 85);
  --chart-4: oklch(0.5 0.12 260);
  --chart-5: oklch(0.65 0.2 30);
  --sidebar: oklch(0.15 0.008 260);
  --sidebar-foreground: oklch(0.93 0.005 250);
  --sidebar-primary: oklch(0.72 0.19 155);
  --sidebar-primary-foreground: oklch(0.13 0.005 260);
  --sidebar-accent: oklch(0.21 0.01 260);
  --sidebar-accent-foreground: oklch(0.93 0.005 250);
  --sidebar-border: oklch(1 0 0 / 10%);
  --sidebar-ring: oklch(0.72 0.19 155);

  --visdom-green: #34d399;
  --visdom-green-light: #064e3b;
  --visdom-green-dark: #6ee7b7;
  --visdom-blue: #38bdf8;
  --visdom-purple: #c084fc;
  --visdom-amber: #fbbf24;
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
    font-family: var(--font-body);
  }
  h1, h2, h3 {
    font-family: var(--font-heading);
  }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

- [ ] **Step 2: Commit**

```bash
git add src/styles/globals.css
git commit -m "feat: add unified design tokens and global styles"
```

---

### Task 4: Utility Functions

**Files:**
- Create: `src/lib/utils.ts`
- Create: `src/lib/hooks/use-mobile.ts`

- [ ] **Step 1: Create src/lib/utils.ts**

```ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

- [ ] **Step 2: Create src/lib/hooks/use-mobile.ts**

```ts
import * as React from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(
    undefined
  );

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return !!isMobile;
}
```

- [ ] **Step 3: Commit**

```bash
git add src/lib/
git commit -m "feat: add cn() utility and useIsMobile hook"
```

---

### Task 5: Base UI Components — Simple (Button, Card, Badge, Input, Separator, Skeleton, Progress)

These are direct ports from maturity-matrix with `@/` alias preserved (Vite resolves it).

**Files:**
- Create: `src/components/ui/button.tsx`
- Create: `src/components/ui/card.tsx`
- Create: `src/components/ui/badge.tsx`
- Create: `src/components/ui/input.tsx`
- Create: `src/components/ui/separator.tsx`
- Create: `src/components/ui/skeleton.tsx`
- Create: `src/components/ui/progress.tsx`

- [ ] **Step 1: Create src/components/ui/button.tsx**

Copy from `/Users/askowronski/Projects/virtus-lab-ai-maturity-matrix/src/components/ui/button.tsx` — no changes needed, `@/lib/utils` resolves via Vite alias.

```tsx
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:bg-destructive/60 dark:focus-visible:ring-destructive/40",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        xs: "h-6 gap-1 rounded-md px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-xs": "size-6 rounded-md [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
```

- [ ] **Step 2: Create src/components/ui/card.tsx**

Copy from maturity-matrix — no changes needed.

```tsx
import * as React from "react";

import { cn } from "@/lib/utils";

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "flex flex-col gap-6 rounded-xl border bg-card py-6 text-card-foreground shadow-sm",
        className
      )}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};
```

- [ ] **Step 3: Create src/components/ui/badge.tsx**

Copy from maturity-matrix — no changes needed.

```tsx
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary:
          "bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive:
          "bg-destructive text-white focus-visible:ring-destructive/20 dark:bg-destructive/60 dark:focus-visible:ring-destructive/40 [a&]:hover:bg-destructive/90",
        outline:
          "border-border text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
        ghost:
          "[a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
        link: "text-primary underline-offset-4 [a&]:hover:underline",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({
  className,
  variant = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "span";

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
```

- [ ] **Step 4: Create remaining simple components**

Create `src/components/ui/input.tsx`, `separator.tsx`, `skeleton.tsx`, `progress.tsx` — direct copies from maturity-matrix source. Each file is identical to the source at `/Users/askowronski/Projects/virtus-lab-ai-maturity-matrix/src/components/ui/`.

Key: remove any `"use client"` directives (not needed for a library package, consumers handle this). Exception: keep `"use client"` for components using Radix primitives that need it (Separator, Progress).

- [ ] **Step 5: Commit**

```bash
git add src/components/ui/
git commit -m "feat: add base UI components (button, card, badge, input, separator, skeleton, progress)"
```

---

### Task 6: Base UI Components — Complex (Tooltip, Collapsible, ScrollArea, Sheet, DropdownMenu)

**Files:**
- Create: `src/components/ui/tooltip.tsx`
- Create: `src/components/ui/collapsible.tsx`
- Create: `src/components/ui/scroll-area.tsx`
- Create: `src/components/ui/sheet.tsx`
- Create: `src/components/ui/dropdown-menu.tsx`

- [ ] **Step 1: Create all five components**

Direct copies from maturity-matrix. Each file at `/Users/askowronski/Projects/virtus-lab-ai-maturity-matrix/src/components/ui/`. No changes needed — imports use `@/` which Vite resolves, and internal imports reference sibling components (e.g., Sheet imports XIcon from lucide-react).

- [ ] **Step 2: Verify no broken imports**

Run: `cd /Users/askowronski/Projects/visdom-design-system && npx tsc --noEmit`
Expected: PASS (no type errors)

- [ ] **Step 3: Commit**

```bash
git add src/components/ui/
git commit -m "feat: add complex UI components (tooltip, collapsible, scroll-area, sheet, dropdown-menu)"
```

---

### Task 7: Domain Components — Code Review (StatCard, Callout, PersonaCard, ResourceCard, BeforeAfter, ImpactNumber, LayerBadge)

Convert Astro components from visdom-code-review to React.

**Files:**
- Create: `src/components/domain/stat-card.tsx`
- Create: `src/components/domain/callout.tsx`
- Create: `src/components/domain/persona-card.tsx`
- Create: `src/components/domain/resource-card.tsx`
- Create: `src/components/domain/before-after.tsx`
- Create: `src/components/domain/impact-number.tsx`
- Create: `src/components/domain/layer-badge.tsx`

- [ ] **Step 1: Create src/components/domain/stat-card.tsx**

```tsx
import { cn } from "@/lib/utils";

type StatCardColor = "green" | "blue" | "amber" | "red" | "purple";

interface StatCardProps {
  value: string;
  label: string;
  source: string;
  color: StatCardColor;
  className?: string;
}

const colorMap: Record<StatCardColor, { bg: string; border: string; text: string }> = {
  green: { bg: "bg-emerald-50", border: "border-emerald-500", text: "text-emerald-600" },
  blue: { bg: "bg-blue-50", border: "border-blue-500", text: "text-blue-600" },
  amber: { bg: "bg-amber-50", border: "border-amber-500", text: "text-amber-600" },
  red: { bg: "bg-red-50", border: "border-red-500", text: "text-red-600" },
  purple: { bg: "bg-purple-50", border: "border-purple-500", text: "text-purple-600" },
};

function StatCard({ value, label, source, color, className }: StatCardProps) {
  const c = colorMap[color];
  return (
    <div className={cn("rounded-lg p-5 border-l-4", c.bg, c.border, className)}>
      <div className={cn("text-3xl font-bold mb-1", c.text)}>{value}</div>
      <div className="text-sm text-gray-600 line-clamp-3">{label}</div>
      <div className="text-xs text-gray-400 italic mt-2">{source}</div>
    </div>
  );
}

export { StatCard };
export type { StatCardProps, StatCardColor };
```

- [ ] **Step 2: Create src/components/domain/callout.tsx**

```tsx
import * as React from "react";
import { cn } from "@/lib/utils";

type CalloutType = "info" | "warning" | "tip" | "reference";

interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const styles: Record<CalloutType, string> = {
  info: "bg-blue-50 border-blue-200 text-blue-800",
  warning: "bg-amber-50 border-amber-200 text-amber-800",
  tip: "bg-emerald-50 border-emerald-200 text-emerald-800",
  reference: "bg-gray-50 border-gray-200 text-gray-700",
};

const icons: Record<CalloutType, string> = {
  info: "\u{1F4A1}",
  warning: "\u26A0\uFE0F",
  tip: "\u2705",
  reference: "\u{1F4E6}",
};

function Callout({ type = "info", title, children, className }: CalloutProps) {
  return (
    <div className={cn("rounded-lg border p-4 mb-6", styles[type], className)}>
      {title && (
        <p className="font-semibold text-sm mb-1">
          {icons[type]} {title}
        </p>
      )}
      <div className="text-sm">{children}</div>
    </div>
  );
}

export { Callout };
export type { CalloutProps, CalloutType };
```

- [ ] **Step 3: Create src/components/domain/persona-card.tsx**

```tsx
import * as React from "react";
import { cn } from "@/lib/utils";

type PersonaCardColor = "green" | "blue" | "purple" | "amber" | "red";

interface PersonaCardProps {
  name: string;
  role: string;
  color?: PersonaCardColor;
  children: React.ReactNode;
  className?: string;
}

const borderColors: Record<PersonaCardColor, string> = {
  green: "border-l-emerald-500",
  blue: "border-l-blue-500",
  purple: "border-l-purple-500",
  amber: "border-l-amber-500",
  red: "border-l-red-500",
};

const badgeColors: Record<PersonaCardColor, string> = {
  green: "bg-emerald-100 text-emerald-700",
  blue: "bg-blue-100 text-blue-700",
  purple: "bg-purple-100 text-purple-700",
  amber: "bg-amber-100 text-amber-700",
  red: "bg-red-100 text-red-700",
};

function PersonaCard({
  name,
  role,
  color = "green",
  children,
  className,
}: PersonaCardProps) {
  return (
    <div
      className={cn(
        "bg-card border border-border border-l-4 rounded-lg p-5 mb-5",
        borderColors[color],
        className
      )}
    >
      <div className="flex items-center gap-2.5 mb-3">
        <span className="font-bold text-foreground text-sm">{name}</span>
        <span
          className={cn(
            "text-xs px-2.5 py-0.5 rounded-full font-medium",
            badgeColors[color]
          )}
        >
          {role}
        </span>
      </div>
      <div className="text-sm text-muted-foreground leading-relaxed">
        {children}
      </div>
    </div>
  );
}

export { PersonaCard };
export type { PersonaCardProps, PersonaCardColor };
```

- [ ] **Step 4: Create src/components/domain/resource-card.tsx**

```tsx
import { cn } from "@/lib/utils";

type ResourceCardColor = "green" | "blue" | "amber" | "red" | "purple";

interface ResourceCardProps {
  title: string;
  description: string;
  href: string;
  tag?: string;
  tagColor?: ResourceCardColor;
  source?: string;
  className?: string;
}

const tagColors: Record<ResourceCardColor, string> = {
  green: "bg-emerald-100 text-emerald-700 border-emerald-200",
  blue: "bg-blue-100 text-blue-700 border-blue-200",
  amber: "bg-amber-100 text-amber-700 border-amber-200",
  red: "bg-red-100 text-red-700 border-red-200",
  purple: "bg-purple-100 text-purple-700 border-purple-200",
};

const topColors: Record<ResourceCardColor, string> = {
  green: "border-t-emerald-500",
  blue: "border-t-blue-500",
  amber: "border-t-amber-500",
  red: "border-t-red-500",
  purple: "border-t-purple-500",
};

function ResourceCard({
  title,
  description,
  href,
  tag,
  tagColor = "green",
  source,
  className,
}: ResourceCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "block bg-card border border-border border-t-2 rounded-lg p-5 hover:shadow-md transition-shadow no-underline group",
        topColors[tagColor],
        className
      )}
    >
      {tag && (
        <span
          className={cn(
            "inline-block text-xs px-2 py-0.5 rounded border font-medium mb-2",
            tagColors[tagColor]
          )}
        >
          {tag}
        </span>
      )}
      <h4 className="text-sm font-semibold text-foreground group-hover:text-primary mb-1.5">
        {title}
      </h4>
      <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
        {description}
      </p>
      {source && (
        <p className="text-xs text-muted-foreground/60 mt-3">{source}</p>
      )}
    </a>
  );
}

export { ResourceCard };
export type { ResourceCardProps, ResourceCardColor };
```

- [ ] **Step 5: Create src/components/domain/before-after.tsx**

```tsx
import * as React from "react";
import { cn } from "@/lib/utils";

interface Impact {
  before: string;
  after: string;
  label: string;
}

interface BeforeAfterProps {
  title: string;
  impacts?: Impact[];
  before: React.ReactNode;
  after: React.ReactNode;
  className?: string;
}

function BeforeAfter({
  title,
  impacts,
  before,
  after,
  className,
}: BeforeAfterProps) {
  return (
    <div className={cn("mb-8", className)}>
      <h3 className="font-semibold text-lg mb-3">{title}</h3>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="border border-red-200 bg-red-50/50 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-red-100 text-red-700">
              BEFORE
            </span>
          </div>
          <div className="text-sm text-muted-foreground">{before}</div>
        </div>
        <div className="border border-emerald-200 bg-emerald-50/50 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-emerald-100 text-emerald-700">
              AFTER
            </span>
          </div>
          <div className="text-sm text-muted-foreground">{after}</div>
        </div>
      </div>
      {impacts && impacts.length > 0 && (
        <div className="flex flex-wrap gap-6 mt-4 pt-4 border-t border-border">
          {impacts.map((impact, i) => (
            <div key={i} className="text-center">
              <div className="flex items-center gap-2 justify-center">
                <span className="text-base line-through text-red-400">
                  {impact.before}
                </span>
                <span className="text-muted-foreground">&rarr;</span>
                <span className="text-xl font-bold text-emerald-600">
                  {impact.after}
                </span>
              </div>
              <span className="text-xs text-muted-foreground">
                {impact.label}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export { BeforeAfter };
export type { BeforeAfterProps, Impact };
```

- [ ] **Step 6: Create src/components/domain/impact-number.tsx**

```tsx
import { cn } from "@/lib/utils";

interface ImpactNumberProps {
  before: string;
  after: string;
  label: string;
  className?: string;
}

function ImpactNumber({ before, after, label, className }: ImpactNumberProps) {
  return (
    <div className={cn("inline-flex flex-col items-center", className)}>
      <div className="inline-flex items-center gap-2">
        <span className="text-lg line-through text-red-400">{before}</span>
        <span className="text-muted-foreground">&rarr;</span>
        <span className="text-2xl font-bold text-emerald-600">{after}</span>
      </div>
      <span className="text-xs text-muted-foreground mt-1">{label}</span>
    </div>
  );
}

export { ImpactNumber };
export type { ImpactNumberProps };
```

- [ ] **Step 7: Create src/components/domain/layer-badge.tsx**

```tsx
import { cn } from "@/lib/utils";

type LayerLevel = 0 | 1 | 2 | 3;

interface LayerBadgeProps {
  layer: LayerLevel;
  label?: string;
  className?: string;
}

const colors: Record<LayerLevel, string> = {
  0: "bg-gray-100 text-gray-700 border-gray-300",
  1: "bg-blue-100 text-blue-700 border-blue-300",
  2: "bg-amber-100 text-amber-700 border-amber-300",
  3: "bg-purple-100 text-purple-700 border-purple-300",
};

const labels: Record<LayerLevel, string> = {
  0: "Layer 0: Context",
  1: "Layer 1: Deterministic",
  2: "Layer 2: AI Quick Scan",
  3: "Layer 3: AI Deep Review",
};

function LayerBadge({ layer, label, className }: LayerBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border",
        colors[layer],
        className
      )}
    >
      {label || labels[layer]}
    </span>
  );
}

export { LayerBadge };
export type { LayerBadgeProps, LayerLevel };
```

- [ ] **Step 8: Commit**

```bash
git add src/components/domain/
git commit -m "feat: add domain components from code-review (stat-card, callout, persona-card, resource-card, before-after, impact-number, layer-badge)"
```

---

### Task 8: Domain Components — Main Page & Timeline (HeroSection, SolutionCard, CtaCard, Terminal, Timeline)

**Files:**
- Create: `src/components/domain/hero-section.tsx`
- Create: `src/components/domain/solution-card.tsx`
- Create: `src/components/domain/cta-card.tsx`
- Create: `src/components/domain/terminal.tsx`
- Create: `src/components/domain/timeline.tsx`

- [ ] **Step 1: Create src/components/domain/hero-section.tsx**

Merged concept from both main-page Hero and code-review HeroSection. Flexible props, no hardcoded data.

```tsx
import * as React from "react";
import { cn } from "@/lib/utils";

interface HeroStat {
  value: string;
  label: string;
  detail?: string;
}

interface HeroAction {
  label: string;
  href: string;
  variant?: "primary" | "outline";
  external?: boolean;
}

interface HeroSectionProps {
  title: string;
  subtitle: string;
  badge?: string;
  stats?: HeroStat[];
  actions?: HeroAction[];
  variant?: "light" | "dark";
  className?: string;
}

function HeroSection({
  title,
  subtitle,
  badge,
  stats,
  actions,
  variant = "light",
  className,
}: HeroSectionProps) {
  const isDark = variant === "dark";

  return (
    <section
      className={cn(
        "py-16 px-6",
        isDark
          ? "bg-gradient-to-b from-gray-900 to-gray-800"
          : "pt-40 pb-24",
        className
      )}
    >
      <div className={cn("max-w-5xl mx-auto", !isDark && "max-w-3xl")}>
        {badge && (
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium mb-8">
            {badge}
          </div>
        )}
        <h1
          className={cn(
            "text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 leading-tight",
            isDark ? "text-white" : "text-foreground"
          )}
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {title}
        </h1>
        <p
          className={cn(
            "text-lg max-w-2xl mb-10",
            isDark ? "text-gray-300" : "text-muted-foreground"
          )}
        >
          {subtitle}
        </p>

        {actions && actions.length > 0 && (
          <div className="flex flex-wrap gap-4 mb-10">
            {actions.map((action, i) => (
              <a
                key={i}
                href={action.href}
                className={cn(
                  "inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold transition-all",
                  action.variant === "outline"
                    ? "border border-border text-foreground hover:border-primary hover:text-primary"
                    : "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md"
                )}
                {...(action.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {action.label}
              </a>
            ))}
          </div>
        )}

        {stats && stats.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={cn(
                  "rounded-lg border p-5",
                  isDark
                    ? "bg-white/10 backdrop-blur border-white/20"
                    : "bg-card border-border"
                )}
              >
                <div
                  className={cn(
                    "text-3xl font-bold mb-1",
                    isDark ? "text-white" : "text-foreground"
                  )}
                >
                  {stat.value}
                </div>
                <div
                  className={cn(
                    "text-sm",
                    isDark ? "text-gray-300" : "text-muted-foreground"
                  )}
                >
                  {stat.label}
                </div>
                {stat.detail && (
                  <div
                    className={cn(
                      "text-xs mt-1",
                      isDark ? "text-gray-400" : "text-muted-foreground/60"
                    )}
                  >
                    {stat.detail}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export { HeroSection };
export type { HeroSectionProps, HeroStat, HeroAction };
```

- [ ] **Step 2: Create src/components/domain/solution-card.tsx**

```tsx
import * as React from "react";
import { cn } from "@/lib/utils";

type TagColor = "emerald" | "blue" | "purple" | "amber";

interface SolutionCardTag {
  label: string;
  color: TagColor;
}

interface SolutionCardCta {
  label: string;
  href: string;
  external?: boolean;
}

interface SolutionCardProps {
  title: string;
  subtitle: string;
  problem: string;
  capabilities: string[];
  tags: SolutionCardTag[];
  ctas: SolutionCardCta[];
  metric?: { lines: string[] };
  children?: React.ReactNode;
  className?: string;
}

const tagColorMap: Record<TagColor, string> = {
  emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  blue: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  purple: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  amber: "bg-amber-500/10 text-amber-400 border-amber-500/20",
};

function SolutionCard({
  title,
  subtitle,
  problem,
  capabilities,
  tags,
  ctas,
  metric,
  children,
  className,
}: SolutionCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 bg-gray-900/80 backdrop-blur p-8",
        className
      )}
    >
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, i) => (
          <span
            key={i}
            className={cn(
              "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border",
              tagColorMap[tag.color]
            )}
          >
            {tag.label}
          </span>
        ))}
      </div>

      <h4
        className="text-xl font-bold text-white mb-1"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {title}
      </h4>
      <p className="text-sm text-white/40 mb-4">{subtitle}</p>

      <blockquote className="text-sm text-white/60 italic border-l-2 border-emerald-500/30 pl-4 mb-5">
        {problem}
      </blockquote>

      <ul className="space-y-2 mb-5">
        {capabilities.map((cap, i) => (
          <li
            key={i}
            className="flex items-start gap-2 text-sm text-white/70"
          >
            <span className="text-emerald-400 mt-0.5 shrink-0">
              &#x25B8;
            </span>
            {cap}
          </li>
        ))}
      </ul>

      {metric && (
        <div className="rounded-lg bg-white/[0.02] border border-white/5 p-4 mb-5">
          {metric.lines.map((line, i) => (
            <p key={i} className="text-sm text-white/50">
              {line}
            </p>
          ))}
        </div>
      )}

      {children}

      <div className="flex flex-wrap gap-3 mt-5">
        {ctas.map((cta, i) => (
          <a
            key={i}
            href={cta.href}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold border border-white/20 text-white/80 hover:border-emerald-400 hover:text-emerald-400 transition-colors"
            {...(cta.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            {cta.label} &rarr;
          </a>
        ))}
      </div>
    </div>
  );
}

export { SolutionCard };
export type { SolutionCardProps, SolutionCardTag, SolutionCardCta, TagColor };
```

- [ ] **Step 3: Create src/components/domain/cta-card.tsx**

Extracted from CtaSection — individual card, not the section wrapper.

```tsx
import { cn } from "@/lib/utils";

interface CtaCardProps {
  icon: string;
  title: string;
  description: string;
  href: string;
  external?: boolean;
  highlighted?: boolean;
  className?: string;
}

function CtaCard({
  icon,
  title,
  description,
  href,
  external = false,
  highlighted = false,
  className,
}: CtaCardProps) {
  return (
    <a
      href={href}
      className={cn(
        "block rounded-2xl border bg-card p-8 text-center transition-all hover:border-primary hover:shadow-lg hover:-translate-y-0.5",
        highlighted ? "border-primary/30" : "border-border",
        className
      )}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      <div className="text-3xl mb-4">{icon}</div>
      <div
        className={cn(
          "text-base font-semibold mb-2",
          highlighted ? "text-primary" : "text-foreground"
        )}
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {title}
      </div>
      <div className="text-sm text-muted-foreground">{description}</div>
    </a>
  );
}

export { CtaCard };
export type { CtaCardProps };
```

- [ ] **Step 4: Create src/components/domain/terminal.tsx**

```tsx
import * as React from "react";
import { cn } from "@/lib/utils";

interface TerminalProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

function Terminal({ title = "Terminal", children, className }: TerminalProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-gray-700 bg-[#1a1b2e] p-4 overflow-x-auto",
        className
      )}
      style={{ fontFamily: "var(--font-mono)", fontSize: "13px", lineHeight: 1.6 }}
    >
      <div className="flex items-center gap-1.5 mb-3 pb-3 border-b border-white/10">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        <span className="ml-2 text-xs text-white/40">{title}</span>
      </div>
      <pre className="text-white/80 whitespace-pre-wrap">{children}</pre>
    </div>
  );
}

export { Terminal };
export type { TerminalProps };
```

- [ ] **Step 5: Create src/components/domain/timeline.tsx**

```tsx
import { cn } from "@/lib/utils";

interface TimelineStep {
  number: number;
  title: string;
  duration?: string;
  description: string;
}

interface TimelineProps {
  steps: TimelineStep[];
  className?: string;
}

function Timeline({ steps, className }: TimelineProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Desktop: horizontal */}
      <div className="hidden md:flex items-start justify-between relative">
        <div className="absolute top-5 left-[calc(12.5%)] right-[calc(12.5%)] h-px bg-gray-300 z-0" />
        {steps.map((step) => (
          <div
            key={step.number}
            className="relative z-10 flex flex-col items-center text-center px-3"
            style={{ width: `${100 / steps.length}%` }}
          >
            <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm mb-3">
              {step.number}
            </div>
            <div className="font-bold text-foreground text-sm mb-1">
              {step.title}
            </div>
            {step.duration && (
              <div className="text-xs text-primary font-medium mb-1">
                {step.duration}
              </div>
            )}
            <div className="text-sm text-muted-foreground">
              {step.description}
            </div>
          </div>
        ))}
      </div>

      {/* Mobile: vertical */}
      <div className="flex md:hidden relative">
        <div className="absolute left-5 top-5 bottom-5 w-px bg-gray-300 z-0" />
        <div className="flex flex-col gap-8">
          {steps.map((step) => (
            <div key={step.number} className="relative z-10 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shrink-0">
                {step.number}
              </div>
              <div>
                <div className="font-bold text-foreground text-sm">
                  {step.title}
                </div>
                {step.duration && (
                  <div className="text-xs text-primary font-medium">
                    {step.duration}
                  </div>
                )}
                <div className="text-sm text-muted-foreground mt-0.5">
                  {step.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export { Timeline };
export type { TimelineProps, TimelineStep };
```

- [ ] **Step 6: Commit**

```bash
git add src/components/domain/
git commit -m "feat: add domain components (hero-section, solution-card, cta-card, terminal, timeline)"
```

---

### Task 9: Domain Components — Maturity Matrix (LevelCard, LevelGateCard)

These need adaptation: replace Next.js `Link` with generic `<a>`, remove `next/link` import.

**Files:**
- Create: `src/components/domain/level-card.tsx`
- Create: `src/components/domain/level-gate-card.tsx`

- [ ] **Step 1: Create src/components/domain/level-gate-card.tsx**

```tsx
"use client";

import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface MaturityGate {
  must: string[];
  should: string[];
  prerequisites: { label: string; href?: string }[];
  evidence: string[];
}

type Variant = "full" | "compact" | "minimal";

interface LevelGateCardProps {
  gate: MaturityGate;
  level: number;
  levelName: string;
  perspective: string;
  variant?: Variant;
  className?: string;
}

const PERSPECTIVE_COLORS: Record<
  string,
  { border: string; text: string; bg: string }
> = {
  development: {
    border: "border-l-blue-500",
    text: "text-blue-500",
    bg: "bg-blue-500/5",
  },
  delivery: {
    border: "border-l-orange-500",
    text: "text-orange-500",
    bg: "bg-orange-500/5",
  },
  infrastructure: {
    border: "border-l-cyan-500",
    text: "text-cyan-500",
    bg: "bg-cyan-500/5",
  },
  organization: {
    border: "border-l-purple-500",
    text: "text-purple-500",
    bg: "bg-purple-500/5",
  },
};

function LevelGateCard({
  gate,
  perspective,
  variant = "full",
  className,
}: LevelGateCardProps) {
  const colors =
    PERSPECTIVE_COLORS[perspective] ?? PERSPECTIVE_COLORS.development;

  const hasShould = variant === "full" && gate.should.length > 0;
  const hasPrereqs = gate.prerequisites.some((p) => p.href);
  const hasEvidence = variant !== "minimal" && gate.evidence.length > 0;
  const hasRight = hasEvidence;

  return (
    <div
      className={cn(
        "rounded-lg border-l-4 border border-border mb-6 p-3",
        colors.border,
        colors.bg,
        className
      )}
    >
      <div
        className={cn(
          hasRight && "md:grid md:grid-cols-[1fr,1fr] md:gap-4"
        )}
      >
        <div className="space-y-2">
          <ul className="space-y-1">
            {gate.must.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-foreground/80"
              >
                <span className={cn("shrink-0 mt-1", colors.text)}>
                  &middot;
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {hasShould && (
            <ul className="space-y-1">
              {gate.should.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <span className="shrink-0 mt-1">&middot;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}

          {hasPrereqs && (
            <ul className="space-y-1">
              {gate.prerequisites.map((prereq, i) =>
                prereq.href ? (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-amber-600 dark:text-amber-400"
                  >
                    <ArrowRight className="w-3 h-3 shrink-0 mt-1" />
                    <a
                      href={prereq.href}
                      className="hover:text-foreground transition-colors underline underline-offset-2"
                    >
                      Requires {prereq.label}
                    </a>
                  </li>
                ) : null
              )}
            </ul>
          )}
        </div>

        {hasRight && (
          <div className="mt-2 md:mt-0 md:border-l md:border-border/50 md:pl-4">
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground/50 mb-1">
              Evidence
            </p>
            <ul className="space-y-1">
              {gate.evidence.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-muted-foreground/60 italic"
                >
                  <span className="shrink-0 mt-1">&middot;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export { LevelGateCard };
export type { LevelGateCardProps, MaturityGate };
```

- [ ] **Step 2: Create src/components/domain/level-card.tsx**

Key changes from maturity-matrix source: replace `next/link` with `<a>`, replace `MatrixItem`/`MaturityGate` imports with local interfaces, use `LevelGateCard` from sibling.

```tsx
"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { LevelGateCard, type MaturityGate } from "./level-gate-card";

interface MatrixItem {
  text: string;
  guideSlug?: string;
}

interface GuideInfo {
  title: string;
  summary: string;
  href: string;
}

const LEVEL_COLORS: Record<number, string> = {
  1: "from-zinc-500/15 to-zinc-500/5 text-zinc-500 border-zinc-500/20",
  2: "from-teal-600/15 to-teal-600/5 text-teal-600 border-teal-600/20",
  3: "from-emerald-600/15 to-emerald-600/5 text-emerald-600 border-emerald-600/20",
  4: "from-green-500/15 to-green-500/5 text-green-500 border-green-500/20",
  5: "from-green-400/15 to-green-400/5 text-green-400 border-green-400/20",
};

const LEVEL_HOVER_GLOW: Record<number, string> = {
  1: "hover:shadow-zinc-500/10",
  2: "hover:shadow-teal-600/10",
  3: "hover:shadow-emerald-600/10",
  4: "hover:shadow-green-500/10",
  5: "hover:shadow-green-400/10",
};

const LEVEL_BADGE_COLORS: Record<number, string> = {
  1: "bg-zinc-500",
  2: "bg-teal-600",
  3: "bg-emerald-600",
  4: "bg-green-500",
  5: "bg-green-400",
};

interface LevelCardProps {
  level: number;
  name: string;
  items: MatrixItem[];
  perspective?: string;
  guides?: Record<string, GuideInfo>;
  gate?: MaturityGate | null;
  className?: string;
}

function LevelCard({
  level,
  name,
  items,
  perspective,
  guides,
  gate,
  className,
}: LevelCardProps) {
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);

  return (
    <div
      className={cn(
        "rounded-lg border p-4 bg-gradient-to-r transition-all duration-200 hover:scale-[1.01] hover:shadow-lg",
        LEVEL_COLORS[level],
        LEVEL_HOVER_GLOW[level],
        className
      )}
    >
      <div className="flex items-center gap-2 mb-3">
        <Badge
          className={cn(
            "text-white text-xs font-bold",
            LEVEL_BADGE_COLORS[level]
          )}
        >
          L{level}
        </Badge>
        <span className="text-sm font-medium">{name}</span>
        <span className="ml-auto text-[10px] text-muted-foreground">
          {items.length} practices
        </span>
      </div>
      <ul className="space-y-1">
        {items.map((item, i) => {
          const hasGuide =
            item.guideSlug && perspective && guides?.[item.guideSlug];
          const isExpanded = expandedSlug === item.guideSlug;
          const guide = item.guideSlug
            ? guides?.[item.guideSlug]
            : undefined;

          return (
            <li key={i}>
              <button
                type="button"
                className={cn(
                  "w-full text-left text-sm flex items-start gap-2 rounded px-1 py-0.5 -mx-1",
                  hasGuide &&
                    "cursor-pointer hover:bg-foreground/5 transition-colors",
                  !hasGuide && "cursor-default"
                )}
                onClick={() => {
                  if (!hasGuide) return;
                  setExpandedSlug(
                    isExpanded ? null : item.guideSlug!
                  );
                }}
                disabled={!hasGuide}
              >
                {hasGuide ? (
                  <ChevronRight
                    className={cn(
                      "h-4 w-4 mt-0.5 shrink-0 transition-transform duration-200",
                      isExpanded && "rotate-90"
                    )}
                  />
                ) : (
                  <span className="text-muted-foreground mt-1 shrink-0">
                    &bull;
                  </span>
                )}
                <span className="text-foreground/80">{item.text}</span>
              </button>

              <AnimatePresence>
                {isExpanded && guide && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="ml-6 mt-2 mb-2 p-3 rounded-md bg-background/50 border border-border/50">
                      <p className="text-xs text-muted-foreground">
                        {guide.summary}
                      </p>
                      <a
                        href={guide.href}
                        className="text-xs font-medium text-primary hover:underline mt-2 inline-block"
                      >
                        Read full guide &rarr;
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
      {gate && perspective && (
        <div className="mt-3 pt-3 border-t border-border/30">
          <LevelGateCard
            gate={gate}
            level={level}
            levelName={name}
            perspective={perspective}
            variant="compact"
          />
        </div>
      )}
    </div>
  );
}

export { LevelCard };
export type { LevelCardProps, MatrixItem, GuideInfo };
```

- [ ] **Step 3: Commit**

```bash
git add src/components/domain/level-card.tsx src/components/domain/level-gate-card.tsx
git commit -m "feat: add maturity-matrix domain components (level-card, level-gate-card)"
```

---

### Task 10: Layout Components (Nav, Footer, Section, DocLayout)

**Files:**
- Create: `src/components/layout/nav.tsx`
- Create: `src/components/layout/footer.tsx`
- Create: `src/components/layout/section.tsx`
- Create: `src/components/layout/doc-layout.tsx`

- [ ] **Step 1: Create src/components/layout/section.tsx**

```tsx
import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  label?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

function Section({
  id,
  label,
  title,
  subtitle,
  children,
  className,
}: SectionProps) {
  return (
    <section id={id} className={cn("py-32 max-sm:py-20", className)}>
      <div className="max-w-[1200px] mx-auto px-8 max-sm:px-5">
        {label && (
          <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-primary mb-3">
            {label}
          </p>
        )}
        {title && (
          <h2
            className="text-4xl max-sm:text-3xl font-bold text-foreground mb-4 leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {title}
          </h2>
        )}
        {subtitle && (
          <p className="text-lg text-muted-foreground max-w-[600px] leading-relaxed">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}

export { Section };
export type { SectionProps };
```

- [ ] **Step 2: Create src/components/layout/nav.tsx**

```tsx
"use client";

import * as React from "react";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

interface NavProps {
  brand?: React.ReactNode;
  links: NavLink[];
  cta?: { label: string; href: string };
  className?: string;
}

function Nav({ brand, links, cta, className }: NavProps) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border",
        className
      )}
    >
      <div className="max-w-[1200px] mx-auto px-8 flex items-center justify-between h-16">
        {brand || (
          <span
            className="text-lg font-bold text-foreground"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <span className="text-primary">Vis</span>Dom
          </span>
        )}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {link.label}
            </a>
          ))}
          {cta && (
            <a
              href={cta.href}
              className="inline-flex items-center px-5 py-2 rounded-full text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              {cta.label}
            </a>
          )}
        </div>
        <button
          className="md:hidden text-muted-foreground hover:text-foreground p-2"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <Menu className="size-6" />
        </button>
      </div>
      {mobileOpen && (
        <div className="md:hidden border-t border-border pb-4 bg-background">
          <div className="max-w-[1200px] mx-auto px-8 flex flex-col gap-3 pt-3">
            {links.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground py-2"
                onClick={() => setMobileOpen(false)}
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {link.label}
              </a>
            ))}
            {cta && (
              <a
                href={cta.href}
                className="inline-flex items-center self-start px-5 py-2 rounded-full text-sm font-semibold bg-primary text-primary-foreground mt-2"
              >
                {cta.label}
              </a>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export { Nav };
export type { NavProps, NavLink };
```

- [ ] **Step 3: Create src/components/layout/footer.tsx**

```tsx
import { cn } from "@/lib/utils";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterProps {
  brand?: React.ReactNode;
  links: FooterLink[];
  className?: string;
}

function Footer({ brand, links, className }: FooterProps) {
  return (
    <footer className={cn("py-16 border-t border-border", className)}>
      <div className="max-w-[1200px] mx-auto px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        {brand || (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span
              className="font-bold text-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <span className="text-primary">Vis</span>Dom
            </span>
            <span>&middot;</span>
            <span>Powered by VirtusLab</span>
          </div>
        )}
        <div className="flex items-center gap-8">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export { Footer };
export type { FooterProps, FooterLink };
```

- [ ] **Step 4: Create src/components/layout/doc-layout.tsx**

Simplified from visdom-code-review DocLayout — provides structure without route-specific logic.

```tsx
import * as React from "react";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface DocLayoutProps {
  breadcrumbs?: BreadcrumbItem[];
  title: string;
  tags?: string[];
  sidebar?: React.ReactNode;
  prev?: { label: string; href: string };
  next?: { label: string; href: string };
  children: React.ReactNode;
  className?: string;
}

function DocLayout({
  breadcrumbs,
  title,
  tags,
  sidebar,
  prev,
  next,
  children,
  className,
}: DocLayoutProps) {
  return (
    <div className={cn("max-w-[1200px] mx-auto px-8 py-12", className)}>
      <div className={cn("flex gap-12", sidebar && "md:grid md:grid-cols-[250px_1fr]")}>
        {sidebar && (
          <aside className="hidden md:block sticky top-20 self-start">
            {sidebar}
          </aside>
        )}
        <main className="min-w-0 max-w-3xl">
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              {breadcrumbs.map((crumb, i) => (
                <React.Fragment key={i}>
                  {i > 0 && <span>/</span>}
                  {crumb.href ? (
                    <a
                      href={crumb.href}
                      className="hover:text-foreground transition-colors"
                    >
                      {crumb.label}
                    </a>
                  ) : (
                    <span className="text-foreground">{crumb.label}</span>
                  )}
                </React.Fragment>
              ))}
            </nav>
          )}

          <h1
            className="text-3xl font-bold text-foreground mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {title}
          </h1>

          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="prose prose-sm max-w-none">{children}</div>

          {(prev || next) && (
            <nav className="flex justify-between mt-12 pt-6 border-t border-border">
              {prev ? (
                <a
                  href={prev.href}
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  &larr; {prev.label}
                </a>
              ) : (
                <span />
              )}
              {next && (
                <a
                  href={next.href}
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {next.label} &rarr;
                </a>
              )}
            </nav>
          )}
        </main>
      </div>
    </div>
  );
}

export { DocLayout };
export type { DocLayoutProps, BreadcrumbItem };
```

- [ ] **Step 5: Commit**

```bash
git add src/components/layout/
git commit -m "feat: add layout components (nav, footer, section, doc-layout)"
```

---

### Task 11: Barrel Export & Type Check

**Files:**
- Create: `src/index.ts`

- [ ] **Step 1: Create src/index.ts**

```ts
// Styles — consumers import separately: import '@visdom/ui/styles.css'

// Utilities
export { cn } from "./lib/utils";
export { useIsMobile } from "./lib/hooks/use-mobile";

// Base UI
export { Button, buttonVariants } from "./components/ui/button";
export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from "./components/ui/card";
export { Badge, badgeVariants } from "./components/ui/badge";
export { Input } from "./components/ui/input";
export { Separator } from "./components/ui/separator";
export { Skeleton } from "./components/ui/skeleton";
export { Progress } from "./components/ui/progress";
export {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "./components/ui/tooltip";
export {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "./components/ui/collapsible";
export { ScrollArea, ScrollBar } from "./components/ui/scroll-area";
export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
} from "./components/ui/sheet";
export {
  DropdownMenu,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "./components/ui/dropdown-menu";

// Domain
export { StatCard } from "./components/domain/stat-card";
export { Callout } from "./components/domain/callout";
export { PersonaCard } from "./components/domain/persona-card";
export { ResourceCard } from "./components/domain/resource-card";
export { BeforeAfter } from "./components/domain/before-after";
export { ImpactNumber } from "./components/domain/impact-number";
export { LayerBadge } from "./components/domain/layer-badge";
export { Timeline } from "./components/domain/timeline";
export { HeroSection } from "./components/domain/hero-section";
export { SolutionCard } from "./components/domain/solution-card";
export { CtaCard } from "./components/domain/cta-card";
export { Terminal } from "./components/domain/terminal";
export { LevelCard } from "./components/domain/level-card";
export { LevelGateCard } from "./components/domain/level-gate-card";

// Layout
export { Nav } from "./components/layout/nav";
export { Footer } from "./components/layout/footer";
export { Section } from "./components/layout/section";
export { DocLayout } from "./components/layout/doc-layout";

// Re-export types
export type { StatCardProps, StatCardColor } from "./components/domain/stat-card";
export type { CalloutProps, CalloutType } from "./components/domain/callout";
export type { PersonaCardProps, PersonaCardColor } from "./components/domain/persona-card";
export type { ResourceCardProps, ResourceCardColor } from "./components/domain/resource-card";
export type { BeforeAfterProps, Impact } from "./components/domain/before-after";
export type { ImpactNumberProps } from "./components/domain/impact-number";
export type { LayerBadgeProps, LayerLevel } from "./components/domain/layer-badge";
export type { TimelineProps, TimelineStep } from "./components/domain/timeline";
export type { HeroSectionProps, HeroStat, HeroAction } from "./components/domain/hero-section";
export type { SolutionCardProps, SolutionCardTag, SolutionCardCta, TagColor } from "./components/domain/solution-card";
export type { CtaCardProps } from "./components/domain/cta-card";
export type { TerminalProps } from "./components/domain/terminal";
export type { LevelCardProps, MatrixItem, GuideInfo } from "./components/domain/level-card";
export type { LevelGateCardProps, MaturityGate } from "./components/domain/level-gate-card";
export type { NavProps, NavLink } from "./components/layout/nav";
export type { FooterProps, FooterLink } from "./components/layout/footer";
export type { SectionProps } from "./components/layout/section";
export type { DocLayoutProps, BreadcrumbItem } from "./components/layout/doc-layout";
```

- [ ] **Step 2: Run type check**

Run: `cd /Users/askowronski/Projects/visdom-design-system && npx tsc --noEmit`
Expected: PASS (0 errors)

- [ ] **Step 3: Run build**

Run: `cd /Users/askowronski/Projects/visdom-design-system && npm run build`
Expected: dist/ created with index.js, index.cjs, index.d.ts, styles.css

- [ ] **Step 4: Commit**

```bash
git add src/index.ts
git commit -m "feat: add barrel exports for all components and types"
```

---

### Task 12: Storybook Stories — Base UI

**Files:**
- Create: `src/components/ui/button.stories.tsx`
- Create: `src/components/ui/card.stories.tsx`
- Create: `src/components/ui/badge.stories.tsx`
- Create: `src/components/ui/input.stories.tsx`
- Create: `src/components/ui/progress.stories.tsx`
- Create: `src/components/ui/separator.stories.tsx`
- Create: `src/components/ui/skeleton.stories.tsx`
- Create: `src/components/ui/tooltip.stories.tsx`

- [ ] **Step 1: Create src/components/ui/button.stories.tsx**

```tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";
import { ChevronRight, Loader2, Mail } from "lucide-react";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
    },
    size: {
      control: "select",
      options: ["default", "xs", "sm", "lg", "icon"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = { args: { children: "Button" } };

export const Destructive: Story = {
  args: { children: "Delete", variant: "destructive" },
};

export const Outline: Story = {
  args: { children: "Outline", variant: "outline" },
};

export const Secondary: Story = {
  args: { children: "Secondary", variant: "secondary" },
};

export const Ghost: Story = {
  args: { children: "Ghost", variant: "ghost" },
};

export const Link: Story = {
  args: { children: "Link", variant: "link" },
};

export const WithIcon: Story = {
  args: { children: <><Mail /> Login with Email</> },
};

export const Loading: Story = {
  args: {
    children: <><Loader2 className="animate-spin" /> Please wait</>,
    disabled: true,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button>Default</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="xs">Extra Small</Button>
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="icon"><ChevronRight /></Button>
    </div>
  ),
};
```

- [ ] **Step 2: Create remaining base UI stories**

For each remaining component (card, badge, input, progress, separator, skeleton, tooltip), create a `*.stories.tsx` file with:
- Default story showing primary use case
- Variant stories showing each variant/state
- A combined "AllVariants" story showing all options together

Pattern for each:

```tsx
import type { Meta, StoryObj } from "@storybook/react";
import { ComponentName } from "./component-name";

const meta: Meta<typeof ComponentName> = {
  title: "UI/ComponentName",
  component: ComponentName,
};
export default meta;

type Story = StoryObj<typeof ComponentName>;

export const Default: Story = { args: { /* props */ } };
```

- [ ] **Step 3: Launch Storybook to verify**

Run: `cd /Users/askowronski/Projects/visdom-design-system && npm run dev`
Expected: Storybook starts on http://localhost:6006, all UI stories render

- [ ] **Step 4: Commit**

```bash
git add src/components/ui/*.stories.tsx
git commit -m "feat: add Storybook stories for base UI components"
```

---

### Task 13: Storybook Stories — Domain Components

**Files:**
- Create story files for all 14 domain components

- [ ] **Step 1: Create src/components/domain/stat-card.stories.tsx**

```tsx
import type { Meta, StoryObj } from "@storybook/react";
import { StatCard } from "./stat-card";

const meta: Meta<typeof StatCard> = {
  title: "Domain/StatCard",
  component: StatCard,
};
export default meta;

type Story = StoryObj<typeof StatCard>;

export const Green: Story = {
  args: {
    value: "<10 min",
    label: "to first feedback vs 24-48h human review",
    source: "Internal benchmarks",
    color: "green",
  },
};

export const Blue: Story = {
  args: { value: "-40%", label: "senior review time", source: "Pilot data", color: "blue" },
};

export const AllColors: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4">
      <StatCard value="99%" label="Uptime" source="SLA" color="green" />
      <StatCard value="2.3s" label="Latency p99" source="Datadog" color="blue" />
      <StatCard value="12" label="Open issues" source="Jira" color="amber" />
      <StatCard value="3" label="Critical bugs" source="Sentry" color="red" />
      <StatCard value="89%" label="Coverage" source="Jest" color="purple" />
    </div>
  ),
};
```

- [ ] **Step 2: Create stories for remaining domain components**

For each domain component, create a story with realistic example data. Follow this pattern:
- `callout.stories.tsx` — one story per type (info, warning, tip, reference)
- `persona-card.stories.tsx` — one story per color
- `resource-card.stories.tsx` — with/without tag, different colors
- `before-after.stories.tsx` — with and without impacts
- `impact-number.stories.tsx` — single and row of multiple
- `layer-badge.stories.tsx` — all 4 layers
- `timeline.stories.tsx` — 4-step example
- `hero-section.stories.tsx` — light and dark variants, with/without stats
- `solution-card.stories.tsx` — full example with all props
- `cta-card.stories.tsx` — normal and highlighted
- `terminal.stories.tsx` — with code example
- `level-card.stories.tsx` — L1-L5 examples with items
- `level-gate-card.stories.tsx` — full, compact, minimal variants

- [ ] **Step 3: Create stories for layout components**

- `nav.stories.tsx` — with links and CTA
- `footer.stories.tsx` — with links
- `section.stories.tsx` — with label, title, subtitle
- `doc-layout.stories.tsx` — with breadcrumbs, sidebar, pagination

- [ ] **Step 4: Launch Storybook to verify all stories**

Run: `cd /Users/askowronski/Projects/visdom-design-system && npm run dev`
Expected: All stories visible in sidebar, all render correctly

- [ ] **Step 5: Commit**

```bash
git add src/components/domain/*.stories.tsx src/components/layout/*.stories.tsx
git commit -m "feat: add Storybook stories for domain and layout components"
```

---

### Task 14: CLAUDE.md & .gitignore

**Files:**
- Create: `CLAUDE.md`
- Create: `.gitignore`

- [ ] **Step 1: Create CLAUDE.md**

```markdown
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
```

- [ ] **Step 2: Create .gitignore**

```
node_modules/
dist/
storybook-static/
.DS_Store
*.local
```

- [ ] **Step 3: Commit**

```bash
git add CLAUDE.md .gitignore
git commit -m "chore: add CLAUDE.md agent conventions and .gitignore"
```

---

### Task 15: Final Verification

- [ ] **Step 1: Full type check**

Run: `cd /Users/askowronski/Projects/visdom-design-system && npx tsc --noEmit`
Expected: 0 errors

- [ ] **Step 2: Full build**

Run: `cd /Users/askowronski/Projects/visdom-design-system && npm run build`
Expected: dist/ contains index.js, index.cjs, index.d.ts, styles.css

- [ ] **Step 3: Storybook build**

Run: `cd /Users/askowronski/Projects/visdom-design-system && npm run build:storybook`
Expected: storybook-static/ created successfully

- [ ] **Step 4: Storybook dev smoke test**

Run: `cd /Users/askowronski/Projects/visdom-design-system && npm run dev`
Expected: Opens on :6006, all component categories visible (UI, Domain, Layout), stories render

- [ ] **Step 5: Final commit with all remaining changes**

```bash
git add -A
git commit -m "chore: final verification — build and storybook pass"
```
