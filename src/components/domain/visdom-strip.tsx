import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface VisdomProduct {
  name: string;
  role: string;
  description?: string;
  href: string;
  active?: boolean;
}

export interface VisdomStripProps {
  heading?: string;
  subtitle?: ReactNode;
  products?: VisdomProduct[];
  footer?: ReactNode;
  className?: string;
}

const DEFAULT_PRODUCTS: VisdomProduct[] = [
  {
    role: "Context Fabric",
    name: "ViDIA",
    description:
      "Pre-indexed code expertise, dependency graphs, PR history",
    href: "https://github.com/virtuslab/vidia",
  },
  {
    role: "Machine-Speed CI",
    name: "Fast Feedback",
    description:
      "Sub-2-min CI loops, caching, incremental builds, test impact analysis",
    href: "https://virtuslab.com/services/visdom",
  },
  {
    role: "Risk Assessment",
    name: "VCR",
    description: "Multi-layered AI code review",
    href: "https://virtuslab.github.io/visdom-code-review/",
  },
  {
    role: "Governance",
    name: "TraceVault",
    description:
      "Audit trail, auto-evaluation, EU AI Act compliance",
    href: "https://virtuslab.github.io/visdom-governance/",
  },
];

export function VisdomStrip({
  heading = "Part of Visdom",
  subtitle,
  products,
  footer,
  className,
}: VisdomStripProps) {
  const items = products ?? DEFAULT_PRODUCTS;

  return (
    <section className={cn("py-16 text-center", className)}>
      <div className="max-w-[1200px] mx-auto px-6">
        <h2
          className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {heading}
        </h2>
        {subtitle && (
          <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
          {items.map((product) => (
            <a
              key={product.name}
              href={product.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "flex flex-col items-center rounded-xl border px-5 py-6 text-center transition-colors no-underline",
                product.active
                  ? "border-primary bg-primary/5"
                  : "border-border bg-card hover:border-primary/40 hover:bg-accent/50"
              )}
            >
              <span
                className={cn(
                  "text-[10px] font-semibold uppercase tracking-[0.12em] mb-1.5",
                  product.active
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {product.role}
              </span>
              <span className="text-base font-bold text-foreground mb-1.5">
                {product.name}
              </span>
              {product.description && (
                <span className="text-xs text-muted-foreground leading-relaxed">
                  {product.description}
                </span>
              )}
            </a>
          ))}
        </div>
        {footer && (
          <p className="text-sm text-muted-foreground">{footer}</p>
        )}
      </div>
    </section>
  );
}
