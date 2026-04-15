import type { Meta, StoryObj } from "@storybook/react";
import { ImpactNumber } from "./impact-number";

const meta: Meta<typeof ImpactNumber> = {
  title: "Domain/ImpactNumber",
  component: ImpactNumber,
};
export default meta;

type Story = StoryObj<typeof ImpactNumber>;

export const Default: Story = {
  args: {
    before: "3.2 days",
    after: "6 hrs",
    label: "Avg. review cycle time",
  },
};

export const Percentage: Story = {
  args: {
    before: "18%",
    after: "4%",
    label: "Defect escape rate",
  },
};

export const Row: Story = {
  render: () => (
    <div className="flex flex-wrap gap-8">
      <ImpactNumber before="3.2 days" after="6 hrs" label="Avg. cycle time" />
      <ImpactNumber before="18%" after="4%" label="Defect escape rate" />
      <ImpactNumber before="40%" after="85%" label="Reviewer satisfaction" />
      <ImpactNumber before="12 min" after="45 sec" label="Time to first feedback" />
    </div>
  ),
};
