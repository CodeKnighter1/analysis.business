import type { IdeaAnalysis } from '@/types/analysis';
import { ScoreDisplay } from "@/components/analysis/ScoreDisplay";
import { LensCard } from './LensCard';
import { ArrowRight, AlertTriangle, Zap, Target, TrendingUp, Award, Lightbulb } from 'lucide-react';
import { VerdictBadge } from './VerdictBadge';

interface AnalysisResultsProps {
  analysis: IdeaAnalysis;
}

export function AnalysisResults({ analysis }: AnalysisResultsProps) {
  return (
    <div className="space-y-8 animate-fade-in-up max-w-6xl mx-auto">
      {/* Header Section with Score and Verdict */}
      <div className="relative overflow-hidden rounded-3xl bg-white/90 backdrop-blur-xl border border-gray-200/60 shadow-2xl p-8">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>

        <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="space-y-4 flex-1">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Tahlil natijalari
              </h2>
            </div>
            <p className="text-gray-600 text-base max-w-xl leading-relaxed">
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
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-lg">
            <Target className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">
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
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center shadow-lg">
            <Lightbulb className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">
            Asosiy xulosalar
          </h3>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Strongest Signal */}
          <div
            className="relative group p-8 rounded-3xl bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200/60 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            style={{ animationDelay: '400ms' }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-400/10 rounded-full blur-2xl"></div>

            <div className="relative space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-lg">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm uppercase tracking-wider text-green-700 font-bold">
                  Eng kuchli signal
                </span>
              </div>
              <p className="text-gray-900 font-semibold text-lg leading-relaxed">
                {analysis.strongestSignal}
              </p>
              <div className="pt-4 border-t border-green-200">
                <p className="text-sm text-gray-600">
                  Bu sizning g'oyangizning eng kuchli tomoni. Bu ustiga qurish kerak.
                </p>
              </div>
            </div>
          </div>

          {/* Weakest Signal */}
          <div
            className="relative group p-8 rounded-3xl bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200/60 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            style={{ animationDelay: '500ms' }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-400/10 rounded-full blur-2xl"></div>

            <div className="relative space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center shadow-lg">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm uppercase tracking-wider text-red-700 font-bold">
                  Eng zaif signal
                </span>
              </div>
              <p className="text-gray-900 font-semibold text-lg leading-relaxed">
                {analysis.weakestSignal}
              </p>
              <div className="pt-4 border-t border-red-200">
                <p className="text-sm text-gray-600">
                  Bu sohani yaxshilash yoki qayta o'ylash kerak bo'lishi mumkin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reality Check - Enhanced */}
      <div
        className="relative overflow-hidden p-8 rounded-3xl bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200/60 shadow-xl"
        style={{ animationDelay: '600ms' }}
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl"></div>

        <div className="relative space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-lg">
              <Target className="w-7 h-7 text-white" />
            </div>
            <div>
              <span className="text-sm uppercase tracking-wider text-purple-700 font-bold block">
                Haqiqat tekshiruvi
              </span>
              <span className="text-xs text-gray-600">
                Ob'ektiv baho
              </span>
            </div>
          </div>
          <p className="text-2xl font-bold text-gray-900 leading-relaxed">
            {analysis.realityCheck}
          </p>
          <div className="flex items-center gap-2 pt-2">
            <TrendingUp className="w-4 h-4 text-gray-500" />
            <p className="text-sm text-gray-600">
              Ushbu xulosaga asoslanib, strategik qaror qabul qiling
            </p>
          </div>
        </div>
      </div>

      {/* Next Step - Call to Action */}
      <div
        className="relative overflow-hidden p-8 rounded-3xl bg-gradient-to-br from-green-50 to-teal-50 border-2 border-green-200/60 shadow-xl"
        style={{ animationDelay: '700ms' }}
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-400/10 rounded-full blur-3xl"></div>

        <div className="relative space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-600 to-teal-600 flex items-center justify-center shadow-lg">
              <ArrowRight className="w-7 h-7 text-white" />
            </div>
            <div>
              <span className="text-sm uppercase tracking-wider text-green-700 font-bold block">
                Keyingi qadam
              </span>
              <span className="text-xs text-gray-600">
                7 kun ichida amalga oshiring
              </span>
            </div>
          </div>
          <p className="text-2xl font-bold text-gray-900 leading-relaxed">
            {analysis.nextStep}
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <div className="px-4 py-2.5 rounded-xl bg-white/80 border border-gray-200 shadow-md">
              <p className="text-sm text-gray-700">⏱️ Muddat: <span className="font-bold text-gray-900">7 kun</span></p>
            </div>
            <div className="px-4 py-2.5 rounded-xl bg-white/80 border border-gray-200 shadow-md">
              <p className="text-sm text-gray-700">🎯 Maqsad: <span className="font-bold text-gray-900">Tasdiqlash</span></p>
            </div>
            <div className="px-4 py-2.5 rounded-xl bg-white/80 border border-gray-200 shadow-md">
              <p className="text-sm text-gray-700">📊 Natija: <span className="font-bold text-gray-900">Qaror</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* Action Tips */}
      <div className="grid gap-6 md:grid-cols-3">
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
            className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="text-4xl mb-4">{tip.icon}</div>
            <h4 className="text-gray-900 font-bold text-lg mb-2">{tip.title}</h4>
            <p className="text-sm text-gray-600 leading-relaxed">{tip.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}