

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
    description: 'Learn how Brevo’s workflows, triggers, and conditions help automate emails, customer journeys, and follow-ups with ease.'
  },
  {
    icon: BarChart,
    title: 'Data Insights Using Brevo Analytics',
    description: 'Understand Brevo’s reporting features to see what drives engagement, conversions, and long-term customer growth.'
  },
  {
    icon: Handshake,
    title: 'Brevo CRM + Multi-Channel Power',
    description: 'Manage emails, CRM, SMS, and WhatsApp inside Brevo’s unified dashboard — and learn how to use it effectively for real business impact.'
  },
  {
    icon: BrainCircuit,
    title: 'Brevo Deliverability & Best Practices',
    description: 'Learn sender reputation, warm-up routines, authentication setup, and deliverability techniques that help your Brevo campaigns reach the inbox.'
  }
]

const brevoFeatureSections = [
    {
        title: "Brevo Automation Workflows",
        description: "Learn how Brevo’s workflows, triggers, delays, and conditions help automate customer journeys with precision.",
        quote: "“Smart automation is not about sending more emails — it’s about sending the right email at the right time.”"
    },
    {
        title: "Brevo Analytics & Reporting",
        description: "Understand engagement, conversions, and customer behavior using Brevo’s powerful real-time analytics.",
        quote: "“Data turns guesswork into clarity — and Brevo gives you the data that actually moves revenue.”"
    },
    {
        title: "Brevo CRM + Contact Management",
        description: "Manage contacts, segment audiences, score leads, and personalize experiences inside Brevo’s unified CRM.",
        quote: "“A powerful CRM doesn’t collect contacts — it builds relationships that convert.”"
    },
    {
        title: "Brevo Multi-Channel Messaging",
        description: "Use email, SMS, WhatsApp, and push notifications in one centralized platform for smoother customer communication.",
        quote: "“Consistent messaging builds trust — and Brevo helps you stay consistent across every channel.”"
    },
    {
        title: "Brevo Email Deliverability Tools",
        description: "Improve inbox placement with Brevo’s warm-up systems, authentication setup, domain reputation checks, and deliverability tools.",
        quote: "“Deliverability decides everything — if your email isn’t seen, nothing else matters.”"
    }
];

const brandNames = [
  "Ebay", "Michelin", "Montblanc", "The Kooples", "Bodybuilding.com", "Bloomreach", 
  "Louis Vuitton", "L’Occitane", "Florida Trend", "Amnesty International"
];


export default function Home() {
  const brevoArticles = latestInsights.filter(insight => insight.title.toLowerCase().includes('brevo')).slice(0, 3);
  const otherArticles = latestInsights.filter(insight => !insight.title.toLowerCase().includes('brevo')).slice(0, 3);
  const featuredInsights = [...brevoArticles, ...otherArticles];

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
                    <Link href="/tools-hub">Email &amp; Automation Tools — Complete Learning Hub</Link>
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

      <section className="py-12 bg-[#faf7ef] text-center">
        <h3 className="text-2xl font-semibold text-gray-800 mb-8">
          Join 500,000+ customers around the world who trust Brevo
        </h3>
        <div className="w-full overflow-hidden relative">
          <div className="flex gap-x-16 whitespace-nowrap animate-scroll-brands">
            {brandNames.map((name, index) => (
              <span key={index} className="text-xl font-medium text-gray-700 opacity-80 transition-opacity duration-300 ease-in-out hover:opacity-100">{name}</span>
            ))}
            {/* Duplicate for infinite loop */}
            {brandNames.map((name, index) => (
              <span key={`dup-${index}`} className="text-xl font-medium text-gray-700 opacity-80 transition-opacity duration-300 ease-in-out hover:opacity-100">{name}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 animate-fade-in animation-delay-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Why Marketers Choose Keymara for Brevo Learning</h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
              We simplify email marketing by teaching you how to use Brevo’s automation, CRM, segmentation, and multi-channel tools in a practical, beginner-friendly way. Keymara helps businesses understand Brevo deeply — so every campaign becomes smarter, faster, and easier to manage.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseKeymara.map((item, index) => (
              <Card key={index} className="bg-card text-center p-6 border-0 shadow-none rounded-2xl shadow-[0_0_15px_5px_hsl(var(--primary)/0.1)]">
                 <div className="inline-block bg-primary/10 p-3 rounded-full mb-4">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <CardHeader className="p-0">
                  <CardTitle className="font-headline text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mt-2 text-base">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
              {brevoFeatureSections.map((section, index) => (
                  <div key={index} className="bg-[#fffdf5] border border-gray-200 rounded-2xl p-9 mb-9">
                      <h3 className="text-2xl font-bold mb-3">{section.title}</h3>
                      <p className="text-base text-gray-600 mb-5">{section.description}</p>
                      <div className="border-t border-gray-200 mt-5 pt-3.5 text-sm text-gray-600" dangerouslySetInnerHTML={{ __html: section.quote }}>
                      </div>
                  </div>
              ))}
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
            {featuredInsights.map((insight, index) => {
                const category = categories.find(c => c.name === insight.category);
                const categorySlug = category ? category.slug : 'tools-comparison';
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
