import { render, screen } from "@testing-library/react";
import { BeforeAfter } from "./before-after";

describe("BeforeAfter", () => {
  it("renders title", () => {
    render(
      <BeforeAfter
        title="Code Review Process"
        before={<p>Manual review</p>}
        after={<p>Automated review</p>}
      />
    );
    expect(screen.getByText("Code Review Process")).toBeInTheDocument();
  });

  it("renders before and after content", () => {
    render(
      <BeforeAfter
        title="Comparison"
        before={<p>Before content</p>}
        after={<p>After content</p>}
      />
    );
    expect(screen.getByText("Before content")).toBeInTheDocument();
    expect(screen.getByText("After content")).toBeInTheDocument();
  });

  it("shows BEFORE and AFTER labels", () => {
    render(
      <BeforeAfter
        title="Comparison"
        before={<p>Old way</p>}
        after={<p>New way</p>}
      />
    );
    expect(screen.getByText("BEFORE")).toBeInTheDocument();
    expect(screen.getByText("AFTER")).toBeInTheDocument();
  });

  it("shows impacts when provided", () => {
    render(
      <BeforeAfter
        title="Comparison"
        before={<p>Old</p>}
        after={<p>New</p>}
        impacts={[
          { before: "10h", after: "1h", label: "Review time" },
          { before: "50", after: "5", label: "Issues" },
        ]}
      />
    );
    expect(screen.getByText("10h")).toBeInTheDocument();
    expect(screen.getByText("1h")).toBeInTheDocument();
    expect(screen.getByText("Review time")).toBeInTheDocument();
    expect(screen.getByText("50")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
    expect(screen.getByText("Issues")).toBeInTheDocument();
  });

  it("hides impacts section when not provided", () => {
    render(
      <BeforeAfter
        title="Comparison"
        before={<p>Old</p>}
        after={<p>New</p>}
      />
    );
    // There should be no border-t separating the impacts section
    const { container } = render(
      <BeforeAfter
        title="Comparison"
        before={<p>Old</p>}
        after={<p>New</p>}
      />
    );
    expect(container.querySelector(".border-t")).toBeNull();
  });
});
