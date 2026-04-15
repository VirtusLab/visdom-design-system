import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface TerminalProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

export function Terminal({ title = "Terminal", children, className }: TerminalProps) {
  return (
    <div
      className={cn(
        "rounded-lg bg-gray-950 border border-white/10 p-5 font-mono text-sm",
        className
      )}
    >
      <div className="flex items-center gap-1.5 mb-3 pb-3 border-b border-white/10">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        <span className="ml-2 text-xs text-white/40">{title}</span>
      </div>
      <pre className="text-white/80 whitespace-pre-wrap">{children}</pre>
    </div>
  );
}
