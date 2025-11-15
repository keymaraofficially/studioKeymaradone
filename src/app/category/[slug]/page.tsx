import { categories, latestInsights } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BrevoVsMailchimpArticle } from '@/components/articles/brevo-vs-mailchimp';
import { BrevoVsMailerliteArticle } from '@/components/articles/brevo-vs-mailerlite';
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
    const shuffled = [...latestInsights].filter(insight => insight.slug !== 'brevo-vs-mailchimp' && insight.slug !== 'brevo-vs-mailerlite').sort(() => Math.random() - 0.5);
  
    return (
        <div className="space-y-3">
        {shuffled.slice(0, 2).map(article => {
            const category = categories.find(c => c.name === article.category);
            const categorySlug = category ? category.slug : 'tools-comparison';
            return (
                <Link key={article.slug} href={`/category/${categorySlug}#${article.slug}`} className="sidebar-article-card group">
                    <span className="article-tag">{article.category}</span>
                    <h4 className="font-bold text-sm group-hover:text-primary transition-colors">{article.title}</h4>
                </Link>
            )
        })}
        </div>
    );
};

const RelatedArticles = () => {
    const shuffled = [...latestInsights].filter(insight => insight.slug !== 'brevo-vs-mailchimp' && insight.slug !== 'brevo-vs-mailerlite').sort(() => Math.random() - 0.5);
  
    return (
      <div className="space-y-3">
        {shuffled.slice(0, 2).map(article => {
            const category = categories.find(c => c.name === article.category);
            const categorySlug = category ? category.slug : 'tools-comparison';
            return (
                <Link key={article.slug} href={`/category/${categorySlug}#${article.slug}`} className="sidebar-article-card group">
                    <span className="article-tag">{article.category}</span>
                    <h4 className="font-bold text-sm group-hover:text-primary transition-colors">{article.title}</h4>
                </Link>
            )
        })}
      </div>
    );
};

const PeopleAlsoRead = () => {
    const shuffled = [...latestInsights].filter(insight => insight.slug !== 'brevo-vs-mailchimp' && insight.slug !== 'brevo-vs-mailerlite').sort(() => Math.random() - 0.5);
  
    return (
      <div className="space-y-3">
        {shuffled.slice(0, 2).map(article => {
            const category = categories.find(c => c.name === article.category);
            const categorySlug = category ? category.slug : 'tools-comparison';
            return (
                <Link key={article.slug} href={`/category/${categorySlug}#${article.slug}`} className="sidebar-article-card group">
                    <span className="article-tag">{article.category}</span>
                    <h4 className="font-bold text-sm group-hover:text-primary transition-colors">{article.title}</h4>
                </Link>
            )
        })}
      </div>
    );
};


export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = categories.find((cat) => cat.slug === params.slug);
  const posts = latestInsights.filter(p => p.category === 'Tools Comparison');


  if (!category) {
    notFound();
  }
  
  const placeholderImage = PlaceHolderImages.find(p => p.id === category.image);

  return (
    <div className="container mx-auto py-12 px-4">
      {category.slug === 'tools-comparison' && posts.length > 0 && (
          <div className="space-y-16">
            {posts.map(post => (
                 <div key={post.slug} className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                    <div className="lg:col-span-3">
                    <div className="article-category">{post.category}</div>
                    <h1 className="article-hero-title fade-in">{post.title}</h1>
                    <div className="article-meta">
                        <span className="author-name">{post.author}</span>
                        <span className="publish-date">{post.date}</span>
                    </div>
                    <div className="prose-container">
                        {post.slug === 'brevo-vs-mailchimp' && <BrevoVsMailchimpArticle />}
                        {post.slug === 'brevo-vs-mailerlite' && <BrevoVsMailerliteArticle />}
                    </div>
                    </div>
                    <aside className="lg:col-span-1 space-y-8 mt-12 pt-8">
                        <div className="sidebar-section">
                        <h3>You May Like This</h3>
                        <YouMayLikeThis />
                        </div>
                        
                        <div className="sidebar-section">
                        <h3>Related Articles</h3>
                        <RelatedArticles />
                        </div>
                        
                        <div className="sidebar-section">
                        <h3>People Also Read</h3>
                        <PeopleAlsoRead />
                        </div>

                        <div className="sidebar-section">
                        <h3>Quote of the Day</h3>
                        <p className="quote-box">{post.quote}</p>
                        </div>

                        <div className="sidebar-section">
                        <h3>Key Takeaways</h3>
                        <ul>{post.takeaways.map((t, i) => <li key={i}>{t}</li>)}</ul>
                        </div>

                        <div className="sidebar-section">
                        <h3>Mini Glossary</h3>
                        <p className="glossary-box">{post.glossary}</p>
                        </div>

                        <div className="sidebar-section">
                        <h3>Email Marketing Facts</h3>
                        <ul>{post.facts.map((f, i) => <li key={i}>{f}</li>)}</ul>
                        </div>

                        <div className="sidebar-section">
                        <h3>Quick Summary</h3>
                        <p className="summary-box">{post.summary}</p>
                        </div>

                        <div className="sidebar-section">
                        <h3>Community Insight</h3>
                        <p className="insight-box">{post.insight}</p>
                        </div>
                    </aside>
                </div>
            ))}
          </div>
      )}

      {category.slug !== 'tools-comparison' && (
        <>
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
        </>
      )}
    </div>
  );
}
