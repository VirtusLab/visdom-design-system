import { cn } from "@/lib/utils";

export type ResourceCardColor = "green" | "blue" | "amber" | "red" | "purple";

export interface ResourceCardProps {
  title: string;
  description: string;
  href: string;
  tag?: string;
  tagColor?: ResourceCardColor;
  source?: string;
  className?: string;
}

const tagColors: Record<ResourceCardColor, string> = {
  green: "bg-blue-100 text-blue-700 border-blue-200",
  blue: "bg-blue-100 text-blue-700 border-blue-200",
  amber: "bg-amber-100 text-amber-700 border-amber-200",
  red: "bg-red-100 text-red-700 border-red-200",
  purple: "bg-purple-100 text-purple-700 border-purple-200",
};

const topColors: Record<ResourceCardColor, string> = {
  green: "border-t-blue-500",
  blue: "border-t-blue-500",
  amber: "border-t-amber-500",
  red: "border-t-red-500",
  purple: "border-t-purple-500",
};

export function ResourceCard({
  title,
  description,
  href,
  tag,
  tagColor = "blue",
  source,
  className,
}: ResourceCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className={cn(
        "block bg-white border border-gray-200 border-t-2 rounded-lg p-5",
        "hover:shadow-md transition-shadow no-underline group",
        topColors[tagColor],
        className
      )}
    >
      {tag && (
        <span
          className={cn(
            "inline-block text-xs px-2 py-0.5 rounded border font-medium mb-2",
            tagColors[tagColor]
          )}
        >
          {tag}
        </span>
      )}
      <h4 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 mb-1.5">
        {title}
      </h4>
      <p className="text-xs text-gray-500 leading-relaxed !mb-0 line-clamp-3">
        {description}
      </p>
      {source && (
        <p className="text-xs text-gray-400 !mb-0 mt-3">{source}</p>
      )}
    </a>
  );
}
