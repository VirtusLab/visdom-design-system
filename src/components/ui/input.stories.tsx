import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input";

const meta: Meta<typeof Input> = {
  title: "UI/Input",
  component: Input,
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    type: "text",
    defaultValue: "Hello world",
  },
};

export const WithPlaceholder: Story = {
  args: {
    type: "email",
    placeholder: "you@example.com",
  },
};

export const Disabled: Story = {
  args: {
    type: "text",
    defaultValue: "Cannot edit this",
    disabled: true,
  },
};

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "Enter your password",
  },
};

export const Search: Story = {
  args: {
    type: "search",
    placeholder: "Search components…",
  },
};
