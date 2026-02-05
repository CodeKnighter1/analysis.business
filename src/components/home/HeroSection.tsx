import React from 'react';
import { ArrowRight } from 'lucide-react';
import { IdeaForm } from './IdeaForm';
import picone from '../../../public/unnamed.jpg';

interface HeroSectionProps {
  onSubmit: (data: { idea: string }) => void;
  isAnalyzing: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onSubmit, isAnalyzing }) => {
  return (
    <div className="relative min-h-screen pb-4 flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image - Rasmdagidek to'liq qoplash */}
      <div className="absolute inset-0 z-10">
        <img src={picone} alt="background image for hero section" className='w-full h-full rounded-b-2xl' />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center space-y-4">

          {/* Main Heading */}
          <div className="text-center space-y-1">
            <h1 className="text-5xl md:text-6xl font-semibold text-[#000000] tracking-tight">
              Idea to website
            </h1>
            <p className="text-lg md:text-xl text-[#000000] font-normal">
              Generate it. customize it. launch it.
            </p>
          </div>

          {/* Get Early Access Button - Markazdagi yumaloq tugma */}
          <div className="flex justify-center">
            <button className="group relative transition-all duration-300 ease-in-out shadow-[0px_10px_20px_rgba(0,0,0,0.2)] py-2 px-5 bg-[rgb(0,107,179)] rounded-full flex items-center justify-center cursor-pointer text-white gap-2.5 font-bold border-[3px] border-white/30 outline-none overflow-hidden text-[15px] hover:scale-105 hover:border-white/60">
              <span className="relative z-10 flex items-center gap-2">
                Get Early Access
                <ArrowRight className="w-6 h-6 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
              </span>
              <div className="absolute top-0 -left-[100px] w-[100px] h-full bg-[linear-gradient(120deg,transparent_30%,rgba(255,255,255,0.8),transparent_70%)] opacity-60 group-hover:animate-shine" />
            </button>
          </div>

          {/* IdeaForm uchun maxsus konteyner - Tashqi shaffof hoshiya bilan */}
          <div className="w-full max-w-4xl mx-auto mt-4 p-3 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30">
            <IdeaForm onSubmit={onSubmit} isAnalyzing={isAnalyzing} />
          </div>

        </div>
      </div>

      {/* Made With Webild Badge */}
      <div className="absolute bottom-8 right-8 z-20">
        <div className="bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-xl shadow-sm border border-white/30 flex items-center gap-1">
          <span className="text-xs text-gray-500 font-medium tracking-wide">Made With</span>
          <span className="text-xs font-bold text-gray-900">Webild</span>
        </div>
      </div>
    </div>
  );
};