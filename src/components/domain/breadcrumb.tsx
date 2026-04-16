import { ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BreadcrumbProps {
  label: string;
  href: string;
  className?: string;
}

export function Breadcrumb({ label, href, className }: BreadcrumbProps) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 transition-colors",
        className
      )}
    >
      <ChevronLeft className="w-4 h-4" />
      {label}
    </a>
  );
}
