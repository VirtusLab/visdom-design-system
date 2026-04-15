import { cn } from "@/lib/utils";

export type StatCardColor = "green" | "blue" | "amber" | "red" | "purple";

export interface StatCardProps {
  value: string;
  label: string;
  source: string;
  color: StatCardColor;
  className?: string;
}

const colorMap: Record<
  StatCardColor,
  { bg: string; border: string; text: string }
> = {
  green: {
    bg: "bg-emerald-50",
    border: "border-emerald-500",
    text: "text-emerald-600",
  },
  blue: {
    bg: "bg-blue-50",
    border: "border-blue-500",
    text: "text-blue-600",
  },
  amber: {
    bg: "bg-amber-50",
    border: "border-amber-500",
    text: "text-amber-600",
  },
  red: {
    bg: "bg-red-50",
    border: "border-red-500",
    text: "text-red-600",
  },
  purple: {
    bg: "bg-purple-50",
    border: "border-purple-500",
    text: "text-purple-600",
  },
};

export function StatCard({ value, label, source, color, className }: StatCardProps) {
  const c = colorMap[color];
  return (
    <div
      className={cn(
        "rounded-lg p-5 border-l-4",
        c.bg,
        c.border,
        className
      )}
    >
      <div className={cn("text-3xl font-bold mb-1", c.text)}>{value}</div>
      <div className="text-sm text-gray-600 line-clamp-3">{label}</div>
      <div className="text-xs text-gray-400 italic mt-2">{source}</div>
    </div>
  );
}
