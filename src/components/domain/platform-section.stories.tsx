import type { Meta, StoryObj } from "@storybook/react";
import { PlatformSection } from "./platform-section";

const meta: Meta<typeof PlatformSection> = {
  title: "Domain/PlatformSection",
  component: PlatformSection,
  parameters: {
    layout: "fullscreen",
  },
};
export default meta;

type Story = StoryObj<typeof PlatformSection>;

export const Default: Story = {
  args: {
    label: "Platform Components",
    title: "Six building blocks of an Agent-Native CI",
    subtitle:
      "Each component works standalone. Together, they form the infrastructure your AI agents need to ship with confidence.",
    children: (
      <div className="space-y-8">
        <div className="rounded-xl border border-border bg-card p-8 text-center text-muted-foreground">
          Component block 1 goes here
        </div>
        <div className="rounded-xl border border-border bg-card p-8 text-center text-muted-foreground">
          Component block 2 goes here
        </div>
      </div>
    ),
  },
};

export const WithoutLabel: Story = {
  args: {
    title: "Our Approach",
    subtitle:
      "A structured methodology for integrating AI into your engineering workflow.",
    children: (
      <div className="rounded-xl border border-border bg-card p-8 text-center text-muted-foreground">
        Content goes here
      </div>
    ),
  },
};
