import { categories, latestInsights } from '@/lib/data';
import { notFound } from 'next/navigation';
import { BrevoVsMailchimpArticle } from '@/components/articles/brevo-vs-mailchimp';
import { BrevoVsMailerliteArticle } from '@/components/articles/brevo-vs-mailerlite';
import Link from 'next/link';
import { YouMayLikeThis } from '@/components/articles/you-may-like-this';
import { BrevoVsGetResponseArticle } from '@/components/articles/brevo-vs-getresponse';
import { BrevoVsActiveCampaignArticle } from '@/components/articles/brevo-vs-activecampaign';
import { BrevoVsHubspotArticle } from '@/components/articles/brevo-vs-hubspot';
import { GetResponseVsActiveCampaignVsBrevoArticle } from '@/components/articles/getresponse-vs-activecampaign-vs-brevo';

export async function generateStaticParams() {
  return latestInsights.map((post) => {
    const category = categories.find(c => c.name === post.category);
    return {
      category: category ? category.slug : 'tools-comparison',
      slug: post.slug,
    };
  });
}

const RelatedArticles = ({ currentSlug }: { currentSlug: string }) => {
    const shuffled = [...latestInsights].filter(insight => insight.slug !== currentSlug).sort(() => 0.5 - Math.random()).slice(2, 4);
  
    return (
      <div className="space-y-3">
        {shuffled.map(article => {
            const category = categories.find(c => c.name === article.category);
            const categorySlug = category ? category.slug : 'tools-comparison';
            return (
                <Link key={article.slug} href={`/category/${categorySlug}/${article.slug}`} className="sidebar-article-card group">
                    <span className="article-tag">{article.category}</span>
                    <h4 className="font-bold text-sm group-hover:text-primary transition-colors">{article.title}</h4>
                </Link>
            )
        })}
      </div>
    );
};

const PeopleAlsoRead = ({ currentSlug }: { currentSlug: string }) => {
    const shuffled = [...latestInsights].filter(insight => insight.slug !== currentSlug).sort(() => 0.5 - Math.random()).slice(4, 6);
  
    return (
      <div className="space-y-3">
        {shuffled.map(article => {
            const category = categories.find(c => c.name === article.category);
            const categorySlug = category ? category.slug : 'tools-comparison';
            return (
                <Link key={article.slug} href={`/category/${categorySlug}/${article.slug}`} className="sidebar-article-card group">
                    <span className="article-tag">{article.category}</span>
                    <h4 className="font-bold text-sm group-hover:text-primary transition-colors">{article.title}</h4>
                </Link>
            )
        })}
      </div>
    );
};

export default function ArticlePage({ params }: { params: { category: string, slug: string } }) {
  const post = latestInsights.find(p => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const renderArticleContent = () => {
    switch(params.slug) {
      case 'brevo-vs-mailchimp':
        return <BrevoVsMailchimpArticle />;
      case 'brevo-vs-mailerlite':
        return <BrevoVsMailerliteArticle />;
      case 'brevo-vs-getresponse':
        return <BrevoVsGetResponseArticle />;
      case 'brevo-vs-activecampaign':
        return <BrevoVsActiveCampaignArticle />;
      case 'brevo-vs-hubspot':
        return <BrevoVsHubspotArticle />;
      case 'getresponse-vs-activecampaign-vs-brevo':
        return <GetResponseVsActiveCampaignVsBrevoArticle />;
      // Add other articles here
      default:
        return <p>Article content not found.</p>;
    }
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        <div className="lg:col-span-3">
          <div className="article-category">{post.category}</div>
          <h1 className="article-hero-title fade-in">{post.title}</h1>
          <div className="article-meta">
            <span className="author-name">{post.author}</span>
            <span className="publish-date">{post.date}</span>
          </div>
          <div className="prose-container">
            {renderArticleContent()}
          </div>
        </div>
        <aside className="lg:col-span-1 space-y-8 mt-12 pt-8">
            <div className="sidebar-section">
              <h3>You May Like This</h3>
              <YouMayLikeThis currentSlug={params.slug} />
            </div>
            
            <div className="sidebar-section">
              <h3>Related Articles</h3>
              <RelatedArticles currentSlug={params.slug} />
            </div>
            
            <div className="sidebar-section">
              <h3>People Also Read</h3>
              <PeopleAlsoRead currentSlug={params.slug} />
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
    </div>
  );
}
