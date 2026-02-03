import { useState } from "react";
import { IdeaForm } from "@/components/IdeaForm";
import { AnalysisResult } from "@/components/AnalysisResult";
import { analyzeIdea } from "@/lib/analyzeIdea";
import type { IdeaAnalysis } from "@/types/analysis";
import { Button } from "@/components/ui/button";
import { RotateCcw, Sparkles, TrendingUp, Shield } from "lucide-react";
import NeuralBackground from "@/components/animated-shader-background";

const Index = () => {
  const [analysis, setAnalysis] = useState<IdeaAnalysis | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalyze = async (idea: string) => {
    setIsAnalyzing(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    const result = analyzeIdea(idea);
    setAnalysis(result);
    setIsAnalyzing(false);
  };

  const handleReset = () => {
    setAnalysis(null);
  };

  return (
    <div className="relative min-h-screen">
      {/* Neural Background */}
      <NeuralBackground
        color="#000000"
        particleCount={500}
        trailOpacity={0.09}
        speed={0.6}
        className="z-0"
      />
      
      {/* Gradient Overlay for depth */}
      <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-black/60 z-1 pointer-events-none" />
      
      <div className="relative z-10 flex flex-col justify-center">
        {/* Enhanced Header */}
        <header className="border-b border-white/10 backdrop-blur-xl bg-black/30">
          <div className="container max-w-6xl py-4 mx-auto">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <h1 className="text-3xl font-display font-bold tracking-tight bg-linear-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
                    CLARITY ENGINE
                  </h1>
                </div>
              </div>
              {analysis && (
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={handleReset}
                  className="bg-white/5 border-white/20 hover:bg-white/10 text-white cursor-pointer backdrop-blur-sm"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Yangi G'oya
                </Button>
              )}
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container max-w-6xl py-8 mx-auto">
          {!analysis ? (
            <div className="space-y-12">
              {/* Hero Section */}
              <div className="text-center space-y-6 max-w-3xl mx-auto py-8">
                <div className="inline-block">
                  <div className="px-4 py-2 rounded-full bg-linear-to-r from-blue-500/20 via-purple-500/20 to-green-500/20 border border-white/10 backdrop-blur-sm">
                    <p className="text-sm text-gray-300 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-green-400" />
                      AI-powered biznes g'oyalarini tahlil qilish tizimi
                    </p>
                  </div>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
                  Haqiqatni bilib oling.
                  <br />
                  <span className="bg-linear-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
                    Motivatsiya emas.
                  </span>
                </h2>
                
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  Biznes g'oyangizni uchta muhim nuqtai nazardan tahlil qiling: 
                  muammo, shoshilinchlik va moliyaviy imkoniyat.
                </p>
              </div>

              {/* Form Section */}
              <div className="max-w-3xl mx-auto">
                <IdeaForm onSubmit={handleAnalyze} isAnalyzing={isAnalyzing} />
              </div>

              {/* How It Works */}
              <div className="max-w-4xl mx-auto space-y-6 py-8">
                <h3 className="text-2xl font-display font-bold text-center text-white mb-8">
                  Qanday ishlaydi?
                </h3>
                <div className="grid gap-4">
                  {[
                    {
                      step: "01",
                      title: "G'oyangizni kiriting",
                      description: "Biznes g'oyangizni qisqacha, lekin aniq tarzda yozing"
                    },
                    {
                      step: "02",
                      title: "AI tahlil qiladi",
                      description: "Sun'iy intellekt g'oyangizni 3 ta muhim parametr bo'yicha baholaydi"
                    },
                    {
                      step: "03",
                      title: "Natijalarni oling",
                      description: "Batafsil tahlil, ball va keyingi qadamlar bo'yicha tavsiyalar"
                    },
                    {
                      step: "04",
                      title: "Harakat qiling",
                      description: "7 kunlik aniq rejaga amal qiling va g'oyangizni sinab ko'ring"
                    }
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex gap-6 p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all group"
                    >
                      <div className="shrink-0 w-12 h-12 rounded-lg bg-linear-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-display font-bold text-lg group-hover:scale-110 transition-transform">
                        {item.step}
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-lg font-display font-bold text-white">
                          {item.title}
                        </h4>
                        <p className="text-sm text-gray-400">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <AnalysisResult analysis={analysis} />
          )}
        </main>

        {/* Enhanced Footer */}
        <footer className="border-t border-white/10 backdrop-blur-xl bg-black/30 mt-auto">
          <div className="container max-w-6xl py-8 mx-auto">
            <div className="grid gap-6 md:grid-cols-3 mb-6">
              <div className="space-y-2">
                <h4 className="font-display font-bold text-white">CLARITY ENGINE</h4>
                <p className="text-xs text-gray-400">
                  G'oyalaringizni haqiqatga aylantiring
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-display font-bold text-white">Tezkor havolalar</h4>
                <ul className="space-y-1 text-xs text-gray-400">
                  <li>Qanday ishlaydi</li>
                  <li>Ko'p beriladigan savollar</li>
                  <li>Bog'lanish</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-display font-bold text-white">Resurslar</h4>
                <ul className="space-y-1 text-xs text-gray-400">
                  <li>Biznes g'oyalari</li>
                  <li>Startup qo'llanmasi</li>
                  <li>Muvaffaqiyat hikoyalari</li>
                </ul>
              </div>
            </div>
            <div className="pt-6 border-t border-white/10">
              <p className="text-xs text-gray-400 text-center">
                Hech qanday ortiqcha gaplar yo'q. Hech qanday motivatsiya yo'q. Faqat haqiqat.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;