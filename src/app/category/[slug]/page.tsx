import { categories, latestInsights } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BrevoVsMailchimpArticle } from '@/components/articles/brevo-vs-mailchimp';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

const YouMayLikeThis = () => {
    const similarArticles = latestInsights.filter(insight => insight.slug !== 'brevo-vs-mailchimp').slice(0, 2);
  
    return (
      <div className="space-y-6">
        {similarArticles.map(article => {
            const category = categories.find(c => c.name === article.category);
            const categorySlug = category ? category.slug : 'tools-comparison';
            return (
          <Link key={article.slug} href={`/category/${categorySlug}#${article.slug}`} className="block group">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-4">
                <Badge variant="outline" className="mb-2">{article.category}</Badge>
                <h4 className="font-bold text-md group-hover:text-primary transition-colors">{article.title}</h4>
              </CardContent>
            </Card>
          </Link>
        )})}
      </div>
    );
  };

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = categories.find((cat) => cat.slug === params.slug);

  if (!category) {
    notFound();
  }
  
  const placeholderImage = PlaceHolderImages.find(p => p.id === category.image);

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
        <category.icon className="h-16 w-16 text-primary shrink-0" />
        <div>
          <h1 className="text-4xl md:text-5xl font-headline font-bold">{category.name} Ads</h1>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl">
            {category.description} Explore examples and best practices for creating effective {category.name.toLowerCase()} campaigns.
          </p>
        </div>
      </div>
      
      {category.slug === 'tools-comparison' && (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-3">
            <BrevoVsMailchimpArticle />
          </div>
          <aside className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-xl font-bold font-headline mb-4 relative">
                Table of Contents
                <span className="absolute -bottom-1 left-0 h-1 w-16 bg-primary"></span>
              </h3>
              <p className="text-muted-foreground">Coming soon...</p>
            </div>
            <div>
              <h3 className="text-xl font-bold font-headline mb-4 relative">
                You May Like This
                <span className="absolute -bottom-1 left-0 h-1 w-16 bg-primary"></span>
              </h3>
              <YouMayLikeThis />
            </div>
          </aside>
        </div>
      )}

      {category.slug !== 'tools-comparison' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-2 shadow-[0_0_15px_5px_hsl(var(--primary)/0.1)]">
              <CardHeader>
                  <CardTitle>Example Ad</CardTitle>
              </CardHeader>
              <CardContent>
                  <p className="text-muted-foreground">
                      This is an example of a high-performing ad in the {category.name.toLowerCase()} space. Notice the clear call-to-action and engaging visuals.
                  </p>
              </CardContent>
          </Card>
          
          {[...Array(3)].map((_, index) => (
               <Card key={index} className="shadow-[0_0_15px_5px_hsl(var(--primary)/0.1)]">
                  <CardHeader>
                      <CardTitle>Ad Concept #{index + 1}</CardTitle>
                  </CardHeader>
                  <CardContent>
                      <p className="text-muted-foreground text-sm">A visual concept for a modern ad campaign.</p>
                  </CardContent>
              </Card>
          ))}
        </div>
      )}
    </div>
  );
}
