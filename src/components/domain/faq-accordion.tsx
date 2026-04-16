import { ReactNode, useState } from "react";
import { cn } from "@/lib/utils";

export interface FaqItem {
  question: string;
  answer: ReactNode;
}

export interface FaqAccordionProps {
  items: FaqItem[];
  className?: string;
}

export function FaqAccordion({ items, className }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={cn("flex flex-col gap-2.5", className)}>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className={cn(
              "rounded-xl border overflow-hidden transition-colors",
              isOpen
                ? "border-primary/40 bg-card"
                : "border-border bg-card/50 hover:bg-card"
            )}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className={cn(
                "flex w-full items-center justify-between gap-3 px-5 py-4",
                "text-left text-[0.95rem] font-semibold cursor-pointer",
                "transition-colors",
                isOpen
                  ? "text-primary border-b border-border"
                  : "text-foreground hover:text-primary"
              )}
            >
              <span>{item.question}</span>
              <span
                className={cn(
                  "text-xl leading-none flex-shrink-0 transition-colors",
                  isOpen ? "text-primary" : "text-muted-foreground"
                )}
              >
                {isOpen ? "\u2212" : "+"}
              </span>
            </button>
            {isOpen && (
              <div className="px-5 py-4 text-sm leading-relaxed text-foreground/70 [&>p]:mb-3 [&>p:last-child]:mb-0">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
