"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { LevelGateCard, type MaturityGate } from "./level-gate-card";

export interface MatrixItem {
  text: string;
  guideSlug?: string;
}

export interface GuideInfo {
  title: string;
  summary: string;
  href: string;
}

const LEVEL_COLORS: Record<number, string> = {
  1: "from-zinc-500/15 to-zinc-500/5 text-zinc-500 border-zinc-500/20",
  2: "from-teal-600/15 to-teal-600/5 text-teal-600 border-teal-600/20",
  3: "from-emerald-600/15 to-emerald-600/5 text-emerald-600 border-emerald-600/20",
  4: "from-green-500/15 to-green-500/5 text-green-500 border-green-500/20",
  5: "from-green-400/15 to-green-400/5 text-green-400 border-green-400/20",
};

const LEVEL_HOVER_GLOW: Record<number, string> = {
  1: "hover:shadow-zinc-500/10",
  2: "hover:shadow-teal-600/10",
  3: "hover:shadow-emerald-600/10",
  4: "hover:shadow-green-500/10",
  5: "hover:shadow-green-400/10",
};

const LEVEL_BADGE_COLORS: Record<number, string> = {
  1: "bg-zinc-500",
  2: "bg-teal-600",
  3: "bg-emerald-600",
  4: "bg-green-500",
  5: "bg-green-400",
};

export interface LevelCardProps {
  level: number;
  name: string;
  items: MatrixItem[];
  perspective?: string;
  guides?: Record<string, GuideInfo>;
  gate?: MaturityGate | null;
  className?: string;
}

export function LevelCard({
  level,
  name,
  items,
  perspective,
  guides,
  gate,
  className,
}: LevelCardProps) {
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);

  return (
    <div
      className={cn(
        "rounded-lg border p-4 bg-gradient-to-r transition-all duration-200 hover:scale-[1.01] hover:shadow-lg",
        LEVEL_COLORS[level],
        LEVEL_HOVER_GLOW[level],
        className
      )}
    >
      <div className="flex items-center gap-2 mb-3">
        <Badge
          className={cn("text-white text-xs font-bold", LEVEL_BADGE_COLORS[level])}
        >
          L{level}
        </Badge>
        <span className="text-sm font-medium">{name}</span>
        <span className="ml-auto text-[10px] text-muted-foreground">
          {items.length} practices
        </span>
      </div>

      <ul className="space-y-1">
        {items.map((item, i) => {
          const hasGuide = item.guideSlug && guides?.[item.guideSlug];
          const isExpanded = expandedSlug === item.guideSlug;
          const guide = item.guideSlug ? guides?.[item.guideSlug] : undefined;

          return (
            <li key={i}>
              <button
                type="button"
                className={cn(
                  "w-full text-left text-sm flex items-start gap-2 rounded px-1 py-0.5 -mx-1",
                  hasGuide && "cursor-pointer hover:bg-foreground/5 transition-colors",
                  !hasGuide && "cursor-default"
                )}
                onClick={() => {
                  if (!hasGuide) return;
                  setExpandedSlug(isExpanded ? null : item.guideSlug!);
                }}
                disabled={!hasGuide}
              >
                {hasGuide ? (
                  <ChevronRight
                    className={cn(
                      "h-4 w-4 mt-0.5 shrink-0 transition-transform duration-200",
                      isExpanded && "rotate-90"
                    )}
                  />
                ) : (
                  <span className="text-muted-foreground mt-1 shrink-0">•</span>
                )}
                <span className="text-foreground/80">{item.text}</span>
              </button>

              <AnimatePresence>
                {isExpanded && guide && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="ml-6 mt-2 mb-2 p-3 rounded-md bg-background/50 border border-border/50">
                      <p className="text-xs text-muted-foreground">{guide.summary}</p>
                      <a
                        href={guide.href}
                        className="text-xs font-medium text-primary hover:underline mt-2 inline-block"
                      >
                        Read full guide →
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>

      {gate && perspective && (
        <div className="mt-3 pt-3 border-t border-border/30">
          <LevelGateCard
            gate={gate}
            level={level}
            levelName={name}
            perspective={perspective}
            variant="compact"
          />
        </div>
      )}
    </div>
  );
}
