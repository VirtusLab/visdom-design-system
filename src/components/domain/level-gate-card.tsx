"use client";

import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface MaturityGate {
  must: string[];
  should: string[];
  prerequisites: { label: string; href?: string }[];
  evidence: string[];
}

const PERSPECTIVE_COLORS: Record<string, { border: string; text: string; bg: string }> = {
  development: { border: "border-l-blue-500", text: "text-blue-500", bg: "bg-blue-500/5" },
  delivery: { border: "border-l-orange-500", text: "text-orange-500", bg: "bg-orange-500/5" },
  infrastructure: { border: "border-l-cyan-500", text: "text-cyan-500", bg: "bg-cyan-500/5" },
  organization: { border: "border-l-purple-500", text: "text-purple-500", bg: "bg-purple-500/5" },
};

type Variant = "full" | "compact" | "minimal";

export interface LevelGateCardProps {
  gate: MaturityGate;
  level: number;
  levelName: string;
  perspective: string;
  variant?: Variant;
  defaultOpen?: boolean;
  className?: string;
}

export function LevelGateCard({
  gate,
  perspective,
  variant = "full",
  className,
}: LevelGateCardProps) {
  const colors = PERSPECTIVE_COLORS[perspective] ?? PERSPECTIVE_COLORS.development;

  const hasShould = variant === "full" && gate.should.length > 0;
  const hasPrereqs = gate.prerequisites.some((p) => p.href);
  const hasEvidence = variant !== "minimal" && gate.evidence.length > 0;
  const hasRight = hasEvidence;

  return (
    <div
      className={cn(
        "rounded-lg border-l-4 border border-border",
        colors.border,
        colors.bg,
        "mb-6 p-3",
        className
      )}
    >
      <div className={cn(hasRight && "md:grid md:grid-cols-[1fr,1fr] md:gap-4")}>
        {/* Left: criteria + metrics + prereqs */}
        <div className="space-y-2">
          <ul className="space-y-1">
            {gate.must.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                <span className={cn("shrink-0 mt-1", colors.text)}>·</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {hasShould && (
            <ul className="space-y-1">
              {gate.should.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="shrink-0 mt-1">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}

          {hasPrereqs && (
            <ul className="space-y-1">
              {gate.prerequisites.map((prereq, i) =>
                prereq.href ? (
                  <li key={i} className="flex items-start gap-2 text-sm text-amber-600 dark:text-amber-400">
                    <ArrowRight className="w-3 h-3 shrink-0 mt-1" />
                    <a
                      href={prereq.href}
                      className="hover:text-foreground transition-colors underline underline-offset-2"
                    >
                      Requires {prereq.label}
                    </a>
                  </li>
                ) : null
              )}
            </ul>
          )}
        </div>

        {/* Right: evidence */}
        {hasRight && (
          <div className="mt-2 md:mt-0 md:border-l md:border-border/50 md:pl-4">
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground/50 mb-1">Evidence</p>
            <ul className="space-y-1">
              {gate.evidence.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground/60 italic">
                  <span className="shrink-0 mt-1">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
