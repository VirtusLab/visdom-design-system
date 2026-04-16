import { cn } from "@/lib/utils";

export interface VisdomProduct {
  name: string;
  role: string;
  href: string;
  active?: boolean;
}

export interface VisdomStripProps {
  products?: VisdomProduct[];
  className?: string;
}

const DEFAULT_PRODUCTS: VisdomProduct[] = [
  { name: "ViDIA", role: "Context Fabric", href: "/products/vidia" },
  { name: "VCR", role: "Code Review", href: "/products/vcr" },
  { name: "Testing", role: "Quality Assurance", href: "/products/testing" },
  { name: "Security", role: "AppSec & Governance", href: "/products/security" },
  { name: "Governance", role: "AI Oversight", href: "/products/governance" },
];

export function VisdomStrip({
  products,
  className,
}: VisdomStripProps) {
  const items = products ?? DEFAULT_PRODUCTS;

  return (
    <section className={cn("bg-muted/50 border-y border-border py-6", className)}>
      <div className="container">
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-4">
          Part of Visdom
        </p>
        <div className="flex flex-wrap gap-3">
          {items.map((product) => (
            <a
              key={product.name}
              href={product.href}
              className={cn(
                "flex flex-col rounded-lg border px-4 py-3 text-sm transition-colors",
                product.active
                  ? "border-blue-500 bg-blue-50 text-blue-700"
                  : "border-border bg-card text-foreground hover:border-blue-300 hover:bg-blue-50/50"
              )}
            >
              <span className="font-bold">{product.name}</span>
              <span className="text-xs text-muted-foreground">
                {product.role}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
