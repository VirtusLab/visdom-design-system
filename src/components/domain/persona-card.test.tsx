import { render, screen } from "@testing-library/react";
import { PersonaCard } from "./persona-card";

describe("PersonaCard", () => {
  it("renders name and role", () => {
    render(
      <PersonaCard name="Alice Smith" role="Engineer">
        Some content
      </PersonaCard>
    );
    expect(screen.getByText("Alice Smith")).toBeInTheDocument();
    expect(screen.getByText("Engineer")).toBeInTheDocument();
  });

  it("renders children", () => {
    render(
      <PersonaCard name="Bob" role="Designer">
        Child content here
      </PersonaCard>
    );
    expect(screen.getByText("Child content here")).toBeInTheDocument();
  });

  it("default color is green (has blue class in container)", () => {
    const { container } = render(
      <PersonaCard name="Carol" role="Manager">
        Content
      </PersonaCard>
    );
    const root = container.firstChild as HTMLElement;
    expect(root.className).toMatch(/blue/);
  });

  it("color 'blue' applies blue border class", () => {
    const { container } = render(
      <PersonaCard name="Dave" role="Dev" color="blue">
        Content
      </PersonaCard>
    );
    const root = container.firstChild as HTMLElement;
    expect(root.className).toMatch(/blue/);
  });

  it("color 'purple' applies purple border class", () => {
    const { container } = render(
      <PersonaCard name="Eve" role="PM" color="purple">
        Content
      </PersonaCard>
    );
    const root = container.firstChild as HTMLElement;
    expect(root.className).toMatch(/purple/);
  });

  it("color 'amber' applies amber border class", () => {
    const { container } = render(
      <PersonaCard name="Frank" role="QA" color="amber">
        Content
      </PersonaCard>
    );
    const root = container.firstChild as HTMLElement;
    expect(root.className).toMatch(/amber/);
  });

  it("color 'red' applies red border class", () => {
    const { container } = render(
      <PersonaCard name="Grace" role="Ops" color="red">
        Content
      </PersonaCard>
    );
    const root = container.firstChild as HTMLElement;
    expect(root.className).toMatch(/red/);
  });

  it("custom className is applied", () => {
    const { container } = render(
      <PersonaCard name="Hank" role="Lead" className="my-custom-class">
        Content
      </PersonaCard>
    );
    const root = container.firstChild as HTMLElement;
    expect(root).toHaveClass("my-custom-class");
  });
});
