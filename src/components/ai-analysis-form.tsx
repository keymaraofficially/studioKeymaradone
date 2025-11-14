'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Wand2 } from 'lucide-react';
import { getAdAnalysis } from '@/app/ai-tool/actions';
import { useToast } from '@/hooks/use-toast';
import type { AnalyzeAdPerformanceOutput } from '@/ai/flows/analyze-ad-performance';
import { Skeleton } from './ui/skeleton';

const formSchema = z.object({
  adCopy: z.string().min(10, 'Ad copy must be at least 10 characters long.'),
  clicks: z.coerce.number().min(0, 'Clicks must be a non-negative number.'),
  impressions: z.coerce.number().min(1, 'Impressions must be at least 1.'),
  conversions: z.coerce.number().min(0, 'Conversions must be a non-negative number.'),
  demographics: z.string().optional(),
  campaignGoals: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export function AiAnalysisForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<AnalyzeAdPerformanceOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      adCopy: '',
      clicks: 0,
      impressions: 1000,
      conversions: 10,
      demographics: '',
      campaignGoals: '',
    },
  });

  async function onSubmit(data: FormValues) {
    setIsLoading(true);
    setResult(null);
    const response = await getAdAnalysis(data);
    setIsLoading(false);

    if (response.success && response.data) {
      setResult(response.data);
    } else {
      toast({
        variant: 'destructive',
        title: 'Analysis Failed',
        description: response.message || 'An unexpected error occurred.',
      });
    }
  }

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle>Ad Performance Data</CardTitle>
        <CardDescription>Fill in the details of your ad campaign.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="adCopy"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ad Copy</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., 'Get 50% off on all summer collections! Shop now!'"
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid md:grid-cols-3 gap-6">
              <FormField
                control={form.control}
                name="clicks"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Clicks</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="e.g., 500" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="impressions"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Impressions</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="e.g., 100000" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="conversions"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Conversions</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="e.g., 50" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="demographics"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Target Demographics (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., 'Ages 25-40, interested in hiking'" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="campaignGoals"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Campaign Goals (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., 'Increase brand awareness, drive website traffic'" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" size="lg" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Wand2 className="mr-2 h-4 w-4" />
                  Get Suggestions
                </>
              )}
            </Button>
          </form>
        </Form>
        
        {isLoading && (
          <div className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Skeleton className="h-6 w-36" />
                </CardTitle>
                <CardDescription>
                  <Skeleton className="h-4 w-64" />
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-[80%]" />
              </CardContent>
            </Card>
          </div>
        )}

        {result && (
          <div className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wand2 className="h-6 w-6 text-primary" />
                  AI-Powered Suggestions
                </CardTitle>
                <CardDescription>
                  Here are some data-driven recommendations to improve your ad performance.
                </CardDescription>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none text-foreground whitespace-pre-wrap font-body">
                {result.suggestions}
              </CardContent>
            </Card>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
