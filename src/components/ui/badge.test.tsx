import { render, screen } from "@testing-library/react";
import { Badge } from "./badge";

describe("Badge", () => {
  it("renders with text", () => {
    render(<Badge>New</Badge>);
    expect(screen.getByText("New")).toBeInTheDocument();
  });

  it("applies variant via data-variant attribute", () => {
    render(<Badge variant="secondary">Beta</Badge>);
    const badge = screen.getByText("Beta");
    expect(badge).toHaveAttribute("data-variant", "secondary");
  });

  it("defaults to 'default' variant", () => {
    render(<Badge>Default</Badge>);
    const badge = screen.getByText("Default");
    expect(badge).toHaveAttribute("data-variant", "default");
  });

  it("applies destructive variant", () => {
    render(<Badge variant="destructive">Error</Badge>);
    const badge = screen.getByText("Error");
    expect(badge).toHaveAttribute("data-variant", "destructive");
  });

  it("applies custom className", () => {
    render(<Badge className="my-badge">Tagged</Badge>);
    const badge = screen.getByText("Tagged");
    expect(badge).toHaveClass("my-badge");
  });
});
