import { render, screen } from "@testing-library/react";
import { Button } from "./button";

describe("Button", () => {
  it("renders with children text", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole("button", { name: "Click me" })).toBeInTheDocument();
  });

  it("applies variant via data-variant attribute", () => {
    render(<Button variant="destructive">Delete</Button>);
    const btn = screen.getByRole("button", { name: "Delete" });
    expect(btn).toHaveAttribute("data-variant", "destructive");
  });

  it("applies default variant when no variant specified", () => {
    render(<Button>Default</Button>);
    const btn = screen.getByRole("button", { name: "Default" });
    expect(btn).toHaveAttribute("data-variant", "default");
  });

  it("applies size via data-size attribute", () => {
    render(<Button size="lg">Large</Button>);
    const btn = screen.getByRole("button", { name: "Large" });
    expect(btn).toHaveAttribute("data-size", "lg");
  });

  it("applies default size when no size specified", () => {
    render(<Button>Default size</Button>);
    const btn = screen.getByRole("button", { name: "Default size" });
    expect(btn).toHaveAttribute("data-size", "default");
  });

  it("is disabled when disabled prop is passed", () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByRole("button", { name: "Disabled" })).toBeDisabled();
  });

  it("renders as child element when asChild=true", () => {
    render(
      <Button asChild>
        <a href="/home">Go home</a>
      </Button>
    );
    const link = screen.getByRole("link", { name: "Go home" });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/home");
    expect(link).toHaveAttribute("data-slot", "button");
  });
});
