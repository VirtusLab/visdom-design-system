import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type TagColor = "emerald" | "blue" | "purple" | "amber";

export interface SolutionCardTag {
  label: string;
  color: TagColor;
}

export interface SolutionCardCta {
  label: string;
  href: string;
  external?: boolean;
}

export interface SolutionCardProps {
  title: string;
  subtitle: string;
  problem: string;
  capabilities: string[];
  tags: SolutionCardTag[];
  ctas: SolutionCardCta[];
  metric?: { lines: string[] };
  children?: ReactNode;
  className?: string;
}

const tagColors: Record<TagColor, string> = {
  emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  blue: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  purple: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  amber: "bg-amber-500/10 text-amber-400 border-amber-500/20",
};

export function SolutionCard({
  title,
  subtitle,
  problem,
  capabilities,
  tags,
  ctas,
  metric,
  children,
  className,
}: SolutionCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8",
        className
      )}
    >
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, i) => (
          <span
            key={i}
            className={cn(
              "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border",
              tagColors[tag.color]
            )}
          >
            {tag.label}
          </span>
        ))}
      </div>

      <h4 className="text-xl font-bold text-white mb-1">{title}</h4>
      <p className="text-sm text-white/40 mb-4">{subtitle}</p>

      <blockquote className="text-sm text-white/60 italic border-l-2 border-emerald-500/30 pl-4 mb-5">
        {problem}
      </blockquote>

      <ul className="space-y-2 mb-5">
        {capabilities.map((cap, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-white/70">
            <span className="text-emerald-400 mt-0.5 shrink-0">&#x25B8;</span>
            {cap}
          </li>
        ))}
      </ul>

      {metric && (
        <div className="rounded-lg bg-white/[0.02] border border-white/5 p-4 mb-5">
          {metric.lines.map((line, i) => (
            <p key={i} className="text-sm text-white/50">
              {line}
            </p>
          ))}
        </div>
      )}

      {children}

      <div className="flex flex-wrap gap-3 mt-5">
        {ctas.map((cta, i) => (
          <a
            key={i}
            href={cta.href}
            className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium border border-white/20 text-white/80 hover:border-white/40 hover:text-white transition-colors"
            {...(cta.external ? { target: "_blank", rel: "noopener" } : {})}
          >
            {cta.label} →
          </a>
        ))}
      </div>
    </div>
  );
}
