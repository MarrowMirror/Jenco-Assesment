interface Props {
  items: string[];
}

export default function ComplianceStrip({ items }: Props) {
  return (
    <section className="compliance-strip">
      <div className="container compliance-strip__inner fade-up">
        {items.map((item) => (
          <div className="compliance-pill" key={item}>
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
