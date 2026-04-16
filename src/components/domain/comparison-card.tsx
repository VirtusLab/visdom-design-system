import { cn } from "@/lib/utils";

export interface ComparisonCardProps {
  label: string;
  title: string;
  items: string[];
  className?: string;
}

export function ComparisonCard({
  label,
  title,
  items,
  className,
}: ComparisonCardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border bg-card p-6",
        className
      )}
    >
      <span className="inline-block text-xs font-medium text-primary uppercase tracking-wide mb-2">
        {label}
      </span>
      <h3 className="text-lg font-bold text-foreground mb-4">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li
            key={i}
            className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed"
          >
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
