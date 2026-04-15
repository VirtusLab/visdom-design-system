import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
} from "./card";

const meta: Meta<typeof Card> = {
  title: "UI/Card",
  component: Card,
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Basic: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>A brief description of the card content.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          This is the main content area of the card. You can put any content here.
        </p>
      </CardContent>
      <CardFooter>
        <Button size="sm">Learn more</Button>
      </CardFooter>
    </Card>
  ),
};

export const WithAction: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Monthly Usage</CardTitle>
        <CardDescription>Your usage statistics for April 2026.</CardDescription>
        <CardAction>
          <Button variant="outline" size="sm">View all</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-bold">12,540</p>
        <p className="text-sm text-muted-foreground mt-1">API calls this month</p>
      </CardContent>
    </Card>
  ),
};

export const Minimal: Story = {
  render: () => (
    <Card className="w-80">
      <CardContent>
        <p className="text-sm text-muted-foreground">
          A minimal card with only content and no header or footer.
        </p>
      </CardContent>
    </Card>
  ),
};
