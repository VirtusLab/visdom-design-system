import { render, screen } from "@testing-library/react";
import { LayerBadge } from "./layer-badge";

describe("LayerBadge", () => {
  it("renders default label for layer 0", () => {
    render(<LayerBadge layer={0} />);
    expect(screen.getByText("Layer 0: Context")).toBeInTheDocument();
  });

  it("renders default label for layer 1", () => {
    render(<LayerBadge layer={1} />);
    expect(screen.getByText("Layer 1: Deterministic")).toBeInTheDocument();
  });

  it("renders default label for layer 2", () => {
    render(<LayerBadge layer={2} />);
    expect(screen.getByText("Layer 2: AI Quick Scan")).toBeInTheDocument();
  });

  it("renders default label for layer 3", () => {
    render(<LayerBadge layer={3} />);
    expect(screen.getByText("Layer 3: AI Deep Review")).toBeInTheDocument();
  });

  it("custom label overrides default", () => {
    render(<LayerBadge layer={0} label="Custom Label" />);
    expect(screen.getByText("Custom Label")).toBeInTheDocument();
    expect(screen.queryByText("Layer 0: Context")).toBeNull();
  });

  it("layer 0 has gray classes", () => {
    const { container } = render(<LayerBadge layer={0} />);
    const span = container.firstChild as HTMLElement;
    expect(span.className).toMatch(/gray/);
  });

  it("layer 1 has blue classes", () => {
    const { container } = render(<LayerBadge layer={1} />);
    const span = container.firstChild as HTMLElement;
    expect(span.className).toMatch(/blue/);
  });

  it("layer 2 has amber classes", () => {
    const { container } = render(<LayerBadge layer={2} />);
    const span = container.firstChild as HTMLElement;
    expect(span.className).toMatch(/amber/);
  });

  it("layer 3 has purple classes", () => {
    const { container } = render(<LayerBadge layer={3} />);
    const span = container.firstChild as HTMLElement;
    expect(span.className).toMatch(/purple/);
  });
});
