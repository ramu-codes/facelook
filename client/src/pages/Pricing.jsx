import { useSalon } from '../context/SalonContext.jsx';
import { PageHero, SectionHead, Reveal, CtaBand, BtnLink } from '../components/ui.jsx';

export default function Pricing() {
  const c = useSalon();
  return (
    <>
      <PageHero
        title="Pricing"
        crumb={c.worldName}
        img={c.services[2].img}
        note="Transparent, inclusive of taxes, and honoured exactly as printed. Members save 10–20% on everything below."
      />

      <section className="section textured">
        <div className="container" style={{ maxWidth: 900 }}>
          {c.pricing.map((group, gi) => (
            <div key={group.group} style={{ marginBottom: gi === c.pricing.length - 1 ? 0 : 70 }}>
              <SectionHead eyebrow={`0${gi + 1}`} title={group.group} />
              <Reveal dir="up">
                <div>
                  {group.rows.map((r) => (
                    <div className="price-row" key={r.name}>
                      <div>
                        <span className="name">{r.name}</span>
                        <span className="note">{r.note}</span>
                      </div>
                      <span className="dots" />
                      <span className="amount">{r.price}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          ))}
          <Reveal dir="up" style={{ marginTop: 60, textAlign: 'center' }}>
            <p className="body-mute" style={{ marginBottom: 24 }}>
              Membership unlocks 10–20% off every line above, plus priority booking.
            </p>
            <BtnLink to={`${c.base}/membership`} variant="outline">
              View Membership Plans <span className="arr">→</span>
            </BtnLink>
          </Reveal>
        </div>
      </section>

      <CtaBand img={c.services[0].img} title="Good Work Costs Less Than Fixing Bad Work" btnTo={`${c.base}/booking`} />
    </>
  );
}
