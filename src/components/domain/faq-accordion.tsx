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
                ? "border-emerald-500 bg-white"
                : "border-gray-200 bg-gray-50/50"
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
                  ? "text-emerald-700 border-b border-gray-200"
                  : "text-gray-900 hover:text-emerald-700"
              )}
            >
              <span>{item.question}</span>
              <span
                className={cn(
                  "text-xl leading-none flex-shrink-0 transition-colors",
                  isOpen ? "text-emerald-500" : "text-gray-400"
                )}
              >
                {isOpen ? "\u2212" : "+"}
              </span>
            </button>
            {isOpen && (
              <div className="px-5 py-4 text-sm leading-relaxed text-gray-600 [&>p]:mb-3 [&>p:last-child]:mb-0">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
