import { render, screen } from "@testing-library/react";
import { StatCard } from "./stat-card";

describe("StatCard", () => {
  it("renders value, label, and source", () => {
    render(
      <StatCard value="42%" label="Efficiency gain" source="Internal report 2024" color="green" />
    );
    expect(screen.getByText("42%")).toBeInTheDocument();
    expect(screen.getByText("Efficiency gain")).toBeInTheDocument();
    expect(screen.getByText("Internal report 2024")).toBeInTheDocument();
  });

  it("color 'green' applies emerald classes", () => {
    const { container } = render(
      <StatCard value="10x" label="Growth" source="Source A" color="green" />
    );
    const root = container.firstChild as HTMLElement;
    expect(root.className).toMatch(/emerald/);
  });

  it("color 'blue' applies blue classes", () => {
    const { container } = render(
      <StatCard value="99%" label="Uptime" source="Source B" color="blue" />
    );
    const root = container.firstChild as HTMLElement;
    expect(root.className).toMatch(/blue/);
  });

  it("applies custom className", () => {
    const { container } = render(
      <StatCard value="1" label="One" source="Src" color="red" className="custom-class" />
    );
    const root = container.firstChild as HTMLElement;
    expect(root).toHaveClass("custom-class");
  });
});
