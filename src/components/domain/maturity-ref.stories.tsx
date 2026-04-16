import type { Meta, StoryObj } from "@storybook/react";
import { MaturityRef } from "./maturity-ref";

const meta: Meta<typeof MaturityRef> = {
  title: "Domain/MaturityRef",
  component: MaturityRef,
  parameters: {
    layout: "fullscreen",
  },
};
export default meta;

type Story = StoryObj<typeof MaturityRef>;

export const Default: Story = {
  args: {},
};

export const CustomLevels: Story = {
  args: {
    levels: [
      { id: "L1", name: "Basic", bg: "#fef3c7", text: "#d97706" },
      { id: "L2", name: "Developing", bg: "#fed7aa", text: "#ea580c" },
      { id: "L3", name: "Proficient", bg: "#fecaca", text: "#dc2626" },
      { id: "L4", name: "Advanced", bg: "#e9d5ff", text: "#9333ea" },
      { id: "L5", name: "Expert", bg: "#dbeafe", text: "#2563eb" },
    ],
    perspectives: ["Security", "Performance", "Reliability", "Scalability"],
  },
};

export const ThreeLevels: Story = {
  args: {
    levels: [
      { id: "L1", name: "Beginning", bg: "#f4f4f5", text: "#71717a" },
      { id: "L2", name: "Intermediate", bg: "#d1fae5", text: "#2563eb" },
      { id: "L3", name: "Advanced", bg: "#bbf7d0", text: "#22c55e" },
    ],
    perspectives: ["Development", "Operations"],
    assessmentHref: "#assess",
    matrixHref: "#matrix",
  },
};
