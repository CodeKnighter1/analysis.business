import { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { ArrowRight, Loader2 } from 'lucide-react';

interface IdeaFormProps {
  onSubmit: (idea: string) => void;
  isAnalyzing: boolean;
}

export function IdeaForm({ onSubmit, isAnalyzing }: IdeaFormProps) {
  const [idea, setIdea] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (idea.trim()) {
      onSubmit(idea.trim());
    }
  };

  const placeholder = `Describe your business idea in detail.

Include:
• What problem you're solving
• Who has this problem
• How they currently handle it
• Why they would pay for your solution`;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <label className="text-xs uppercase tracking-wider text-muted-foreground font-display">
          Your Idea
        </label>
        <Textarea
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          placeholder={placeholder}
          className="min-h-50 text-base"
          disabled={isAnalyzing}
        />
      </div>
      <Button
        type="submit"
        variant="secondary"
        size="lg"
        className="w-full"
        disabled={!idea.trim() || isAnalyzing}
      >
        {isAnalyzing ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Analyzing...
          </>
        ) : (
          <>
            Analyze Idea
            <ArrowRight className="w-5 h-5" />
          </>
        )}
      </Button>
    </form>
  );
}
