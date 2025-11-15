'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { KeymaraLogo } from '@/components/icons';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { categories } from '@/lib/data';

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="border-b border-border/40">
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
                  pathname === '/' ? 'text-foreground font-semibold' : 'text-muted-foreground'
                )}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={cn(
                  'transition-colors hover:text-primary',
                  pathname === '/about' ? 'text-foreground font-semibold' : 'text-muted-foreground'
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
                <div className="h-px bg-border my-2" />
                {categories.map((category) => (
                  <Link
                    key={category.slug}
                    href={`/category/${category.slug}`}
                    className={cn(
                      'transition-colors hover:text-primary text-base',
                      pathname === `/category/${category.slug}` ? 'text-primary' : 'text-muted-foreground'
                    )}
                  >
                    {category.name}
                  </Link>
                ))}
                <Button className="mt-4">Let's Talk</Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <div className="hidden md:flex justify-center border-b bg-background">
         <nav className="flex items-center gap-6 text-sm font-medium h-14">
            {categories.map((category) => (
                <Link
                  href={`/category/${category.slug}`}
                  key={category.slug}
                  className={cn(
                    'transition-colors hover:text-foreground text-muted-foreground',
                    pathname === `/category/${category.slug}` ? 'text-foreground font-semibold' : ''
                  )}
                >
                  {category.name}
                </Link>
            ))}
          </nav>
      </div>
    </header>
  );
}
