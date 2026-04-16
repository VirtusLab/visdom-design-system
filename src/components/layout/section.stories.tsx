import type { Meta, StoryObj } from "@storybook/react";
import { Section } from "./section";

const meta: Meta<typeof Section> = {
  title: "Layout/Section",
  component: Section,
};
export default meta;

type Story = StoryObj<typeof Section>;

export const WithLabelTitleSubtitle: Story = {
  args: {
    id: "features",
    label: "Why Visdom",
    title: "Everything your team needs for world-class code review",
    subtitle:
      "From foundational lint gates to deep AI analysis — a layered approach that grows with your engineering maturity.",
    children: (
      <div className="grid grid-cols-3 gap-6">
        {["Deterministic Gates", "AI Quick Scan", "Deep AI Review"].map((name) => (
          <div key={name} className="rounded-lg border p-4 text-sm font-medium">
            {name}
          </div>
        ))}
      </div>
    ),
  },
};

export const TitleOnly: Story = {
  args: {
    title: "Key statistics",
    children: (
      <p className="text-muted-foreground text-sm">
        Placeholder content for a section with just a title.
      </p>
    ),
  },
};

export const WithOnlyChildren: Story = {
  args: {
    children: (
      <div className="rounded-lg border p-8 text-center text-muted-foreground text-sm">
        A section with no label, title, or subtitle — just children.
      </div>
    ),
  },
};

export const WithId: Story = {
  args: {
    id: "getting-started",
    label: "Quick start",
    title: "Up and running in 5 minutes",
    subtitle: "Install the CLI, connect your repository, and ship your first gated PR today.",
    children: (
      <div className="rounded-lg bg-gray-950 text-gray-200 font-mono text-sm p-6">
        $ npx visdom-review init
      </div>
    ),
  },
};
