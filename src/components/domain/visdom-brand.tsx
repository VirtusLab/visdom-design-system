import { cn } from "@/lib/utils";

export interface VisdomBrandProps {
  /** Product subtitle, e.g. "Code Review", "Maturity Matrix", "2.0 AI-Native SDLC" */
  product?: string;
  /** Link target. Defaults to "/" */
  href?: string;
  className?: string;
}

/**
 * Consistent "VirtusLab Visdom {product}" brand text.
 * Used in navigation bars across all Visdom sites.
 *
 * Renders: VirtusLab (gray) Visdom (bold) Product (gray)
 */
export function VisdomBrand({
  product,
  href = "/",
  className,
}: VisdomBrandProps) {
  return (
    <a
      href={href}
      className={cn(
        "text-lg font-semibold tracking-tight no-underline hover:opacity-80 transition-opacity",
        className
      )}
    >
      <span className="font-normal text-muted-foreground">VirtusLab</span>{" "}
      Visdom
      {product && (
        <>
          {" "}
          <span className="font-normal text-muted-foreground">{product}</span>
        </>
      )}
    </a>
  );
}
