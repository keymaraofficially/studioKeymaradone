import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="bg-background py-16">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-4">
          Contact Keymara
        </h1>
        <p className="text-lg text-muted-foreground mb-10">
          We&apos;re here to help with educational questions about email marketing, automation,
          CRM, and growth tools. We do not sell email services — our goal is to provide
          learning support only. You can reach us directly at <a href="mailto:support@keymara.com" className="font-semibold text-foreground hover:text-primary">support@keymara.com</a>.
        </p>

        <Card className="bg-card p-8 border">
            <CardContent className="p-0">
                <h2 className="text-2xl font-headline font-semibold mb-4">
                    How can we help you?
                </h2>
                <p className="text-muted-foreground mb-6">
                    If you have questions about our educational guides, tutorials, tools breakdowns,
                    or platform comparisons, feel free to reach out through the form below.
                </p>

                <form className="flex flex-col gap-6">
                    <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" type="text" placeholder="Your name" />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="your@email.com" />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea id="message" placeholder="How can we help you?" rows={5} />
                    </div>

                    <Button type="submit" className="w-full md:w-auto self-start">
                        Send Message
                    </Button>
                </form>
            </CardContent>
        </Card>

        <div className="mt-12 space-y-8">
          <div>
            <h3 className="text-2xl font-headline font-semibold mb-2">
              Educational Support Only
            </h3>
            <p className="text-muted-foreground">
              Keymara is strictly an educational project focused on helping people learn email marketing,
              automation fundamentals, CRM concepts, and multi-channel strategies.
              We do not sell email services or run marketing campaigns for clients.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-headline font-semibold mb-2">
              Response Time
            </h3>
            <p className="text-muted-foreground">
              We usually respond within 24–48 hours on weekdays.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
