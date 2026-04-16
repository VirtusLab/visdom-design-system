import { render, screen } from "@testing-library/react";
import { Callout } from "./callout";

describe("Callout", () => {
  it("renders children", () => {
    render(<Callout>Some callout content</Callout>);
    expect(screen.getByText("Some callout content")).toBeInTheDocument();
  });

  it("shows title when provided", () => {
    render(<Callout title="Important">Details here</Callout>);
    expect(screen.getByText(/Important/)).toBeInTheDocument();
  });

  it("does not render a title element when title is not provided", () => {
    render(<Callout>No title here</Callout>);
    // The only text in the document should be the children content
    expect(screen.queryByRole("paragraph")).toBeNull();
  });

  it("type 'info' has blue classes", () => {
    const { container } = render(<Callout type="info">Info content</Callout>);
    const root = container.firstChild as HTMLElement;
    expect(root.className).toMatch(/blue/);
  });

  it("type 'warning' has amber classes", () => {
    const { container } = render(<Callout type="warning">Warning content</Callout>);
    const root = container.firstChild as HTMLElement;
    expect(root.className).toMatch(/amber/);
  });

  it("type 'tip' has blue classes", () => {
    const { container } = render(<Callout type="tip">Tip content</Callout>);
    const root = container.firstChild as HTMLElement;
    expect(root.className).toMatch(/blue/);
  });

  it("defaults to type 'info' (blue classes)", () => {
    const { container } = render(<Callout>Default type</Callout>);
    const root = container.firstChild as HTMLElement;
    expect(root.className).toMatch(/blue/);
  });
});
