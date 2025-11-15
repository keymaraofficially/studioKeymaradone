import { type SVGProps } from "react";

export function KeymaraLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <rect width="20" height="20" x="2" y="2" rx="4" ry="4" className="fill-primary" />
      <circle cx="12" cy="12" r="6" className="stroke-primary-foreground" strokeWidth="2" fill="none" />
      <circle cx="12" cy="12" r="2.5" className="fill-primary-foreground" />
    </svg>
  );
}
