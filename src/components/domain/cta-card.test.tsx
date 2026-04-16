import { render, screen } from "@testing-library/react";
import { CtaCard } from "./cta-card";

describe("CtaCard", () => {
  it("renders as an <a> tag", () => {
    render(
      <CtaCard
        icon="🚀"
        title="Get Started"
        description="Begin your journey"
        href="/start"
      />
    );
    expect(screen.getByRole("link")).toBeInTheDocument();
  });

  it("shows icon, title, and description", () => {
    render(
      <CtaCard
        icon="🚀"
        title="Get Started"
        description="Begin your journey"
        href="/start"
      />
    );
    expect(screen.getByText("🚀")).toBeInTheDocument();
    expect(screen.getByText("Get Started")).toBeInTheDocument();
    expect(screen.getByText("Begin your journey")).toBeInTheDocument();
  });

  it("external link has target='_blank'", () => {
    render(
      <CtaCard
        icon="🔗"
        title="External Link"
        description="Opens externally"
        href="https://external.com"
        external
      />
    );
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("target", "_blank");
  });

  it("non-external link does not have target='_blank'", () => {
    render(
      <CtaCard
        icon="🔗"
        title="Internal Link"
        description="Internal page"
        href="/internal"
      />
    );
    const link = screen.getByRole("link");
    expect(link).not.toHaveAttribute("target", "_blank");
  });

  it("highlighted card applies primary (blue) color to title", () => {
    render(
      <CtaCard
        icon="⭐"
        title="Featured"
        description="Highlighted card"
        href="/featured"
        highlighted
      />
    );
    const titleEl = screen.getByText("Featured");
    expect(titleEl.className).toMatch(/blue/);
  });

  it("non-highlighted card does not apply blue color to title", () => {
    render(
      <CtaCard
        icon="⭐"
        title="Regular"
        description="Not highlighted"
        href="/regular"
      />
    );
    const titleEl = screen.getByText("Regular");
    expect(titleEl.className).not.toMatch(/blue/);
  });
});
