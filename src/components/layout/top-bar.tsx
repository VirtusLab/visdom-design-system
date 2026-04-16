import { cn } from "@/lib/utils";
import { VirtusLabLogo } from "../domain/virtuslab-logo";

export interface TopBarProps {
  href?: string;
  className?: string;
}

export function TopBar({ href = "https://virtuslab.com", className }: TopBarProps) {
  return (
    <div className={cn("bg-gray-100 border-b border-gray-200", className)}>
      <div className="max-w-[1080px] mx-auto px-6 py-1.5">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center"
        >
          <VirtusLabLogo className="text-gray-400" />
        </a>
      </div>
    </div>
  );
}
