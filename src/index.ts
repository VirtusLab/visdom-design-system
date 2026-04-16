"use client";

// Utilities
export { cn } from "./lib/utils";
export { useIsMobile } from "./lib/hooks/use-mobile";

// UI Components
export { Badge, badgeVariants } from "./components/ui/badge";
export { Button, buttonVariants } from "./components/ui/button";
export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from "./components/ui/card";
export {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "./components/ui/collapsible";
export {
  DropdownMenu,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "./components/ui/dropdown-menu";
export { Input } from "./components/ui/input";
export { Progress } from "./components/ui/progress";
export { ScrollArea, ScrollBar } from "./components/ui/scroll-area";
export { Separator } from "./components/ui/separator";
export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
} from "./components/ui/sheet";
export { Skeleton } from "./components/ui/skeleton";
export {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "./components/ui/tooltip";

// Domain Components
export { Breadcrumb } from "./components/domain/breadcrumb";
export type { BreadcrumbProps } from "./components/domain/breadcrumb";

export { BeforeAfter } from "./components/domain/before-after";
export type { Impact, BeforeAfterProps } from "./components/domain/before-after";

export { Callout } from "./components/domain/callout";
export type { CalloutType, CalloutProps } from "./components/domain/callout";

export { FaqAccordion } from "./components/domain/faq-accordion";
export type { FaqItem, FaqAccordionProps } from "./components/domain/faq-accordion";

export { VisdomBrand } from "./components/domain/visdom-brand";
export type { VisdomBrandProps } from "./components/domain/visdom-brand";

export { VirtusLabLogo, VirtusLabMark } from "./components/domain/virtuslab-logo";
export type {
  VirtusLabLogoProps,
  VirtusLabMarkProps,
} from "./components/domain/virtuslab-logo";

export { CtaCard } from "./components/domain/cta-card";
export type { CtaCardProps } from "./components/domain/cta-card";

export { DocPageHeader } from "./components/domain/doc-page-header";
export type {
  DocPageHeaderTag,
  DocPageHeaderProps,
} from "./components/domain/doc-page-header";

export { DocPagination } from "./components/domain/doc-pagination";
export type {
  DocPaginationLink,
  DocPaginationProps,
} from "./components/domain/doc-pagination";

export { HeroSection } from "./components/domain/hero-section";
export type {
  HeroStat,
  HeroAction,
  HeroSectionProps,
} from "./components/domain/hero-section";

export { ImpactNumber } from "./components/domain/impact-number";
export type { ImpactNumberProps } from "./components/domain/impact-number";

export { LayerBadge } from "./components/domain/layer-badge";
export type {
  LayerLevel,
  LayerBadgeProps,
} from "./components/domain/layer-badge";

export { LayerDiagram } from "./components/domain/layer-diagram";
export type {
  Layer,
  Dashboard,
  LayerDiagramProps,
} from "./components/domain/layer-diagram";

export { LevelCard } from "./components/domain/level-card";
export type {
  MatrixItem,
  GuideInfo,
  LevelCardProps,
} from "./components/domain/level-card";

export { LevelGateCard } from "./components/domain/level-gate-card";
export type {
  MaturityGate,
  LevelGateCardProps,
} from "./components/domain/level-gate-card";

export { PersonaCard } from "./components/domain/persona-card";
export type {
  PersonaCardColor,
  PersonaCardProps,
} from "./components/domain/persona-card";

export { ResourceCard } from "./components/domain/resource-card";
export type {
  ResourceCardColor,
  ResourceCardProps,
} from "./components/domain/resource-card";

export { SolutionCard } from "./components/domain/solution-card";
export type {
  TagColor,
  SolutionCardTag,
  SolutionCardCta,
  SolutionCardProps,
} from "./components/domain/solution-card";

export { StatCard } from "./components/domain/stat-card";
export type {
  StatCardColor,
  StatCardProps,
} from "./components/domain/stat-card";

export { Terminal } from "./components/domain/terminal";
export type { TerminalProps } from "./components/domain/terminal";

export { Timeline } from "./components/domain/timeline";
export type {
  TimelineStep,
  TimelineProps,
} from "./components/domain/timeline";

export { AiRadar } from "./components/domain/ai-radar";
export type {
  AiRadarStat,
  AiRadarProps,
} from "./components/domain/ai-radar";

export { SeriesCard } from "./components/domain/series-card";
export type {
  SeriesArticle,
  SeriesCardProps,
} from "./components/domain/series-card";

export { MaturityRef } from "./components/domain/maturity-ref";
export type {
  MaturityLevel,
  MaturityRefProps,
} from "./components/domain/maturity-ref";

export { Pillars } from "./components/domain/pillars";
export type { Pillar, PillarsProps } from "./components/domain/pillars";

export { PlatformSection } from "./components/domain/platform-section";
export type { PlatformSectionProps } from "./components/domain/platform-section";

export { PlatformBlock } from "./components/domain/platform-block";
export type {
  PlatformBlockTagColor,
  PlatformBlockTag,
  PlatformBlockCta,
  PlatformBlockProps,
} from "./components/domain/platform-block";

export { NumberedCard } from "./components/domain/numbered-card";
export type { NumberedCardProps } from "./components/domain/numbered-card";

export { FeatureCard } from "./components/domain/feature-card";
export type { FeatureCardProps } from "./components/domain/feature-card";

export { StatusDiagram } from "./components/domain/status-diagram";
export type {
  StatusVariant,
  StatusRow,
  StatusDiagramProps,
} from "./components/domain/status-diagram";

export { ComparisonCard } from "./components/domain/comparison-card";
export type { ComparisonCardProps } from "./components/domain/comparison-card";

export { VisdomStrip } from "./components/domain/visdom-strip";
export type {
  VisdomProduct,
  VisdomStripProps,
} from "./components/domain/visdom-strip";

// Layout Components
export { DocLayout } from "./components/layout/doc-layout";
export type {
  BreadcrumbItem,
  DocLayoutProps,
} from "./components/layout/doc-layout";

export { Footer } from "./components/layout/footer";
export type { FooterLink, FooterProps } from "./components/layout/footer";

export { Nav } from "./components/layout/nav";
export type { NavLink, NavProps } from "./components/layout/nav";

export { Section } from "./components/layout/section";
export type { SectionProps } from "./components/layout/section";

export { TopBar } from "./components/layout/top-bar";
export type { TopBarProps } from "./components/layout/top-bar";
