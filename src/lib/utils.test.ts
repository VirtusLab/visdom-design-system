import { cn } from "./utils";

describe("cn()", () => {
  it("merges multiple class strings", () => {
    expect(cn("foo", "bar")).toBe("foo bar");
  });

  it("handles conditional classes (truthy)", () => {
    expect(cn("base", true && "active")).toBe("base active");
  });

  it("handles conditional classes (falsy)", () => {
    expect(cn("base", false && "never")).toBe("base");
  });

  it("handles undefined and null gracefully", () => {
    expect(cn("base", undefined, null)).toBe("base");
  });

  it("deduplicates conflicting Tailwind classes, keeping the last one", () => {
    expect(cn("px-2", "px-4")).toBe("px-4");
  });

  it("deduplicates text size classes", () => {
    expect(cn("text-sm", "text-lg")).toBe("text-lg");
  });

  it("handles object syntax", () => {
    expect(cn({ "text-red-500": true, "text-blue-500": false })).toBe("text-red-500");
  });

  it("returns empty string when no args", () => {
    expect(cn()).toBe("");
  });
});
