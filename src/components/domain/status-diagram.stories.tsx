import type { Meta, StoryObj } from "@storybook/react";
import { StatusDiagram } from "./status-diagram";

const meta: Meta<typeof StatusDiagram> = {
  title: "Domain/StatusDiagram",
  component: StatusDiagram,
};
export default meta;

type Story = StoryObj<typeof StatusDiagram>;

export const Ledger: Story = {
  args: {
    rows: [
      { label: "model-call", status: "captured", variant: "success" },
      { label: "tool-invoke", status: "captured", variant: "success" },
      { label: "file-read", status: "captured", variant: "info" },
      { label: "net-request", status: "blocked", variant: "danger" },
      { label: "env-access", status: "warning", variant: "warning" },
    ],
  },
};

export const Sandcat: Story = {
  args: {
    rows: [
      { label: "api.openai.com", status: "allow", variant: "success" },
      { label: "huggingface.co", status: "allow", variant: "success" },
      { label: "pastebin.com", status: "deny", variant: "danger" },
      { label: "unknown-host.io", status: "deny", variant: "danger" },
      { label: "internal-api.corp", status: "audit", variant: "warning" },
    ],
  },
};

export const Mixed: Story = {
  args: {
    rows: [
      { label: "Authentication", status: "passed", variant: "success" },
      { label: "Rate Limiting", status: "active", variant: "info" },
      { label: "Data Exfiltration", status: "blocked", variant: "danger" },
      { label: "Model Drift", status: "monitoring", variant: "warning" },
      { label: "Compliance Check", status: "pending", variant: "neutral" },
    ],
  },
};
