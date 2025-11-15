import { Share2, Search, Mail, FileText, Bot, BarChart, GitCompareArrows, Users, MessageCircle, type LucideIcon, Award, Mailbox, Send, LineChart as LineChartIcon, Users2, Wand2, Monitor, BarChart2, Briefcase, Handshake } from 'lucide-react';

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


export const marketingTools = [
  {
    name: 'Brevo Recommended',
    description: 'Powerful all-in-one marketing suite — email, CRM, SMS, and automation tools.',
    url: 'https://www.brevo.com',
    icon: Award,
    isRecommended: true,
  },
  {
    name: 'Mailchimp',
    description: 'Beginner-friendly email platform with creative templates and analytics.',
    url: 'https://mailchimp.com',
    icon: Mailbox,
    isRecommended: false,
  },
  {
    name: 'ActiveCampaign',
    description: 'Advanced email automation and CRM platform with behavioral workflows.',
    url: 'https://www.activecampaign.com',
    icon: Users2,
    isRecommended: false,
  },
  {
    name: 'MailerLite',
    description: 'Lightweight, affordable tool for email automation and newsletters.',
    url: 'https://www.mailerlite.com',
    icon: Send,
    isRecommended: false,
  },
  {
    name: 'HubSpot Email Marketing',
    description: 'Scalable email solution with deep CRM integration and reporting.',
    url: 'https://www.hubspot.com/products/marketing/email',
    icon: LineChartIcon,
    isRecommended: false,
  },
  {
    name: 'ConvertKit',
    description: 'Simplified email marketing for creators, coaches, and freelancers.',
    url: 'https://convertkit.com',
    icon: Wand2,
    isRecommended: false,
  },
  {
    name: 'Moosend',
    description: 'Affordable email platform with AI-powered personalization and automation.',
    url: 'https://moosend.com',
    icon: Briefcase,
    isRecommended: false,
  },
  {
    name: 'GetResponse',
    description: 'All-in-one email marketing and funnel builder with webinar tools.',
    url: 'https://www.getresponse.com',
    icon: BarChart2,
    isRecommended: false,
  },
  {
    name: 'Campaign Monitor',
    description: 'Design-focused email platform with great deliverability and visual templates.',
    url: 'https://www.campaignmonitor.com',
    icon: Monitor,
    isRecommended: false,
  },
];

export const latestInsights = [
    {
      slug: 'brevo-vs-mailchimp',
      title: 'Brevo vs Mailchimp: Which Email Platform Delivers Better Value in 2025?',
      description: 'A complete 2025 comparison of Brevo and Mailchimp covering automation, workflow power, pricing, AI tools, segmentation, and real performance benchmarks.',
      category: 'Tools Comparison',
      image: 'comparison-ad',
    },
    {
      slug: 'ai-in-email-marketing',
      title: 'Unlocking the Power of AI in Email Marketing',
      description: 'Discover how artificial intelligence is reshaping email campaigns and what it means for your business.',
      category: 'Email Marketing',
      image: 'email-ad',
    },
    {
      slug: 'whatsapp-automation-guide',
      title: 'The Ultimate Guide to WhatsApp Automation',
      description: 'Learn how to automate your customer communication on WhatsApp to drive sales and engagement.',
      category: 'WhatsApp & Multi-Channel',
      image: 'whatsapp-ad',
    }
  ];
