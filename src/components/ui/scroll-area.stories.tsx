import type { Meta, StoryObj } from "@storybook/react";
import { ScrollArea } from "./scroll-area";
import { Separator } from "./separator";

const meta: Meta<typeof ScrollArea> = {
  title: "UI/ScrollArea",
  component: ScrollArea,
};
export default meta;

type Story = StoryObj<typeof ScrollArea>;

const tags = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Vite",
  "Tailwind CSS",
  "Storybook",
  "Vitest",
  "Playwright",
  "Node.js",
  "Bun",
  "pnpm",
  "ESLint",
  "Prettier",
  "Zod",
  "Zustand",
  "Radix UI",
  "Framer Motion",
  "shadcn/ui",
  "Lucide",
];

export const VerticalList: Story = {
  render: () => (
    <ScrollArea className="h-64 w-56 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium">Technologies</h4>
        {tags.map((tag, i) => (
          <div key={tag}>
            <div className="text-sm">{tag}</div>
            {i < tags.length - 1 && <Separator className="my-2" />}
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const LongText: Story = {
  render: () => (
    <ScrollArea className="h-48 w-80 rounded-md border p-4">
      <p className="text-sm leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <p className="text-sm leading-relaxed mt-4">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p className="text-sm leading-relaxed mt-4">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
        doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
        veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      </p>
    </ScrollArea>
  ),
};
