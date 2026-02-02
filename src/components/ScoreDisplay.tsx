import { cn } from '@/lib/utils';

interface ScoreDisplayProps {
  score: number;
  className?: string;
}

export function ScoreDisplay({ score, className }: ScoreDisplayProps) {
  const getScoreColor = (score: number) => {
    if (score >= 7) return 'bg-verdict-go';
    if (score >= 4) return 'bg-verdict-pivot';
    return 'bg-verdict-kill';
  };

  return (
    <div className={cn('space-y-3', className)}>
      <div className="flex items-baseline justify-between">
        <span className="text-sm uppercase tracking-wider text-muted-foreground font-display">
          Idea Clarity Score
        </span>
        <span className="text-5xl font-display font-bold">
          {score}<span className="text-2xl text-muted-foreground">/10</span>
        </span>
      </div>
      <div className="h-2 bg-muted overflow-hidden">
        <div
          className={cn('h-full transition-all duration-1000 ease-out', getScoreColor(score))}
          style={{ width: `${score * 10}%` }}
        />
      </div>
    </div>
  );
}
