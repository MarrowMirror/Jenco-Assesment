import { IndustryData } from '../../data/types';

interface Props {
  data: IndustryData;
  onBookClick: () => void;
}

export default function FinalCTA({ data, onBookClick }: Props) {
  return (
    <section className="final-cta section" id="contact">
      <div className="container final-cta__content fade-up">
        <p className="section-label">Ready To Modernize?</p>
        <h2 className="text-display-lg">{data.finalCtaHeadline}</h2>
        <p className="text-body-lg">{data.finalCtaText}</p>
        <div className="final-cta__actions">
          <button type="button" className="btn-primary" onClick={onBookClick}>
            {data.finalCtaPrimary}
          </button>
          <a href="#services" className="btn-secondary">
            {data.finalCtaSecondary}
          </a>
        </div>
      </div>
    </section>
  );
}
