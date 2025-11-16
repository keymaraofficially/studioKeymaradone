'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';

const footerNav = [
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Tools Hub', href: '/tools-hub' },
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
    { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61583123623267', icon: '/icons/facebook.svg' },
    { name: 'Instagram', href: 'https://www.instagram.com/keymara001/', icon: '/icons/instagram.svg' },
    { name: 'YouTube', href: 'https://www.youtube.com/@Keymara-u8w', icon: '/icons/youtube.svg' },
];

export function Footer() {
    const [showCookieBanner, setShowCookieBanner] = useState(false);
    const emailInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (!localStorage.getItem('km_cookie_choice')) {
                setShowCookieBanner(true);
            }
        }
    }, []);

    const handleAcceptCookie = () => {
        localStorage.setItem('km_cookie_choice', 'accepted');
        setShowCookieBanner(false);
    };

    const handleDeclineCookie = () => {
        localStorage.setItem('km_cookie_choice', 'declined');
        setShowCookieBanner(false);
    };

    const handleSubscribe = () => {
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
            <footer className="bg-background text-foreground py-12 px-8" id="keymara-footer">
                <div className="max-w-7xl mx-auto flex flex-wrap gap-6">
                    <div className="flex-grow min-w-[260px] flex-[1_1_380px]">
                        <h3 className="text-xl font-bold mb-2">Educational Project Statement</h3>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                            <strong>Keymara</strong> is an educational platform focused on email marketing, automation, CRM, and digital growth. We publish guides, tutorials, and research-backed learning resources to help small businesses improve marketing skills. We do not sell email services — our mission is to educate.
                        </p>
                        <h4 className="text-lg font-bold mb-2">Stay Updated With Email Marketing Insights</h4>
                        <p className="text-muted-foreground mb-4 leading-relaxed">Get weekly educational content on email marketing, automation, CRM, and growth strategies. No promotions. No spam.</p>
                        <div className="flex gap-3 items-center mt-2">
                            <input ref={emailInputRef} id="km-sub-email" type="email" placeholder="Enter your email" aria-label="Subscribe email" className="w-full md:w-[260px] p-3 border border-border rounded-md bg-white"/>
                            <button id="km-sub-btn" onClick={handleSubscribe} className="bg-primary border-none py-3 px-4 rounded-lg text-primary-foreground font-bold cursor-pointer">Subscribe to Insights</button>
                        </div>
                        <div className="mt-3 p-3 border-l-4 border-primary bg-primary/10 rounded-md text-foreground">
                            <small><strong>No Selling — Educational Only.</strong> All content on Keymara is educational. We do not sell email services or manage campaigns.</small>
                        </div>
                    </div>

                    <div className="flex-grow min-w-[180px] flex-[1_1_220px]">
                        <h4 className="text-sm font-bold mb-3 uppercase">Navigation</h4>
                        {footerNav.map(item => (
                            <Link key={item.name} href={item.href} className="block text-muted-foreground no-underline py-1.5 hover:text-primary transition-colors">{item.name}</Link>
                        ))}
                    </div>

                    <div className="flex-grow min-w-[180px] flex-[1_1_220px]">
                        <h4 className="text-sm font-bold mb-3 uppercase">Compliance</h4>
                        {complianceLinks.map(item => (
                            <Link key={item.name} href={item.href} className="block text-muted-foreground no-underline py-1.5 hover:text-primary transition-colors">{item.name}</Link>
                        ))}
                    </div>
                    
                    <div className="flex-grow-0 flex-[1_1_180px] flex flex-col gap-3 items-start">
                        <h4 className="text-sm font-bold mb-3 uppercase">Connect</h4>
                        <div className="flex gap-2.5">
                             {socialLinks.map(social => (
                             <Link href={social.href} key={social.name} target="_blank" rel="noopener noreferrer">
                                <Image src={social.icon} alt={social.name} width={social.name === 'YouTube' ? 32 : 28} height={social.name === 'YouTube' ? 32 : 28} />
                             </Link>
                           ))}
                        </div>
                    </div>
                </div>

                <div className="border-t border-border mt-7 pt-5 flex justify-between items-center flex-wrap gap-2 max-w-7xl mx-auto" role="contentinfo">
                    <div className="text-muted-foreground text-sm">© 2025 Keymara. All rights reserved.</div>
                    <div className="text-muted-foreground text-sm">All content on Keymara is educational. We do not sell email services or manage campaigns.</div>
                </div>
            </footer>

            {showCookieBanner && (
                 <div id="km-cookie" className="fixed right-4 bottom-4 bg-card p-3.5 rounded-lg shadow-lg z-[9999] flex gap-2.5 items-center border border-border">
                    <p className="m-0 text-foreground max-w-xs text-sm">We use cookies to improve your browsing experience, analyze traffic, and deliver relevant educational content.</p>
                    <div className="flex gap-2 items-center">
                        <button className="py-2 px-3 rounded-lg border-none cursor-pointer bg-primary text-primary-foreground font-bold text-sm" onClick={handleAcceptCookie}>Accept</button>
                        <button className="py-2 px-3 rounded-lg border-none cursor-pointer bg-muted/20 text-foreground text-sm" onClick={handleDeclineCookie}>Decline</button>
                        <Link href="/cookie-policy" className="ml-2 text-primary no-underline text-sm font-semibold">Learn more</Link>
                    </div>
                </div>
            )}
        </>
    );
}
