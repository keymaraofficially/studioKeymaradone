

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { categories, marketingTools, latestInsights } from '@/lib/data';
import { ArrowRight, CheckCircle2, Zap, LineChart, Workflow, Award, BarChart, Bot, Handshake, BrainCircuit } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const whyChooseKeymara = [
  {
    icon: Bot,
    title: 'Brevo Automation Made Simple',
    description: 'Learn how Brevo’s workflows, triggers, and conditions help automate emails, customer journeys, and follow-ups with ease.',
    quote: '“Smart automation is not about sending more emails — it’s about sending the right email at the right time.”'
  },
  {
    icon: BarChart,
    title: 'Brevo Analytics & Reporting',
    description: 'Understand engagement, conversions, and customer behavior using Brevo’s powerful real-time analytics.',
    quote: '“Data turns guesswork into clarity — and Brevo gives you the data that actually moves revenue.”'
  },
  {
    icon: Handshake,
    title: 'Brevo CRM + Contact Management',
    description: 'Manage contacts, segment audiences, score leads, and personalize experiences inside Brevo’s unified CRM.',
    quote: '“A powerful CRM doesn’t collect contacts — it builds relationships that convert.”'
  },
  {
    icon: BrainCircuit,
    title: 'Brevo Email Deliverability Tools',
    description: 'Improve inbox placement with Brevo’s warm-up systems, authentication setup, domain reputation checks, and deliverability tools.',
    quote: '“Deliverability decides everything — if your email isn’t seen, nothing else matters.”'
  }
]

const brevoIntegrations = [
    {
        name: "WordPress",
        description: "Connect Brevo to WordPress for email capture, automation, and subscriber syncing."
    },
    {
        name: "Shopify",
        description: "Sync ecommerce customers, abandoned carts, SMS alerts, and automated marketing flows."
    },
    {
        name: "WooCommerce",
        description: "Integrate sales data and trigger campaigns based on customer behavior."
    },
    {
        name: "Google Analytics",
        description: "Track conversions, engagement, and performance from inside your Brevo campaigns."
    },
    {
        name: "Zapier",
        description: "Automate thousands of workflows connecting Brevo to your entire toolset."
    },
    {
        name: "Facebook Lead Ads",
        description: "Automatically send Facebook leads into Brevo for instant follow-ups."
    }
];

const brandNames = [
  "Ebay", "Michelin", "Montblanc", "The Kooples", "Bodybuilding.com", 
  "Bloomreach", "Louis Vuitton", "L’Occitane", "Florida Trend", "Amnesty International"
];


