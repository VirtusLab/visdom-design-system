import { cn } from "@/lib/utils";

export interface Pillar {
  value: string;
  label: string;
}

export interface PillarsProps {
  pillars: Pillar[];
  className?: string;
}

export function Pillars({ pillars, className }: PillarsProps) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-center gap-x-12 gap-y-4 py-8 border-y border-border",
        className
      )}
    >
      {pillars.map((pillar, i) => (
        <div key={i} className="text-center">
          <span className="text-2xl font-bold text-foreground font-heading">
            {pillar.value}
          </span>
          <span className="text-sm text-muted-foreground ml-2">
            {pillar.label}
          </span>
        </div>
      ))}
    </div>
  );
}

