import type { Meta, StoryObj } from "@storybook/react";
import { Progress } from "./progress";

const meta: Meta<typeof Progress> = {
  title: "UI/Progress",
  component: Progress,
  argTypes: {
    value: { control: { type: "range", min: 0, max: 100, step: 1 } },
  },
};
export default meta;

type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  args: { value: 60, className: "w-64" },
};

export const Empty: Story = {
  args: { value: 0, className: "w-64" },
};

export const Half: Story = {
  args: { value: 50, className: "w-64" },
};

export const Full: Story = {
  args: { value: 100, className: "w-64" },
};

export const MultipleSteps: Story = {
  render: () => (
    <div className="space-y-4 w-64">
      <div>
        <div className="flex justify-between text-xs text-muted-foreground mb-1">
          <span>Step 1: Planning</span>
          <span>100%</span>
        </div>
        <Progress value={100} />
      </div>
      <div>
        <div className="flex justify-between text-xs text-muted-foreground mb-1">
          <span>Step 2: Development</span>
          <span>72%</span>
        </div>
        <Progress value={72} />
      </div>
      <div>
        <div className="flex justify-between text-xs text-muted-foreground mb-1">
          <span>Step 3: Testing</span>
          <span>15%</span>
        </div>
        <Progress value={15} />
      </div>
      <div>
        <div className="flex justify-between text-xs text-muted-foreground mb-1">
          <span>Step 4: Deployment</span>
          <span>0%</span>
        </div>
        <Progress value={0} />
      </div>
    </div>
  ),
};
