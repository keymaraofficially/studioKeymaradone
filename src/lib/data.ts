import { Share2, Search, Mail, FileText, Bot, BarChart, GitCompareArrows, Users, MessageCircle, type LucideIcon } from 'lucide-react';

export type Category = {
  name: string;
  slug: string;
  description: string;
  icon: LucideIcon;
  image: string;
};

export const categories: Category[] = [
  {
    name: 'Email Marketing',
    slug: 'email-marketing',
    description: 'Engage your audience directly.',
    icon: Mail,
    image: 'email-ad'
  },
  {
    name: 'Automation & Workflows',
    slug: 'automation-workflows',
    description: 'Streamline your marketing efforts.',
    icon: Bot,
    image: 'automation-ad'
  },
  {
    name: 'Growth & Analytics',
    slug: 'growth-analytics',
    description: 'Track performance and find opportunities.',
    icon: BarChart,
    image: 'analytics-ad'
  },
  {
    name: 'Tools & SaaS',
    slug: 'tools-saas',
    description: 'Integrate with your favorite tools.',
    icon: Share2,
    image: 'saas-ad'
  },
  {
    name: 'Tools Comparison',
    slug: 'tools-comparison',
    description: 'Find the best tools for your needs.',
    icon: GitCompareArrows,
    image: 'comparison-ad'
  },
  {
    name: 'Lead Generation',
    slug: 'lead-generation',
    description: 'Grow your customer base.',
    icon: Users,
    image: 'lead-gen-ad'
  },
  {
    name: 'WhatsApp & Multi-Channel',
    slug: 'whatsapp-multichannel',
    description: 'Reach customers on their preferred channels.',
    icon: MessageCircle,
    image: 'whatsapp-ad'
  },
];
