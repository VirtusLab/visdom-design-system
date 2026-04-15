import { render, screen } from "@testing-library/react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "./card";

describe("Card", () => {
  it("renders with data-slot='card'", () => {
    const { container } = render(<Card>content</Card>);
    const card = container.firstChild as HTMLElement;
    expect(card).toHaveAttribute("data-slot", "card");
  });

  it("applies custom className", () => {
    const { container } = render(<Card className="my-custom-class">content</Card>);
    const card = container.firstChild as HTMLElement;
    expect(card).toHaveClass("my-custom-class");
  });

  it("renders CardHeader with data-slot='card-header'", () => {
    const { container } = render(<CardHeader>Header</CardHeader>);
    const el = container.firstChild as HTMLElement;
    expect(el).toHaveAttribute("data-slot", "card-header");
    expect(el).toHaveTextContent("Header");
  });

  it("renders CardTitle with data-slot='card-title'", () => {
    const { container } = render(<CardTitle>My Title</CardTitle>);
    const el = container.firstChild as HTMLElement;
    expect(el).toHaveAttribute("data-slot", "card-title");
    expect(el).toHaveTextContent("My Title");
  });

  it("renders CardContent with data-slot='card-content'", () => {
    const { container } = render(<CardContent>Body text</CardContent>);
    const el = container.firstChild as HTMLElement;
    expect(el).toHaveAttribute("data-slot", "card-content");
    expect(el).toHaveTextContent("Body text");
  });

  it("renders CardFooter with data-slot='card-footer'", () => {
    const { container } = render(<CardFooter>Footer</CardFooter>);
    const el = container.firstChild as HTMLElement;
    expect(el).toHaveAttribute("data-slot", "card-footer");
    expect(el).toHaveTextContent("Footer");
  });

  it("renders CardHeader custom className", () => {
    const { container } = render(
      <CardHeader className="extra-header-class">H</CardHeader>
    );
    expect(container.firstChild).toHaveClass("extra-header-class");
  });
});
