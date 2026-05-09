import { IndustryData } from '../../data/types';

interface Props {
  cards: IndustryData['painCards'];
}

export default function PainCards({ cards }: Props) {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-heading fade-up">
          <p className="section-label">
            Construction IT Problems
          </p>

          <h2 className="text-display-lg">
            We solve the operational bottlenecks other IT firms ignore.
          </h2>
        </div>

        <div className="pain-grid">
          {cards.map((card) => (
            <article className="card pain-card fade-up" key={card.title}>
              <div className="pain-card__number">
                01
              </div>

              <h3>{card.title}</h3>

              <p className="text-body-md">
                {card.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}