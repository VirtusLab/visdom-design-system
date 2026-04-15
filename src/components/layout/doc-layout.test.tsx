import { render, screen } from "@testing-library/react";
import { DocLayout } from "./doc-layout";

describe("DocLayout", () => {
  it("renders title", () => {
    render(<DocLayout title="Getting Started">Content here</DocLayout>);
    expect(screen.getByText("Getting Started")).toBeInTheDocument();
  });

  it("renders children", () => {
    render(<DocLayout title="My Doc">Child content</DocLayout>);
    expect(screen.getByText("Child content")).toBeInTheDocument();
  });

  it("shows breadcrumbs when provided", () => {
    render(
      <DocLayout
        title="Page"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Docs", href: "/docs" },
          { label: "Page" },
        ]}
      >
        Content
      </DocLayout>
    );
    expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Docs" })).toBeInTheDocument();
    expect(screen.getByText("Page", { selector: "span" })).toBeInTheDocument();
  });

  it("shows tags when provided", () => {
    render(
      <DocLayout title="Tagged Doc" tags={["react", "typescript"]}>
        Content
      </DocLayout>
    );
    expect(screen.getByText("react")).toBeInTheDocument();
    expect(screen.getByText("typescript")).toBeInTheDocument();
  });

  it("shows prev/next navigation when provided", () => {
    render(
      <DocLayout
        title="Middle Page"
        prev={{ label: "Previous Page", href: "/prev" }}
        next={{ label: "Next Page", href: "/next" }}
      >
        Content
      </DocLayout>
    );
    expect(screen.getByRole("link", { name: /Previous Page/ })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Next Page/ })).toBeInTheDocument();
  });

  it("hides sidebar when not provided", () => {
    const { container } = render(
      <DocLayout title="No Sidebar">Content</DocLayout>
    );
    expect(container.querySelector("aside")).toBeNull();
  });

  it("shows sidebar when provided", () => {
    const { container } = render(
      <DocLayout title="With Sidebar" sidebar={<nav>Sidebar nav</nav>}>
        Content
      </DocLayout>
    );
    expect(container.querySelector("aside")).not.toBeNull();
    expect(screen.getByText("Sidebar nav")).toBeInTheDocument();
  });
});
