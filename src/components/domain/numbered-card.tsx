import { cn } from "@/lib/utils";

export interface NumberedCardProps {
  number: string;
  title: string;
  description: string;
  className?: string;
}

export function NumberedCard({
  number,
  title,
  description,
  className,
}: NumberedCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-white/10 bg-white/5 p-6",
        className
      )}
    >
      <span className="block text-5xl font-extrabold text-white/90 mb-3 leading-none">
        {number}
      </span>
      <strong className="block text-sm font-semibold text-white mb-2">
        {title}
      </strong>
      <p className="text-sm text-white/60 leading-relaxed">{description}</p>
    </div>
  );
}
