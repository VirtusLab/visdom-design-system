import { cn } from "@/lib/utils";

export interface CtaCardProps {
  icon: string;
  title: string;
  description: string;
  href: string;
  external?: boolean;
  highlighted?: boolean;
  className?: string;
}

export function CtaCard({
  icon,
  title,
  description,
  href,
  external,
  highlighted,
  className,
}: CtaCardProps) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener" } : {})}
      className={cn(
        "block rounded-xl border bg-card p-8 text-center group transition-colors",
        highlighted
          ? "border-emerald-500/30 hover:border-emerald-500 text-foreground"
          : "border-border hover:border-border/80",
        className
      )}
    >
      <div className="text-3xl mb-4">{icon}</div>
      <div
        className={cn(
          "text-base font-semibold mb-2",
          highlighted ? "text-emerald-600" : "text-foreground"
        )}
      >
        {title}
      </div>
      <div className="text-sm text-muted-foreground">{description}</div>
    </a>
  );
}
