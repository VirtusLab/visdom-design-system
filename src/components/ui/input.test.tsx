import { render, screen } from "@testing-library/react";
import { Input } from "./input";

describe("Input", () => {
  it("renders as an input element", () => {
    render(<Input />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("has data-slot='input'", () => {
    render(<Input />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("data-slot", "input");
  });

  it("accepts type prop", () => {
    render(<Input type="email" />);
    const input = document.querySelector("input[type='email']");
    expect(input).toBeInTheDocument();
  });

  it("is disabled when disabled prop is passed", () => {
    render(<Input disabled />);
    const input = screen.getByRole("textbox");
    expect(input).toBeDisabled();
  });
});
