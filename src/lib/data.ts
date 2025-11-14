import { Share2, Search, Mail, FileText, type LucideIcon } from 'lucide-react';

export type Category = {
  name: string;
  slug: string;
  description: string;
  icon: LucideIcon;
  image: string;
};

export const categories: Category[] = [
  {
    name: 'Social Media',
    slug: 'social-media',
    description: 'Boost your social presence.',
    icon: Share2,
    image: 'social-media-ad'
  },
  {
    name: 'Search Engine',
    slug: 'search-engine',
    description: 'Climb the search rankings.',
    icon: Search,
    image: 'search-engine-ad'
  },
  {
    name: 'Email Marketing',
    slug: 'email-marketing',
    description: 'Engage your audience directly.',
    icon: Mail,
    image: 'email-ad'
  },
  {
    name: 'Content Marketing',
    slug: 'content-marketing',
    description: "Tell your brand's story.",
    icon: FileText,
    image: 'content-ad'
  },
];
