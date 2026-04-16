import type { Meta, StoryObj } from "@storybook/react";
import { ComparisonCard } from "./comparison-card";

const meta: Meta<typeof ComparisonCard> = {
  title: "Domain/ComparisonCard",
  component: ComparisonCard,
};
export default meta;

type Story = StoryObj<typeof ComparisonCard>;

export const Default: Story = {
  args: {
    label: "Containment",
    title: "Sandcat vs the alternatives",
    items: [
      "Network-level enforcement, not just policy documents",
      "Works with any AI tool or model provider",
      "Zero-config deployment with automatic discovery",
      "Full audit trail for compliance reporting",
    ],
  },
};

export const AppSec: Story = {
  args: {
    label: "AppSec scanning",
    title: "VCR vs traditional SAST",
    items: [
      "Understands AI-generated code patterns and anti-patterns",
      "Context-aware analysis using session trace data",
      "Incremental scanning on every commit, not nightly batches",
    ],
  },
};

export const SideBySide: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 max-w-2xl">
      <ComparisonCard
        label="Containment"
        title="Sandcat vs alternatives"
        items={[
          "Network-level enforcement",
          "Works with any AI tool",
          "Zero-config deployment",
        ]}
      />
      <ComparisonCard
        label="Governance"
        title="Visdom vs manual audits"
        items={[
          "Automated compliance mapping",
          "Real-time policy enforcement",
          "Continuous monitoring",
        ]}
      />
    </div>
  ),
};
