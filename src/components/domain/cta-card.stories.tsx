import type { Meta, StoryObj } from "@storybook/react";
import { CtaCard } from "./cta-card";

const meta: Meta<typeof CtaCard> = {
  title: "Domain/CtaCard",
  component: CtaCard,
};
export default meta;

type Story = StoryObj<typeof CtaCard>;

export const Default: Story = {
  args: {
    icon: "📖",
    title: "Read the documentation",
    description: "Explore guides, API references, and integration examples for every component.",
    href: "#docs",
  },
};

export const Highlighted: Story = {
  args: {
    icon: "🚀",
    title: "Get started for free",
    description: "Set up AI-assisted code review in your repository in under 10 minutes.",
    href: "#start",
    highlighted: true,
  },
};

export const ExternalLink: Story = {
  args: {
    icon: "⭐",
    title: "Star on GitHub",
    description: "Follow the project and stay up to date with the latest releases.",
    href: "https://github.com",
    external: true,
  },
};

export const Grid: Story = {
  render: () => (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
      <CtaCard
        icon="🚀"
        title="Get started"
        description="Set up AI review in your repo in minutes."
        href="#start"
        highlighted
      />
      <CtaCard
        icon="📖"
        title="Documentation"
        description="Guides, API refs, and integration examples."
        href="#docs"
      />
      <CtaCard
        icon="💬"
        title="Community"
        description="Join engineers discussing best practices."
        href="#community"
        external
      />
    </div>
  ),
};
