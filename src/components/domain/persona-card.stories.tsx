import type { Meta, StoryObj } from "@storybook/react";
import { PersonaCard } from "./persona-card";

const meta: Meta<typeof PersonaCard> = {
  title: "Domain/PersonaCard",
  component: PersonaCard,
  argTypes: {
    color: {
      control: "select",
      options: ["green", "blue", "purple", "amber", "red"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof PersonaCard>;

export const Default: Story = {
  args: {
    name: "Marta, Tech Lead",
    role: "Backend Engineer",
    color: "green",
    children: (
      <p>
        "We review 30+ PRs a week. I need the tool to highlight what actually matters —
        not flag every style nit. My team's time is the scarcest resource we have."
      </p>
    ),
  },
};

export const Blue: Story = {
  args: {
    name: "James, Staff Engineer",
    role: "Platform",
    color: "blue",
    children: (
      <p>
        "Security regressions introduced in code review are our biggest risk vector.
        I want every PR to pass a deterministic gate before it touches main."
      </p>
    ),
  },
};

export const Purple: Story = {
  args: {
    name: "Priya, Engineering Manager",
    role: "Manager",
    color: "purple",
    children: (
      <p>
        "I care about cycle time and developer satisfaction. Long review queues tank
        both. I want visibility without micro-managing my team."
      </p>
    ),
  },
};

export const Amber: Story = {
  args: {
    name: "Chen, Senior Developer",
    role: "Frontend",
    color: "amber",
    children: (
      <p>
        "Context switching between my IDE and the review tool costs me 20 minutes per
        PR. An integrated, fast feedback loop is a game changer."
      </p>
    ),
  },
};

export const Red: Story = {
  args: {
    name: "Sofia, DevOps Engineer",
    role: "Infrastructure",
    color: "red",
    children: (
      <p>
        "Infra changes are high-stakes. I need automated checks that verify
        no unintended blast radius before the merge button is available."
      </p>
    ),
  },
};

export const AllPersonas: Story = {
  render: () => (
    <div className="max-w-lg">
      <PersonaCard name="Marta, Tech Lead" role="Backend" color="green">
        <p>Needs signal over noise in PR reviews.</p>
      </PersonaCard>
      <PersonaCard name="James, Staff Engineer" role="Platform" color="blue">
        <p>Focuses on security gates and regression prevention.</p>
      </PersonaCard>
      <PersonaCard name="Priya, EM" role="Manager" color="purple">
        <p>Optimises for cycle time and developer happiness.</p>
      </PersonaCard>
      <PersonaCard name="Chen, Senior Dev" role="Frontend" color="amber">
        <p>Wants fast, integrated feedback without context switching.</p>
      </PersonaCard>
    </div>
  ),
};
