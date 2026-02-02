import type { IdeaAnalysis } from '@/types/analysis';
import { ScoreDisplay } from '@/components/ScoreDisplay';
import { LensCard } from './LensCard';
import { ArrowRight, AlertTriangle, Zap, Target, TrendingUp, Award, Lightbulb } from 'lucide-react';
import { VerdictBadge } from './VerdictBadge';

interface AnalysisResultProps {
  analysis: IdeaAnalysis;
}

export function AnalysisResult({ analysis }: AnalysisResultProps) {
  return (
    <div className="space-y-8 animate-in-up max-w-6xl mx-auto">
      {/* Header Section with Score and Verdict */}
      <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-blue-500/10 via-purple-500/10 to-green-500/10 border border-white/20 backdrop-blur-xl p-8">
        <div className="absolute inset-0 bg-linear-to-r from-blue-500/5 via-purple-500/5 to-green-500/5" />
        <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="space-y-4 flex-1">
            <div className="flex items-center gap-3">
              <Award className="w-8 h-8 text-yellow-400" />
              <h2 className="text-2xl font-display font-bold text-white">
                Tahlil natijalari
              </h2>
            </div>
            <p className="text-gray-300 text-sm max-w-xl">
              G'oyangiz professional tahlildan o'tkazildi. Quyida batafsil natijalarni ko'ring va keyingi qadamlarni rejalashtiring.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <ScoreDisplay score={analysis.score} className="flex-1" />
            <VerdictBadge verdict={analysis.verdict} />
          </div>
        </div>
      </div>

      {/* Three Lenses - Enhanced Grid */}
      <div className="space-y-4">
        <div className="flex items-center gap-3 mb-6">
          <Target className="w-6 h-6 text-purple-400" />
          <h3 className="text-xl font-display font-bold text-white">
            Uchta asosiy ko'rsatkich
          </h3>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          <LensCard lens={analysis.pain} delay={100} />
          <LensCard lens={analysis.urgency} delay={200} />
          <LensCard lens={analysis.money} delay={300} />
        </div>
      </div>

      {/* Key Insights Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-3 mb-6">
          <Lightbulb className="w-6 h-6 text-yellow-400" />
          <h3 className="text-xl font-display font-bold text-white">
            Asosiy xulosalar
          </h3>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Strongest Signal */}
          <div 
            className="relative group p-6 rounded-2xl bg-linear-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 backdrop-blur-xl hover:scale-[1.02] transition-all duration-300"
            style={{ animationDelay: '400ms' }}
          >
            <div className="absolute inset-0 bg-linear-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
            <div className="relative space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-green-400" />
                </div>
                <span className="text-sm uppercase tracking-wider text-green-400 font-display font-bold">
                  Eng kuchli signal
                </span>
              </div>
              <p className="text-white font-medium text-lg leading-relaxed">
                {analysis.strongestSignal}
              </p>
              <div className="pt-4 border-t border-green-500/20">
                <p className="text-xs text-gray-400">
                  Bu sizning g'oyangizning eng kuchli tomoni. Bu ustiga qurish kerak.
                </p>
              </div>
            </div>
          </div>

          {/* Weakest Signal */}
          <div 
            className="relative group p-6 rounded-2xl bg-linear-to-br from-red-500/10 to-orange-500/10 border border-red-500/30 backdrop-blur-xl hover:scale-[1.02] transition-all duration-300"
            style={{ animationDelay: '500ms' }}
          >
            <div className="absolute inset-0 bg-linear-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
            <div className="relative space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-red-400" />
                </div>
                <span className="text-sm uppercase tracking-wider text-red-400 font-display font-bold">
                  Eng zaif signal
                </span>
              </div>
              <p className="text-white font-medium text-lg leading-relaxed">
                {analysis.weakestSignal}
              </p>
              <div className="pt-4 border-t border-red-500/20">
                <p className="text-xs text-gray-400">
                  Bu sohani yaxshilash yoki qayta o'ylash kerak bo'lishi mumkin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reality Check - Enhanced */}
      <div 
        className="relative overflow-hidden p-8 rounded-2xl bg-linear-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-white/20 backdrop-blur-xl"
        style={{ animationDelay: '600ms' }}
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-linear-to-br from-purple-500/20 to-transparent rounded-full blur-3xl" />
        <div className="relative space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
              <Target className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <span className="text-sm uppercase tracking-wider text-purple-400 font-display font-bold block">
                Haqiqat tekshiruvi
              </span>
              <span className="text-xs text-gray-400">
                Ob'ektiv baho
              </span>
            </div>
          </div>
          <p className="text-2xl font-display font-bold text-white leading-relaxed">
            {analysis.realityCheck}
          </p>
          <div className="flex items-center gap-2 pt-4">
            <TrendingUp className="w-4 h-4 text-gray-400" />
            <p className="text-sm text-gray-400">
              Ushbu xulosaga asoslanib, strategik qaror qabul qiling
            </p>
          </div>
        </div>
      </div>

      {/* Next Step - Call to Action */}
      <div
        className="relative overflow-hidden p-8 rounded-2xl bg-linear-to-r from-green-500/20 via-emerald-500/20 to-teal-500/20 border border-green-500/30 backdrop-blur-xl"
        style={{ animationDelay: '700ms' }}
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-linear-to-r from-green-500/10 via-emerald-500/10 to-teal-500/10 animate-pulse" />
        </div>
        <div className="relative space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-green-500/30 flex items-center justify-center">
              <ArrowRight className="w-6 h-6 text-green-400" />
            </div>
            <div>
              <span className="text-sm uppercase tracking-wider text-green-400 font-display font-bold block">
                Keyingi qadam
              </span>
              <span className="text-xs text-gray-400">
                7 kun ichida amalga oshiring
              </span>
            </div>
          </div>
          <p className="text-2xl font-display font-bold text-white leading-relaxed">
            {analysis.nextStep}
          </p>
          <div className="flex flex-wrap gap-3 pt-4">
            <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
              <p className="text-xs text-gray-400">⏱️ Muddat: <span className="text-white font-bold">7 kun</span></p>
            </div>
            <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
              <p className="text-xs text-gray-400">🎯 Maqsad: <span className="text-white font-bold">Tasdiqlash</span></p>
            </div>
            <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
              <p className="text-xs text-gray-400">📊 Natija: <span className="text-white font-bold">Qaror</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* Action Tips */}
      <div className="grid gap-4 md:grid-cols-3 mt-8">
        {[
          {
            icon: "🎯",
            title: "Aniq bo'ling",
            description: "Har bir qadamni aniq va o'lchanadigan qiling"
          },
          {
            icon: "⚡",
            title: "Tez harakat qiling",
            description: "7 kun - bu mukammal vaqt bo'ladi, undan foydalaning"
          },
          {
            icon: "📈",
            title: "O'lchang",
            description: "Har bir natijani qayd etib boring va tahlil qiling"
          }
        ].map((tip, index) => (
          <div
            key={index}
            className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all"
          >
            <div className="text-3xl mb-3">{tip.icon}</div>
            <h4 className="text-white font-display font-bold mb-2">{tip.title}</h4>
            <p className="text-sm text-gray-400">{tip.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}