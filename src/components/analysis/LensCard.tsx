import type { LensAnalysis } from '@/types/analysis';
import { cn } from '@/lib/utils';
import { CheckCircle2, XCircle, HelpCircle } from 'lucide-react';

interface LensCardProps {
  lens: LensAnalysis;
  delay?: number;
}



const lensConfig = {
  Pain: {
    gradient: 'from-red-50 to-orange-50',
    borderColor: 'border-red-200/60',
    iconBg: 'from-red-500 to-orange-500',
    iconColor: 'text-red-600',
    emoji: '🎯'
  },
  Urgency: {
    gradient: 'from-blue-50 to-cyan-50',
    borderColor: 'border-blue-200/60',
    iconBg: 'from-blue-500 to-cyan-500',
    iconColor: 'text-blue-600',
    emoji: '⚡'
  },
  Money: {
    gradient: 'from-green-50 to-emerald-50',
    borderColor: 'border-green-200/60',
    iconBg: 'from-green-500 to-emerald-500',
    iconColor: 'text-green-600',
    emoji: '💰'
  }
};

const scoreIcons = {
  strong: CheckCircle2,
  weak: XCircle,
  unclear: HelpCircle,
};

export function LensCard({ lens, delay = 0 }: LensCardProps) {

  const ScoreIcon = scoreIcons[lens.score];
  const config = lensConfig[lens.title as keyof typeof lensConfig];

  const scoreStyles = {
    strong: 'border-green-500/50 bg-gradient-to-br from-green-500/20 to-emerald-500/20 text-green-700',
    weak: 'border-red-500/50 bg-gradient-to-br from-red-500/20 to-orange-500/20 text-red-700',
    unclear: 'border-yellow-500/50 bg-gradient-to-br from-yellow-500/20 to-amber-500/20 text-yellow-700',
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
        "relative group rounded-3xl backdrop-blur-xl border-2 transition-all duration-500 hover:scale-[1.02] overflow-hidden shadow-xl hover:shadow-2xl",
        `bg-gradient-to-br ${config.gradient} ${config.borderColor}`
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Glow effect on hover */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Content */}
      <div className="relative p-6 space-y-5">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className={cn(
              "w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br shadow-lg group-hover:scale-110 transition-transform",
              config.iconBg
            )}>
              <span className="text-2xl">{config.emoji}</span>
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-xl text-gray-900 uppercase tracking-wide flex items-center gap-2">
                {lens.title}
              </h3>
              <p className="text-xs text-gray-600 font-medium">
                {lens.title === 'Pain' && 'Muammo intensivligi'}
                {lens.title === 'Urgency' && 'Vaqt omili'}
                {lens.title === 'Money' && 'To\'lov qobiliyati'}
              </p>
            </div>
          </div>
        </div>

        {/* Score Badge */}
        <div className={cn(
          'inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 font-bold text-sm backdrop-blur-sm shadow-md',
          scoreStyles[lens.score]
        )}>
          <ScoreIcon className="w-5 h-5" />
          <span className="uppercase tracking-widest">
            {scoreLabels[lens.score]}
          </span>
        </div>

        {/* Score Description */}
        <div className="p-4 rounded-xl bg-white/60 border border-gray-200 shadow-sm">
          <p className="text-xs text-gray-700 font-medium">
            {scoreDescriptions[lens.score]}
          </p>
        </div>

        {/* Points List */}
        <div className="space-y-3 pt-2">
          {lens.points.map((point, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-4 rounded-xl bg-white/60 border border-gray-200 shadow-sm hover:bg-white/80 hover:shadow-md transition-all duration-200 group/item"
            >
              <div className="shrink-0 mt-1">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-gray-300 to-gray-200 flex items-center justify-center shadow-sm">
                  <span className="w-2 h-2 bg-gray-700 rounded-full group-hover/item:scale-125 transition-transform" />
                </div>
              </div>
              <p className="text-sm text-gray-800 leading-relaxed flex-1 font-medium">
                {point}
              </p>
            </div>
          ))}
        </div>

        {/* Progress indicator */}
        <div className="pt-4 space-y-3">
          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-600 font-medium">Baholash darajasi</span>
            <span className={cn(
              "font-bold",
              lens.score === 'strong' && "text-green-700",
              lens.score === 'weak' && "text-red-700",
              lens.score === 'unclear' && "text-yellow-700"
            )}>
              {lens.score === 'strong' && '85-100%'}
              {lens.score === 'weak' && '0-40%'}
              {lens.score === 'unclear' && '40-70%'}
            </span>
          </div>
          <div className="h-3 bg-gray-200 rounded-full overflow-hidden shadow-inner">
            <div
              className={cn(
                "h-full rounded-full transition-all duration-1000 shadow-sm",
                lens.score === 'strong' && "bg-gradient-to-r from-green-500 to-emerald-500 w-[90%]",
                lens.score === 'weak' && "bg-gradient-to-r from-red-500 to-orange-500 w-[30%]",
                lens.score === 'unclear' && "bg-gradient-to-r from-yellow-500 to-amber-500 w-[55%]"
              )}
              style={{ animationDelay: `${delay + 200}ms` }}
            />
          </div>
        </div>
      </div>

      {/* Bottom accent */}
      <div className={cn(
        "h-1.5 bg-gradient-to-r shadow-md",
        lens.score === 'strong' && "from-green-500 via-emerald-500 to-green-500",
        lens.score === 'weak' && "from-red-500 via-orange-500 to-red-500",
        lens.score === 'unclear' && "from-yellow-500 via-amber-500 to-yellow-500"
      )} />
    </div>
  );
}