export default function Home() {
  const brevoArticles = latestInsights.filter(insight => insight.title.toLowerCase().includes('brevo')).slice(0, 6);

  return (
    <div className="flex flex-col">
      <section aria-labelledby="hero-title" className="py-16">
        <div className="container mx-auto px-6 max-w-7xl">
            <h1 id="hero-title" className="text-4xl md:text-6xl font-extrabold leading-tight mb-5 animate-fade-in" style={{ animationName: 'fadeInUp' }}>
                Learn Modern Email Automation With Tools Like <strong>Brevo</strong> — Built for Smarter Customer Journeys
            </h1>
            <p className="text-lg text-muted-foreground mb-7 max-w-4xl leading-relaxed">
                Simplify campaigns, automate your customer journeys, and understand how platforms like <strong>Brevo</strong> power email automation, segmentation, and CRM.
                Learn practical strategies that help you deliver real value to your audience.
            </p>
            <div className="flex gap-4 items-center">
                <Button asChild size="lg">
                    <Link href="/brevo-tools-comparison-hub">Email &amp; Automation Tools — Complete Learning Hub</Link>
                </Button>
                <Link href="https://www.brevo.com/company/about/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground underline text-sm">About Brevo</Link>
            </div>
        </div>
        <style>{`
            @keyframes fadeInUp {
                from { transform: translateY(10px); opacity: 0; }
                to   { transform: translateY(0);  opacity: 1; }
            }
        `}</style>
      </section>

      <section className="py-12 bg-card text-center">
        <div className="w-full overflow-hidden relative">
          <h3 className="text-2xl font-semibold text-foreground mb-8">
            Join 500,000+ customers around the world who trust Brevo
          </h3>
          <div className="flex gap-x-16 whitespace-nowrap animate-scroll-brands">
            {brandNames.map((name, index) => (
              <span key={index} className="text-xl font-medium text-muted-foreground opacity-80 transition-opacity duration-300 ease-in-out hover:opacity-100">{name}</span>
            ))}
            {brandNames.map((name, index) => (
              <span key={`dup-${index}`} className="text-xl font-medium text-muted-foreground opacity-80 transition-opacity duration-300 ease-in-out hover:opacity-100">{name}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 animate-fade-in animation-delay-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Why Marketers Rely on Brevo for Smarter Email Automation</h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
              We simplify email marketing by teaching you how to use Brevo’s automation, CRM,
              segmentation, and multi-channel tools in a practical, beginner-friendly way.
              Keymara helps businesses understand Brevo deeply — so every campaign becomes smarter,
              faster, and easier to manage.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseKeymara.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border border-border">
                <h3 className="text-2xl font-bold mb-3 text-foreground">{item.title}</h3>
                <p className="text-base text-muted-foreground mb-5">
                  {item.description}
                </p>
                <hr className="my-5 border-t border-dashed border-border" />
                <p className="text-sm italic text-muted-foreground">
                  {item.quote}
                </p>
              </div>
            ))}
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
                    <category.icon className="h-10 w-10 mb-4 text-primary" />
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
            <h2 className="text-3xl md:text-4xl font-headline font-bold">How Brevo AI Helps You Grow Smarter</h2>
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
            <h2 className="text-center text-4xl text-foreground mb-4 font-bold">
            Brevo Integrations That Power Your Marketing
            </h2>
            <p className="text-center max-w-3xl mx-auto text-muted-foreground text-lg mb-12">
            Connect Brevo with your favorite business tools—from CRM to ecommerce, analytics, forms, and automation systems. 
            Build a unified workflow without complexity.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {brevoIntegrations.map((integration, index) => (
                    <div key={index} className="bg-background rounded-xl p-6 border border-border">
                        <h3 className="text-xl font-semibold text-foreground">{integration.name}</h3>
                        <p className="text-muted-foreground text-base mt-2">
                            {integration.description}
                        </p>
                    </div>
                ))}
            </div>
            <div className="text-center mt-12">
            <Button asChild size="lg">
                <Link href="/category/crm-integrations">
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

      <section className="py-20 bg-background">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-headline text-foreground">
              Enterprise Power with Brevo Intelligence
            </h2>
            <p className="text-lg text-muted-foreground mt-3 max-w-3xl mx-auto">
              Take your marketing operations to the next level with Brevo’s enterprise-grade tools. 
              From automation to analytics, manage everything at scale with the reliability global brands trust.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-card p-8 rounded-2xl border border-border">
              <h3 className="text-2xl font-bold font-headline text-primary mb-3">
                Unified Customer Data
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Sync all customer interactions across email, SMS, WhatsApp, and CRM tools inside Brevo’s centralized
                data hub — a single source of truth for smarter enterprise campaigns.
              </p>
            </div>
            <div className="bg-card p-8 rounded-2xl border border-border">
              <h3 className="text-2xl font-bold font-headline text-primary mb-3">
                AI-Driven Personalization
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Use Brevo’s AI tools to tailor messaging at scale, optimize subject lines, personalize journeys,
                and deliver high-impact campaigns with zero manual effort.
              </p>
            </div>
            <div className="bg-card p-8 rounded-2xl border border-border">
              <h3 className="text-2xl font-bold font-headline text-primary mb-3">
                Real-Time Enterprise Analytics
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Track multi-channel performance with real-time dashboards and deep analytics that help you
                reduce waste, increase ROI, and refine campaigns at scale.
              </p>
            </div>
            <div className="bg-card p-8 rounded-2xl border border-border">
              <h3 className="text-2xl font-bold font-headline text-primary mb-3">
                Built for Large Teams
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
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
    </div>
  );
}
