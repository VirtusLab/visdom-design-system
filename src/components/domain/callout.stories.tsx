import type { Meta, StoryObj } from "@storybook/react";
import { Callout } from "./callout";

const meta: Meta<typeof Callout> = {
  title: "Domain/Callout",
  component: Callout,
  argTypes: {
    type: {
      control: "select",
      options: ["info", "warning", "tip", "reference"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Callout>;

export const Info: Story = {
  args: {
    type: "info",
    title: "Did you know?",
    children: (
      <p>
        AI-assisted code review can catch up to 35% more issues than manual review alone,
        particularly for security vulnerabilities and performance regressions.
      </p>
    ),
  },
};

export const Warning: Story = {
  args: {
    type: "warning",
    title: "Breaking change in v3",
    children: (
      <p>
        The <code>useReview</code> hook signature has changed. The <code>onSubmit</code> callback
        now receives a <code>ReviewResult</code> object instead of a plain string.
      </p>
    ),
  },
};

export const Tip: Story = {
  args: {
    type: "tip",
    title: "Pro tip",
    children: (
      <p>
        Enable the <strong>auto-assign reviewers</strong> setting in your pipeline to
        automatically route PRs to the most relevant team members based on CODEOWNERS.
      </p>
    ),
  },
};

export const Reference: Story = {
  args: {
    type: "reference",
    title: "Related resources",
    children: (
      <p>
        See the{" "}
        <a href="#" className="underline">
          DORA Metrics Guide
        </a>{" "}
        and the{" "}
        <a href="#" className="underline">
          Code Review Best Practices
        </a>{" "}
        for detailed implementation guidance.
      </p>
    ),
  },
};

export const AllTypes: Story = {
  render: () => (
    <div className="max-w-lg space-y-0">
      <Callout type="info" title="Info callout">
        <p>Informational message for the user.</p>
      </Callout>
      <Callout type="warning" title="Warning callout">
        <p>Something may require attention before proceeding.</p>
      </Callout>
      <Callout type="tip" title="Tip callout">
        <p>A helpful suggestion to improve your workflow.</p>
      </Callout>
      <Callout type="reference" title="Reference callout">
        <p>Links and resources for further reading.</p>
      </Callout>
    </div>
  ),
};

export const WithoutTitle: Story = {
  args: {
    type: "info",
    children: <p>A simple callout without a title, just the message content.</p>,
  },
};
