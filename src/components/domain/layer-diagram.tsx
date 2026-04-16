import { cn } from "@/lib/utils";

export interface Layer {
  id: string;
  name: string;
  label: string;
  timing: string;
  description: string;
  bg: string;
  border: string;
  dot: string;
  pill: string;
  href: string;
}

export interface Dashboard {
  label: string;
  description: string;
  href: string;
  border: string;
  bg: string;
  dot: string;
}

export interface LayerDiagramProps {
  layers?: Layer[];
  dashboard?: Dashboard;
  baseUrl?: string;
  className?: string;
}

const defaultLayers: Layer[] = [
  {
    id: "L0",
    name: "Layer 0",
    label: "Architecture Guardrails",
    timing: "<10s",
    description:
      "ArchUnit rules that prevent AI from introducing structural violations.",
    bg: "bg-gray-50",
    border: "border-gray-400",
    dot: "bg-gray-400",
    pill: "bg-gray-100 text-gray-600",
    href: "reference/layers/architecture-testing/",
  },
  {
    id: "L1",
    name: "Layer 1",
    label: "Property-Based Verification",
    timing: "~2s",
    description:
      "Stochastic testing with jqwik. Thousands of inputs per property, automatic shrinking.",
    bg: "bg-blue-50",
    border: "border-blue-400",
    dot: "bg-blue-400",
    pill: "bg-blue-100 text-blue-600",
    href: "reference/layers/property-based-testing/",
  },
  {
    id: "L2",
    name: "Layer 2",
    label: "Mutation-Guided Quality",
    timing: "~5 min",
    description:
      "PIT + AI augmentation. Measures real test effectiveness, not just coverage.",
    bg: "bg-amber-50",
    border: "border-amber-400",
    dot: "bg-amber-400",
    pill: "bg-amber-100 text-amber-600",
    href: "reference/layers/mutation-testing/",
  },
  {
    id: "L3",
    name: "Layer 3",
    label: "Contract & Integration",
    timing: "~10 min",
    description:
      "Pact contracts and integration tests verify cross-service correctness.",
    bg: "bg-purple-50",
    border: "border-purple-400",
    dot: "bg-purple-400",
    pill: "bg-purple-100 text-purple-600",
    href: "reference/layers/contract-testing/",
  },
];

const defaultDashboard: Dashboard = {
  label: "Quality Dashboard",
  description:
    "Aggregated metrics, mutation scores, quality gates, and trend analysis.",
  href: "reference/metrics/",
  border: "border-blue-400",
  bg: "bg-blue-50",
  dot: "bg-blue-400",
};

function ConnectorArrow({ showLabel }: { showLabel?: boolean }) {
  return (
    <div className="flex flex-col items-center py-1">
      <div className="w-px h-4 bg-gray-300" />
      {showLabel && (
        <span className="inline-block text-xs font-medium text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full my-1">
          critical paths only
        </span>
      )}
      <svg
        className="w-3 h-3 text-gray-400"
        viewBox="0 0 12 12"
        fill="currentColor"
      >
        <path d="M6 9L2 5h8L6 9z" />
      </svg>
    </div>
  );
}

function prefixHref(baseUrl: string, href: string): string {
  const base = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
  const path = href.startsWith("/") ? href.slice(1) : href;
  return `${base}${path}`;
}

export function LayerDiagram({
  layers = defaultLayers,
  dashboard = defaultDashboard,
  baseUrl = "/",
  className,
}: LayerDiagramProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center w-full max-w-lg mx-auto",
        className,
      )}
    >
      {layers.map((layer, i) => (
        <div key={layer.id} className="contents">
          {/* Layer box */}
          <a
            href={prefixHref(baseUrl, layer.href)}
            className={cn(
              "block w-full rounded-lg p-4 border-l-4 no-underline hover:shadow-md transition-shadow",
              layer.border,
              layer.bg,
            )}
          >
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <span
                  className={cn(
                    "inline-block w-2.5 h-2.5 rounded-full",
                    layer.dot,
                  )}
                />
                <span className="text-xs font-medium text-gray-500">
                  {layer.name}
                </span>
                <span className="font-bold text-gray-900 text-sm">
                  {layer.label}
                </span>
              </div>
              <span
                className={cn(
                  "text-xs font-medium px-2 py-0.5 rounded-full",
                  layer.pill,
                )}
              >
                {layer.timing}
              </span>
            </div>
            <p className="text-sm text-gray-500 !mb-0 ml-[1.125rem]">
              {layer.description}
            </p>
          </a>

          {/* Connector arrow between layers */}
          {i < layers.length - 1 && <ConnectorArrow showLabel={i === 1} />}
        </div>
      ))}

      {/* Final connector to Dashboard */}
      <ConnectorArrow />

      {/* Dashboard box */}
      <a
        href={prefixHref(baseUrl, dashboard.href)}
        className={cn(
          "block w-full rounded-lg p-4 border-l-4 no-underline hover:shadow-md transition-shadow",
          dashboard.border,
          dashboard.bg,
        )}
      >
        <div className="flex items-center gap-2 mb-1">
          <span
            className={cn(
              "inline-block w-2.5 h-2.5 rounded-full",
              dashboard.dot,
            )}
          />
          <span className="font-bold text-gray-900 text-sm">
            {dashboard.label}
          </span>
        </div>
        <p className="text-sm text-gray-500 !mb-0 ml-[1.125rem]">
          {dashboard.description}
        </p>
      </a>
    </div>
  );
}
