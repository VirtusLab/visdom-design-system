import { render, screen } from "@testing-library/react";
import { Section } from "./section";

describe("Section", () => {
  it("renders children", () => {
    render(<Section>Main content</Section>);
    expect(screen.getByText("Main content")).toBeInTheDocument();
  });

  it("renders id attribute when provided", () => {
    render(<Section id="about">Content</Section>);
    const section = screen.getByText("Content").closest("section");
    expect(section).toHaveAttribute("id", "about");
  });

  it("shows label when provided", () => {
    render(<Section label="Our Work">Content</Section>);
    expect(screen.getByText("Our Work")).toBeInTheDocument();
  });

  it("shows title when provided", () => {
    render(<Section title="Welcome">Content</Section>);
    expect(screen.getByText("Welcome")).toBeInTheDocument();
  });

  it("shows subtitle when provided", () => {
    render(<Section subtitle="A brief description">Content</Section>);
    expect(screen.getByText("A brief description")).toBeInTheDocument();
  });

  it("hides label when not provided", () => {
    render(<Section title="Only Title">Content</Section>);
    // Confirm no element holds a label-like uppercase small text other than the title
    expect(screen.queryByText("Our Work")).toBeNull();
  });

  it("hides title when not provided", () => {
    render(<Section label="Just Label">Content</Section>);
    expect(screen.queryByRole("heading")).toBeNull();
  });

  it("hides subtitle when not provided", () => {
    render(<Section title="Title Only">Content</Section>);
    expect(screen.queryByText("A brief description")).toBeNull();
  });

  it("does not render header block when no label, title, or subtitle", () => {
    const { container } = render(<Section>Just children</Section>);
    // The mb-12 wrapper div should not exist
    expect(container.querySelector(".mb-12")).toBeNull();
  });
});
