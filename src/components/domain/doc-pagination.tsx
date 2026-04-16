import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface DocPaginationLink {
  label: string;
  href: string;
}

export interface DocPaginationProps {
  prev?: DocPaginationLink;
  next?: DocPaginationLink;
  className?: string;
}

export function DocPagination({ prev, next, className }: DocPaginationProps) {
  return (
    <div className={cn("flex items-center justify-between gap-4 pt-8", className)}>
      {prev ? (
        <a
          href={prev.href}
          className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          {prev.label}
        </a>
      ) : (
        <span />
      )}
      {next ? (
        <a
          href={next.href}
          className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-colors"
        >
          {next.label}
          <ChevronRight className="w-4 h-4" />
        </a>
      ) : (
        <span />
      )}
    </div>
  );
}
