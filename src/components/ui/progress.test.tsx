import { render } from "@testing-library/react";
import { Progress } from "./progress";

describe("Progress", () => {
  it("renders with data-slot='progress'", () => {
    const { container } = render(<Progress value={50} />);
    const progressEl = container.querySelector("[data-slot='progress']");
    expect(progressEl).toBeInTheDocument();
  });

  it("indicator transforms based on value prop at 0", () => {
    const { container } = render(<Progress value={0} />);
    const indicator = container.querySelector("[data-slot='progress-indicator']") as HTMLElement;
    expect(indicator).not.toBeNull();
    expect(indicator.style.transform).toBe("translateX(-100%)");
  });

  it("indicator transforms based on value prop at 50", () => {
    const { container } = render(<Progress value={50} />);
    const indicator = container.querySelector("[data-slot='progress-indicator']") as HTMLElement;
    expect(indicator).not.toBeNull();
    expect(indicator.style.transform).toBe("translateX(-50%)");
  });

  it("indicator transforms based on value prop at 100", () => {
    const { container } = render(<Progress value={100} />);
    const indicator = container.querySelector("[data-slot='progress-indicator']") as HTMLElement;
    expect(indicator).not.toBeNull();
    expect(indicator.style.transform).toBe("translateX(-0%)");
  });
});
