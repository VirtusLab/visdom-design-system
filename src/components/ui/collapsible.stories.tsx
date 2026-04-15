import type { Meta, StoryObj } from "@storybook/react";
import { ChevronDown } from "lucide-react";
import { Button } from "./button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./collapsible";

const meta: Meta = {
  title: "UI/Collapsible",
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Collapsible className="w-72 space-y-2">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-semibold">Advanced settings</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="icon-sm">
            <ChevronDown className="h-4 w-4" />
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-2 text-sm">Enable dark mode</div>
        <div className="rounded-md border px-4 py-2 text-sm">Compact layout</div>
        <div className="rounded-md border px-4 py-2 text-sm">Show tooltips</div>
      </CollapsibleContent>
    </Collapsible>
  ),
};

export const OpenByDefault: Story = {
  render: () => (
    <Collapsible defaultOpen className="w-72 space-y-2">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-semibold">Release notes</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="icon-sm">
            <ChevronDown className="h-4 w-4" />
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="space-y-2 text-sm text-muted-foreground">
        <p>v2.4.0 — Added new dashboard widgets and improved performance.</p>
        <p>v2.3.1 — Fixed a bug with date formatting in reports.</p>
        <p>v2.3.0 — New onboarding flow and guided tour.</p>
      </CollapsibleContent>
    </Collapsible>
  ),
};
