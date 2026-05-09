import { IndustryData } from '../types';

export const manufacturingData: IndustryData = {
  slug: 'manufacturing',
  label: 'Manufacturing',

  metaTitle: 'Manufacturing IT Services | Jenco IT Solutions',
  metaDescription:
    'IT services for manufacturers, including cloud, security, and operational system integration.',

  heroEyebrow: 'Manufacturing IT with production-first reliability',
  heroHeadline: 'Keep your assembly lines running with secure IT.',
  heroSubtext:
    'Jenco IT Solutions supports manufacturers with systems designed for automation, uptime, and connected supply chain operations.',
  heroImage:
    'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop',
  heroCtaPrimary: 'Book Free IT Assessment',
  heroCtaSecondary: 'Explore Services',

  trustHeadline: 'Industrial IT that minimizes downtime.',
  trustSubtext:
    'Secure connectivity, monitoring, and cloud integration for modern plants.',
  trustStats: [
    {
      value: '17+',
      label: 'Production clients',
    },
    {
      value: '98%',
      label: 'System reliability',
    },
    {
      value: '40%',
      label: 'Faster deployment',
    },
  ],

  painCards: [
    {
      title: 'IoT security exposure',
      body:
        'Manufacturers face risk from unprotected OT devices. We segment networks and harden endpoints for industrial systems.',
    },
    {
      title: 'Cloud migration delays',
      body:
        'Cloud transitions are complex for production data. We build a phased, low-risk path to modern infrastructure.',
    },
    {
      title: 'Disconnected plant systems',
      body:
        'ERP, MES, and collaboration tools often stay siloed. We connect operations data to reduce rework and improve visibility.',
    },
  ],

  complianceItems: [
    'Microsoft 365',
    'ISO 27001',
    'Azure',
    'Operational security',
    'Cloud-ready IT',
  ],

  caseStudy: {
    eyebrow: 'Case Study',
    headline:
      'How a manufacturer modernized operations and reached faster delivery cycles.',
    description:
      'We implemented secure cloud connectivity, monitoring, and collaboration systems that reduced machine downtime and improved handoff speed.',
    stats: [
      {
        value: '45%',
        label: 'Faster issue response',
      },
      {
        value: '3 weeks',
        label: 'Implementation',
      },
      {
        value: '87%',
        label: 'Operational visibility',
      },
    ],
  },

  faqHeadline: 'Manufacturing IT questions answered.',
  faqs: [
    {
      question: 'Can you integrate plant systems?',
      answer:
        'Yes. We help integrate ERP, MES, and collaboration platforms into a reliable IT foundation.',
    },
    {
      question: 'Do you support compliance programs?',
      answer:
        'Absolutely. We support security controls and audit readiness for manufacturing operations.',
    },
    {
      question: 'Can you support hybrid cloud?',
      answer:
        'Yes. We design hybrid environments that preserve control and speed up analytics.',
    },
    {
      question: 'Do you provide 24/7 monitoring?',
      answer:
        'Yes. We monitor systems and networks to avoid production-impacting incidents.',
    },
    {
      question: 'Can you upgrade legacy manufacturing systems?',
      answer:
        'Yes. We modernize legacy infrastructure without disrupting existing production flows.',
    },
  ],

  finalCtaHeadline: 'Ready to modernize manufacturing IT?',
  finalCtaText:
    'Book a free assessment and get a plan for secure, resilient factory systems.',
  finalCtaPrimary: 'Book Free IT Assessment',
  finalCtaSecondary: 'Explore Services',
};
