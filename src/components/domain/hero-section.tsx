import { cn } from "@/lib/utils";

export interface HeroStat {
  value: string;
  label: string;
  detail?: string;
}

export interface HeroAction {
  label: string;
  href: string;
  variant?: "primary" | "outline";
  external?: boolean;
}

export interface HeroSectionProps {
  title: string;
  subtitle: string;
  badge?: string;
  stats?: HeroStat[];
  actions?: HeroAction[];
  variant?: "light" | "dark";
  className?: string;
}

export function HeroSection({
  title,
  subtitle,
  badge,
  stats,
  actions,
  variant = "light",
  className,
}: HeroSectionProps) {
  const isDark = variant === "dark";

  return (
    <section
      className={cn(
        "pt-40 pb-24",
        isDark
          ? "bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white"
          : "bg-background text-foreground",
        className
      )}
    >
      <div className="container max-w-3xl">
        {badge && (
          <div
            className={cn(
              "inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium mb-8",
              isDark
                ? "bg-emerald-900/40 border border-emerald-500/20 text-emerald-400"
                : "bg-emerald-50 border border-emerald-200 text-emerald-700"
            )}
          >
            {badge}
          </div>
        )}

        <h1
          className={cn(
            "text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-8 leading-tight",
            isDark ? "text-white" : "text-foreground"
          )}
        >
          {title}
        </h1>

        <p
          className={cn(
            "text-lg mb-12 leading-relaxed max-w-2xl",
            isDark ? "text-white/70" : "text-muted-foreground"
          )}
        >
          {subtitle}
        </p>

        {actions && actions.length > 0 && (
          <div className="flex flex-wrap gap-4 mb-12">
            {actions.map((action, i) => (
              <a
                key={i}
                href={action.href}
                {...(action.external
                  ? { target: "_blank", rel: "noopener" }
                  : {})}
                className={cn(
                  "inline-flex items-center px-6 py-2.5 rounded-full text-sm font-medium transition-colors",
                  action.variant === "outline"
                    ? isDark
                      ? "border border-white/30 text-white hover:border-white/60"
                      : "border border-border text-foreground hover:bg-accent"
                    : isDark
                    ? "bg-emerald-500 text-white hover:bg-emerald-400"
                    : "bg-emerald-600 text-white hover:bg-emerald-500"
                )}
              >
                {action.label}
              </a>
            ))}
          </div>
        )}

        {stats && stats.length > 0 && (
          <div className="flex flex-wrap gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span
                  className={cn(
                    "text-3xl font-bold",
                    isDark ? "text-emerald-400" : "text-emerald-600"
                  )}
                >
                  {stat.value}
                </span>
                <span
                  className={cn(
                    "text-sm",
                    isDark ? "text-white/60" : "text-muted-foreground"
                  )}
                >
                  {stat.label}
                </span>
                {stat.detail && (
                  <span
                    className={cn(
                      "text-xs",
                      isDark ? "text-white/40" : "text-muted-foreground/70"
                    )}
                  >
                    {stat.detail}
                  </span>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
