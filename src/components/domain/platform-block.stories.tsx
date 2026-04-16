import type { Meta, StoryObj } from "@storybook/react";
import { PlatformBlock } from "./platform-block";

const meta: Meta<typeof PlatformBlock> = {
  title: "Domain/PlatformBlock",
  component: PlatformBlock,
  argTypes: {
    reversed: { control: "boolean" },
  },
};
export default meta;

type Story = StoryObj<typeof PlatformBlock>;

export const Default: Story = {
  args: {
    number: "00",
    title: "Visdom Maturity Matrix",
    description:
      "60 practices across 4 perspectives and 5 maturity levels. Know exactly where your organization stands on AI readiness — and what to improve next.",
    tags: [
      { label: "Interactive Assessment", color: "blue" },
      { label: "Workshop Mode", color: "blue" },
    ],
    ctas: [
      {
        label: "Try the Assessment",
        href: "https://visdom-ai-maturity-matrix.pages.dev/assessment",
        external: true,
      },
      {
        label: "Explore Matrix",
        href: "https://visdom-ai-maturity-matrix.pages.dev/matrix/development",
        external: true,
      },
    ],
    visual: (
      <div className="flex items-center gap-2 text-sm">
        {["Ad-hoc", "Guided", "Systematic", "Optimized", "Autonomous"].map(
          (level, i) => (
            <div key={level} className="flex items-center gap-2">
              <div
                className="text-center px-3 py-2 rounded-lg"
                style={{
                  background: [
                    "#f4f4f5",
                    "#ccfbf1",
                    "#d1fae5",
                    "#dcfce7",
                    "#bbf7d0",
                  ][i],
                }}
              >
                <div
                  className="text-xs font-bold"
                  style={{
                    color: [
                      "#71717a",
                      "#0d9488",
                      "#2563eb",
                      "#16a34a",
                      "#22c55e",
                    ][i],
                  }}
                >
                  L{i + 1}
                </div>
                <div
                  className="text-[10px]"
                  style={{
                    color: [
                      "#71717a",
                      "#0d9488",
                      "#2563eb",
                      "#16a34a",
                      "#22c55e",
                    ][i],
                    opacity: 0.7,
                  }}
                >
                  {level}
                </div>
              </div>
              {i < 4 && <div className="w-4 h-px bg-border" />}
            </div>
          )
        )}
      </div>
    ),
  },
};

export const Reversed: Story = {
  args: {
    number: "01",
    title: "Visdom Context Fabric",
    description:
      "Structured, agent-consumable context built across repositories and teams. Who knows this code? What breaks if I change it? Your agents stop hallucinating when they can actually see your codebase.",
    note: "Powered by Visdom Developer Intelligence — deterministic code expertise, blast radius analysis, and ownership graphs via MCP.",
    tags: [
      { label: "Open Source", color: "blue" },
      { label: "MCP Server", color: "blue" },
      { label: "CLI", color: "purple" },
    ],
    ctas: [
      {
        label: "View on GitHub",
        href: "https://github.com/VirtusLab/visdom-developer-intelligence",
        external: true,
      },
      {
        label: "Documentation",
        href: "https://github.com/VirtusLab/visdom-developer-intelligence",
        external: true,
      },
    ],
    reversed: true,
    visual: (
      <pre className="text-xs text-muted-foreground font-mono whitespace-pre-wrap">
        {`$ vidia init
Scanning repository...
Found 23 rules across 6 categories.
Exported to CLAUDE.md ✓`}
      </pre>
    ),
  },
};

export const WithSubtitle: Story = {
  args: {
    number: "02",
    title: "Visdom Code Review",
    subtitle: "VCR",
    description:
      "Code review that understands your architecture. VCR catches boundary violations, security issues, and performance regressions before they hit production — with context-aware analysis that goes beyond linting.",
    tags: [
      { label: "Architecture", color: "purple" },
      { label: "Security", color: "amber" },
      { label: "Performance", color: "blue" },
    ],
    ctas: [{ label: "Learn More", href: "#contact" }],
  },
};

export const NoVisual: Story = {
  args: {
    number: "04",
    title: "Visdom Sandboxing",
    description:
      "AI agents need room to experiment without breaking things. Ephemeral, fully isolated environments where agents can execute code, run tests, and iterate freely — with zero risk to production.",
    note: "Powered by Sandcat — lightweight, disposable execution environments built for agentic workflows.",
    tags: [
      { label: "Isolation", color: "blue" },
      { label: "Ephemeral Environments", color: "blue" },
      { label: "Zero Side Effects", color: "purple" },
    ],
    ctas: [{ label: "Learn More", href: "#contact" }],
  },
};
