import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface Impact {
  before: string;
  after: string;
  label: string;
}

export interface BeforeAfterProps {
  title: string;
  impacts?: Impact[];
  before: ReactNode;
  after: ReactNode;
  className?: string;
}

export function BeforeAfter({
  title,
  impacts,
  before,
  after,
  className,
}: BeforeAfterProps) {
  return (
    <div className={cn("mb-8", className)}>
      <h3>{title}</h3>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="border border-red-200 bg-red-50/50 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-red-100 text-red-700">
              BEFORE
            </span>
          </div>
          <div className="text-sm text-gray-600 [&>p]:!mb-2 [&>ol]:list-decimal [&>ol]:pl-4 [&>ol]:space-y-1 [&>ol]:text-sm [&>ol]:text-gray-600 [&_strong]:text-gray-800">
            {before}
          </div>
        </div>
        <div className="border border-emerald-200 bg-emerald-50/50 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-emerald-100 text-emerald-700">
              AFTER
            </span>
          </div>
          <div className="text-sm text-gray-600 [&>p]:!mb-2 [&>ol]:list-decimal [&>ol]:pl-4 [&>ol]:space-y-1 [&>ol]:text-sm [&>ol]:text-gray-600 [&_strong]:text-gray-800">
            {after}
          </div>
        </div>
      </div>
      {impacts && impacts.length > 0 && (
        <div className="flex flex-wrap gap-6 mt-4 pt-4 border-t border-gray-200">
          {impacts.map((impact, i) => (
            <div key={i} className="text-center">
              <div className="flex items-center gap-2 justify-center">
                <span className="text-base line-through text-red-400">
                  {impact.before}
                </span>
                <span className="text-gray-400">→</span>
                <span className="text-xl font-bold text-emerald-600">
                  {impact.after}
                </span>
              </div>
              <span className="text-xs text-gray-500">{impact.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
