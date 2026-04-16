import type { Meta, StoryObj } from "@storybook/react";
import { DocLayout } from "./doc-layout";

const meta: Meta<typeof DocLayout> = {
  title: "Layout/DocLayout",
  component: DocLayout,
  parameters: {
    layout: "fullscreen",
  },
};
export default meta;

type Story = StoryObj<typeof DocLayout>;

const SidebarContent = () => (
  <nav className="space-y-1 text-sm">
    <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-2">
      Getting Started
    </p>
    <a href="#" className="block text-muted-foreground hover:text-foreground py-1">Introduction</a>
    <a href="#" className="block text-foreground font-medium py-1">Quick Start</a>
    <a href="#" className="block text-muted-foreground hover:text-foreground py-1">Installation</a>
    <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-2 mt-4">
      Maturity Levels
    </p>
    <a href="#" className="block text-muted-foreground hover:text-foreground py-1">Level 1 — Foundational</a>
    <a href="#" className="block text-muted-foreground hover:text-foreground py-1">Level 2 — Consistent</a>
    <a href="#" className="block text-muted-foreground hover:text-foreground py-1">Level 3 — Automated</a>
    <a href="#" className="block text-muted-foreground hover:text-foreground py-1">Level 4 — Optimised</a>
    <a href="#" className="block text-muted-foreground hover:text-foreground py-1">Level 5 — Elite</a>
  </nav>
);

const MainContent = () => (
  <>
    <p>
      This guide walks you through setting up Visdom in your repository. By the end you will
      have Layer 0–2 gates running on every pull request.
    </p>
    <h2>Prerequisites</h2>
    <ul>
      <li>Node.js 18 or later</li>
      <li>A GitHub, GitLab, or Bitbucket repository</li>
      <li>CI/CD pipeline (GitHub Actions, GitLab CI, or CircleCI)</li>
    </ul>
    <h2>Installation</h2>
    <p>Install the Visdom CLI globally:</p>
    <pre className="bg-muted rounded p-4 text-sm font-mono">
      npm install -g @visdom/cli
    </pre>
    <p>
      Then run the init command in your repository root. It will detect your stack and
      generate the appropriate configuration files.
    </p>
    <pre className="bg-muted rounded p-4 text-sm font-mono">
      visdom review init
    </pre>
    <h2>Verify your setup</h2>
    <p>
      Open a pull request and check that the Visdom status check appears in the GitHub
      Checks tab within 30 seconds.
    </p>
  </>
);

export const WithSidebar: Story = {
  args: {
    breadcrumbs: [
      { label: "Docs", href: "/docs" },
      { label: "Getting Started", href: "/docs/getting-started" },
      { label: "Quick Start" },
    ],
    title: "Quick Start Guide",
    tags: ["beginner", "setup"],
    sidebar: <SidebarContent />,
    prev: { label: "Introduction", href: "/docs/introduction" },
    next: { label: "Installation", href: "/docs/installation" },
    children: <MainContent />,
  },
};

export const WithoutSidebar: Story = {
  args: {
    breadcrumbs: [
      { label: "Docs", href: "/docs" },
      { label: "Reference" },
    ],
    title: "CLI Reference",
    tags: ["reference", "cli"],
    children: (
      <>
        <p>
          Complete reference for all Visdom CLI commands and configuration options.
        </p>
        <h2>Commands</h2>
        <p>The CLI exposes the following top-level commands.</p>
      </>
    ),
  },
};

export const WithPrevNext: Story = {
  args: {
    title: "Layer 2: AI Quick Scan",
    breadcrumbs: [
      { label: "Docs", href: "/docs" },
      { label: "Maturity Levels", href: "/docs/levels" },
      { label: "Layer 2" },
    ],
    sidebar: <SidebarContent />,
    prev: { label: "Layer 1: Deterministic Gates", href: "/docs/levels/layer-1" },
    next: { label: "Layer 3: AI Deep Review", href: "/docs/levels/layer-3" },
    children: (
      <p>
        Layer 2 uses a fast AI model to scan PRs for common patterns, code smells,
        and potential issues not caught by deterministic checks.
      </p>
    ),
  },
};

export const Minimal: Story = {
  args: {
    title: "Contributing Guide",
    children: (
      <>
        <p>Thank you for considering contributing to Visdom!</p>
        <p>Please read this guide before opening your first pull request.</p>
      </>
    ),
  },
};
