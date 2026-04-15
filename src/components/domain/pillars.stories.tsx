import type { Meta, StoryObj } from "@storybook/react";
import { Pillars } from "./pillars";

const meta: Meta<typeof Pillars> = {
  title: "Domain/Pillars",
  component: Pillars,
};
export default meta;

type Story = StoryObj<typeof Pillars>;

export const Default: Story = {
  args: {
    pillars: [
      { value: "88%", label: "build time decrease" },
      { value: "43%", label: "PR merge time reduction" },
      { value: "160+", label: "open-source repositories" },
      { value: "15+", label: "years in JVM ecosystem" },
    ],
  },
};

export const TwoItems: Story = {
  args: {
    pillars: [
      { value: "4x", label: "deployment frequency" },
      { value: "73%", label: "faster code reviews" },
    ],
  },
};

export const SixItems: Story = {
  args: {
    pillars: [
      { value: "88%", label: "build time decrease" },
      { value: "43%", label: "PR merge time reduction" },
      { value: "160+", label: "open-source repositories" },
      { value: "15+", label: "years in JVM ecosystem" },
      { value: "50x/hr", label: "agent iteration speed" },
      { value: "60%", label: "fewer defect escapes" },
    ],
  },
};
