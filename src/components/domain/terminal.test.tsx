import { render, screen } from "@testing-library/react";
import { Terminal } from "./terminal";

describe("Terminal", () => {
  it("renders children", () => {
    render(<Terminal>$ npm install</Terminal>);
    expect(screen.getByText("$ npm install")).toBeInTheDocument();
  });

  it("shows provided title", () => {
    render(<Terminal title="My Shell">$ echo hello</Terminal>);
    expect(screen.getByText("My Shell")).toBeInTheDocument();
  });

  it("default title is 'Terminal'", () => {
    render(<Terminal>$ ls</Terminal>);
    expect(screen.getByText("Terminal")).toBeInTheDocument();
  });

  it("has three traffic light dot spans", () => {
    const { container } = render(<Terminal>content</Terminal>);
    // The traffic light dots are the first three spans in the header bar
    const headerBar = container.querySelector(".flex.items-center.gap-1\\.5");
    expect(headerBar).not.toBeNull();
    const spans = headerBar!.querySelectorAll("span");
    // 3 colored dot spans + 1 title span = 4 spans total, but check for the 3 colored ones
    const coloredDots = Array.from(spans).filter(
      (s) =>
        s.className.includes("bg-red") ||
        s.className.includes("bg-yellow") ||
        s.className.includes("bg-green")
    );
    expect(coloredDots).toHaveLength(3);
  });
});
