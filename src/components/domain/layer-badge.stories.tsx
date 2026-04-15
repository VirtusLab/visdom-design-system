import type { Meta, StoryObj } from "@storybook/react";
import { LayerBadge } from "./layer-badge";

const meta: Meta<typeof LayerBadge> = {
  title: "Domain/LayerBadge",
  component: LayerBadge,
  argTypes: {
    layer: {
      control: "select",
      options: [0, 1, 2, 3],
    },
  },
};
export default meta;

type Story = StoryObj<typeof LayerBadge>;

export const Layer0: Story = {
  args: { layer: 0 },
};

export const Layer1: Story = {
  args: { layer: 1 },
};

export const Layer2: Story = {
  args: { layer: 2 },
};

export const Layer3: Story = {
  args: { layer: 3 },
};

export const AllLayers: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <LayerBadge layer={0} />
      <LayerBadge layer={1} />
      <LayerBadge layer={2} />
      <LayerBadge layer={3} />
    </div>
  ),
};

export const CustomLabels: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <LayerBadge layer={0} label="Context" />
      <LayerBadge layer={1} label="Lint & Types" />
      <LayerBadge layer={2} label="AI Quick Scan" />
      <LayerBadge layer={3} label="AI Deep Review" />
    </div>
  ),
};

export const InContext: Story = {
  render: () => (
    <div className="space-y-3 max-w-md">
      {([0, 1, 2, 3] as const).map((layer) => (
        <div key={layer} className="flex items-center gap-3 p-3 rounded-lg border">
          <LayerBadge layer={layer} />
          <span className="text-sm text-muted-foreground">
            {layer === 0 && "Collects repo metadata, PR title, diff size"}
            {layer === 1 && "Linting, type checking, test coverage gates"}
            {layer === 2 && "AI scans for common patterns and smells"}
            {layer === 3 && "AI performs deep architectural review"}
          </span>
        </div>
      ))}
    </div>
  ),
};
