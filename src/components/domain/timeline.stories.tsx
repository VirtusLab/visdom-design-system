import type { Meta, StoryObj } from "@storybook/react";
import { Timeline } from "./timeline";

const meta: Meta<typeof Timeline> = {
  title: "Domain/Timeline",
  component: Timeline,
};
export default meta;

type Story = StoryObj<typeof Timeline>;

const reviewSteps = [
  {
    number: 1,
    title: "PR Opened",
    duration: "~30 sec",
    description: "Developer opens the pull request. Layer 0 context collection begins automatically.",
  },
  {
    number: 2,
    title: "Automated Scan",
    duration: "1–2 min",
    description: "Layers 1 and 2 run lint, type checks, and AI quick-scan in parallel.",
  },
  {
    number: 3,
    title: "Human Review",
    duration: "30–60 min",
    description: "Reviewer focuses only on logic and architecture — automated issues already resolved.",
  },
  {
    number: 4,
    title: "Merge",
    duration: "Same day",
    description: "All gates pass. PR merged with full confidence and an audit trail.",
  },
];

export const FourStepProcess: Story = {
  args: {
    steps: reviewSteps,
  },
};

export const ThreeSteps: Story = {
  args: {
    steps: [
      {
        number: 1,
        title: "Assess",
        duration: "Week 1",
        description: "Run the maturity assessment to understand your current level.",
      },
      {
        number: 2,
        title: "Implement",
        duration: "Weeks 2–4",
        description: "Apply the recommended practices for your next maturity level.",
      },
      {
        number: 3,
        title: "Measure",
        duration: "Week 5+",
        description: "Track DORA metrics to validate the impact of changes.",
      },
    ],
  },
};

export const WithoutDurations: Story = {
  args: {
    steps: [
      {
        number: 1,
        title: "Discovery",
        description: "Identify the problem space and key stakeholders.",
      },
      {
        number: 2,
        title: "Design",
        description: "Define the solution architecture and API contracts.",
      },
      {
        number: 3,
        title: "Build",
        description: "Implement with full test coverage and documentation.",
      },
      {
        number: 4,
        title: "Ship",
        description: "Deploy with feature flags and monitor rollout metrics.",
      },
    ],
  },
};
