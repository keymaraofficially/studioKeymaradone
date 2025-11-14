import { categories } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = categories.find((cat) => cat.slug === params.slug);

  if (!category) {
    notFound();
  }
  
  const categoryImage = PlaceHolderImages.find(p => p.id === category.image);
  const placeholderImages = PlaceHolderImages.filter(p => p.id.startsWith('placeholder-'));

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
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2">
            <CardHeader>
                <CardTitle>Example Ad</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="relative aspect-video w-full rounded-md overflow-hidden">
                    {categoryImage && (
                        <Image src={categoryImage.imageUrl} alt={categoryImage.description} data-ai-hint={categoryImage.imageHint} fill className="object-cover"/>
                    )}
                </div>
                <p className="text-muted-foreground mt-4">
                    This is an example of a high-performing ad in the {category.name.toLowerCase()} space. Notice the clear call-to-action and engaging visuals.
                </p>
            </CardContent>
        </Card>
        
        {placeholderImages.map((img, index) => (
             <Card key={index}>
                <CardHeader>
                    <CardTitle>Ad Concept #{index + 1}</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="relative aspect-video w-full rounded-md overflow-hidden">
                       <Image src={img.imageUrl} alt={img.description} data-ai-hint={img.imageHint} fill className="object-cover"/>
                    </div>
                    <p className="text-muted-foreground mt-4 text-sm">A visual concept for a modern ad campaign.</p>
                </CardContent>
            </Card>
        ))}
      </div>
    </div>
  );
}
