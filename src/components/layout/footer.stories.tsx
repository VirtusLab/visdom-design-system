import type { Meta, StoryObj } from "@storybook/react";
import { Footer } from "./footer";

const meta: Meta<typeof Footer> = {
  title: "Layout/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
  },
};
export default meta;

type Story = StoryObj<typeof Footer>;

const links = [
  { label: "GitHub", href: "https://github.com/virtuslab/visdom" },
  { label: "Documentation", href: "#docs" },
  { label: "Privacy", href: "#privacy" },
  { label: "Terms", href: "#terms" },
];

export const Default: Story = {
  args: {
    links,
  },
};

export const CustomBrand: Story = {
  args: {
    brand: (
      <div className="text-sm text-muted-foreground">
        <span className="font-bold text-foreground">Acme Corp</span>
        {" · "}Built with VisDom
      </div>
    ),
    links,
  },
};

export const MinimalLinks: Story = {
  args: {
    links: [
      { label: "GitHub", href: "https://github.com" },
      { label: "Twitter", href: "https://twitter.com" },
    ],
  },
};
