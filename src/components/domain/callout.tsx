import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type CalloutType = "info" | "warning" | "tip" | "reference";

export interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: ReactNode;
  className?: string;
}

const styles: Record<CalloutType, string> = {
  info: "bg-blue-50 border-blue-200 text-blue-800",
  warning: "bg-amber-50 border-amber-200 text-amber-800",
  tip: "bg-emerald-50 border-emerald-200 text-emerald-800",
  reference: "bg-gray-50 border-gray-200 text-gray-700",
};

const icons: Record<CalloutType, string> = {
  info: "💡",
  warning: "⚠️",
  tip: "✅",
  reference: "📦",
};

export function Callout({ type = "info", title, children, className }: CalloutProps) {
  return (
    <div
      className={cn(
        "rounded-lg border p-4 mb-6",
        styles[type],
        className
      )}
    >
      {title && (
        <p className="font-semibold text-sm mb-1 !text-inherit">
          {icons[type]} {title}
        </p>
      )}
      <div className="text-sm [&>p]:!text-inherit [&>p]:!mb-1 [&>p:last-child]:!mb-0">
        {children}
      </div>
    </div>
  );
}
