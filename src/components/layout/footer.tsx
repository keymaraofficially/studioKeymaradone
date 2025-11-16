import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';

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

const socialLinks = [
    { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61583123623267', icon: '/icons/facebook.svg', width: 28, height: 28 },
    { name: 'Instagram', href: 'https://www.instagram.com/keymara001/', icon: '/icons/instagram.svg', width: 28, height: 28 },
    { name: 'YouTube', href: 'https://www.youtube.com/@Keymara-u8w', icon: '/icons/youtube.svg', width: 32, height: 32 },
];

export function Footer() {
    return (
        <footer className="bg-[#faf5e6] py-16 border-t border-[#e6ddb8]">
            <div className="container mx-auto px-4 max-w-7xl">
                
                {/* ABOUT SECTION */}
                <div className="mb-10">
                    <h2 className="text-2xl font-bold mb-2.5 text-gray-800">About Keymara</h2>
                    <p className="max-w-3xl leading-relaxed text-base text-gray-700">
                        Keymara is an educational platform focused on email marketing, automation, CRM, and digital growth. 
                        We provide guides, tutorials, and research-backed learning resources to help small businesses improve 
                        their marketing skills. We do not sell email services — our mission is to educate.
                    </p>
                </div>

                {/* SUBSCRIBE SECTION */}
                <div className="mb-12">
                    <h3 className="text-xl font-bold mb-2.5 text-gray-800">Stay Updated With Email Marketing Insights</h3>
                    <p className="text-gray-700 mb-5 max-w-2xl">
                        Get weekly educational content on email marketing, automation, CRM, and growth strategies. 
                        No promotions. No spam.
                    </p>
                    <form className="flex gap-2.5 max-w-lg">
                        <Input 
                            type="email" 
                            placeholder="Enter your email" 
                            className="flex-1 px-3.5 py-3 border-gray-300 rounded-md text-base"
                        />
                        <Button 
                            type="submit" 
                            className="bg-[#f7b500] text-black border-none px-5 py-3 rounded-md cursor-pointer font-semibold hover:bg-[#f7b500]/90">
                            Subscribe to Insights
                        </Button>
                    </form>
                </div>

                {/* GRID LAYOUT */}
                <div className="flex justify-between flex-wrap gap-12">
                    {/* NAVIGATION */}
                    <div className="min-w-[200px]">
                        <h4 className="text-lg font-bold mb-3">Navigation</h4>
                        <ul className="list-none p-0 leading-loose">
                            {footerNav.map(item => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-gray-700 hover:text-primary transition-colors no-underline">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* COMPLIANCE */}
                    <div className="min-w-[200px]">
                        <h4 className="text-lg font-bold mb-3">Compliance</h4>
                        <ul className="list-none p-0 leading-loose">
                            {complianceLinks.map(item => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-gray-700 hover:text-primary transition-colors no-underline">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* SOCIAL */}
                    <div className="min-w-[200px]">
                        <h4 className="text-lg font-bold mb-3">Connect</h4>
                        <div className="flex gap-4 items-center">
                           {socialLinks.map(social => (
                             <Link href={social.href} key={social.name} target="_blank" rel="noopener noreferrer">
                                <Image src={social.icon} alt={social.name} width={social.width} height={social.height} />
                             </Link>
                           ))}
                        </div>
                    </div>
                </div>

                {/* EDUCATIONAL NOTE */}
                <p className="mt-12 text-sm text-gray-700">
                    All content on Keymara is educational. We do not sell email services or manage campaigns.
                </p>

                {/* COPYRIGHT */}
                <p className="mt-4 text-sm text-gray-600">
                    © 2025 Keymara. All rights reserved.
                </p>

            </div>
        </footer>
    );
}