import type { Verdict } from "@/types/analysis";
import { cn } from "@/lib/utils";

interface VerdictBadgeProps {
  verdict: Verdict;
  className?: string;
}

export function VerdictBadge({ verdict, className }: VerdictBadgeProps) {
  const styles = {
    GO: "bg-verdict-go text-white",
    PIVOT: "bg-verdict-pivot text-black",
    KILL: "bg-verdict-kill text-white",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center justify-center px-6 py-2 font-display font-bold text-2xl tracking-widest",
        styles[verdict],
        className,
      )}
    >
      {verdict}
    </span>
  );
}
