import React, { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Plus } from 'lucide-react'; // Ikonkalarni rasmdagiga o'xshatish

interface IdeaFormProps {
  onSubmit: (data: { idea: string }) => void;
  isAnalyzing: boolean;
}

export const IdeaForm: React.FC<IdeaFormProps> = ({ onSubmit, isAnalyzing }) => {
  const [idea, setIdea] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (idea.trim()) {
      onSubmit({ idea });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative bg-white backdrop-blur-xl rounded-xl shadow-2xl p-2 transition-all border border-white">
        {/* Textarea - Shaffof va toza */}
        <Textarea
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          placeholder="Make a clean SaaS homepage"
          className="max-w-7xl min-h-[40px] text-lg text-[#242425] placeholder:text-gray-800 border-0 focus-visible:ring-0 focus-visible:outline-none bg-[#f9fbff] resize-none p-2"
          disabled={isAnalyzing}
        />

        {/* Action Buttons Row */}
        <div className="flex items-center justify-between mt-4">
          {/* Left Side - Maxsus Neumorphic Pill tugmalar */}
          <div className="flex items-center gap-3">
            {[
              { label: 'Clone', icon: <path d="M15 15C15 17.2091 13.2091 19 11 19C8.79086 19 7 17.2091 7 15C7 12.7909 8.79086 11 11 11H13C15.2091 11 17 9.20914 17 7C17 4.79086 15.2091 3 13 3C10.7909 3 9 4.79086 9 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /> },
              { label: 'Plan', icon: <path d="M12 2L12 4M4.93 4.93L6.34 6.34M2 12L4 12M4.93 19.07L6.34 17.66M12 22L12 20M19.07 19.07L17.66 17.66M22 12L20 12M19.07 4.93L17.66 6.34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /> }
            ].map((btn, idx) => (
              <button
                key={idx}
                type="button"
                className="group relative flex items-center p-1.5 pr-2 md:pr-4 rounded-xl bg-white/40 border border-white/60 shadow-[0_4px_10px_rgba(0,0,0,0.03)] hover:shadow-[0_6px_15px_rgba(0,0,0,0.06)] transition-all duration-300 active:scale-95"
              >
                {/* Ikonka uchun ichki oq kvadrat quti */}
                <div className="w-6 h-6 md:w-9 md:h-9 flex items-center justify-center bg-white rounded-xl shadow-[inset_0_0_0_1px_rgba(0,0,0,0.02),0_2px_5px_rgba(0,0,0,0.05)] mr-3">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-5 h-5 text-gray-800 transition-transform group-hover:scale-110"
                  >
                    {btn.icon}
                  </svg>
                </div>

                {/* Tugma matni */}
                <span className="text-[15px] font-medium text-gray-800 tracking-tight">
                  {btn.label}
                </span>
              </button>
            ))}
          </div>

          {/* Right Side - Action Buttons */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Plus Button */}
            <button
              type="button"
              className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-all shadow-sm text-gray-400"
            >
              <Plus className="w-4 h-4 md:w-5 md:h-5" />
            </button>

            {/* Submit Arrow Button - Rasmdagi ko'k rang */}
            <button
              type="submit"
              disabled={!idea.trim() || isAnalyzing}
              className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-[#4D94FF] hover:bg-[#3b82f6] disabled:bg-blue-300 flex items-center justify-center transition-all shadow-lg hover:shadow-blue-200 text-white disabled:cursor-not-allowed"
            >
              <svg
                className="w-5 h-5 stroke-[2.5]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};