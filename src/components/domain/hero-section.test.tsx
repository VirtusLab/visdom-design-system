import { render, screen } from "@testing-library/react";
import { HeroSection } from "./hero-section";

describe("HeroSection", () => {
  it("renders title and subtitle", () => {
    render(<HeroSection title="Welcome to Visdom" subtitle="A great design system" />);
    expect(screen.getByText("Welcome to Visdom")).toBeInTheDocument();
    expect(screen.getByText("A great design system")).toBeInTheDocument();
  });

  it("shows badge when provided", () => {
    render(
      <HeroSection title="Hello" subtitle="World" badge="New Release" />
    );
    expect(screen.getByText("New Release")).toBeInTheDocument();
  });

  it("hides badge when not provided", () => {
    render(<HeroSection title="Hello" subtitle="World" />);
    expect(screen.queryByText("New Release")).toBeNull();
  });

  it("shows stats when provided", () => {
    render(
      <HeroSection
        title="Hello"
        subtitle="World"
        stats={[
          { value: "99%", label: "Uptime" },
          { value: "10x", label: "Faster" },
        ]}
      />
    );
    expect(screen.getByText("99%")).toBeInTheDocument();
    expect(screen.getByText("Uptime")).toBeInTheDocument();
    expect(screen.getByText("10x")).toBeInTheDocument();
    expect(screen.getByText("Faster")).toBeInTheDocument();
  });

  it("shows actions when provided", () => {
    render(
      <HeroSection
        title="Hello"
        subtitle="World"
        actions={[
          { label: "Get Started", href: "/start" },
          { label: "Learn More", href: "/learn", variant: "outline" },
        ]}
      />
    );
    expect(screen.getByRole("link", { name: "Get Started" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Learn More" })).toBeInTheDocument();
  });

  it("dark variant applies dark gradient classes", () => {
    const { container } = render(
      <HeroSection title="Dark Hero" subtitle="Dark subtitle" variant="dark" />
    );
    const section = container.firstChild as HTMLElement;
    expect(section.className).toMatch(/from-gray-950/);
  });

  it("light variant is the default (no dark gradient classes)", () => {
    const { container } = render(
      <HeroSection title="Light Hero" subtitle="Light subtitle" />
    );
    const section = container.firstChild as HTMLElement;
    expect(section.className).not.toMatch(/from-gray-950/);
  });
});
