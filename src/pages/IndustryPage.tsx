import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import Nav from '../components/layout/Nav';
import Footer from '../components/layout/Footer';
import BookingModal from '../components/ui/BookingModal';

import Hero from '../components/sections/Hero';
import TrustStrip from '../components/sections/TrustStrip';
import PainCards from '../components/sections/PainCards';
import ComplianceStrip from '../components/sections/ComplianceStrip';
import CaseStudy from '../components/sections/CaseStudy';
import FAQ from '../components/sections/FAQ';
import FinalCTA from '../components/sections/FinalCTA';

import { industries } from '../data/industries';
import { useTheme } from '../context/ThemeContext';
import useReveal from '../hooks/useReveal';

export default function IndustryPage() {
  const { industry = 'construction' } = useParams();
  const { setIndustry } = useTheme();

  const normalized = industry?.toLowerCase() ?? 'construction';

  const aliasMap: Record<string, string> = {
    realestate: 'real-estate',
  };

  const key = aliasMap[normalized] ?? normalized;

  const data =
    industries[key as keyof typeof industries] ||
    industries.construction;

  const [modalOpen, setModalOpen] = useState(false);

  useReveal();

  useEffect(() => {
    setIndustry(key);
  }, [key, setIndustry]);

  return (
    <>
      <Helmet>
        <title>{data.metaTitle}</title>

        <meta
          name="description"
          content={data.metaDescription}
        />
      </Helmet>

      <Nav onBookClick={() => setModalOpen(true)} />

      <main>
        <Hero data={data} onBookClick={() => setModalOpen(true)} />

        <TrustStrip
          headline={data.trustHeadline}
          subtext={data.trustSubtext}
          stats={data.trustStats}
        />

        <PainCards cards={data.painCards} />

        <ComplianceStrip items={data.complianceItems} />

        <CaseStudy caseStudy={data.caseStudy} />

        <FAQ faqs={data.faqs} headline={data.faqHeadline} />

        <FinalCTA data={data} onBookClick={() => setModalOpen(true)} />
      </main>

      <Footer onBookClick={() => setModalOpen(true)} />

      <BookingModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        industryLabel={data.label}
      />
    </>
  );
}
