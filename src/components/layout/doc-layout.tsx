import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface DocLayoutProps {
  breadcrumbs?: BreadcrumbItem[];
  title: string;
  tags?: string[];
  sidebar?: ReactNode;
  prev?: { label: string; href: string };
  next?: { label: string; href: string };
  children: ReactNode;
  className?: string;
}

export function DocLayout({
  breadcrumbs,
  title,
  tags,
  sidebar,
  prev,
  next,
  children,
  className,
}: DocLayoutProps) {
  return (
    <div className={cn("max-w-[1200px] mx-auto px-6 py-10", className)}>
      <div className={cn("grid gap-10", sidebar ? "md:grid-cols-[240px,1fr]" : "grid-cols-1")}>
        {/* Sidebar */}
        {sidebar && (
          <aside className="hidden md:block">
            <div className="sticky top-20">{sidebar}</div>
          </aside>
        )}

        {/* Main content */}
        <main className="min-w-0">
          {/* Breadcrumbs */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav className="flex items-center gap-1.5 text-sm text-muted-foreground mb-4 flex-wrap">
              {breadcrumbs.map((crumb, i) => (
                <span key={i} className="flex items-center gap-1.5">
                  {i > 0 && <ChevronRight className="w-3 h-3 shrink-0" />}
                  {crumb.href ? (
                    <a
                      href={crumb.href}
                      className="hover:text-foreground transition-colors"
                    >
                      {crumb.label}
                    </a>
                  ) : (
                    <span className="text-foreground">{crumb.label}</span>
                  )}
                </span>
              ))}
            </nav>
          )}

          {/* Tags */}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="text-3xl font-bold tracking-tight text-foreground mb-6">{title}</h1>

          <div className="border-b border-border mb-8" />

          {/* Content */}
          <article className="prose prose-neutral dark:prose-invert max-w-none">
            {children}
          </article>

          {/* Prev / Next pagination */}
          {(prev || next) && (
            <nav className="border-t border-border mt-16 pt-8 flex justify-between gap-4">
              {prev ? (
                <a
                  href={prev.href}
                  className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                  <span>{prev.label}</span>
                </a>
              ) : (
                <div />
              )}
              {next ? (
                <a
                  href={next.href}
                  className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span>{next.label}</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              ) : (
                <div />
              )}
            </nav>
          )}
        </main>
      </div>
    </div>
  );
}
