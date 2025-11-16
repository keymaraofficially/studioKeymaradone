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
import { ActiveCampaignVsHubspotVsBrevoArticle } from '@/components/articles/activecampaign-vs-hubspot-vs-brevo';
import { MailerliteVsBrevoVsMailchimpArticle } from '@/components/articles/mailerlite-vs-brevo-vs-mailchimp';
import { BestEmailToolForSmallBusinessesArticle } from '@/components/articles/best-email-tool-for-small-businesses';
import { BestPlatformForEcommerceArticle } from '@/components/articles/best-platform-for-ecommerce';
import { BestChoiceForCoachesArticle } from '@/components/articles/best-choice-for-coaches';
import { BestAllInOneForStartupsArticle } from '@/components/articles/best-all-in-one-for-startups';
import { BrevoVsKlaviyoVsMailchimpArticle } from '@/components/articles/brevo-vs-klaviyo-vs-mailchimp';
import { BestEcommerceAutomationToolsBrevoVsKlaviyoVsActiveCampaignArticle } from '@/components/articles/best-ecommerce-automation-tools-brevo-vs-klaviyo-vs-activecampaign';
import { WhatIsBrevoArticle } from '@/components/articles/what-is-brevo';
import { BrevoAutomationBuilderExplainedArticle } from '@/components/articles/brevo-automation-builder-explained';
import { BrevoCrmExplainedArticle } from '@/components/articles/brevo-crm-explained';
import { BrevoMultichannelMessagingExplainedArticle } from '@/components/articles/brevo-multichannel-messaging-explained';
import { BrevoPricingExplainedArticle } from '@/components/articles/brevo-pricing-explained';
import { WhatIsMailchimpArticle } from '@/components/articles/what-is-mailchimp';
import { MailchimpAutomationExplainedArticle } from '@/components/articles/mailchimp-automation-explained';
import { WhatIsMailerliteArticle } from '@/components/articles/what-is-mailerlite';
import { MailerliteAutomationBuilderExplainedArticle } from '@/components/articles/mailerlite-automation-builder-explained';
import { WhatIsGetResponseArticle } from '@/components/articles/what-is-getresponse';
import { WhatIsActiveCampaignArticle } from '@/components/articles/what-is-activecampaign';
import { ActiveCampaignWorkflowsExplainedArticle } from '@/components/articles/activecampaign-workflows-explained';
import { WhatIsConvertKitArticle } from '@/components/articles/what-is-convertkit';
import { HowEmailMarketingWorksArticle } from '@/components/articles/how-email-marketing-works';
import { UnderstandingEmailDeliverabilityArticle } from '@/components/articles/understanding-email-deliverability';
import { EmailListBuildingFundamentalsArticle } from '@/components/articles/email-list-building-fundamentals';
import { TheScienceOfEmailEngagementArticle } from '@/components/articles/the-science-of-email-engagement';
import { WhyCleanListManagementProtectsYourDeliverabilityArticle } from '@/components/articles/why-clean-list-management-protects-your-deliverability';
import { WhatAreEmailAutomationsArticle } from '@/components/articles/what-are-email-automations';
import { HowTriggerBasedAutomationsWorkArticle } from '@/components/articles/how-trigger-based-automations-work';
import { BuildingAHighEngagementWelcomeFlowArticle } from '@/components/articles/building-a-high-engagement-welcome-flow';
import { BehaviorBasedAutomationExplainedArticle } from '@/components/articles/behavior-based-automation-explained';
import { LifecycleAutomationExplainedArticle } from '@/components/articles/lifecycle-automation-explained';
import { UnderstandingEmailMetricsArticle } from '@/components/articles/understanding-email-metrics';
import { HowToInterpretEmailPerformanceArticle } from '@/components/articles/how-to-interpret-email-performance';

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
      case 'hubspot-vs-brevo':
        return <BrevoVsHubspotArticle />;
      case 'getresponse-vs-activecampaign-vs-brevo':
        return <GetResponseVsActiveCampaignVsBrevoArticle />;
      case 'activecampaign-vs-hubspot-vs-brevo':
        return <ActiveCampaignVsHubspotVsBrevoArticle />;
      case 'mailerlite-vs-brevo-vs-mailchimp':
        return <MailerliteVsBrevoVsMailchimpArticle />;
      case 'best-email-tool-for-small-businesses':
        return <BestEmailToolForSmallBusinessesArticle />;
      case 'best-platform-for-ecommerce':
        return <BestPlatformForEcommerceArticle />;
      case 'best-choice-for-coaches':
        return <BestChoiceForCoachesArticle />;
      case 'best-all-in-one-for-startups':
        return <BestAllInOneForStartupsArticle />;
      case 'brevo-vs-klaviyo-vs-mailchimp':
        return <BrevoVsKlaviyoVsMailchimpArticle />;
      case 'best-ecommerce-automation-tools-brevo-vs-klaviyo-vs-activecampaign':
        return <BestEcommerceAutomationToolsBrevoVsKlaviyoVsActiveCampaignArticle />;
      case 'what-is-brevo':
        return <WhatIsBrevoArticle />;
      case 'brevo-automation-builder-explained':
        return <BrevoAutomationBuilderExplainedArticle />;
      case 'brevo-crm-explained':
        return <BrevoCrmExplainedArticle />;
      case 'brevo-multichannel-messaging-explained':
        return <BrevoMultichannelMessagingExplainedArticle />;
      case 'brevo-pricing-explained':
        return <BrevoPricingExplainedArticle />;
      case 'what-is-mailchimp':
        return <WhatIsMailchimpArticle />;
      case 'mailchimp-automation-explained':
        return <MailchimpAutomationExplainedArticle />;
      case 'what-is-mailerlite':
        return <WhatIsMailerliteArticle />;
      case 'mailerlite-automation-builder-explained':
        return <MailerliteAutomationBuilderExplainedArticle />;
      case 'what-is-getresponse':
        return <WhatIsGetResponseArticle />;
      case 'what-is-activecampaign':
        return <WhatIsActiveCampaignArticle />;
      case 'activecampaign-workflows-explained':
        return <ActiveCampaignWorkflowsExplainedArticle />;
      case 'what-is-convertkit':
        return <WhatIsConvertKitArticle />;
      case 'how-email-marketing-works':
        return <HowEmailMarketingWorksArticle />;
      case 'understanding-email-deliverability':
        return <UnderstandingEmailDeliverabilityArticle />;
      case 'email-list-building-fundamentals':
        return <EmailListBuildingFundamentalsArticle />;
      case 'the-science-of-email-engagement':
        return <TheScienceOfEmailEngagementArticle />;
      case 'why-clean-list-management-protects-your-deliverability':
        return <WhyCleanListManagementProtectsYourDeliverabilityArticle />;
      case 'what-are-email-automations':
        return <WhatAreEmailAutomationsArticle />;
      case 'how-trigger-based-automations-work':
        return <HowTriggerBasedAutomationsWorkArticle />;
      case 'building-a-high-engagement-welcome-flow':
        return <BuildingAHighEngagementWelcomeFlowArticle />;
      case 'behavior-based-automation-explained':
        return <BehaviorBasedAutomationExplainedArticle />;
      case 'lifecycle-automation-explained':
        return <LifecycleAutomationExplainedArticle />;
      case 'understanding-email-metrics':
        return <UnderstandingEmailMetricsArticle />;
      case 'how-to-interpret-email-performance':
        return <HowToInterpretEmailPerformanceArticle />;
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
