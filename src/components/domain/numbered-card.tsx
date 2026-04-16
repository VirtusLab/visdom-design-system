import { cn } from "@/lib/utils";

export interface NumberedCardProps {
  number: string;
  title: string;
  description: string;
  className?: string;
}

export function NumberedCard({
  number,
  title,
  description,
  className,
}: NumberedCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-lg border border-border bg-card p-6 overflow-hidden",
        className
      )}
    >
      <span className="absolute -top-2 -left-1 text-7xl font-extrabold text-foreground/5 select-none leading-none">
        {number}
      </span>
      <div className="relative">
        <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
