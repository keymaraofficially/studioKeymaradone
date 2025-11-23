import { categories, latestInsights } from '@/lib/data';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Newspaper } from 'lucide-react';

export default function BlogPage() {
  // Sort articles by date in descending order
  const sortedInsights = [...latestInsights].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
        <Newspaper className="h-16 w-16 text-primary shrink-0" />
        <div>
          <h1 className="text-4xl md:text-5xl font-headline font-bold">All Articles</h1>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl">
            Explore all our guides, tutorials, and insights on email marketing, automation, and more.
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sortedInsights.map((post) => {
          const postCategory = categories.find(c => c.name === post.category);
          const categorySlug = postCategory ? postCategory.slug : 'brevo-tools-comparison-hub';
          
          return (
            <Link href={`/category/${categorySlug}/${post.slug}`} key={post.slug} className="group flex">
              <Card className="w-full flex flex-col transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2 bg-background overflow-hidden shadow-[0_0_15px_5px_hsl(var(--primary)/0.1)]">
                <CardHeader>
                  <CardTitle className="font-headline text-lg">{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription>{post.description}</CardDescription>
                </CardContent>
                <CardFooter className="justify-between items-center">
                    <div>
                        <span className="text-sm font-semibold text-primary group-hover:underline">Read More</span>
                        <ArrowRight className="h-4 w-4 text-primary ml-2 transition-transform group-hover:translate-x-1 inline-block" />
                    </div>
                    <div className="text-xs text-muted-foreground">{post.date}</div>
                </CardFooter>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
