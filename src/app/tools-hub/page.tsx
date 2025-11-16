import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function ToolsHubPage() {
  return (
    <section className="max-w-[1100px] mx-auto my-10 p-5 text-gray-800">
      <div className="bg-[#fffef8] p-9 rounded-xl border border-[#efe5c9]">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-2">Email &amp; Automation Tools — Complete Learning Hub</h1>
        <p className="text-gray-600 mb-4">
          A single place to learn email platforms, automation builders, CRMs, and multi-channel messaging. Use this hub to explore comparisons, walkthroughs, and practical guides for implementing email systems that actually scale.
        </p>
        <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
            <Link href="/category/tools-comparison">Explore Tool Guides</Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6 mt-6">
        <main>
          <Card className="mb-4 bg-white border-[#efe5c9]">
            <CardHeader>
              <CardTitle>Tools Comparison</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Side-by-side feature and pricing comparisons for Brevo, Mailchimp, MailerLite, GetResponse, ActiveCampaign, ConvertKit, and more.</p>
              <ul className="list-none p-0">
                <li className="py-2.5 border-b border-dashed border-[#f0e8d8] text-gray-700"><strong>Brevo vs Mailchimp</strong> — automation vs design focus</li>
                <li className="py-2.5 border-b border-dashed border-[#f0e8d8] text-gray-700"><strong>Brevo vs ActiveCampaign</strong> — workflows, CRM, and segmentation</li>
                <li className="py-2.5 border-b border-dashed border-[#f0e8d8] text-gray-700"><strong>MailerLite &amp; Budget Options</strong> — value for small teams</li>
                <li className="py-2.5 text-gray-700"><strong>GetResponse for eCommerce</strong> — funnels &amp; webinar integrations</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-4 bg-white border-[#efe5c9]">
            <CardHeader>
              <CardTitle>Individual Tool Tutorials</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Step-by-step tutorials for each platform: onboarding, templates, deliverability checks, API usage, and migration guides.</p>
              <ul className="list-none p-0">
                <li className="py-2.5 border-b border-dashed border-[#f0e8d8] text-gray-700">Brevo: account setup, sender reputation, transactional email</li>
                <li className="py-2.5 border-b border-dashed border-[#f0e8d8] text-gray-700">Mailchimp: creative templates &amp; branding</li>
                <li className="py-2.5 text-gray-700">ActiveCampaign: CRM + automations</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="mb-4 bg-white border-[#efe5c9]">
            <CardHeader>
              <CardTitle>Automation Guides</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Designing journeys, behavioral triggers, A/B testing, send-time optimization, and measuring conversion impact.</p>
              <ul className="list-none p-0">
                <li className="py-2.5 border-b border-dashed border-[#f0e8d8] text-gray-700">Welcome series &amp; onboarding flows</li>
                <li className="py-2.5 border-b border-dashed border-[#f0e8d8] text-gray-700">Abandoned cart &amp; win-back journeys</li>
                <li className="py-2.5 text-gray-700">Lifecycle segmentation &amp; scoring</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-4 bg-white border-[#efe5c9]">
             <CardHeader>
                <CardTitle>CRM Breakdowns</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-gray-600">How built-in CRM features differ across tools — pipelines, deals, contact fields, and platform automation hooks.</p>
            </CardContent>
          </Card>

          <Card className="bg-white border-[#efe5c9]">
            <CardHeader>
                <CardTitle>Multi-channel Messaging Guides</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-gray-600">Email + SMS + WhatsApp + push patterns, compliance, templates, and channel orchestration strategies.</p>
            </CardContent>
          </Card>
        </main>

        <aside className="relative">
          <div className="sticky top-6">
            <Card className="mb-4 bg-white border-[#efe5c9]">
                <CardHeader><CardTitle>Quick Links</CardTitle></CardHeader>
                <CardContent>
                    <ul className="list-disc pl-4 text-gray-700 space-y-2">
                        <li><Link href="/category/tools-comparison">Tools comparison</Link></li>
                        <li><Link href="/category/tools-saas">Individual tool tutorials</Link></li>
                        <li><Link href="/category/automation-workflows">Automation guides</Link></li>
                        <li><Link href="/category/crm-integrations">CRM breakdowns</Link></li>
                        <li><Link href="/category/whatsapp-multi-channel">Multi-channel messaging</Link></li>
                    </ul>
                </CardContent>
            </Card>

            <Card className="mb-4 bg-white border-[#efe5c9]">
                <CardHeader><CardTitle>Why this hub?</CardTitle></CardHeader>
                <CardContent>
                    <p className="text-gray-600">SEO-focused hub to centralize learning, improve internal linking, and speed up Brevo/partner approvals by clearly showing educational intent.</p>
                </CardContent>
            </Card>

             <Card className="bg-white border-[#efe5c9]">
                <CardHeader><CardTitle>Subscribe for tool deep dives</CardTitle></CardHeader>
                <CardContent>
                    <p className="text-gray-600">Get detailed walkthroughs and realistic pricing breakdowns — strictly educational.</p>
                    <Button asChild className="mt-4 bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
                        <Link href="#keymara-footer">Subscribe to Insights</Link>
                    </Button>
                </CardContent>
            </Card>
          </div>
        </aside>
      </div>
    </section>
  );
}
