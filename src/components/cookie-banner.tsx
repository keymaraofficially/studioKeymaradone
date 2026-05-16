'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from './ui/button';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    const consentDate = localStorage.getItem('cookie-consent-date');
    if (consent === 'accepted' && consentDate) {
        const date = new Date(consentDate);
        const ninetyDays = 90 * 24 * 60 * 60 * 1000;
        if (new Date().getTime() - date.getTime() > ninetyDays) {
            localStorage.removeItem('cookie-consent');
            localStorage.removeItem('cookie-consent-date');
            setShowBanner(true);
        }
    } else if (consent === null) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    setShowBanner(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t p-4 z-50">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-muted-foreground mb-4 md:mb-0">
          We use cookies to improve your browsing experience and analyze site traffic. By accepting, you agree to our use of cookies. Your consent will remain valid for 90 days.
        </p>
        <div className="flex items-center space-x-4">
          <Button onClick={handleAccept}>Accept</Button>
          <Button variant="outline" onClick={handleReject}>
            Reject
          </Button>
          <Link href="/cookie-policy">
            <Button variant="link">Manage Preferences</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
