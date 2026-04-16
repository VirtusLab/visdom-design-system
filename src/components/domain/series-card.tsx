import { cn } from "@/lib/utils";

export interface SeriesArticle {
  title: string;
  date: string;
  href: string;
}

export interface SeriesCardProps {
  title: string;
  color: string;
  description: string;
  stats: string;
  featured: SeriesArticle;
  articles: SeriesArticle[];
  ctaLabel: string;
  ctaHref: string;
  className?: string;
}

export function SeriesCard({
  title,
  color,
  description,
  stats,
  featured,
  articles,
  ctaLabel,
  ctaHref,
  className,
}: SeriesCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-card p-8 relative overflow-hidden flex flex-col",
        className
      )}
    >
      {/* Colored top bar */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px]"
        style={{ background: color }}
      />

      {/* Title row */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-foreground font-heading">
          {title}
        </h3>
        <span className="text-xs text-muted-foreground">{stats}</span>
      </div>

      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed mb-6">
        {description}
      </p>

      {/* Featured article */}
      <a
        href={featured.href}
        target="_blank"
        rel="noopener"
        className="block rounded-lg bg-muted border border-border p-4 mb-4 hover:border-blue-500/30 transition-colors group"
      >
        <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-2 block">
          Latest
        </span>
        <span className="text-sm font-medium text-foreground group-hover:text-blue-600 transition-colors block mb-1">
          {featured.title}
        </span>
        <span className="text-xs text-muted-foreground">
          {featured.date}
        </span>
      </a>

      {/* Article list */}
      <div className="flex-1 space-y-0">
        {articles.map((article, i) => (
          <a
            key={i}
            href={article.href}
            target="_blank"
            rel="noopener"
            className="flex justify-between items-baseline py-2.5 border-b border-border text-sm text-muted-foreground hover:text-blue-600 transition-colors"
          >
            <span className="truncate pr-4">{article.title}</span>
            <span className="text-xs text-muted-foreground whitespace-nowrap">
              {article.date}
            </span>
          </a>
        ))}
      </div>

      {/* CTA */}
      <a
        href={ctaHref}
        target="_blank"
        rel="noopener"
        className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium border border-border text-foreground hover:bg-accent transition-colors mt-6 self-start"
      >
        {ctaLabel} &rarr;
      </a>
    </div>
  );
}

