import type { Meta, StoryObj } from "@storybook/react";
import { Separator } from "./separator";

const meta: Meta<typeof Separator> = {
  title: "UI/Separator",
  component: Separator,
};
export default meta;

type Story = StoryObj<typeof Separator>;

export const Horizontal: Story = {
  render: () => (
    <div className="w-64">
      <p className="text-sm">Above the separator</p>
      <Separator className="my-4" />
      <p className="text-sm">Below the separator</p>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className="flex h-8 items-center gap-4">
      <span className="text-sm">Left</span>
      <Separator orientation="vertical" />
      <span className="text-sm">Middle</span>
      <Separator orientation="vertical" />
      <span className="text-sm">Right</span>
    </div>
  ),
};

export const InToolbar: Story = {
  render: () => (
    <div className="flex items-center gap-2 h-8 text-sm text-muted-foreground">
      <span>File</span>
      <Separator orientation="vertical" />
      <span>Edit</span>
      <Separator orientation="vertical" />
      <span>View</span>
      <Separator orientation="vertical" />
      <span>Help</span>
    </div>
  ),
};
