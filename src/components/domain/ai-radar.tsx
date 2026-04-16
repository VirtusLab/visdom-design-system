import { cn } from "@/lib/utils";

export interface AiRadarStat {
  value: string;
  label: string;
}

export interface AiRadarProps {
  stats: AiRadarStat[];
  topAreas: string[];
  ctaLabel: string;
  ctaHref: string;
  className?: string;
}

export function AiRadar({
  stats,
  topAreas,
  ctaLabel,
  ctaHref,
  className,
}: AiRadarProps) {
  return (
    <div
      className={cn(
        "rounded-2xl p-8 sm:p-12 relative overflow-hidden border border-gray-200",
        className
      )}
      style={{
        background:
          "linear-gradient(135deg, #eff6ff, #eff6ff, #f5f3ff)",
      }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-500" />
        </span>
        <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
          Live
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-heading">
          AI Engineering Radar
        </h2>
      </div>

      {/* Description */}
      <p className="text-muted-foreground mb-8 max-w-2xl">
        Tracking the AI engineering ecosystem in real-time. Signals
        automatically discovered and classified by maturity level.
      </p>

      {/* Stats grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="rounded-xl bg-white/70 p-4 text-center"
          >
            <div className="text-2xl sm:text-3xl font-bold text-foreground font-heading">
              {stat.value}
            </div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Top tracked areas */}
      <div className="mb-8">
        <span className="text-xs text-muted-foreground uppercase tracking-wider block mb-3">
          Top tracked areas
        </span>
        <div className="flex flex-wrap gap-2">
          {topAreas.map((area, i) => (
            <span
              key={i}
              className="text-xs text-muted-foreground bg-white/60 border border-border rounded-full px-3 py-1"
            >
              {area}
            </span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <a
        href={ctaHref}
        target="_blank"
        rel="noopener"
        className="inline-flex items-center px-6 py-2.5 rounded-full text-sm font-medium bg-blue-600 text-white hover:bg-blue-500 transition-colors"
      >
        {ctaLabel} &rarr;
      </a>
    </div>
  );
}

