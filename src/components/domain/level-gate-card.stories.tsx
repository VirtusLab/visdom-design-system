import type { Meta, StoryObj } from "@storybook/react";
import { LevelGateCard, type MaturityGate } from "./level-gate-card";

const meta: Meta<typeof LevelGateCard> = {
  title: "Domain/LevelGateCard",
  component: LevelGateCard,
  argTypes: {
    variant: {
      control: "select",
      options: ["full", "compact", "minimal"],
    },
    perspective: {
      control: "select",
      options: ["development", "delivery", "infrastructure", "organization"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof LevelGateCard>;

const sampleGate: MaturityGate = {
  must: [
    "All PRs have a description with context and motivation",
    "At least one human reviewer approved before merge",
    "Linting passes on CI for every commit",
  ],
  should: [
    "Link to the related ticket or issue in the PR description",
    "Respond to review comments within 24 hours",
  ],
  prerequisites: [
    { label: "Git branching strategy", href: "/guides/git-branching" },
    { label: "CI setup", href: "/guides/ci-setup" },
  ],
  evidence: [
    "Zero unreviewed merges to main in the last 30 days",
    "CI passing rate ≥ 95% over last sprint",
    "PR descriptions present on ≥ 90% of merged PRs",
  ],
};

export const Full: Story = {
  args: {
    gate: sampleGate,
    level: 1,
    levelName: "Foundational",
    perspective: "development",
    variant: "full",
  },
};

export const Compact: Story = {
  args: {
    gate: sampleGate,
    level: 1,
    levelName: "Foundational",
    perspective: "development",
    variant: "compact",
  },
};

export const Minimal: Story = {
  args: {
    gate: sampleGate,
    level: 1,
    levelName: "Foundational",
    perspective: "development",
    variant: "minimal",
  },
};

export const DeliveryPerspective: Story = {
  args: {
    gate: {
      must: [
        "Deployment pipeline runs on every merge to main",
        "Feature flags used for all user-facing changes",
      ],
      should: [
        "Rollback procedure documented and tested quarterly",
      ],
      prerequisites: [
        { label: "Feature flag platform", href: "/guides/feature-flags" },
      ],
      evidence: [
        "Zero manual deployments in last 30 days",
        "Mean time to deploy < 15 minutes",
      ],
    },
    level: 2,
    levelName: "Consistent",
    perspective: "delivery",
    variant: "full",
  },
};

export const InfrastructurePerspective: Story = {
  args: {
    gate: {
      must: [
        "All infrastructure defined as code (IaC)",
        "No manual changes to production environments",
        "Drift detection alerts configured",
      ],
      should: [
        "IaC reviewed by at least one infra team member",
      ],
      prerequisites: [],
      evidence: [
        "IaC coverage report showing 100% of production resources",
        "Zero untracked drift events in last 30 days",
      ],
    },
    level: 3,
    levelName: "Automated",
    perspective: "infrastructure",
    variant: "full",
  },
};

export const OrganizationPerspective: Story = {
  args: {
    gate: {
      must: [
        "DORA metrics tracked and reviewed monthly",
        "Post-incident reviews conducted for all P0/P1 incidents",
      ],
      should: [
        "Engineering all-hands includes metrics review",
        "Developer satisfaction survey run quarterly",
      ],
      prerequisites: [
        { label: "Metrics dashboard", href: "/guides/metrics" },
      ],
      evidence: [
        "DORA dashboard accessible to all engineers",
        "Last 3 post-incident reviews completed",
      ],
    },
    level: 4,
    levelName: "Optimised",
    perspective: "organization",
    variant: "full",
  },
};
