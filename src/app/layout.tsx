'use client';

import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    // Optionally, set a 'declined' state or just hide it
    localStorage.setItem('cookieConsent', 'declined'); // To prevent it from showing immediately again
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 max-w-lg w-11/12 bg-white p-4 rounded-lg shadow-xl border border-gray-200 z-50 animate-in fade-in-0 duration-500">
      <p className="text-sm text-gray-700 mb-4 font-body">
        We use cookies to improve your browsing experience, analyze traffic, and deliver relevant educational content.
      </p>
      <div className="flex flex-wrap gap-3 justify-center">
        <button
          onClick={handleAccept}
          className="px-5 py-2 rounded-md text-white bg-amber-500 hover:bg-amber-600 transition-colors text-sm font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
        >
          Accept
        </button>
        <button
          onClick={handleDecline}
          className="px-5 py-2 rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors text-sm font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
        >
          Decline
        </button>
        <Link href="/cookie-policy" passHref>
          <button className="px-5 py-2 rounded-md text-amber-500 bg-transparent hover:bg-amber-50 transition-colors text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2">
            Learn more
          </button>
        </Link>
      </div>
    </div>
  );
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;900&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet" />
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-body antialiased',
        )}
      >
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
        <CookieConsent />
      </body>
    </html>
  );
}