import { AiAnalysisForm } from '@/components/ai-analysis-form';
import { Sparkles } from 'lucide-react';

export default function AiToolPage() {
  return (
    <div className="container mx-auto max-w-4xl py-12 px-4">
      <div className="text-center mb-12">
        <Sparkles className="mx-auto h-12 w-12 text-primary mb-4" />
        <h1 className="text-4xl md:text-5xl font-headline font-bold">
          AI Ad Insights Tool
        </h1>
        <p className="text-lg text-muted-foreground mt-3 max-w-2xl mx-auto">
          Enter your ad's details below to receive AI-powered suggestions for improvement. The more data you provide, the better the analysis.
        </p>
      </div>

      <AiAnalysisForm />
    </div>
  );
}
