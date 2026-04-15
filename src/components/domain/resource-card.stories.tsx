import type { Meta, StoryObj } from "@storybook/react";
import { ResourceCard } from "./resource-card";

const meta: Meta<typeof ResourceCard> = {
  title: "Domain/ResourceCard",
  component: ResourceCard,
  argTypes: {
    tagColor: {
      control: "select",
      options: ["green", "blue", "amber", "red", "purple"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof ResourceCard>;

export const WithTag: Story = {
  args: {
    title: "DORA Metrics: The Four Key Indicators",
    description:
      "Deployment frequency, lead time for changes, mean time to restore, and change failure rate — the four metrics that predict software delivery performance.",
    href: "https://dora.dev",
    tag: "Research",
    tagColor: "blue",
    source: "DORA / Google",
  },
};

export const WithoutTag: Story = {
  args: {
    title: "Accelerate: Building and Scaling High Performing Technology Organizations",
    description:
      "The science behind DevOps: building and scaling high performing technology organizations based on four years of research into 23,000 data points.",
    href: "https://itrevolution.com/accelerate-book",
    source: "Forsgren, Humble & Kim — IT Revolution",
  },
};

export const GreenTag: Story = {
  args: {
    title: "Code Review Best Practices",
    description:
      "A practical guide to effective code review: what to look for, how to give constructive feedback, and how to scale review culture across growing teams.",
    href: "#",
    tag: "Guide",
    tagColor: "green",
  },
};

export const AmberTag: Story = {
  args: {
    title: "Cost of Poor Software Quality in the US",
    description:
      "Quantifying the financial impact of software defects, technical debt, and security vulnerabilities on the US economy.",
    href: "#",
    tag: "Report",
    tagColor: "amber",
    source: "CISQ — Consortium for IT Software Quality",
  },
};

export const Grid: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 max-w-2xl">
      <ResourceCard
        title="DORA Metrics Guide"
        description="The four key metrics that predict high-performing engineering teams."
        href="https://dora.dev"
        tag="Research"
        tagColor="blue"
        source="Google DORA"
      />
      <ResourceCard
        title="Code Review Best Practices"
        description="Practical patterns for effective, scalable code review culture."
        href="#"
        tag="Guide"
        tagColor="green"
      />
      <ResourceCard
        title="AI in Code Review — 2024 Survey"
        description="How teams are adopting AI tooling in their review workflows and what's working."
        href="#"
        tag="Report"
        tagColor="purple"
        source="Stack Overflow Developer Survey"
      />
      <ResourceCard
        title="The Phoenix Project"
        description="A novel about IT, DevOps, and helping your business win — a must-read for engineers."
        href="#"
        source="Kim, Behr & Spafford"
      />
    </div>
  ),
};
