import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterProps {
  brand?: ReactNode;
  links: FooterLink[];
  className?: string;
}

const DefaultBrand = () => (
  <div className="flex items-center gap-2 text-sm text-muted-foreground">
    <span className="font-bold text-foreground/80">
      <span className="text-emerald-500">Vis</span>Dom
    </span>
    <span>&middot;</span>
    <span>Powered by VirtusLab</span>
  </div>
);

export function Footer({ brand, links, className }: FooterProps) {
  return (
    <footer className={cn("py-16 border-t border-border", className)}>
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        {brand ?? <DefaultBrand />}
        <div className="flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
