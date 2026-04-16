import { render, screen, fireEvent } from "@testing-library/react";
import { Nav } from "./nav";

const defaultLinks = [
  { label: "Docs", href: "/docs" },
  { label: "Components", href: "/components" },
];

describe("Nav", () => {
  it("renders default Visdom brand", () => {
    render(<Nav links={defaultLinks} />);
    expect(screen.getByText("Visdom")).toBeInTheDocument();
  });

  it("renders custom brand when provided", () => {
    render(<Nav brand={<span>MyBrand</span>} links={defaultLinks} />);
    expect(screen.getByText("MyBrand")).toBeInTheDocument();
  });

  it("renders navigation links", () => {
    render(<Nav links={defaultLinks} />);
    const docsLinks = screen.getAllByRole("link", { name: "Docs" });
    expect(docsLinks.length).toBeGreaterThan(0);
    const componentsLinks = screen.getAllByRole("link", { name: "Components" });
    expect(componentsLinks.length).toBeGreaterThan(0);
  });

  it("shows CTA button when provided", () => {
    render(
      <Nav
        links={defaultLinks}
        cta={{ label: "Sign Up", href: "/signup" }}
      />
    );
    const ctaLinks = screen.getAllByRole("link", { name: "Sign Up" });
    expect(ctaLinks.length).toBeGreaterThan(0);
  });

  it("mobile menu is hidden by default", () => {
    render(<Nav links={defaultLinks} />);
    // The mobile menu div only appears when mobileOpen is true
    // Check that link text appears only in desktop nav (not the mobile menu)
    const toggleButton = screen.getByRole("button", { name: "Toggle menu" });
    expect(toggleButton).toBeInTheDocument();
    // Mobile menu content should not be visible (the panel div is not rendered)
    // We can check that there is no second set of duplicated links visible
    const docsLinks = screen.getAllByRole("link", { name: "Docs" });
    // Only desktop links when mobile menu is closed (rendered once in desktop nav)
    expect(docsLinks).toHaveLength(1);
  });

  it("clicking mobile toggle shows menu", () => {
    render(<Nav links={defaultLinks} />);
    const toggleButton = screen.getByRole("button", { name: "Toggle menu" });
    fireEvent.click(toggleButton);
    // After clicking, mobile menu should render, giving us duplicate links
    const docsLinks = screen.getAllByRole("link", { name: "Docs" });
    expect(docsLinks.length).toBeGreaterThan(1);
  });
});
