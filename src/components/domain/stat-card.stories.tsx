import type { Meta, StoryObj } from "@storybook/react";
import { StatCard } from "./stat-card";

const meta: Meta<typeof StatCard> = {
  title: "Domain/StatCard",
  component: StatCard,
  argTypes: {
    color: {
      control: "select",
      options: ["green", "blue", "amber", "red", "purple"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof StatCard>;

export const Green: Story = {
  args: {
    value: "73%",
    label: "of teams report faster code review cycle times after adopting AI tooling",
    source: "McKinsey Developer Velocity, 2024",
    color: "green",
  },
};

export const Blue: Story = {
  args: {
    value: "4×",
    label: "higher deployment frequency for high-performing engineering teams",
    source: "DORA State of DevOps, 2023",
    color: "blue",
  },
};

export const Amber: Story = {
  args: {
    value: "42%",
    label: "of production incidents are caused by configuration drift or missing tests",
    source: "PagerDuty Incident Report, 2024",
    color: "amber",
  },
};

export const Red: Story = {
  args: {
    value: "$1.52M",
    label: "average cost of a critical production outage per hour for enterprise firms",
    source: "Gartner IT Cost Study, 2023",
    color: "red",
  },
};

export const Purple: Story = {
  args: {
    value: "2.6×",
    label: "more likely to exceed business goals for teams with strong DevEx practices",
    source: "DX Core 4 Benchmark, 2024",
    color: "purple",
  },
};

export const WithLink: Story = {
  args: {
    value: "73%",
    label: "of teams report faster code review cycle times after adopting AI tooling",
    source: "McKinsey Developer Velocity, 2024",
    color: "green",
    href: "https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/unleashing-developer-productivity-with-generative-ai",
  },
};

export const AllColors: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 max-w-lg">
      <StatCard value="73%" label="Faster code review cycle times" source="McKinsey, 2024" color="green" />
      <StatCard value="4×" label="Higher deployment frequency" source="DORA, 2023" color="blue" />
      <StatCard value="42%" label="Incidents from config drift" source="PagerDuty, 2024" color="amber" />
      <StatCard value="$1.52M" label="Cost per outage hour" source="Gartner, 2023" color="red" />
      <StatCard value="2.6×" label="More likely to meet business goals" source="DX Core 4, 2024" color="purple" />
    </div>
  ),
};
