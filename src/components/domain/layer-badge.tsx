import { cn } from "@/lib/utils";

export type LayerLevel = 0 | 1 | 2 | 3;

export interface LayerBadgeProps {
  layer: LayerLevel;
  label?: string;
  className?: string;
}

const colors: Record<LayerLevel, string> = {
  0: "bg-gray-100 text-gray-700 border-gray-300",
  1: "bg-blue-100 text-blue-700 border-blue-300",
  2: "bg-amber-100 text-amber-700 border-amber-300",
  3: "bg-purple-100 text-purple-700 border-purple-300",
};

const defaultLabels: Record<LayerLevel, string> = {
  0: "Layer 0: Context",
  1: "Layer 1: Deterministic",
  2: "Layer 2: AI Quick Scan",
  3: "Layer 3: AI Deep Review",
};

export function LayerBadge({ layer, label, className }: LayerBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border",
        colors[layer],
        className
      )}
    >
      {label ?? defaultLabels[layer]}
    </span>
  );
}
