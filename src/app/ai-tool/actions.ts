'use server';

import {
  analyzeAdPerformance,
  type AnalyzeAdPerformanceInput,
  type AnalyzeAdPerformanceOutput,
} from '@/ai/flows/analyze-ad-performance';
import { z } from 'zod';

const FormSchema = z.object({
  adCopy: z.string().min(1, 'Ad copy is required.'),
  clicks: z.coerce.number().min(0, 'Clicks must be a positive number.'),
  impressions: z.coerce.number().min(1, 'Impressions must be greater than 0.'),
  conversions: z.coerce.number().min(0, 'Conversions must be a positive number.'),
  demographics: z.string().optional(),
  campaignGoals: z.string().optional(),
});

type State = {
  success: boolean;
  message?: string;
  data?: AnalyzeAdPerformanceOutput;
};

export async function getAdAnalysis(data: AnalyzeAdPerformanceInput): Promise<State> {
  const validatedFields = FormSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      success: false,
      message: 'Invalid form data. Please check your inputs.',
    };
  }

  try {
    const result = await analyzeAdPerformance(validatedFields.data);
    return {
      success: true,
      data: result,
    };
  } catch (error) {
    console.error('AI analysis failed:', error);
    return {
      success: false,
      message: 'An error occurred while analyzing the ad. Please try again.',
    };
  }
}
