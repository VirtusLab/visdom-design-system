"use client";

import { useState, type ReactNode } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface NavProps {
  brand?: ReactNode;
  links: NavLink[];
  cta?: { label: string; href: string };
  className?: string;
}

export function Nav({ brand, links, cta, className }: NavProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const defaultBrand = (
    <span className="text-lg font-bold">
      <span className="text-emerald-500">Vis</span>Dom
    </span>
  );

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border",
        className
      )}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-16">
        <a href="/" className="flex items-center gap-2.5 no-underline">
          {brand ?? defaultBrand}
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {link.label}
            </a>
          ))}
          {cta && (
            <a
              href={cta.href}
              className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium px-5 py-2 transition-colors hover:bg-primary/90"
            >
              {cta.label}
            </a>
          )}
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden text-muted-foreground hover:text-foreground p-2"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background pb-4">
          <div className="max-w-[1200px] mx-auto px-6 flex flex-col gap-3 pt-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground py-2 transition-colors"
                {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            {cta && (
              <a
                href={cta.href}
                className="inline-flex items-center justify-center self-start rounded-full bg-primary text-primary-foreground text-sm font-medium px-5 py-2 mt-2 transition-colors hover:bg-primary/90"
                onClick={() => setMobileOpen(false)}
              >
                {cta.label}
              </a>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
