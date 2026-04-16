import type { Meta, StoryObj } from "@storybook/react";
import { VisdomStrip } from "./visdom-strip";

const meta: Meta<typeof VisdomStrip> = {
  title: "Domain/VisdomStrip",
  component: VisdomStrip,
  parameters: {
    layout: "fullscreen",
  },
};
export default meta;

type Story = StoryObj<typeof VisdomStrip>;

export const Default: Story = {
  args: {},
};

export const WithActiveProduct: Story = {
  args: {
    products: [
      { name: "ViDIA", role: "Context Fabric", href: "/products/vidia" },
      { name: "VCR", role: "Code Review", href: "/products/vcr", active: true },
      { name: "Testing", role: "Quality Assurance", href: "/products/testing" },
      { name: "Security", role: "AppSec & Governance", href: "/products/security" },
      { name: "Governance", role: "AI Oversight", href: "/products/governance" },
    ],
  },
};

export const CustomProducts: Story = {
  args: {
    products: [
      { name: "Platform A", role: "Core Infrastructure", href: "#a", active: true },
      { name: "Platform B", role: "Data Layer", href: "#b" },
      { name: "Platform C", role: "Analytics", href: "#c" },
    ],
  },
};
