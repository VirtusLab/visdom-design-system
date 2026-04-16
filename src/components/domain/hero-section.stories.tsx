import type { Meta, StoryObj } from "@storybook/react";
import { HeroSection } from "./hero-section";

const meta: Meta<typeof HeroSection> = {
  title: "Domain/HeroSection",
  component: HeroSection,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["light", "dark"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof HeroSection>;

const sharedStats = [
  { value: "73%", label: "faster code reviews", detail: "McKinsey, 2024" },
  { value: "4×", label: "deployment frequency", detail: "DORA, 2023" },
  { value: "60%", label: "fewer defect escapes", detail: "internal data" },
];

const sharedActions = [
  { label: "Get started", href: "#start", variant: "primary" as const },
  { label: "View on GitHub", href: "https://github.com", variant: "outline" as const, external: true },
];

export const Light: Story = {
  args: {
    variant: "light",
    badge: "Visdom Design System",
    title: "Ship better code, faster",
    subtitle:
      "A structured approach to AI-assisted code review that reduces cycle time, catches defects earlier, and scales across your engineering organisation.",
    stats: sharedStats,
    actions: sharedActions,
  },
};

export const Dark: Story = {
  args: {
    variant: "dark",
    badge: "Visdom Design System",
    title: "Ship better code, faster",
    subtitle:
      "A structured approach to AI-assisted code review that reduces cycle time, catches defects earlier, and scales across your engineering organisation.",
    stats: sharedStats,
    actions: sharedActions,
  },
};

export const WithoutBadge: Story = {
  args: {
    variant: "light",
    title: "The Code Review Maturity Model",
    subtitle:
      "Five levels of practice maturity from ad-hoc reviews to fully automated, AI-powered quality gates.",
    actions: [{ label: "Explore the model", href: "#model" }],
  },
};

export const WithoutStats: Story = {
  args: {
    variant: "dark",
    badge: "New",
    title: "AI Review Layer 3 is here",
    subtitle:
      "Deep architectural analysis, cross-file dependency checks, and security reasoning powered by the latest foundation models.",
    actions: sharedActions,
  },
};

export const WithTagline: Story = {
  args: {
    variant: "light",
    badge: "Visdom Platform",
    title: "Visibility, governance, and control for AI-assisted development",
    subtitle:
      "A complete platform that gives engineering leaders confidence that AI tools are being used safely, effectively, and in compliance with regulations.",
    actions: sharedActions,
    tagline: "Trusted by enterprise engineering teams worldwide",
  },
};
