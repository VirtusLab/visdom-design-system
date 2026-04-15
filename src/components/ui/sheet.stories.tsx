import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./sheet";

const meta: Meta = {
  title: "UI/Sheet",
};
export default meta;

type Story = StoryObj;

export const RightSide: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open right sheet</Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-4 p-4">
          <div className="space-y-1">
            <label className="text-sm font-medium">Name</label>
            <input
              className="w-full rounded-md border px-3 py-1.5 text-sm"
              defaultValue="Alex Skowronski"
            />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium">Email</label>
            <input
              className="w-full rounded-md border px-3 py-1.5 text-sm"
              defaultValue="alex@virtuslab.com"
            />
          </div>
        </div>
        <SheetFooter>
          <Button>Save changes</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
};

export const LeftSide: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open left sheet</Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-2 p-4 text-sm">
          <a href="#" className="hover:text-foreground text-muted-foreground py-1">Dashboard</a>
          <a href="#" className="hover:text-foreground text-muted-foreground py-1">Projects</a>
          <a href="#" className="hover:text-foreground text-muted-foreground py-1">Team</a>
          <a href="#" className="hover:text-foreground text-muted-foreground py-1">Settings</a>
        </div>
      </SheetContent>
    </Sheet>
  ),
};

export const BottomSide: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open bottom sheet</Button>
      </SheetTrigger>
      <SheetContent side="bottom">
        <SheetHeader>
          <SheetTitle>Confirm deletion</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete the project.
          </SheetDescription>
        </SheetHeader>
        <SheetFooter className="flex-row justify-end gap-2">
          <Button variant="outline">Cancel</Button>
          <Button variant="destructive">Delete</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
};
