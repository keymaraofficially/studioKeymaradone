'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';

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
    { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61583123623267', icon: '/icons/facebook.svg' },
    { name: 'Instagram', href: 'https://www.instagram.com/keymara001/', icon: '/icons/instagram.svg' },
    { name: 'YouTube', href: 'https://www.youtube.com/@Keymara-u8w', icon: '/icons/youtube.svg' },
];

export function Footer() {
    const [showCookieBanner, setShowCookieBanner] = useState(false);
    const emailInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (!localStorage.getItem('km_cookie_choice')) {
            setShowCookieBanner(true);
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
            <footer className="bg-[#f9f5ea] text-[#24323a] py-12 px-8 font-sans">
                <div className="max-w-7xl mx-auto flex flex-wrap flex-col md:flex-row gap-6">
                    <div className="flex-grow min-w-[260px] flex-[1_1_380px]">
                        <h3 className="text-xl font-bold mb-2">Educational Project Statement</h3>
                        <p className="text-[#7a8a8f] mb-4 leading-normal">
                            <strong>Keymara</strong> is an educational platform focused on email marketing, automation, CRM, and digital growth. We publish guides, tutorials, and research-backed learning resources to help small businesses improve marketing skills. We do not sell email services — our mission is to educate.
                        </p>
                        <h4 className="text-lg font-bold mb-2">Stay Updated With Email Marketing Insights</h4>
                        <p className="text-[#7a8a8f] mb-4 leading-normal">Get weekly educational content on email marketing, automation, CRM, and growth strategies. No promotions. No spam.</p>
                        <div className="flex gap-3 items-center mt-2">
                            <input ref={emailInputRef} id="km-sub-email" type="email" placeholder="Enter your email" aria-label="Subscribe email" className="w-full md:w-[260px] p-3 border border-[#efe5c9] rounded-md bg-white"/>
                            <button id="km-sub-btn" onClick={handleSubscribe} className="bg-[#f5c21a] border-none py-3 px-4 rounded-lg text-black font-bold cursor-pointer">Subscribe to Insights</button>
                        </div>
                        <div className="mt-3 p-3 border-l-4 border-[#f5c21a] bg-[#fffef8] rounded-md text-[#24323a]">
                            <small><strong>No Selling — Educational Only.</strong> All content on Keymara is educational. We do not sell email services or manage campaigns.</small>
                        </div>
                    </div>

                    <div className="flex-grow min-w-[180px] flex-[1_1_220px]">
                        <h4 className="text-sm font-bold mb-3">Navigation</h4>
                        {footerNav.map(item => (
                            <Link key={item.name} href={item.href} className="block text-[#7a8a8f] no-underline py-1.5">{item.name}</Link>
                        ))}
                    </div>

                    <div className="flex-grow min-w-[180px] flex-[1_1_220px]">
                        <h4 className="text-sm font-bold mb-3">Compliance</h4>
                        {complianceLinks.map(item => (
                            <Link key={item.name} href={item.href} className="block text-[#7a8a8f] no-underline py-1.5">{item.name}</Link>
                        ))}
                    </div>
                    
                    <div className="flex-grow-0 flex-[1_1_180px] flex flex-col gap-3 items-start">
                        <h4 className="text-sm font-bold mb-3">Connect</h4>
                        <div className="flex gap-2.5">
                             {socialLinks.map(social => (
                             <Link href={social.href} key={social.name} target="_blank" rel="noopener noreferrer">
                                <Image src={social.icon} alt={social.name} width={social.name === 'YouTube' ? 32 : 28} height={social.name === 'YouTube' ? 32 : 28} />
                             </Link>
                           ))}
                        </div>
                    </div>
                </div>

                <div className="border-t border-[#efe5c9] mt-7 pt-5 flex justify-between items-center flex-wrap gap-2 max-w-7xl mx-auto" role="contentinfo">
                    <div className="text-[#7a8a8f]">© 2025 Keymara. All rights reserved.</div>
                    <div className="text-[#7a8a8f]">All content on Keymara is educational. We do not sell email services or manage campaigns.</div>
                </div>
            </footer>

            {showCookieBanner && (
                 <div id="km-cookie" className="fixed right-4 bottom-4 bg-white p-3.5 rounded-lg shadow-lg z-[9999] flex gap-2.5 items-center border border-[#efe5c9]">
                    <p className="m-0 text-[#24323a] max-w-xs">We use cookies to improve your browsing experience, analyze traffic, and deliver relevant educational content.</p>
                    <div className="flex gap-2 items-center">
                        <button className="py-2 px-3 rounded-lg border-none cursor-pointer bg-[#f5c21a] text-black font-bold" onClick={handleAcceptCookie}>Accept</button>
                        <button className="py-2 px-3 rounded-lg border-none cursor-pointer bg-[#f3f3f3] text-[#24323a]" onClick={handleDeclineCookie}>Decline</button>
                        <Link href="/cookie-policy" className="ml-2 text-[#f5c21a] no-underline">Learn more</Link>
                    </div>
                </div>
            )}
        </>
    );
}
