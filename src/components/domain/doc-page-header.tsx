import { cn } from "@/lib/utils";

export interface DocPageHeaderTag {
  label: string;
  variant?: "green" | "gray" | "outline";
}

export interface DocPageHeaderProps {
  title: string;
  subtitle?: string;
  tags?: DocPageHeaderTag[];
  className?: string;
}

const tagStyles: Record<NonNullable<DocPageHeaderTag["variant"]>, string> = {
  green: "bg-primary/10 text-primary border-primary/20",
  gray: "bg-gray-100 text-gray-600 border-gray-200",
  outline: "bg-transparent text-gray-500 border-gray-300",
};

export function DocPageHeader({ title, subtitle, tags, className }: DocPageHeaderProps) {
  return (
    <div className={cn("pb-6 mb-8 border-b border-border", className)}>
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag) => (
            <span
              key={tag.label}
              className={cn(
                "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
                tagStyles[tag.variant ?? "gray"]
              )}
            >
              {tag.label}
            </span>
          ))}
        </div>
      )}
      <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
      {subtitle && (
        <p className="mt-2 text-gray-500">{subtitle}</p>
      )}
    </div>
  );
}
