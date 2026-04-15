import { render } from "@testing-library/react";
import { Separator } from "./separator";

describe("Separator", () => {
  it("renders with data-slot='separator'", () => {
    const { container } = render(<Separator />);
    const sep = container.querySelector("[data-slot='separator']");
    expect(sep).toBeInTheDocument();
  });

  it("default orientation is horizontal", () => {
    const { container } = render(<Separator />);
    const sep = container.querySelector("[data-slot='separator']");
    expect(sep).toHaveAttribute("data-orientation", "horizontal");
  });

  it("vertical orientation is applied when specified", () => {
    const { container } = render(<Separator orientation="vertical" />);
    const sep = container.querySelector("[data-slot='separator']");
    expect(sep).toHaveAttribute("data-orientation", "vertical");
  });
});
