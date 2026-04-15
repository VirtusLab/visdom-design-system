import type { Meta, StoryObj } from "@storybook/react";
import { SeriesCard } from "./series-card";

const meta: Meta<typeof SeriesCard> = {
  title: "Domain/SeriesCard",
  component: SeriesCard,
};
export default meta;

type Story = StoryObj<typeof SeriesCard>;

export const Default: Story = {
  args: {
    title: "Agent-Native CI",
    color: "#10b981",
    description:
      "A deep dive into building CI/CD pipelines optimized for AI agent workflows — from sandboxing to machine-speed feedback loops.",
    stats: "5 articles",
    featured: {
      title: "The Ferrari Engine in a Fiat 500: Why Your CI Is the Real Bottleneck",
      date: "Mar 2025",
      href: "https://virtuslab.com/blog/ai/the-fallacy/",
    },
    articles: [
      {
        title: "Agent Sandboxing: Safe Execution Without Side Effects",
        date: "Feb 2025",
        href: "#",
      },
      {
        title: "Tracing AI Agent Activity in Production",
        date: "Jan 2025",
        href: "#",
      },
      {
        title: "Context Fabric: Giving Agents Real Codebase Understanding",
        date: "Dec 2024",
        href: "#",
      },
    ],
    ctaLabel: "View all articles",
    ctaHref: "#series",
  },
};

export const PurpleSeries: Story = {
  args: {
    title: "AI Maturity",
    color: "#9b51e0",
    description:
      "Practical guides for assessing and improving your organization's AI engineering maturity across development, delivery, and infrastructure.",
    stats: "3 articles",
    featured: {
      title: "From Ad-hoc to Autonomous: The 5 Levels of AI Maturity",
      date: "Apr 2025",
      href: "#",
    },
    articles: [
      {
        title: "Running a Maturity Assessment Workshop",
        date: "Mar 2025",
        href: "#",
      },
      {
        title: "Infrastructure Perspective: What L3 Actually Looks Like",
        date: "Feb 2025",
        href: "#",
      },
    ],
    ctaLabel: "Read the series",
    ctaHref: "#maturity-series",
  },
};

export const TwoCards: Story = {
  render: () => (
    <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
      <SeriesCard
        title="Agent-Native CI"
        color="#10b981"
        description="Building CI/CD pipelines for AI agents."
        stats="5 articles"
        featured={{
          title: "Why Your CI Is the Real Bottleneck",
          date: "Mar 2025",
          href: "#",
        }}
        articles={[
          { title: "Agent Sandboxing", date: "Feb 2025", href: "#" },
          { title: "Tracing Activity", date: "Jan 2025", href: "#" },
        ]}
        ctaLabel="View all"
        ctaHref="#"
      />
      <SeriesCard
        title="AI Maturity"
        color="#9b51e0"
        description="Assessing and improving AI engineering maturity."
        stats="3 articles"
        featured={{
          title: "The 5 Levels of AI Maturity",
          date: "Apr 2025",
          href: "#",
        }}
        articles={[
          { title: "Workshop Guide", date: "Mar 2025", href: "#" },
          { title: "What L3 Looks Like", date: "Feb 2025", href: "#" },
        ]}
        ctaLabel="Read series"
        ctaHref="#"
      />
    </div>
  ),
};
