import { IndustryData } from '../../data/types';

interface Props {
  caseStudy: IndustryData['caseStudy'];
}

export default function CaseStudy({ caseStudy }: Props) {
  return (
    <section className="section case-study-section" id="case-study">
      <div className="container case-study__grid fade-up">
        <article className="case-study card">
          <div className="case-study__copy">
            <p className="section-label">{caseStudy.eyebrow}</p>
            <h2 className="text-display-lg">{caseStudy.headline}</h2>
            <p className="text-body-lg">{caseStudy.description}</p>
          </div>

          <div className="case-study__stats">
            {caseStudy.stats.map((stat) => (
              <div className="case-study__stat" key={stat.label}>
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
