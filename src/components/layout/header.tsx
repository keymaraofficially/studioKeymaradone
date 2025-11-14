
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, ChevronDown } from 'lucide-react';
import { KeymaraLogo } from '@/components/icons';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const navLinks = [
  { 
    label: 'Email Marketing', 
    subLinks: [
      { href: '/category/email-marketing', label: 'Email Campaigns' },
      { href: '/category/email-automation', label: 'Email Automation' },
    ]
  },
  { 
    label: 'Automation & Workflows',
    subLinks: [
      { href: '/category/marketing-automation', label: 'Marketing Automation' },
      { href: '/category/workflow-builder', label: 'Workflow Builder' },
    ]
  },
  { 
    label: 'Growth & Analytics',
    subLinks: [
      { href: '/category/analytics', label: 'Analytics' },
      { href: '/category/ab-testing', label: 'A/B Testing' },
    ]
  },
  { 
    label: 'Tools & SaaS',
    subLinks: [
      { href: '/category/saas-integrations', label: 'SaaS Integrations' },
      { href: '/category/developer-api', label: 'Developer API' },
    ]
  },
  { 
    label: 'Tools Comparison',
    subLinks: []
  },
  { 
    label: 'Lead Generation',
    subLinks: []
  },
  { 
    label: 'WhatsApp & Multi-Channel',
    subLinks: []
  },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 max-w-screen-2xl items-center justify-between">
        <div className="flex items-center gap-12">
            <Link href="/" className="flex items-center gap-2">
                <KeymaraLogo className="h-8 w-8 text-primary" />
                <span className="font-bold text-lg font-headline">Keymara</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                <Link
                href="/"
                className={cn(
                    'transition-colors hover:text-primary',
                    pathname === '/' ? 'text-primary' : 'text-foreground'
                )}
                >
                Home
                </Link>
                <Link
                href="/about"
                className={cn(
                    'transition-colors hover:text-primary',
                    pathname === '/about' ? 'text-primary' : 'text-foreground'
                )}
                >
                About
                </Link>
            </nav>
        </div>
        <div className="hidden md:flex items-center gap-4">
            <Button>Let's Talk</Button>
        </div>
        <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 text-lg font-medium mt-10">
                <Link href="/" className="flex items-center gap-2 mb-4">
                  <KeymaraLogo className="h-8 w-8 text-primary" />
                  <span className="font-bold text-lg font-headline">Keymara</span>
                </Link>
                <Link
                    href="/"
                    className={cn(
                        'transition-colors hover:text-primary',
                        pathname === '/' ? 'text-primary' : 'text-muted-foreground'
                    )}
                >
                    Home
                </Link>
                <Link
                    href="/about"
                    className={cn(
                        'transition-colors hover:text-primary',
                        pathname === '/about' ? 'text-primary' : 'text-muted-foreground'
                    )}
                >
                    About
                </Link>
                {navLinks.map((link) => (
                    link.subLinks.length > 0 ? (
                        <DropdownMenu key={link.label}>
                            <DropdownMenuTrigger className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                                {link.label}
                                <ChevronDown className="ml-1 h-4 w-4" />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                {link.subLinks.map(subLink => (
                                    <DropdownMenuItem key={subLink.href} asChild>
                                        <Link href={subLink.href}>{subLink.label}</Link>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <Link
                            key={link.label}
                            href="#"
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            {link.label}
                        </Link>
                    )
                ))}
                 <Button className="mt-4">Let's Talk</Button>
              </nav>
            </SheetContent>
          </Sheet>
      </div>
      <div className="hidden md:flex container h-16 max-w-screen-2xl items-center justify-start border-t border-border/40 gap-6">
        {navLinks.map((link) => (
          link.subLinks.length > 0 ? (
            <DropdownMenu key={link.label}>
              <DropdownMenuTrigger className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                {link.label}
                <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {link.subLinks.map(subLink => (
                    <DropdownMenuItem key={subLink.href} asChild>
                        <Link href={subLink.href}>{subLink.label}</Link>
                    </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link
                key={link.label}
                href="#"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
                {link.label}
            </Link>
          )
        ))}
      </div>
    </header>
  );
}
