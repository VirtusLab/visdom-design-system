import type { Meta, StoryObj } from "@storybook/react";
import { AiRadar } from "./ai-radar";

const meta: Meta<typeof AiRadar> = {
  title: "Domain/AiRadar",
  component: AiRadar,
};
export default meta;

type Story = StoryObj<typeof AiRadar>;

export const Default: Story = {
  args: {
    stats: [
      { value: "777", label: "signals" },
      { value: "17", label: "areas" },
      { value: "354", label: "discoveries" },
      { value: "251", label: "releases" },
    ],
    topAreas: [
      "Coding agents (211)",
      "MCP integration (143)",
      "Context engineering (116)",
      "Agent sandboxing (85)",
      "Observability (48)",
      "Governance (37)",
    ],
    ctaLabel: "Open AI-Radar Dashboard",
    ctaHref: "https://visdom-ai-maturity-matrix.pages.dev/dashboard",
  },
};

export const FewStats: Story = {
  args: {
    stats: [
      { value: "120", label: "signals" },
      { value: "5", label: "areas" },
    ],
    topAreas: ["Coding agents (80)", "Observability (40)"],
    ctaLabel: "View Dashboard",
    ctaHref: "#dashboard",
  },
};

export const ManyAreas: Story = {
  args: {
    stats: [
      { value: "1,200", label: "signals" },
      { value: "24", label: "areas" },
      { value: "580", label: "discoveries" },
      { value: "412", label: "releases" },
    ],
    topAreas: [
      "Coding agents (311)",
      "MCP integration (243)",
      "Context engineering (216)",
      "Agent sandboxing (185)",
      "Observability (148)",
      "Governance (137)",
      "Model evaluation (95)",
      "Prompt engineering (72)",
      "RAG pipelines (61)",
    ],
    ctaLabel: "Explore Full Radar",
    ctaHref: "#radar",
  },
};
