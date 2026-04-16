import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type PlatformBlockTagColor = "blue" | "purple" | "amber";

export interface PlatformBlockTag {
  label: string;
  color: PlatformBlockTagColor;
}

export interface PlatformBlockCta {
  label: string;
  href: string;
  external?: boolean;
}

export interface PlatformBlockProps {
  number: string;
  title: string;
  subtitle?: string;
  description: string;
  tags: PlatformBlockTag[];
  ctas: PlatformBlockCta[];
  note?: string;
  visual?: ReactNode;
  reversed?: boolean;
  className?: string;
}

const tagColors: Record<PlatformBlockTagColor, string> = {
  blue: "bg-blue-500/10 text-blue-600 border-blue-500/20",
  purple: "bg-purple-500/10 text-purple-600 border-purple-500/20",
  amber: "bg-amber-500/10 text-amber-600 border-amber-500/20",
};

export function PlatformBlock({
  number,
  title,
  subtitle,
  description,
  tags,
  ctas,
  note,
  visual,
  reversed = false,
  className,
}: PlatformBlockProps) {
  const textContent = (
    <div>
      <span className="text-5xl font-extrabold text-muted-foreground/20 font-heading">
        {number}
      </span>
      <h3 className="text-2xl font-bold text-foreground mt-2 mb-4 font-heading">
        {title}
        {subtitle && (
          <span className="text-base font-normal text-muted-foreground ml-2">
            {subtitle}
          </span>
        )}
      </h3>
      <p className="text-muted-foreground leading-relaxed mb-6">
        {description}
      </p>
      {note && (
        <p className="text-sm text-muted-foreground mb-6">{note}</p>
      )}
      <div className="flex flex-wrap gap-2 mb-6">
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
      <div className="flex flex-wrap gap-3">
        {ctas.map((cta, i) => (
          <a
            key={i}
            href={cta.href}
            className={cn(
              "inline-flex items-center px-5 py-2 rounded-full text-sm font-medium transition-colors",
              i === 0
                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                : "border border-border text-foreground hover:bg-accent"
            )}
            {...(cta.external
              ? { target: "_blank", rel: "noopener" }
              : {})}
          >
            {cta.label}
          </a>
        ))}
      </div>
    </div>
  );

  const visualContent = visual ? (
    <div className="rounded-xl border border-border bg-card p-8 flex items-center justify-center">
      {visual}
    </div>
  ) : null;

  return (
    <div
      className={cn(
        "grid lg:grid-cols-2 gap-16 items-center",
        className
      )}
    >
      {reversed ? (
        <>
          <div className="order-2 lg:order-1">{visualContent}</div>
          <div className="order-1 lg:order-2">{textContent}</div>
        </>
      ) : (
        <>
          <div>{textContent}</div>
          {visualContent && <div>{visualContent}</div>}
        </>
      )}
    </div>
  );
}

