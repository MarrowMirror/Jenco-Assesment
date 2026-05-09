import { IndustryData } from '../../data/types';

interface Props {
  headline: string;
  subtext: string;
  stats: IndustryData['trustStats'];
}

export default function TrustStrip({ headline, subtext, stats }: Props) {
  return (
    <section className="trust-strip section">
      <div className="container trust-strip__inner fade-up">
        <div className="trust-strip__copy">
          <p className="section-label">Trusted</p>
          <h2 className="text-display-lg">{headline}</h2>
          <p className="text-body-lg">{subtext}</p>
        </div>

        <div className="trust-strip__grid">
          {stats.map((stat) => (
            <div className="trust-card card" key={stat.label}>
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
