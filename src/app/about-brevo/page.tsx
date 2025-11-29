import Link from "next/link";
import { Info } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutBrevoPage() {
  return (
    <div className="container mx-auto max-w-4xl py-12 px-4">
      <div className="text-center mb-12">
        <Info className="mx-auto h-12 w-12 text-primary mb-4" />
        <h1 className="text-4xl md:text-5xl font-headline font-bold">
          About <span className="text-[#046404]">Brevo</span>
        </h1>
        <p className="text-lg text-muted-foreground mt-3 max-w-2xl mx-auto">
          Brevo is the all-in-one platform empowering businesses to build customer relationships through end-to-end campaigns.
        </p>
      </div>

      <div className="bg-card border rounded-lg p-6 sm:p-8 space-y-6 text-center mb-16">
        <h2 className="text-2xl font-headline font-bold">What is <span className="text-[#046404]">Brevo</span>?</h2>
        <p className="text-muted-foreground">
          Brevo (formerly Sendinblue) is a comprehensive marketing and sales platform that provides a suite of tools for email marketing, automation, CRM, SMS marketing, chat, and more. It's designed to be an affordable and powerful solution for small to medium-sized businesses looking to grow.
        </p>
        <p className="text-muted-foreground">
          With Brevo, you can automate your marketing workflows, manage customer relationships, and communicate across multiple channels—all from a single dashboard.
        </p>
        <Button asChild>
          <Link href="https://www.brevo.com/company/about/" target="_blank" rel="noopener noreferrer">
            Visit Brevo's Official Site
          </Link>
        </Button>
      </div>
    </div>
  );
}
