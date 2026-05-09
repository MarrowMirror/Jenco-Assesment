import { IndustryData } from '../../data/types';

interface Props {
  data: IndustryData;
  onBookClick: () => void;
}

export default function Hero({ data, onBookClick }: Props) {
  return (
    <section className="hero section" id="hero">
      <div className="hero__video-bg">
        <video
          autoPlay
          muted
          loop
          playsInline
          src="/bg2.mp4"
          className="hero__video"
        />
        <div className="hero__overlay"></div>
      </div>

      <div className="container hero__grid">
        <div className="hero__content fade-up">
          <p className="eyebrow">{data.heroEyebrow}</p>
          <h1 className="text-display-xl">{data.heroHeadline}</h1>
          <p className="text-body-lg hero__copy">{data.heroSubtext}</p>

          <div className="hero__actions">
            <button type="button" className="btn-primary" onClick={onBookClick}>
              {data.heroCtaPrimary}
            </button>
            <a href="#services" className="btn-secondary">
              {data.heroCtaSecondary}
            </a>
          </div>
        </div>

        <div className="hero__image fade-up">
          <img src={data.heroImage} alt={`${data.label} team`} loading="eager" />
          <div className="hero__badge">{data.label} IT</div>
        </div>
      </div>
    </section>
  );
}
