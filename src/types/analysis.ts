export type Verdict = 'GO' | 'PIVOT' | 'KILL';

export interface LensAnalysis {
  title: string;
  score: 'strong' | 'weak' | 'unclear';
  points: string[];
}

export interface IdeaAnalysis {
  score: number;
  pain: LensAnalysis;
  urgency: LensAnalysis;
  money: LensAnalysis;
  strongestSignal: string;
  weakestSignal: string;
  realityCheck: string;
  verdict: Verdict;
  nextStep: string;
}
