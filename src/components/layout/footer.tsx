import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const footerNav = [
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
    { name: 'About', href: '/about' },
    { name: 'Email Marketing', href: '/category/email-marketing' },
    { name: 'Automation & Workflows', href: '/category/automation-workflows' },
    { name: 'Growth & Analytics', href: '/category/growth-analytics' },
    { name: 'Tools & SaaS', href: '/category/tools-saas' },
    { name: 'Tools Comparison', href: '/category/tools-comparison' },
    { name: 'Lead Generation', href: '/category/lead-generation' },
    { name: 'WhatsApp & Multi-Channel', href: '/category/whatsapp-multichannel' },
    { name: 'CRM & Integrations', href: '/category/crm-integrations' },
];

const complianceLinks = [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms-of-service' },
    { name: 'Cookie Policy', href: '/cookie-policy' },
    { name: 'Affiliate Disclosure', href: '/affiliate-disclosure' },
    { name: 'Disclaimer', href: '/disclaimer' },
];

export function Footer() {
    return (
        <footer className="bg-[#faf7ec] py-16 border-t border-[#e6e0cc]">
            <div className="container mx-auto px-4">
                
                {/* Top Educational/About Block */}
                <div className="mb-10">
                    <h3 className="text-2xl font-bold mb-2.5 text-gray-800">
                        About Keymara
                    </h3>
                    <p className="max-w-2xl leading-relaxed text-gray-700">
                        Keymara is an educational platform focused on email marketing, automation, CRM, and digital growth. We provide guides, tutorials, and research-backed learning resources to help small businesses improve their marketing skills. We do not sell email services — our mission is to educate.
                    </p>
                </div>

                {/* Subscribe Block */}
                <div className="mb-10">
                    <h4 className="text-xl font-bold mb-2 text-gray-800">
                        Stay Updated With Email Marketing Insights
                    </h4>
                    <p className="max-w-lg leading-relaxed text-gray-700">
                        Get weekly educational content on email marketing, automation, CRM, and growth strategies. No promotions. No spam.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-2.5 mt-4 max-w-md">
                        <Input type="email" placeholder="Enter your email" className="bg-white" />
                        <Button className="bg-[#ffbf00] text-gray-800 hover:bg-[#ffcf33]">
                            Subscribe to Insights
                        </Button>
                    </div>
                </div>

                {/* Footer Columns */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
                    {/* Quick Navigation */}
                    <div>
                        <h4 className="text-lg font-bold mb-3">Navigation</h4>
                        <ul className="space-y-2">
                            {footerNav.map(item => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-gray-700 hover:text-primary transition-colors">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Compliance */}
                    <div>
                        <h4 className="text-lg font-bold mb-3">Compliance</h4>
                        <ul className="space-y-2">
                            {complianceLinks.map(item => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-gray-700 hover:text-primary transition-colors">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Icons */}
                    <div>
                        <h4 className="text-lg font-bold mb-3">Connect</h4>
                        <div className="flex gap-3">
                            <Link href="#" className="text-2xl text-gray-700 hover:text-primary transition-colors">🔗</Link>
                            <Link href="#" className="text-2xl text-gray-700 hover:text-primary transition-colors">📸</Link>
                        </div>
                    </div>
                </div>

                {/* Trust Badge */}
                <div className="mt-10">
                    <p className="text-sm text-gray-600">
                        All content on Keymara is educational. We do not sell email services or manage campaigns.
                    </p>
                </div>

                {/* Copyright */}
                <div className="text-center mt-8 pt-5 border-t border-[#e6e0cc]">
                    <p className="text-sm text-gray-500">© 2025 Keymara. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
