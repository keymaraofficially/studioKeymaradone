'use server';

/**
 * @fileOverview This file defines a Genkit flow for analyzing ad performance and providing suggestions for improvement.
 *
 * - analyzeAdPerformance - The main function to analyze ad performance and get improvement suggestions.
 * - AnalyzeAdPerformanceInput - The input type for the analyzeAdPerformance function.
 * - AnalyzeAdPerformanceOutput - The output type for the analyzeAdPerformance function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzeAdPerformanceInputSchema = z.object({
  adCopy: z.string().describe('The text of the ad copy.'),
  clicks: z.number().describe('The number of clicks the ad received.'),
  impressions: z.number().describe('The number of times the ad was shown.'),
  conversions: z.number().describe('The number of conversions resulting from the ad.'),
  demographics: z.string().optional().describe('The target audience demographics for the ad campaign.'),
  campaignGoals: z.string().optional().describe('The specific goals of the ad campaign.'),
});

export type AnalyzeAdPerformanceInput = z.infer<typeof AnalyzeAdPerformanceInputSchema>;

const AnalyzeAdPerformanceOutputSchema = z.object({
  suggestions: z.string().describe('AI-powered suggestions on how to improve the ad copy and performance.'),
});

export type AnalyzeAdPerformanceOutput = z.infer<typeof AnalyzeAdPerformanceOutputSchema>;

export async function analyzeAdPerformance(input: AnalyzeAdPerformanceInput): Promise<AnalyzeAdPerformanceOutput> {
  return analyzeAdPerformanceFlow(input);
}

const analyzeAdPerformancePrompt = ai.definePrompt({
  name: 'analyzeAdPerformancePrompt',
  input: {schema: AnalyzeAdPerformanceInputSchema},
  output: {schema: AnalyzeAdPerformanceOutputSchema},
  prompt: `You are an AI-powered marketing expert specializing in ad performance analysis.

You will analyze the provided ad performance data and suggest improvements to increase its effectiveness.

Here's the ad copy:
{{adCopy}}

Performance Data:
Clicks: {{clicks}}
Impressions: {{impressions}}
Conversions: {{conversions}}

Demographics (if available): {{demographics}}
Campaign Goals (if available): {{campaignGoals}}

Based on this information, provide actionable suggestions to improve the ad's performance. Focus on clarity, relevance, and call-to-action effectiveness.`,
});

const analyzeAdPerformanceFlow = ai.defineFlow(
  {
    name: 'analyzeAdPerformanceFlow',
    inputSchema: AnalyzeAdPerformanceInputSchema,
    outputSchema: AnalyzeAdPerformanceOutputSchema,
  },
  async input => {
    const {output} = await analyzeAdPerformancePrompt(input);
    return output!;
  }
);
