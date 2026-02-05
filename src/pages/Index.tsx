import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { HeroSection } from '@/components/home/HeroSection';
import { HowItWorks } from '@/components/home/HowItWorks';
import { DomainSection } from '@/components/home/DomainSection';
import { PowerBusiness } from '@/components/home/PowerBusiness';

export default function Index() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleSubmit = async (data: { idea: string }) => {
    setIsAnalyzing(true);

    try {
      // Simulate processing
      console.log('Submitted idea:', data.idea);

      // TODO: Add your analysis logic here
      await new Promise(resolve => setTimeout(resolve, 1500));

      // For now, just log the result
      console.log('Analysis complete');

    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleReset = () => {
    // Reset logic if needed
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header
        showReset={false}
        onReset={handleReset}
      />

      {/* Hero Section - Always visible */}
      <HeroSection
        onSubmit={handleSubmit}
        isAnalyzing={isAnalyzing}
      />
      <HowItWorks />
      <DomainSection />
      <PowerBusiness />
    </div>
  );
}