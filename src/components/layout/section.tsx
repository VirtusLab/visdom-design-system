import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface SectionProps {
  id?: string;
  label?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, label, title, subtitle, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("py-32 max-sm:py-20", className)}>
      <div className="max-w-[1200px] mx-auto px-6">
        {(label || title || subtitle) && (
          <div className="mb-12">
            {label && (
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-3">
                {label}
              </p>
            )}
            {title && (
              <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-muted-foreground max-w-2xl">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
