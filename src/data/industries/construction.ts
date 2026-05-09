import { IndustryData } from '../types';

export const constructionData: IndustryData = {
  slug: 'construction',
  label: 'Construction',

  metaTitle: 'Managed IT Services for Construction Firms | Jenco IT Solutions',
  metaDescription:
    'Construction-focused IT services including cybersecurity, cloud infrastructure, Microsoft 365, and Procore support.',

  heroEyebrow: 'Managed IT for Construction Companies',
  heroHeadline: 'Your projects cannot afford IT downtime.',
  heroSubtext:
    'Construction firms lose thousands when connectivity, project systems, or field operations fail. Jenco IT Solutions delivers resilient IT infrastructure, cybersecurity, and cloud systems designed for modern construction workflows.',
  heroImage:
    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop',
  heroCtaPrimary: 'Book Free IT Assessment',
  heroCtaSecondary: 'Explore Services',

  trustHeadline: 'Trusted by construction leaders.',
  trustSubtext:
    'Reliable infrastructure, proven security, and operational continuity for field teams.',
  trustStats: [
    {
      value: '15+',
      label: 'Years Experience',
    },
    {
      value: '200+',
      label: 'Clients Supported',
    },
    {
      value: '5',
      label: 'Industry Verticals',
    },
  ],

  painCards: [
    {
      title: 'Remote site connectivity failures',
      body:
        'Dropped internet across job sites delays RFIs, approvals, and field communication. We deploy stable infrastructure built for remote operations.',
    },
    {
      title: 'Ransomware exposure',
      body:
        'Construction firms are increasingly targeted by ransomware due to project files and subcontractor data. We secure endpoints and enforce modern security standards.',
    },
    {
      title: 'Disconnected project systems',
      body:
        'When Procore, Autodesk, and Microsoft 365 do not communicate efficiently, teams waste time and duplicate work. We unify workflows into a single connected ecosystem.',
    },
  ],

  complianceItems: [
    'WorkSafe BC',
    'PIPEDA',
    'Procore',
    'Autodesk',
    'Microsoft 365',
  ],

  caseStudy: {
    eyebrow: 'Case Study',
    headline:
      'How one builder reduced IT downtime by 60% in 90 days.',
    description:
      'Jenco IT Solutions modernized infrastructure, secured remote job-site connectivity, and unified project systems across multiple active construction sites.',
    stats: [
      {
        value: '60%',
        label: 'Less Downtime',
      },
      {
        value: '24/7',
        label: 'Monitoring',
      },
      {
        value: '90 days',
        label: 'Migration Timeline',
      },
    ],
  },

  faqHeadline: 'Questions construction firms ask us.',
  faqs: [
    {
      question: 'Do you support Procore environments?',
      answer:
        'Yes. We support Procore integrations, access management, and infrastructure optimization.',
    },
    {
      question: 'Can you support remote job sites?',
      answer:
        'Absolutely. We design reliable connectivity systems for temporary and remote locations.',
    },
    {
      question: 'Do you provide cybersecurity services?',
      answer:
        'Yes. We provide endpoint protection, MFA, monitoring, and security hardening.',
    },
    {
      question: 'Can systems scale with company growth?',
      answer:
        'Yes. All infrastructure is designed to scale alongside operational growth.',
    },
    {
      question: 'Can you improve field collaboration?',
      answer:
        'Yes. We reduce administrative friction by connecting project tools and communications in one secure environment.',
    },
  ],

  finalCtaHeadline: 'Ready to modernize your construction IT?',
  finalCtaText:
    'Book a free assessment and get a clear plan for secure, connected project delivery.',
  finalCtaPrimary: 'Book Free IT Assessment',
  finalCtaSecondary: 'Explore Services',
};
