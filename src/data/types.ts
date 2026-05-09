export interface TrustStat {
  value: string;
  label: string;
}

export interface PainCard {
  title: string;
  body: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface CaseStudyData {
  eyebrow: string;
  headline: string;
  description: string;
  stats: TrustStat[];
}

export interface IndustryData {
  slug: string;
  label: string;

  metaTitle: string;
  metaDescription: string;

  heroEyebrow: string;
  heroHeadline: string;
  heroSubtext: string;
  heroImage: string;
  heroCtaPrimary: string;
  heroCtaSecondary: string;

  trustHeadline: string;
  trustSubtext: string;
  trustStats: TrustStat[];

  painCards: PainCard[];

  complianceItems: string[];

  caseStudy: CaseStudyData;

  faqHeadline: string;
  faqs: FAQ[];

  finalCtaHeadline: string;
  finalCtaText: string;
  finalCtaPrimary: string;
  finalCtaSecondary: string;
}
