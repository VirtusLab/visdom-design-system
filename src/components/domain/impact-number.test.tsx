import { render, screen } from "@testing-library/react";
import { ImpactNumber } from "./impact-number";

describe("ImpactNumber", () => {
  it("renders before, after, and label", () => {
    render(<ImpactNumber before="10h" after="1h" label="Review time" />);
    expect(screen.getByText("10h")).toBeInTheDocument();
    expect(screen.getByText("1h")).toBeInTheDocument();
    expect(screen.getByText("Review time")).toBeInTheDocument();
  });

  it("before value has line-through class", () => {
    render(<ImpactNumber before="50" after="5" label="Issues" />);
    const beforeSpan = screen.getByText("50");
    expect(beforeSpan.className).toMatch(/line-through/);
  });

  it("after value has font-bold class", () => {
    render(<ImpactNumber before="50" after="5" label="Issues" />);
    const afterSpan = screen.getByText("5");
    expect(afterSpan.className).toMatch(/font-bold/);
  });
});
