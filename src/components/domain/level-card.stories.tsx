import type { Meta, StoryObj } from "@storybook/react";
import { LevelCard } from "./level-card";

const meta: Meta<typeof LevelCard> = {
  title: "Domain/LevelCard",
  component: LevelCard,
};
export default meta;

type Story = StoryObj<typeof LevelCard>;

const sampleGuides = {
  "pr-size": {
    title: "Keeping PRs Small",
    summary: "Small, focused pull requests are easier to review, faster to merge, and easier to revert. Aim for under 400 lines changed.",
    href: "/guides/pr-size",
  },
  "conventional-commits": {
    title: "Conventional Commits",
    summary: "A specification for adding human and machine-readable meaning to commit messages. Enables automatic changelog generation.",
    href: "/guides/conventional-commits",
  },
};

export const Level1: Story = {
  args: {
    level: 1,
    name: "Foundational",
    items: [
      { text: "PRs have a description explaining the why", guideSlug: "pr-size" },
      { text: "Linting is enforced in CI" },
      { text: "At least one reviewer required before merge" },
      { text: "Conventional commit messages in use", guideSlug: "conventional-commits" },
    ],
  },
};

export const Level2: Story = {
  args: {
    level: 2,
    name: "Consistent",
    items: [
      { text: "Type checking passes on every PR" },
      { text: "Test coverage gate (≥80%) enforced in CI" },
      { text: "PR size stays under 400 lines" },
      { text: "CODEOWNERS file defines review routing" },
    ],
  },
};

export const Level3: Story = {
  args: {
    level: 3,
    name: "Automated",
    items: [
      { text: "AI quick-scan runs on all PRs" },
      { text: "Security scanning integrated (SAST)" },
      { text: "Review turnaround SLA enforced (<24 hrs)" },
      { text: "Automatic review assignment via CODEOWNERS" },
    ],
  },
};

export const Level4: Story = {
  args: {
    level: 4,
    name: "Optimised",
    items: [
      { text: "AI deep-review on critical paths" },
      { text: "Dependency risk scoring per PR" },
      { text: "Reviewer performance metrics tracked" },
      { text: "Automated stale PR cleanup policy" },
    ],
  },
};

export const Level5: Story = {
  args: {
    level: 5,
    name: "Elite",
    items: [
      { text: "Fully automated merge for low-risk changes" },
      { text: "Real-time DORA metric dashboards" },
      { text: "AI generates initial PR description" },
      { text: "Cross-repo impact analysis on every merge" },
    ],
  },
};

export const WithGuides: Story = {
  args: {
    level: 1,
    name: "Foundational",
    items: [
      { text: "Keep PRs small and focused", guideSlug: "pr-size" },
      { text: "Use conventional commit messages", guideSlug: "conventional-commits" },
      { text: "Add a PR description explaining the why" },
    ],
    guides: sampleGuides,
  },
};

export const AllLevels: Story = {
  render: () => (
    <div className="space-y-3 max-w-lg">
      {([1, 2, 3, 4, 5] as const).map((level) => (
        <LevelCard
          key={level}
          level={level}
          name={["Foundational", "Consistent", "Automated", "Optimised", "Elite"][level - 1]}
          items={[
            { text: `Practice A for level ${level}` },
            { text: `Practice B for level ${level}` },
            { text: `Practice C for level ${level}` },
          ]}
        />
      ))}
    </div>
  ),
};
