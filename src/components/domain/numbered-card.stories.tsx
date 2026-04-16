import type { Meta, StoryObj } from "@storybook/react";
import { NumberedCard } from "./numbered-card";

const meta: Meta<typeof NumberedCard> = {
  title: "Domain/NumberedCard",
  component: NumberedCard,
};
export default meta;

type Story = StoryObj<typeof NumberedCard>;

export const Default: Story = {
  args: {
    number: "01",
    title: "Shadow AI is invisible",
    description:
      "Developers adopt AI tools faster than security teams can evaluate them. Most organisations have no visibility into which models are being used, what data they receive, or what code they generate.",
  },
};

export const Grid: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 max-w-2xl">
      <NumberedCard
        number="01"
        title="Shadow AI is invisible"
        description="Developers adopt AI tools faster than security teams can evaluate them."
      />
      <NumberedCard
        number="02"
        title="Generated code ships unchecked"
        description="AI-generated code bypasses traditional review gates and enters production with unknown risk."
      />
      <NumberedCard
        number="03"
        title="Compliance gaps widen"
        description="Regulatory frameworks like the EU AI Act demand audit trails that most teams cannot produce."
      />
      <NumberedCard
        number="04"
        title="Context leaks to third parties"
        description="Sensitive source code and business logic flow to external model providers without governance."
      />
    </div>
  ),
};
