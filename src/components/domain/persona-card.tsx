import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type PersonaCardColor = "green" | "blue" | "purple" | "amber" | "red";

export interface PersonaCardProps {
  name: string;
  role: string;
  color?: PersonaCardColor;
  children: ReactNode;
  className?: string;
}

const borderColors: Record<PersonaCardColor, string> = {
  green: "border-l-emerald-500",
  blue: "border-l-blue-500",
  purple: "border-l-purple-500",
  amber: "border-l-amber-500",
  red: "border-l-red-500",
};

const badgeColors: Record<PersonaCardColor, string> = {
  green: "bg-emerald-100 text-emerald-700",
  blue: "bg-blue-100 text-blue-700",
  purple: "bg-purple-100 text-purple-700",
  amber: "bg-amber-100 text-amber-700",
  red: "bg-red-100 text-red-700",
};

export function PersonaCard({
  name,
  role,
  color = "green",
  children,
  className,
}: PersonaCardProps) {
  return (
    <div
      className={cn(
        "bg-white border border-gray-200 border-l-4 rounded-lg p-5 mb-5",
        borderColors[color],
        className
      )}
    >
      <div className="flex items-center gap-2.5 mb-3">
        <span className="font-bold text-gray-900 text-sm">{name}</span>
        <span
          className={cn(
            "text-xs px-2.5 py-0.5 rounded-full font-medium",
            badgeColors[color]
          )}
        >
          {role}
        </span>
      </div>
      <div className="text-sm text-gray-500 leading-relaxed [&>p]:!mb-1.5 [&>p:last-child]:!mb-0">
        {children}
      </div>
    </div>
  );
}
