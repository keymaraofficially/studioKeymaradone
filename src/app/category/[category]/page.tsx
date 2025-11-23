import { categories, latestInsights } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category.slug,
  }));
}

export default function CategoryListPage({ params }: { params: { category: string } }) {
  const category = categories.find((cat) => cat.slug === params.category);

  if (!category) {
    notFound();
  }

  let postsInCategory = latestInsights.filter(p => p.category === category.name);
  
  // Custom sorting for 'Tools & SaaS' category
  if (params.category === 'tools-saas') {
    postsInCategory.sort((a, b) => {
      const aIsBrevo = a.title.toLowerCase().includes('brevo');
      const bIsBrevo = b.title.toLowerCase().includes('brevo');
      if (aIsBrevo && !bIsBrevo) {
        return -1;
      }
      if (!aIsBrevo && bIsBrevo) {
        return 1;
      }
      return 0; // or any other secondary sort logic
    });
  }

  const placeholderImage = PlaceHolderImages.find(p => p.id === category.image);

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
        <category.icon className="h-16 w-16 text-primary shrink-0" />
        <div>
          <h1 className="text-4xl md:text-5xl font-headline font-bold">{category.name}</h1>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl">
            {category.description} Explore examples and best practices for creating effective {category.name.toLowerCase()} campaigns.
          </p>
        </div>
      </div>
      
      {postsInCategory.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {postsInCategory.map((post) => {
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
                  <CardFooter>
                    <span className="text-sm font-semibold text-primary group-hover:underline">Read More</span>
                    <ArrowRight className="h-4 w-4 text-primary ml-2 transition-transform group-hover:translate-x-1" />
                  </CardFooter>
                </Card>
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-muted-foreground">No articles found in this category yet.</p>
        </div>
      )}
    </div>
  );
}
