import { type SVGProps } from "react";

export function KeymaraLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="20" height="20" x="2" y="2" rx="4" ry="4" fill="hsl(var(--primary))" stroke="none" />
      <circle cx="12" cy="12" r="6" stroke="hsl(var(--primary-foreground))" strokeWidth="2" fill="none" />
      <circle cx="12" cy="12" r="2.5" fill="hsl(var(--primary-foreground))" stroke="none" />
    </svg>
  );
}
