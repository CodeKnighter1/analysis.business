import type { LensAnalysis } from '@/types/analysis';
import { cn } from '@/lib/utils';
import { Target, Clock, DollarSign, CheckCircle2, XCircle, HelpCircle } from 'lucide-react';

interface LensCardProps {
  lens: LensAnalysis;
  delay?: number;
}

const icons = {
  Pain: Target,
  Urgency: Clock,
  Money: DollarSign,
};

const lensConfig = {
  Pain: {
    gradient: 'from-red-500/20 to-orange-500/20',
    borderColor: 'border-red-500/30',
    iconColor: 'text-red-400',
    emoji: '🎯'
  },
  Urgency: {
    gradient: 'from-blue-500/20 to-cyan-500/20',
    borderColor: 'border-blue-500/30',
    iconColor: 'text-blue-400',
    emoji: '⚡'
  },
  Money: {
    gradient: 'from-green-500/20 to-emerald-500/20',
    borderColor: 'border-green-500/30',
    iconColor: 'text-green-400',
    emoji: '💰'
  }
};

const scoreIcons = {
  strong: CheckCircle2,
  weak: XCircle,
  unclear: HelpCircle,
};

export function LensCard({ lens, delay = 0 }: LensCardProps) {
  const Icon = icons[lens.title as keyof typeof icons];
  const ScoreIcon = scoreIcons[lens.score];
  const config = lensConfig[lens.title as keyof typeof lensConfig];
  
  const scoreStyles = {
    strong: 'border-green-500/50 bg-green-500/20 text-green-400',
    weak: 'border-red-500/50 bg-red-500/20 text-red-400',
    unclear: 'border-yellow-500/50 bg-yellow-500/20 text-yellow-400',
  };

  const scoreLabels = {
    strong: 'KUCHLI',
    weak: 'ZAIF',
    unclear: 'NOANIQ',
  };

  const scoreDescriptions = {
    strong: 'Bu g\'oyaning kuchli tomoni',
    weak: 'Bu sohani yaxshilash kerak',
    unclear: 'Qo\'shimcha tekshirish talab etiladi',
  };

  return (
    <div
      className={cn(
        "relative group rounded-2xl backdrop-blur-xl border transition-all duration-500 hover:scale-[1.02] overflow-hidden",
        `bg-linear-to-br ${config.gradient} border ${config.borderColor}`
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Content */}
      <div className="relative p-6 space-y-5">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className={cn(
              "w-12 h-12 rounded-xl flex items-center justify-center bg-white/10 group-hover:scale-110 transition-transform",
            )}>
              <span className="text-2xl">{config.emoji}</span>
            </div>
            <div className="space-y-1">
              <h3 className="font-display font-bold text-xl text-white uppercase tracking-wide flex items-center gap-2">
                {lens.title}
              </h3>
              <p className="text-xs text-gray-400">
                {lens.title === 'Pain' && 'Muammo intensivligi'}
                {lens.title === 'Urgency' && 'Vaqt omili'}
                {lens.title === 'Money' && 'To\'lov qobiliyati'}
              </p>
            </div>
          </div>
        </div>

        {/* Score Badge */}
        <div className={cn(
          'inline-flex items-center gap-2 px-4 py-2 rounded-lg border font-display font-bold text-sm backdrop-blur-sm',
          scoreStyles[lens.score]
        )}>
          <ScoreIcon className="w-4 h-4" />
          <span className="uppercase tracking-widest">
            {scoreLabels[lens.score]}
          </span>
        </div>

        {/* Score Description */}
        <div className="p-3 rounded-lg bg-white/5 border border-white/10">
          <p className="text-xs text-gray-300">
            {scoreDescriptions[lens.score]}
          </p>
        </div>

        {/* Points List */}
        <div className="space-y-3 pt-2">
          {lens.points.map((point, i) => (
            <div 
              key={i} 
              className="flex items-start gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group/item"
            >
              <div className="shrink-0 mt-1">
                <div className="w-5 h-5 rounded-full bg-linear-to-br from-white/20 to-white/5 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 bg-white rounded-full group-hover/item:scale-125 transition-transform" />
                </div>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed flex-1">
                {point}
              </p>
            </div>
          ))}
        </div>

        {/* Progress indicator */}
        <div className="pt-4 space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-400">Baholash darajasi</span>
            <span className={cn(
              "font-bold",
              lens.score === 'strong' && "text-green-400",
              lens.score === 'weak' && "text-red-400",
              lens.score === 'unclear' && "text-yellow-400"
            )}>
              {lens.score === 'strong' && '85-100%'}
              {lens.score === 'weak' && '0-40%'}
              {lens.score === 'unclear' && '40-70%'}
            </span>
          </div>
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <div 
              className={cn(
                "h-full rounded-full transition-all duration-1000",
                lens.score === 'strong' && "bg-linear-to-r from-green-500 to-emerald-500 w-[90%]",
                lens.score === 'weak' && "bg-linear-to-r from-red-500 to-orange-500 w-[30%]",
                lens.score === 'unclear' && "bg-linear-to-r from-yellow-500 to-amber-500 w-[55%]"
              )}
              style={{ animationDelay: `${delay + 200}ms` }}
            />
          </div>
        </div>
      </div>

      {/* Bottom accent */}
      <div className={cn(
        "h-1 bg-linear-to-r",
        lens.score === 'strong' && "from-green-500 via-emerald-500 to-green-500",
        lens.score === 'weak' && "from-red-500 via-orange-500 to-red-500",
        lens.score === 'unclear' && "from-yellow-500 via-amber-500 to-yellow-500"
      )} />
    </div>
  );
}