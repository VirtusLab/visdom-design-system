import { cn } from "@/lib/utils";

export interface ImpactNumberProps {
  before: string;
  after: string;
  label: string;
  className?: string;
}

export function ImpactNumber({ before, after, label, className }: ImpactNumberProps) {
  return (
    <div className={cn("inline-flex flex-col items-center", className)}>
      <div className="inline-flex items-center gap-2">
        <span className="text-lg line-through text-red-400">{before}</span>
        <span className="text-gray-400">→</span>
        <span className="text-2xl font-bold text-blue-600">{after}</span>
      </div>
      <span className="text-xs text-gray-500 mt-1">{label}</span>
    </div>
  );
}
