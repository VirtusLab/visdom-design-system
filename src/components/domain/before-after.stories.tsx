import type { Meta, StoryObj } from "@storybook/react";
import { BeforeAfter } from "./before-after";

const meta: Meta<typeof BeforeAfter> = {
  title: "Domain/BeforeAfter",
  component: BeforeAfter,
};
export default meta;

type Story = StoryObj<typeof BeforeAfter>;

export const WithImpacts: Story = {
  args: {
    title: "Code review cycle time",
    before: (
      <>
        <p>Developer opens a PR and waits for a reviewer to be assigned manually.</p>
        <p>Reviewer context-switches from their current task — often next day.</p>
        <p>Back-and-forth comments over 2–4 days before the PR is merged.</p>
      </>
    ),
    after: (
      <>
        <p>PR triggers an automated Layer 0–2 scan within seconds of opening.</p>
        <p>Critical issues are surfaced immediately; human reviewer focuses on logic.</p>
        <p>Same-day merge for routine changes; deep review only where it matters.</p>
      </>
    ),
    impacts: [
      { before: "3.2 days", after: "6 hrs", label: "Avg. cycle time" },
      { before: "18%", after: "4%", label: "Defect escape rate" },
      { before: "40%", after: "85%", label: "Reviewer satisfaction" },
    ],
  },
};

export const WithoutImpacts: Story = {
  args: {
    title: "Onboarding new engineers",
    before: (
      <>
        <p>New hire spends first two weeks reading wiki pages and shadowing seniors.</p>
        <p>Codebase conventions are tribal knowledge — learned by making mistakes.</p>
      </>
    ),
    after: (
      <>
        <p>Automated maturity gate shows exactly what L1 practices to adopt first.</p>
        <p>AI review gives immediate, contextual feedback on every PR from day one.</p>
      </>
    ),
  },
};
