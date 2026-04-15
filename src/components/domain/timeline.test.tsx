import { render, screen } from "@testing-library/react";
import { Timeline, type TimelineStep } from "./timeline";

const steps: TimelineStep[] = [
  { number: 1, title: "Discovery", description: "Understand the problem space" },
  { number: 2, title: "Design", duration: "2 weeks", description: "Create mockups and prototypes" },
  { number: 3, title: "Build", description: "Implement the solution" },
];

describe("Timeline", () => {
  it("renders all steps", () => {
    render(<Timeline steps={steps} />);
    // Each step title appears twice (desktop + mobile layout)
    expect(screen.getAllByText("Discovery").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Design").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Build").length).toBeGreaterThanOrEqual(1);
  });

  it("each step shows its number", () => {
    render(<Timeline steps={steps} />);
    // Numbers appear in both desktop and mobile layouts
    expect(screen.getAllByText("1").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("2").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("3").length).toBeGreaterThanOrEqual(1);
  });

  it("each step shows its description", () => {
    render(<Timeline steps={steps} />);
    expect(
      screen.getAllByText("Understand the problem space").length
    ).toBeGreaterThanOrEqual(1);
    expect(
      screen.getAllByText("Create mockups and prototypes").length
    ).toBeGreaterThanOrEqual(1);
  });

  it("shows duration when provided", () => {
    render(<Timeline steps={steps} />);
    expect(screen.getAllByText("2 weeks").length).toBeGreaterThanOrEqual(1);
  });

  it("does not show duration when not provided", () => {
    const stepWithoutDuration: TimelineStep[] = [
      { number: 1, title: "Only Step", description: "No duration here" },
    ];
    render(<Timeline steps={stepWithoutDuration} />);
    // No duration text present
    expect(screen.queryByText(/week|day|month/)).toBeNull();
  });
});
