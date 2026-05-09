import { useState } from 'react';

import { Helmet } from 'react-helmet-async';

import { IndustryData } from '../../data/types';

interface Props {
  headline: string;
  faqs: IndustryData['faqs'];
}

export default function FAQ({ headline, faqs }: Props) {
  const [open, setOpen] = useState<number | null>(0);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="section" id="faq">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>

      <div className="container faq-layout">
        <div className="fade-up">
          <p className="section-label">FAQ</p>
          <h2 className="text-display-lg">{headline}</h2>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              className="faq-item fade-up"
              key={faq.question}
              onClick={() => setOpen(open === index ? null : index)}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  setOpen(open === index ? null : index);
                }
              }}
            >
              <div className="faq-button" aria-expanded={open === index}>
                {faq.question}
              </div>

              {open === index && (
                <p className="text-body-md faq-answer">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
