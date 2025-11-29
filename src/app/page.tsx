import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { categories, marketingTools, latestInsights, brevoFeatures, brevoIntegrations } from '@/lib/data';
import { ArrowRight, Award } from 'lucide-react';
import Link from 'next/link';

const brandNames = [
  "Ebay", "Michelin", "Montblanc", "The Kooples", "Bodybuilding.com", 
  "Bloomreach", "Louis Vuitton", "L’Occitane", "Florida Trend", "Amnesty International"
];

export default function Home() {
  const brevoArticles = latestInsights.filter(insight => insight.title.toLowerCase().includes('brevo')).slice(0, 6);

  return (
    <div className="flex flex-col">
      <section className="px-6 py-20 max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6 leading-tight">
          Become a <span className="text-[#046404] font-black">Brevo</span>-Powered Email Marketer
        </h1>

        <p className="text-lg text-muted-foreground mb-10 max-w-3xl mx-auto">
          Learn how to use Brevo’s automation, segmentation, and smarter email workflows 
          to build high-performing customer journeys. Master the exact tools today’s top 
          marketers rely on to scale campaigns with confidence.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg">
            <Link 
              href="https://www.brevo.com/features/automation/"
              target="_blank" 
              rel="noopener noreferrer">
              Explore Brevo Automation Guides
            </Link>
          </Button>

          <Button asChild variant="link">
            <Link 
              href="https://www.brevo.com/company/about/"
              target="_blank"
              rel="noopener noreferrer">
              Learn More About Brevo
            </Link>
          </Button>
        </div>
      </section>

      <section className="py-12 bg-card text-center">
        <div className="w-full overflow-hidden relative">
          <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-8 px-4">
            Join 500,000+ customers around the world who trust Brevo
          </h3>
          <div className="flex gap-x-16 whitespace-nowrap animate-scroll-brands">
            {brandNames.map((name, index) => (
              <span key={index} className="text-lg md:text-xl font-medium text-muted-foreground opacity-80 transition-opacity duration-300 ease-in-out hover:opacity-100">{name}</span>
            ))}
            {brandNames.map((name, index) => (
              <span key={`dup-${index}`} className="text-lg md:text-xl font-medium text-muted-foreground opacity-80 transition-opacity duration-300 ease-in-out hover:opacity-100">{name}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background text-foreground py-20 md:py-24">
        <div className="container max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2.5">Why Marketers Prefer <span className="text-[#046404]">Brevo</span> for Email Automation</h2>
          <p className="text-muted-foreground mb-9 text-lg px-4">
            Powerful email, automation and analytics built to grow revenue — simple to use, reliable at scale.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brevoFeatures.map((feature, index) => (
              <article key={index} className="bg-card border border-border p-7 rounded-xl shadow-[0_6px_18px_rgba(17,17,17,0.04)] text-left transition-all duration-200 ease-in-out hover:-translate-y-1.5 hover:shadow-[0_18px_40px_rgba(17,17,17,0.08)]">
                <h3 className="text-xl font-bold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-normal">{feature.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="https://www.brevo.com/features/" target="_blank" rel="noopener noreferrer">Explore Brevo Features →</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-card rounded-2xl my-16">
        <div className="container max-w-6xl mx-auto text-center">
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5">
            <span className="text-[#046404]">Brevo</span> is Used Worldwide — Every Single Month
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
            Millions of businesses rely on <strong>Brevo</strong> each month to automate campaigns, drive conversions, and power customer experiences across the globe.
          </p>

          <div className="flex flex-wrap justify-center gap-10">

            <div className="flex-1 min-w-[220px]">
              <h3 className="text-4xl md:text-5xl text-primary font-bold mb-2">500k+</h3>
              <p className="text-base text-muted-foreground">Active Monthly Businesses</p>
            </div>

            <div className="flex-1 min-w-[220px]">
              <h3 className="text-4xl md:text-5xl text-primary font-bold mb-2">180+</h3>
              <p className="text-base text-muted-foreground">Countries Using Brevo</p>
            </div>

            <div className="flex-1 min-w-[220px]">
              <h3 className="text-4xl md:text-5xl text-primary font-bold mb-2">12B+</h3>
              <p className="text-base text-muted-foreground">Emails & Messages Sent Monthly</p>
            </div>

          </div>

        </div>
      </section>
      
      <section className="py-20 md:py-24 animate-fade-in animation-delay-600">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">
              Analyze Ads Across All Platforms
            </h2>
            <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
              Get specialized insights for every type of campaign you run.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category) => (
              <Link href={`/category/${category.slug}`} key={category.slug} className="group">
                <Card className="h-full transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2 group-hover:border-primary bg-background shadow-[0_0_15px_5px_hsl(var(--primary)/0.1)]">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <category.icon className="h-10 w-10 mb-4 text-primary" />
                      {category.badge && (
                        <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">{category.badge}</span>
                      )}
                    </div>
                    <CardTitle className="font-headline">{category.name}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">How <span className="text-[#046404]">Brevo</span> AI Helps You Grow Smarter</h2>
            <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto">
              Brevo AI turns your everyday marketing tasks into automated, insight-driven workflows. 
              From messaging to analytics, AI gives you more clarity, more efficiency, and more growth — 
              with less effort.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card p-8 rounded-lg shadow-[0_0_15px_5px_hsl(var(--primary)/0.05)] border border-border">
              <h3 className="text-xl font-headline font-bold mb-2">AI-Powered Content Suggestions</h3>
              <p className="text-muted-foreground mb-4">
                Generate subject lines, email copy, and message variations instantly. Brevo AI improves 
                your tone, clarity, and engagement using real performance data.
              </p>
              <p className="text-sm italic text-muted-foreground/80 border-t pt-4">“Better content isn’t written — it’s optimized with AI.”</p>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-[0_0_15px_5px_hsl(var(--primary)/0.05)] border border-border">
              <h3 className="text-xl font-headline font-bold mb-2">Smarter Audience Targeting</h3>
              <p className="text-muted-foreground mb-4">
                Brevo AI analyzes user behavior and segments customers intelligently so you reach the 
                right people at exactly the right moment.
              </p>
              <p className="text-sm italic text-muted-foreground/80 border-t pt-4">“Precision targeting creates real conversions.”</p>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-[0_0_15px_5px_hsl(var(--primary)/0.05)] border border-border">
              <h3 className="text-xl font-headline font-bold mb-2">AI-Driven Workflow Efficiency</h3>
              <p className="text-muted-foreground mb-4">
                Reduce manual steps with AI that triggers actions, builds journeys, and recommends 
                automation improvements based on your performance.
              </p>
              <p className="text-sm italic text-muted-foreground/80 border-t pt-4">“Automation gets powerful when AI runs the logic.”</p>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-[0_0_15px_5px_hsl(var(--primary)/0.05)] border border-border">
              <h3 className="text-xl font-headline font-bold mb-2">Instant Insights & Predictions</h3>
              <p className="text-muted-foreground mb-4">
                Track engagement, conversions, and trends through AI-powered reporting that predicts 
                what will perform best before you even hit send.
              </p>
              <p className="text-sm italic text-muted-foreground/80 border-t pt-4">“Data becomes useful when AI turns it into direction.”</p>
            </div>
          </div>
        </div>
      </section>

       <section className="py-16 bg-card">
        <div className="container max-w-6xl mx-auto">
            <h2 className="text-center text-3xl md:text-4xl text-foreground mb-4 font-bold">
            <span className="text-[#046404]">Brevo</span> Integrations That Power Your Marketing
            </h2>
            <p className="text-center max-w-3xl mx-auto text-muted-foreground text-lg mb-12">
            Connect Brevo with your favorite business tools—from CRM to ecommerce, analytics, forms, and automation systems. 
            Build a unified workflow without complexity.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {brevoIntegrations.map((integration, index) => (
                    <Link href={integration.url} key={index} target="_blank" rel="noopener noreferrer" className="group flex">
                        <div className="bg-background rounded-xl p-6 border border-border w-full transition-all duration-300 group-hover:shadow-lg group-hover:border-primary">
                            <h3 className="text-xl font-semibold text-foreground">{integration.name}</h3>
                            <p className="text-muted-foreground text-base mt-2">
                                {integration.description}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="text-center mt-12">
            <Button asChild size="lg">
                <Link href="https://www.brevo.com/integrations/" target="_blank" rel="noopener noreferrer">
                    Explore Full Integration Hub →
                </Link>
            </Button>
            </div>
        </div>
        </section>

      <section className="py-20 md:py-24 bg-card animate-fade-in animation-delay-400">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">
              Automate Smarter. Connect Better. Grow Faster.
            </h2>
            <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto">
             Discover tools that make email marketing simpler, smarter, and more effective. Learn, automate, and scale with Keymara’s AI-powered marketing suite.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketingTools.map((tool) => (
              <Link href={tool.url} key={tool.name} target="_blank" rel="noopener noreferrer" className="group flex">
                <Card className={`w-full flex flex-col transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2 shadow-[0_0_15px_5px_hsl(var(--primary)/0.1)] ${tool.isRecommended ? 'border-primary bg-primary/5' : 'bg-background'}`}>
                  <CardHeader>
                    {tool.isRecommended && (
                      <div className="flex items-center gap-2 text-sm font-semibold text-primary mb-2">
                        <Award className="h-5 w-5" />
                        Keymara pick
                      </div>
                    )}
                     <div className="flex items-center gap-3">
                      {!tool.isRecommended && <tool.icon className="h-6 w-6 text-primary" />}
                      <CardTitle className="font-headline text-lg">{tool.name.replace(' Recommended', '')}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription>{tool.description}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <ArrowRight className="h-5 w-5 text-muted-foreground ml-auto transition-transform group-hover:translate-x-1" />
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background text-foreground">
        <div className="container max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2.5">Enterprise Power with <span className="text-[#046404]">Brevo</span> Intelligence</h2>
          <p className="text-muted-foreground mb-9 text-lg px-4">
            Take your marketing operations to the next level with Brevo’s enterprise-grade tools. 
            From automation to analytics, manage everything at scale with the reliability global brands trust.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card border border-border p-7 rounded-xl shadow-[0_6px_18px_rgba(17,17,17,0.04)] text-left transition-all duration-200 ease-in-out hover:-translate-y-1.5 hover:shadow-[0_18px_40px_rgba(17,17,17,0.08)]">
              <h3 className="text-xl font-bold mb-2 text-foreground">Unified Customer Data</h3>
              <p className="text-muted-foreground leading-normal">
                Sync all customer interactions across email, SMS, WhatsApp, and CRM tools inside Brevo’s centralized
                data hub — a single source of truth for smarter enterprise campaigns.
              </p>
            </div>
            <div className="bg-card border border-border p-7 rounded-xl shadow-[0_6px_18px_rgba(17,17,17,0.04)] text-left transition-all duration-200 ease-in-out hover:-translate-y-1.5 hover:shadow-[0_18px_40px_rgba(17,17,17,0.08)]">
              <h3 className="text-xl font-bold mb-2 text-foreground">AI-Driven Personalization</h3>
              <p className="text-muted-foreground leading-normal">
                Use Brevo’s AI tools to tailor messaging at scale, optimize subject lines, personalize journeys,
                and deliver high-impact campaigns with zero manual effort.
              </p>
            </div>
            <div className="bg-card border border-border p-7 rounded-xl shadow-[0_6px_18px_rgba(17,17,17,0.04)] text-left transition-all duration-200 ease-in-out hover:-translate-y-1.5 hover:shadow-[0_18px_40px_rgba(17,17,17,0.08)]">
              <h3 className="text-xl font-bold mb-2 text-foreground">Real-Time Enterprise Analytics</h3>
              <p className="text-muted-foreground leading-normal">
                Track multi-channel performance with real-time dashboards and deep analytics that help you
                reduce waste, increase ROI, and refine campaigns at scale.
              </p>
            </div>
            <div className="bg-card border border-border p-7 rounded-xl shadow-[0_6px_18px_rgba(17,17,17,0.04)] text-left transition-all duration-200 ease-in-out hover:-translate-y-1.5 hover:shadow-[0_18px_40px_rgba(17,17,17,0.08)]">
              <h3 className="text-xl font-bold mb-2 text-foreground">Built for Large Teams</h3>
              <p className="text-muted-foreground leading-normal">
                Role permissions, team collaboration tools, advanced API options, and stable infrastructure — 
                Brevo makes enterprise marketing secure, scalable, and effortless.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-card animate-fade-in animation-delay-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">
              Insight Latest
            </h2>
            <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
              Stay ahead of the curve with the latest marketing trends, tips, and insights from our experts.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brevoArticles.map((insight, index) => {
                const category = categories.find(c => c.name === insight.category);
                const categorySlug = category ? category.slug : 'brevo-tools-comparison-hub';
                return (
                    <Link href={`/category/${categorySlug}/${insight.slug}`} key={index} className="group flex">
                        <Card className="w-full flex flex-col transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2 bg-background overflow-hidden shadow-[0_0_15px_5px_hsl(var(--primary)/0.1)]">
                            <CardHeader>
                                <CardTitle className="font-headline text-lg">{insight.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>{insight.description}</CardDescription>
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
        </div>
      </section>
      
      <section className="py-20 bg-background">
          <div className="container mx-auto max-w-6xl py-12 px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Real Brands Growing Faster With <span className="text-[#046404]">Brevo</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                These real-world case studies show how businesses use Brevo’s automation, CRM, and multi-channel tools to boost engagement, save time, and increase revenue.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 bg-card shadow-sm rounded-2xl border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Ecommerce Brand Increased Repeat Customers by 42%
                </h3>
                <p className="text-muted-foreground mb-4">
                  A mid-sized ecommerce store used Brevo’s automation workflows and segmentation to send perfectly-timed product reminders, boosting customer retention and lifetime value.
                </p>
              </div>
              <div className="p-8 bg-card shadow-sm rounded-2xl border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  SaaS Company Cut Manual Work by 70%
                </h3>
                <p className="text-muted-foreground mb-4">
                  By using Brevo’s CRM + automation triggers, the team removed repetitive tasks, launched smarter onboarding emails, and doubled their activation rate.
                </p>
              </div>
              <div className="p-8 bg-card shadow-sm rounded-2xl border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Local Services Business 3× More Leads With Brevo
                </h3>
                <p className="text-muted-foreground mb-4">
                  Using Brevo’s forms, WhatsApp messaging, and follow-up automation, a small business tripled inbound leads and kept clients engaged automatically.
                </p>
              </div>
            </div>
          </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-headline font-bold mb-8">
            Dive Deeper into <span className="text-[#046404]">Brevo</span>
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" variant="outline">
              <Link href="https://www.brevo.com/products/" target="_blank" rel="noopener noreferrer">
                Explore Products
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="https://www.brevo.com/pricing/" target="_blank" rel="noopener noreferrer">
                View Pricing
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="https://www.brevo.com/resources/" target="_blank" rel="noopener noreferrer">
                Browse Resources
              </Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
