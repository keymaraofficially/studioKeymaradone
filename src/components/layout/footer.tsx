import React from 'react';
import Link from 'next/link';
import { KeymaraLogo } from '@/components/icons';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const resources = [
  { name: 'Blog', href: '#' },
  { name: 'Contact', href: '#' },
  { name: 'Help Center', href: '#' },
  { name: 'Privacy Policy', href: '#' },
  { name: 'Terms of Service', href: '#' },
  { name: 'Affiliate Disclosure', href: '#' },
  { name: 'Disclaimer', href: '#' },
];

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <KeymaraLogo className="h-8 w-8" />
              <span className="font-bold text-lg font-headline">Keymara</span>
            </Link>
            <p className="text-muted-foreground max-w-xs">
              Your business needs great sales, we help you get there.
            </p>
          </div>
          <div className="col-span-1 md:col-start-3">
            <h3 className="font-headline font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              {resources.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Keymara. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" aria-label="Facebook">
              <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
