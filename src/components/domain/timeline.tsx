import { cn } from "@/lib/utils";

export interface TimelineStep {
  number: number;
  title: string;
  duration?: string;
  description: string;
}

export interface TimelineProps {
  steps: TimelineStep[];
  className?: string;
}

export function Timeline({ steps, className }: TimelineProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Desktop: horizontal layout */}
      <div className="hidden md:flex items-start justify-between relative">
        {/* Connecting line behind circles */}
        <div className="absolute top-5 left-[calc(12.5%)] right-[calc(12.5%)] h-px bg-gray-300 z-0" />

        {steps.map((step) => (
          <div
            key={step.number}
            className="relative z-10 flex flex-col items-center text-center w-1/4 px-3"
          >
            <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-sm mb-3">
              {step.number}
            </div>
            <div className="font-bold text-gray-900 text-sm mb-1">
              {step.title}
            </div>
            {step.duration && (
              <div className="text-xs text-emerald-600 font-medium mb-1">
                {step.duration}
              </div>
            )}
            <div className="text-sm text-gray-500">{step.description}</div>
          </div>
        ))}
      </div>

      {/* Mobile: vertical layout */}
      <div className="flex md:hidden relative">
        {/* Vertical connecting line */}
        <div className="absolute left-5 top-5 bottom-5 w-px bg-gray-300 z-0" />

        <div className="flex flex-col gap-8">
          {steps.map((step) => (
            <div key={step.number} className="relative z-10 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                {step.number}
              </div>
              <div>
                <div className="font-bold text-gray-900 text-sm">
                  {step.title}
                </div>
                {step.duration && (
                  <div className="text-xs text-emerald-600 font-medium">
                    {step.duration}
                  </div>
                )}
                <div className="text-sm text-gray-500 mt-0.5">
                  {step.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
