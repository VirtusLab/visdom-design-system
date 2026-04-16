import { cn } from "@/lib/utils";

export interface MaturityLevel {
  id: string;
  name: string;
  bg: string;
  text: string;
}

export interface MaturityRefProps {
  levels?: MaturityLevel[];
  perspectives?: string[];
  assessmentHref?: string;
  matrixHref?: string;
  className?: string;
}

const defaultLevels: MaturityLevel[] = [
  { id: "L1", name: "Ad-hoc", bg: "#f4f4f5", text: "#71717a" },
  { id: "L2", name: "Guided", bg: "#ccfbf1", text: "#0d9488" },
  { id: "L3", name: "Systematic", bg: "#d1fae5", text: "#059669" },
  { id: "L4", name: "Optimized", bg: "#dcfce7", text: "#16a34a" },
  { id: "L5", name: "Autonomous", bg: "#bbf7d0", text: "#22c55e" },
];

const defaultPerspectives = [
  "Development",
  "Delivery",
  "Organization",
  "Infrastructure",
];

export function MaturityRef({
  levels = defaultLevels,
  perspectives = defaultPerspectives,
  assessmentHref = "https://visdom-ai-maturity-matrix.pages.dev/assessment",
  matrixHref = "https://visdom-ai-maturity-matrix.pages.dev/matrix/development",
  className,
}: MaturityRefProps) {
  return (
    <section
      className={cn("py-24", className)}
      style={{
        borderTop: "1px solid #d1fae5",
        background: "linear-gradient(180deg, #ecfdf5 0%, #ffffff 100%)",
      }}
    >
      <div className="container text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-heading mx-auto mb-4">
          Where does your organization stand?
        </h2>
        <p className="text-muted-foreground mt-4 mb-12 max-w-xl mx-auto">
          The Visdom Maturity Matrix maps 60 practices across 4
          perspectives and 5 maturity levels.
        </p>

        {/* Level progression */}
        <div className="flex items-center justify-center gap-0 mb-10 overflow-x-auto pb-2">
          {levels.map((level, i) => (
            <div key={level.id} className="flex items-center">
              <div
                className="flex flex-col items-center px-3 sm:px-5 py-3 rounded-lg min-w-[80px]"
                style={{ background: level.bg }}
              >
                <span
                  className="text-xs font-bold"
                  style={{ color: level.text }}
                >
                  {level.id}
                </span>
                <span
                  className="text-[11px] mt-0.5"
                  style={{ color: level.text, opacity: 0.7 }}
                >
                  {level.name}
                </span>
              </div>
              {i < levels.length - 1 && (
                <div
                  className="w-6 sm:w-10 h-0.5"
                  style={{
                    background: `linear-gradient(90deg, ${level.text}, ${levels[i + 1].text})`,
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Perspective pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {perspectives.map((p) => (
            <span
              key={p}
              className="text-sm text-muted-foreground bg-card border border-border rounded-full px-4 py-1.5"
            >
              {p}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={assessmentHref}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center px-6 py-2.5 rounded-full text-sm font-medium bg-emerald-600 text-white hover:bg-emerald-500 transition-colors"
          >
            Take the Self-Assessment
          </a>
          <a
            href={matrixHref}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center px-6 py-2.5 rounded-full text-sm font-medium border border-border text-foreground hover:bg-accent transition-colors"
          >
            Explore the Full Matrix
          </a>
        </div>
      </div>
    </section>
  );
}

