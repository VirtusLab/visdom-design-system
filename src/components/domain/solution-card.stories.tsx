import type { Meta, StoryObj } from "@storybook/react";
import { SolutionCard } from "./solution-card";

const meta: Meta<typeof SolutionCard> = {
  title: "Domain/SolutionCard",
  component: SolutionCard,
  parameters: {
    backgrounds: {
      default: "dark",
      values: [{ name: "dark", value: "#0a0a0a" }],
    },
  },
};
export default meta;

type Story = StoryObj<typeof SolutionCard>;

export const Full: Story = {
  args: {
    title: "AI-Assisted Code Review",
    subtitle: "Layer 2 & 3 — Quick Scan and Deep Analysis",
    problem:
      "Teams spend 20–40% of engineering time on code review, yet still miss critical issues that slip through to production.",
    capabilities: [
      "Automatic pattern detection for common security vulnerabilities",
      "Cross-file dependency analysis to catch breaking changes",
      "Natural-language summary of PR intent and risk level",
      "Configurable gates that block merge on critical findings",
    ],
    tags: [
      { label: "AI", color: "blue" },
      { label: "Security", color: "blue" },
      { label: "Automation", color: "purple" },
    ],
    ctas: [
      { label: "Documentation", href: "#docs" },
      { label: "GitHub", href: "https://github.com", external: true },
    ],
    metric: {
      lines: [
        "Reduces defect escape rate by up to 60%",
        "Average scan time: under 90 seconds",
      ],
    },
  },
};

export const Minimal: Story = {
  args: {
    title: "Deterministic Gates",
    subtitle: "Layer 1 — Lint, Types, Coverage",
    problem:
      "Manual enforcement of coding standards is inconsistent and slows reviewers down with trivial nit comments.",
    capabilities: [
      "ESLint, Biome, and Prettier integration out of the box",
      "TypeScript strict-mode type checking on every PR",
      "Test coverage delta check — never drop below your threshold",
    ],
    tags: [
      { label: "Linting", color: "amber" },
      { label: "Testing", color: "blue" },
    ],
    ctas: [{ label: "Setup guide", href: "#setup" }],
  },
};
