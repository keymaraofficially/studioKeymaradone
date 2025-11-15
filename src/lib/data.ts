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
    author: 'Jane Doe',
    date: 'October 26, 2025',
    quote: "The best marketing doesn't feel like marketing.",
    takeaways: ['Automation is key to scaling.', 'Design matters for brand perception.', 'Value is more than just price.'],
    glossary: 'Deliverability: The measure of how many of your emails reach the inbox instead of the spam folder.',
    facts: ['Email generates $42 for every $1 spent.', 'Personalized emails have 6x higher transaction rates.'],
    summary: 'Brevo excels in automation and value, while Mailchimp leads in design and ease of use for beginners. Choose based on your primary business need.',
    insight: 'Community members find Brevo\'s CRM a game-changer for managing leads without extra cost.',
    keyTip1: 'Pick a platform based on your automation needs, not just templates. Automation impacts long-term results far more than email design.',
    keyTip2: 'Check the contact vs. email-based pricing. Mailchimp charges per contact, while Brevo charges per email sent, which can be more cost-effective for larger lists with less frequent sends.',
    keyTip3: 'Always test the free trial. Your team’s workflow and comfort with the interface is just as important as the feature list.',
    recommendation: 'Choose Brevo for automation and workflows. Choose Mailchimp for template-heavy visual campaigns.',
  },
  {
    slug: 'brevo-vs-mailerlite',
    title: 'Brevo vs MailerLite: Which Email Platform Gives Better Automation, Value, and Growth?',
    description: 'A full, expert-level comparison between Brevo and MailerLite. Explore automation, deliverability, workflows, segmentation, CRM, templates, pricing, and real use cases to choose the right platform for your business.',
    category: 'Tools Comparison',
    image: 'comparison-ad',
    author: 'Jane Doe',
    date: 'October 27, 2025',
    quote: 'The simplest solution is often the most effective.',
    takeaways: ['Automation depth matters more than feature quantity.', 'Beautiful design converts better.', 'Affordable tools can still be powerful.'],
    glossary: 'A/B Testing: A method of comparing two versions of a webpage or app against each other to determine which one performs better.',
    facts: ['Segmented campaigns can drive a 760% increase in revenue.', '49% of consumers say they would like to receive promotional emails from their favorite brands on a weekly basis.'],
    summary: 'Brevo is for businesses that need deep automation and CRM. MailerLite is for creators who need beautiful designs and simplicity. Choose based on your primary marketing motion.',
    insight: 'Users praise MailerLite for its intuitive and fast-to-learn interface, making it a favorite among solo creators.',
    keyTip1: 'Pick a platform that aligns with your workflow style, not the one with the most templates. Workflows impact long-term results more than aesthetics.',
    keyTip2: 'If your business depends on timed sequences—like onboarding, lead nurturing, or ecommerce—you need automation depth more than design richness.',
    keyTip3: 'Before choosing any platform, map your customer journey. The tool should serve the journey—not the other way around.',
    recommendation: 'If your goal is long-term automation, predictable lead nurture, or behavior-based flows, you will get far more value from Brevo. If you prioritize branding, newsletters, and creator-style communication, MailerLite is a perfectly balanced choice.',
  },
  {
    slug: 'ai-in-email-marketing',
    title: 'Unlocking the Power of AI in Email Marketing',
    description: 'Discover how artificial intelligence is reshaping email campaigns and what it means for your business.',
    category: 'Email Marketing',
    image: 'email-ad',
    author: 'John Smith',
    date: 'October 25, 2025',
    quote: 'AI will not replace you, but a person using AI will.',
    takeaways: ['AI helps personalize content at scale.', 'Predictive analytics can boost open rates.', 'Automated subject line generation saves time.'],
    glossary: 'Predictive Analytics: Using data, statistical algorithms and machine learning techniques to identify the likelihood of future outcomes based on historical data.',
    facts: ['70% of marketers use AI for content personalization.', 'AI can increase marketing ROI by over 30%.'],
    summary: 'AI is no longer a futuristic concept but a practical tool for marketers to improve efficiency, personalization, and ROI in email marketing.',
    insight: 'Users report that AI-driven send-time optimization has significantly improved their engagement rates.',
    keyTip1: 'Start small with AI. Use it for subject line suggestions or A/B testing before overhauling your entire content strategy.',
    keyTip2: 'Ensure your data is clean. AI is only as good as the data it learns from, so garbage in means garbage out.',
    keyTip3: 'Don’t lose the human touch. Use AI to augment your creativity, not replace it entirely. Authentic connection still matters.',
    recommendation: 'Incorporate AI for subject line optimization and A/B testing to quickly boost engagement with minimal effort.',
  },
  {
    slug: 'whatsapp-automation-guide',
    title: 'The Ultimate Guide to WhatsApp Automation',
    description: 'Learn how to automate your customer communication on WhatsApp to drive sales and engagement.',
    category: 'WhatsApp & Multi-Channel',
    image: 'whatsapp-ad',
    author: 'Emily White',
    date: 'October 24, 2025',
    quote: 'Meet your customers where they are.',
    takeaways: ['WhatsApp has over 2 billion active users.', 'Automation can handle customer service inquiries.', 'Broadcasts can be used for targeted promotions.'],
    glossary: 'WhatsApp Business API: A programmable interface that allows businesses to send and receive messages on WhatsApp at scale.',
    facts: ['WhatsApp messages have a 98% open rate.', '53% of people say they are more likely to shop with a business they can message directly.'],
    summary: 'WhatsApp automation allows businesses to engage with customers on their preferred platform, leading to higher open rates and better customer relationships.',
    insight: 'Small businesses have seen a 20% increase in sales by using WhatsApp for abandoned cart recovery.',
    keyTip1: 'Always get opt-in. Sending unsolicited messages on WhatsApp is a quick way to get blocked and reported.',
    keyTip2: 'Keep messages concise and conversational. WhatsApp is a personal platform, so avoid overly formal or lengthy marketing-speak.',
    keyTip3: 'Use rich media like images and videos to make your messages more engaging and visually appealing.',
    recommendation: 'Start with an abandoned cart recovery flow on WhatsApp. It’s a high-impact, low-effort way to see immediate results.',
  }
];
