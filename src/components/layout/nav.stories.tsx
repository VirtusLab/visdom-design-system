import type { Meta, StoryObj } from "@storybook/react";
import { Nav } from "./nav";

const meta: Meta<typeof Nav> = {
  title: "Layout/Nav",
  component: Nav,
  parameters: {
    layout: "fullscreen",
  },
};
export default meta;

type Story = StoryObj<typeof Nav>;

const links = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Maturity model", href: "#model" },
  { label: "Documentation", href: "#docs" },
  { label: "GitHub", href: "https://github.com/virtuslab/visdom", external: true },
];

export const WithCta: Story = {
  args: {
    links,
    cta: { label: "Get started", href: "#start" },
  },
};

export const WithoutCta: Story = {
  args: {
    links,
  },
};

export const CustomBrand: Story = {
  args: {
    brand: (
      <span className="text-lg font-bold text-foreground">
        Acme <span className="text-blue-500">DevTools</span>
      </span>
    ),
    links: [
      { label: "Products", href: "#products" },
      { label: "Pricing", href: "#pricing" },
      { label: "Blog", href: "#blog" },
    ],
    cta: { label: "Sign in", href: "#signin" },
  },
};

export const MinimalLinks: Story = {
  args: {
    links: [
      { label: "Docs", href: "#docs" },
      { label: "Changelog", href: "#changelog" },
    ],
    cta: { label: "Try free", href: "#try" },
  },
};
