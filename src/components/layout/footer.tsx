'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

const footerNav = [
    { name: 'Blog', href: '/blog' },
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
    { name: 'Contact', href: '/contact' },
    { name: 'About', href: '/about' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms-of-service' },
    { name: 'Cookie Policy', href: '/cookie-policy' },
    { name: 'Affiliate Disclosure', href: '/affiliate-disclosure' },
    { name: 'Disclaimer', href: '/disclaimer' },
];

const brevoLinks = [
    { name: 'About Brevo', href: '/about-brevo' },
    { name: 'Brevo Pricing', href: '/category/brevo-pricing' },
    { name: 'Brevo vs. ActiveCampaign', href: '/category/brevo-vs-activecampaign' },
];

const socialLinks = [
    { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61583123623267', icon: '/icons/facebook.svg' },
    { name: 'Instagram', href: 'https://www.instagram.com/keymara001/', icon: '/icons/instagram.svg' },
    { name: 'YouTube', href: 'https://www.youtube.com/channel/UCFyfjkZbo0z6DspaxoFQsew', icon: '/icons/youtube.svg' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/keymara-email-marketing-827623392/', icon: '/icons/linkedin.svg' },
];

export function Footer() {
    const [showCookieBanner, setShowCookieBanner] = useState(false);
    const emailInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const cookieChoice = localStorage.getItem('km_cookie_choice');
        if (typeof window !== 'undefined' && !cookieChoice) {
            setShowCookieBanner(true);
        } else if (cookieChoice === 'accepted') {
            const cookieTimestamp = localStorage.getItem('km_cookie_timestamp');
            if (cookieTimestamp) {
                const now = new Date().getTime();
                const acceptedTime = new Date(parseInt(cookieTimestamp)).getTime();
                const ninetyDaysInMillis = 90 * 24 * 60 * 60 * 1000;
                if (now - acceptedTime > ninetyDaysInMillis) {
                    // More than 90 days, show banner again
                    localStorage.removeItem('km_cookie_choice');
                    localStorage.removeItem('km_cookie_timestamp');
                    setShowCookieBanner(true);
                }
            }
        }
    }, []);

    const handleAcceptCookie = () => {
        localStorage.setItem('km_cookie_choice', 'accepted');
        localStorage.setItem('km_cookie_timestamp', new Date().getTime().toString());
        setShowCookieBanner(false);
    };

    const handleDeclineCookie = () => {
        localStorage.setItem('km_cookie_choice', 'declined'); // Optionally store 'declined' if you need to track it
        localStorage.removeItem('km_cookie_timestamp'); // Clear timestamp if declined
        setShowCookieBanner(false);
    };

    const handleSubscribe = (event: React.FormEvent) => {
        event.preventDefault();
        const email = emailInputRef.current?.value.trim();
        if (!email || !email.includes('@')) {
            alert('Please enter a valid email');
            return;
        }
        console.log('Subscribe request:', email);
        alert('Thanks — you are subscribed to educational updates.');
        if (emailInputRef.current) {
            emailInputRef.current.value = '';
        }
    };
    
    return (
        <>
            <footer className="bg-[#fdf8e8] py-16 border-t border-[#eee]" id="keymara-footer">
                <div className="container max-w-7xl mx-auto px-5">

                    <div className="mb-10">
                        <h3 className="font-bold text-xl mb-4">Educational Project Statement</h3>
                        <p className="max-w-2xl leading-relaxed">
                            <strong>Keymara</strong> is an educational platform focused on email marketing, automation, CRM, and digital growth. 
                            We publish guides, tutorials, and research-backed learning resources to help small businesses improve their marketing 
                            skills. We do not sell email services — our mission is to educate.
                        </p>
                    </div>

                    <div className="my-9">
                        <h3 className="font-bold text-xl mb-2.5">Stay Updated With Email Marketing Insights</h3>
                        <p className="max-w-xl mb-5 text-muted-foreground">
                            Get weekly educational content on email marketing, automation, CRM, and growth strategies. 
                            No promotions. No spam.
                        </p>

                        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5 max-w-lg">
                            <Input ref={emailInputRef} id="km-sub-email" type="email" placeholder="Enter your email" aria-label="Subscribe email" className="flex-1"/>
                            <Button type="submit">
                                Subscribe to Insights
                            </Button>
                        </form>

                        <div className="mt-4 bg-[#fff8dc] p-3.5 rounded-md text-sm">
                            <strong>No Selling — Educational Only.</strong> All content on Keymara is educational. 
                            We do not sell email services or manage campaigns.
                        </div>
                    </div>

                    <div className="flex justify-between flex-wrap mt-12">
                        <div className="min-w-[200px] mb-7">
                            <h4 className="font-bold mb-3">Navigation</h4>
                            <ul className="list-none p-0 leading-loose">
                                {footerNav.map(item => (
                                    <li key={item.name}><Link href={item.href} className="text-foreground no-underline hover:text-primary transition-colors">{item.name}</Link></li>
                                ))}
                            </ul>
                        </div>

                        <div className="min-w-[220px] mb-7">
                            <h4 className="font-bold mb-3">Compliance</h4>
                            <ul className="list-none p-0 leading-loose">
                                {complianceLinks.map(item => (
                                    <li key={item.name}><Link href={item.href} className="text-foreground no-underline hover:text-primary transition-colors">{item.name}</Link></li>
                                ))}
                            </ul>
                        </div>

                        <div className="min-w-[200px] mb-7">
                            <h4 className="font-bold mb-3">Brevo</h4>
                            <ul className="list-none p-0 leading-loose">
                                {brevoLinks.map(item => (
                                    <li key={item.name}><Link href={item.href} className="text-foreground no-underline hover:text-primary transition-colors">{item.name}</Link></li>
                                ))}
                            </ul>
                        </div>

                        <div className="min-w-[200px] mb-7">
                            <h4 className="font-bold mb-3">Connect</h4>
                            <div className="flex gap-4 items-center">
                                {socialLinks.map(social => (
                                <Link href={social.href} key={social.name} target="_blank" rel="noopener noreferrer">
                                    <Image src={social.icon} alt={social.name} width={24} height={24} />
                                </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-10 text-sm text-gray-500">
                        <p>All content on Keymara is educational. We do not sell email services or manage campaigns.</p>
                        <p className="mt-2">© 2025 Keymara. All rights reserved.</p>
                    </div>

                </div>
            </footer>

            {showCookieBanner && (
                 <div id="km-cookie" className="fixed right-4 bottom-4 bg-card p-3.5 rounded-lg shadow-lg z-[9999] flex flex-col sm:flex-row gap-2.5 items-center border border-border">
                    <p className="m-0 text-foreground max-w-xs text-sm">We use cookies to improve your browsing experience, analyze traffic, and deliver relevant educational content.</p>
                    <div className="flex gap-2 items-center shrink-0">
                        <button className="py-2 px-3 rounded-lg border-none cursor-pointer bg-primary text-primary-foreground font-bold text-sm" onClick={handleAcceptCookie}>Accept</button>
                        <button className="py-2 px-3 rounded-lg border-none cursor-pointer bg-muted/20 text-foreground text-sm" onClick={handleDeclineCookie}>Decline</button>
                        <Link href="/cookie-policy" className="ml-2 text-primary no-underline text-sm font-semibold">Learn more</Link>
                    </div>
                </div>
            )}
        </>
    );
}