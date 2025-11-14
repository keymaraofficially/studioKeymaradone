import React from 'react';
import { KeymaraLogo } from '@/components/icons';

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <KeymaraLogo className="h-6 w-6 text-foreground" />
            <p className="text-sm text-muted-foreground font-headline">Keymara</p>
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Keymara, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
