import type React from "react";
import { cn } from "@/lib/utils";

export interface FeatureCardProps {
  icon?: React.ReactNode;
  abbreviation?: string;
  label?: string;
  title: string;
  description: string;
  meta?: string;
  className?: string;
}

export function FeatureCard({
  icon,
  abbreviation,
  label,
  title,
  description,
  meta,
  className,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border bg-card p-6 flex flex-col gap-3",
        className
      )}
    >
      {icon && <div className="text-primary">{icon}</div>}

      {abbreviation && (
        <span className="inline-block self-start rounded bg-muted px-2 py-0.5 text-xs font-bold font-mono text-foreground">
          {abbreviation}
        </span>
      )}

      {label && (
        <span className="text-xs font-medium text-primary uppercase tracking-wide">
          {label}
        </span>
      )}

      <h3 className="text-lg font-bold text-foreground">{title}</h3>

      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>

      {meta && (
        <p className="text-xs text-muted-foreground/70 mt-auto">{meta}</p>
      )}
    </div>
  );
}
