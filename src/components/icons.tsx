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
      <path d="M4 4h6l-6 8v8" />
      <path d="M20 4h-6l6 8V4z" />
      <path d="M12.5 10.5L4 20" />
      <path d="M11.5 10.5L20 20" />
    </svg>
  );
}
