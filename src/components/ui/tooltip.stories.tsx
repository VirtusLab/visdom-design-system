import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";

const meta: Meta = {
  title: "UI/Tooltip",
  decorators: [
    (Story) => (
      <TooltipProvider>
        <div className="flex items-center justify-center p-16">
          <Story />
        </div>
      </TooltipProvider>
    ),
  ],
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent>This is a helpful tooltip</TooltipContent>
    </Tooltip>
  ),
};

export const TopSide: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Tooltip on top</Button>
      </TooltipTrigger>
      <TooltipContent side="top">Appears above</TooltipContent>
    </Tooltip>
  ),
};

export const BottomSide: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Tooltip on bottom</Button>
      </TooltipTrigger>
      <TooltipContent side="bottom">Appears below</TooltipContent>
    </Tooltip>
  ),
};

export const RightSide: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Tooltip on right</Button>
      </TooltipTrigger>
      <TooltipContent side="right">Appears to the right</TooltipContent>
    </Tooltip>
  ),
};

export const WithLongText: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="secondary">More info</Button>
      </TooltipTrigger>
      <TooltipContent className="max-w-xs">
        This tooltip contains a longer description that wraps across multiple lines
        to give the user extra context about the action.
      </TooltipContent>
    </Tooltip>
  ),
};
