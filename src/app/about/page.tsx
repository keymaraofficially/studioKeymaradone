import { Users } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from 'next/link';

const faqItems = [
    {
        question: "What is Keymara?",
        answer: "Keymara is an educational platform focused on email marketing, automation, CRM, and multi-channel messaging. Our goal is to teach small businesses how modern marketing works."
    },
    {
        question: "Do you sell or manage email marketing services?",
        answer: "No. We do not sell campaigns, automation services, or email management. All content on Keymara is educational only."
    },
    {
        question: "Why do you write about tools like Brevo, Mailchimp, or others?",
        answer: "We cover popular email tools only for learning purposes — so readers understand how different features work and how to choose tools based on their real needs. We are not affiliated with these platforms."
    },
    {
        question: "How often do you update your content?",
        answer: "We regularly update our guides when major changes happen in automation, CRM, analytics, or email marketing tools to ensure accuracy and clarity."
    },
    {
        question: "Is your content beginner-friendly?",
        answer: "Yes. All articles are written in a step-by-step, easy-to-understand format so beginners and small business owners can learn without confusion."
    },
    {
        question: "Do you collect any unnecessary user data?",
        answer: "No. We only collect the email a user enters voluntarily to receive educational updates. Users can unsubscribe anytime. We never share or sell data."
    }
];

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-4xl py-12 px-4">
      <div className="text-center mb-12">
        <Users className="mx-auto h-12 w-12 text-primary mb-4" />
        <h1 className="text-4xl md:text-5xl font-headline font-bold">
          About Keymara
        </h1>
        <p className="text-lg text-muted-foreground mt-3 max-w-2xl mx-auto">
          We're on a mission to simplify marketing automation and help businesses connect with their customers in meaningful ways.
        </p>
      </div>

      <div className="bg-card border rounded-lg p-6 sm:p-8 space-y-6 text-center mb-16">
        <h2 className="text-2xl font-headline font-bold">Our Story</h2>
        <p className="text-muted-foreground">
          Keymara was founded with the belief that powerful marketing tools should be accessible to everyone, not just large corporations. Our platform is designed to be intuitive, intelligent, and effective, empowering you to create campaigns that deliver real value.
        </p>
        <p className="text-muted-foreground">
          From automating customer journeys to providing data-driven insights, we're here to support your growth every step of the way.
        </p>
      </div>

      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-headline font-bold text-center mb-8">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem value={`item-${index + 1}`} key={index}>
                <AccordionTrigger className="text-lg font-semibold text-left">{item.question}</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="mt-16 text-center">
        <h3 className="text-2xl font-headline font-bold">Contact</h3>
        <p className="text-muted-foreground mt-2">
            For any questions related to our educational content, feel free to email us at <a href="mailto:support@keymara.com" className="font-semibold text-foreground hover:text-primary">support@keymara.com</a>.
        </p>
      </section>

    </div>
  );
}
