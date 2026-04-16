import { cn } from "@/lib/utils";

export type StatusVariant = "success" | "danger" | "warning" | "info" | "neutral";

export interface StatusRow {
  label: string;
  status: string;
  variant: StatusVariant;
}

export interface StatusDiagramProps {
  rows: StatusRow[];
  className?: string;
}

const variantStyles: Record<StatusVariant, string> = {
  success: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  danger: "bg-red-500/20 text-red-400 border-red-500/30",
  warning: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  info: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  neutral: "bg-gray-500/20 text-gray-400 border-gray-500/30",
};

export function StatusDiagram({ rows, className }: StatusDiagramProps) {
  return (
    <div
      className={cn(
        "rounded-lg bg-gray-900 p-4 space-y-2 font-mono text-sm",
        className
      )}
    >
      {rows.map((row, i) => (
        <div
          key={i}
          className="flex items-center justify-between gap-4 px-3 py-2 rounded bg-gray-800/60"
        >
          <span className="text-gray-300 truncate">{row.label}</span>
          <span
            className={cn(
              "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold whitespace-nowrap",
              variantStyles[row.variant]
            )}
          >
            {row.status}
          </span>
        </div>
      ))}
    </div>
  );
}
