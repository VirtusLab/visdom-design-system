import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface PlatformSectionProps {
  label?: string;
  title: string;
  subtitle: string;
  children: ReactNode;
  className?: string;
}

export function PlatformSection({
  label,
  title,
  subtitle,
  children,
  className,
}: PlatformSectionProps) {
  return (
    <section className={cn("py-24", className)}>
      <div className="container">
        {label && (
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-3">
            {label}
          </p>
        )}
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-heading mb-4">
          {title}
        </h2>
        <p className="text-muted-foreground max-w-2xl mb-24">{subtitle}</p>
        <div className="space-y-32">{children}</div>
      </div>
    </section>
  );
}
