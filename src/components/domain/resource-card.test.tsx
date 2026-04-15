import { render, screen } from "@testing-library/react";
import { ResourceCard } from "./resource-card";

describe("ResourceCard", () => {
  it("renders title and description", () => {
    render(
      <ResourceCard
        title="React Docs"
        description="Official React documentation"
        href="https://react.dev"
      />
    );
    expect(screen.getByText("React Docs")).toBeInTheDocument();
    expect(screen.getByText("Official React documentation")).toBeInTheDocument();
  });

  it("renders as an <a> tag with the given href", () => {
    render(
      <ResourceCard
        title="Link Card"
        description="A description"
        href="https://example.com"
      />
    );
    const link = screen.getByRole("link", { name: /Link Card/i });
    expect(link).toHaveAttribute("href", "https://example.com");
  });

  it("renders with target='_blank'", () => {
    render(
      <ResourceCard
        title="External"
        description="Opens in new tab"
        href="https://external.com"
      />
    );
    const link = screen.getByRole("link", { name: /External/i });
    expect(link).toHaveAttribute("target", "_blank");
  });

  it("shows tag when provided", () => {
    render(
      <ResourceCard
        title="Tagged"
        description="Has a tag"
        href="https://example.com"
        tag="Tutorial"
      />
    );
    expect(screen.getByText("Tutorial")).toBeInTheDocument();
  });

  it("hides tag when not provided", () => {
    render(
      <ResourceCard
        title="No Tag"
        description="No tag here"
        href="https://example.com"
      />
    );
    // No tag span should exist
    const spans = document.querySelectorAll("span");
    spans.forEach((span) => {
      expect(span.textContent).not.toBe("Tutorial");
    });
    expect(screen.queryByText("Tutorial")).toBeNull();
  });

  it("shows source when provided", () => {
    render(
      <ResourceCard
        title="Sourced"
        description="Has source"
        href="https://example.com"
        source="From MDN"
      />
    );
    expect(screen.getByText("From MDN")).toBeInTheDocument();
  });

  it("tagColor 'blue' applies blue top border class", () => {
    const { container } = render(
      <ResourceCard
        title="Blue Card"
        description="Blue top"
        href="https://example.com"
        tagColor="blue"
      />
    );
    const link = container.firstChild as HTMLElement;
    expect(link.className).toMatch(/border-t-blue/);
  });

  it("tagColor 'amber' applies amber top border class", () => {
    const { container } = render(
      <ResourceCard
        title="Amber Card"
        description="Amber top"
        href="https://example.com"
        tagColor="amber"
      />
    );
    const link = container.firstChild as HTMLElement;
    expect(link.className).toMatch(/border-t-amber/);
  });
});
