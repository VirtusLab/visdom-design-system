import { render, screen } from "@testing-library/react";
import { Footer } from "./footer";

const defaultLinks = [
  { label: "GitHub", href: "https://github.com/example" },
  { label: "Docs", href: "https://docs.example.com" },
];

describe("Footer", () => {
  it("renders default brand", () => {
    render(<Footer links={defaultLinks} />);
    expect(screen.getByText("Dom")).toBeInTheDocument();
    expect(screen.getByText("Vis")).toBeInTheDocument();
    expect(screen.getByText("Powered by VirtusLab")).toBeInTheDocument();
  });

  it("renders custom brand when provided", () => {
    render(<Footer brand={<span>Custom Brand</span>} links={defaultLinks} />);
    expect(screen.getByText("Custom Brand")).toBeInTheDocument();
  });

  it("renders links", () => {
    render(<Footer links={defaultLinks} />);
    expect(screen.getByRole("link", { name: "GitHub" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Docs" })).toBeInTheDocument();
  });

  it("links have target='_blank'", () => {
    render(<Footer links={defaultLinks} />);
    const githubLink = screen.getByRole("link", { name: "GitHub" });
    expect(githubLink).toHaveAttribute("target", "_blank");
    const docsLink = screen.getByRole("link", { name: "Docs" });
    expect(docsLink).toHaveAttribute("target", "_blank");
  });
});
