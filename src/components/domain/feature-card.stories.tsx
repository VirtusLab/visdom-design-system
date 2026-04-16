import type { Meta, StoryObj } from "@storybook/react";
import { FeatureCard } from "./feature-card";

const meta: Meta<typeof FeatureCard> = {
  title: "Domain/FeatureCard",
  component: FeatureCard,
};
export default meta;

type Story = StoryObj<typeof FeatureCard>;

export const WithIcon: Story = {
  args: {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    label: "Visibility",
    title: "Full Session Tracing",
    description:
      "Every AI interaction is captured with git-level attribution, tool calls, and model responses.",
    meta: "Session traces \u00b7 tool calls \u00b7 git-level attribution",
  },
};

export const WithAbbreviation: Story = {
  args: {
    abbreviation: "SAST",
    title: "Static Application Security Testing",
    description:
      "Automated security scanning that identifies vulnerabilities in AI-generated code before it reaches production.",
  },
};

export const PillarGrid: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4 max-w-3xl">
      <FeatureCard
        label="Visibility"
        title="Full Session Tracing"
        description="Every AI interaction is captured with git-level attribution."
        meta="Session traces \u00b7 tool calls"
      />
      <FeatureCard
        label="Runtime Containment"
        title="Sandcat Proxy"
        description="Network-level enforcement that controls what AI agents can access."
        meta="Allow/deny \u00b7 audit logs"
      />
      <FeatureCard
        label="Governance"
        title="Policy Engine"
        description="Codified rules that enforce organisational standards on AI usage."
        meta="EU AI Act \u00b7 SOC 2"
      />
    </div>
  ),
};

export const CapabilityGrid: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4 max-w-3xl">
      <FeatureCard
        abbreviation="SAST"
        title="Static Analysis"
        description="Automated vulnerability scanning for AI-generated code."
      />
      <FeatureCard
        abbreviation="EU AI ACT"
        title="Compliance Mapping"
        description="Automated mapping of AI usage to regulatory requirements."
      />
      <FeatureCard
        abbreviation="SBOM"
        title="Software Bill of Materials"
        description="Full dependency tracking for AI-generated components."
      />
    </div>
  ),
};
