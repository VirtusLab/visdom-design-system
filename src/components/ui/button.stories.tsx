import type { Meta, StoryObj } from "@storybook/react";
import { Download, Mail, Plus } from "lucide-react";
import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
    },
    size: {
      control: "select",
      options: ["default", "xs", "sm", "lg", "icon", "icon-xs", "icon-sm", "icon-lg"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: { children: "Button" },
};

export const Destructive: Story = {
  args: { variant: "destructive", children: "Delete" },
};

export const Outline: Story = {
  args: { variant: "outline", children: "Outline" },
};

export const Secondary: Story = {
  args: { variant: "secondary", children: "Secondary" },
};

export const Ghost: Story = {
  args: { variant: "ghost", children: "Ghost" },
};

export const Link: Story = {
  args: { variant: "link", children: "Link button" },
};

export const Small: Story = {
  args: { size: "sm", children: "Small" },
};

export const Large: Story = {
  args: { size: "lg", children: "Large" },
};

export const ExtraSmall: Story = {
  args: { size: "xs", children: "Extra small" },
};

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <Download />
        Download
      </>
    ),
  },
};

export const IconOnly: Story = {
  args: {
    size: "icon",
    children: <Plus />,
    "aria-label": "Add item",
  },
};

export const WithLeadingIcon: Story = {
  args: {
    variant: "outline",
    children: (
      <>
        <Mail />
        Send email
      </>
    ),
  },
};

export const Disabled: Story = {
  args: { children: "Disabled", disabled: true },
};
