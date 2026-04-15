import { render, screen } from "@testing-library/react";
import { SolutionCard } from "./solution-card";

const defaultProps = {
  title: "AI Code Review",
  subtitle: "Automated quality gate",
  problem: "Manual reviews take too long",
  capabilities: ["Detects bugs", "Enforces standards"],
  tags: [
    { label: "AI", color: "emerald" as const },
    { label: "DevOps", color: "blue" as const },
  ],
  ctas: [
    { label: "Learn More", href: "/learn" },
    { label: "Get Started", href: "/start", external: true },
  ],
};

describe("SolutionCard", () => {
  it("renders title, subtitle, and problem", () => {
    render(<SolutionCard {...defaultProps} />);
    expect(screen.getByText("AI Code Review")).toBeInTheDocument();
    expect(screen.getByText("Automated quality gate")).toBeInTheDocument();
    expect(screen.getByText("Manual reviews take too long")).toBeInTheDocument();
  });

  it("shows tags", () => {
    render(<SolutionCard {...defaultProps} />);
    expect(screen.getByText("AI")).toBeInTheDocument();
    expect(screen.getByText("DevOps")).toBeInTheDocument();
  });

  it("shows capabilities list", () => {
    render(<SolutionCard {...defaultProps} />);
    expect(screen.getByText("Detects bugs")).toBeInTheDocument();
    expect(screen.getByText("Enforces standards")).toBeInTheDocument();
  });

  it("shows CTA buttons", () => {
    render(<SolutionCard {...defaultProps} />);
    expect(screen.getByRole("link", { name: /Learn More/ })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Get Started/ })).toBeInTheDocument();
  });

  it("shows metric when provided", () => {
    render(
      <SolutionCard
        {...defaultProps}
        metric={{ lines: ["Reduced review time by 80%", "Zero false positives"] }}
      />
    );
    expect(screen.getByText("Reduced review time by 80%")).toBeInTheDocument();
    expect(screen.getByText("Zero false positives")).toBeInTheDocument();
  });

  it("hides metric when not provided", () => {
    render(<SolutionCard {...defaultProps} />);
    expect(screen.queryByText("Reduced review time by 80%")).toBeNull();
  });
});
