import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { categories } from '@/lib/data';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const features = [
    { text: 'Automate email and WhatsApp marketing in one dashboard' },
    { text: 'Save time with AI-powered templates and triggers' },
    { text: 'Convert leads faster with smart segmentation' },
    { text: 'Grow your business using data-driven insights' },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-foreground max-w-4xl mx-auto">
            Simplify Email Automation to Deliver Real Value to Every Inbox
          </h1>
          <p className="text-lg text-muted-foreground mt-6 max-w-3xl mx-auto">
            Simplify campaigns, automate your customer journeys, and boost engagement — all from one place with Keymara’s intelligent marketing tools.
          </p>
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 max-w-3xl mx-auto mt-8 text-left">
            {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                    <span className="text-foreground">{feature.text}</span>
                </div>
            ))}
          </div>
          <Button asChild size="lg" className="mt-10">
            <Link href="/ai-tool">
              Explore Keymara Tools
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-card">
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
            {categories.slice(0,4).map((category) => (
              <Link href={`/category/${category.slug}`} key={category.slug} className="group">
                <Card className="h-full transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2 group-hover:border-primary bg-background">
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
    </div>
  );
}
