import { useSalon } from '../context/SalonContext.jsx';
import { PageHero, SectionHead, Reveal, RevealGroup, RevealItem, CtaBand, BtnLink } from '../components/ui.jsx';

const loyalty = [
  { t: 'Earn on Every Ritual', d: '1 point per ₹100 spent — services, products, gift cards, everything.' },
  { t: 'Birthday Privileges', d: 'A complimentary signature ritual in your birthday week, every year.' },
  { t: 'Referral Rewards', d: 'Send a friend; you both earn double points on your next visit.' },
  { t: 'Festival Unlocks', d: 'Members see festive packages 48 hours before anyone else.' },
];

export default function Membership() {
  const c = useSalon();
  return (
    <>
      <PageHero
        title="Membership"
        crumb={c.worldName}
        img={c.about.img1}
        note="For people who treat grooming as a standing appointment, not an emergency. Cancel anytime; keep your points."
      />

      <section className="section textured">
        <div className="container">
          <SectionHead center eyebrow="The Plans" title="Choose Your Standing" />
          <RevealGroup className="grid-3">
            {c.memberships.map((m) => (
              <RevealItem key={m.name}>
                <div className={`member-card ${m.featured ? 'featured' : ''}`}>
                  {m.tag ? <span className="plan-tag">{m.tag}</span> : null}
                  <h3>{m.name}</h3>
                  <div className="price">
                    ₹{m.price.toLocaleString('en-IN')}
                    <small>{m.per}</small>
                  </div>
                  <ul>
                    {m.perks.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                  <BtnLink to={`${c.base}/booking`} variant={m.featured ? 'solid' : 'outline'}>
                    Join {m.name}
                  </BtnLink>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="section on-cream">
        <div className="container">
          <SectionHead
            center
            eyebrow="Loyalty Program"
            title={c.key === 'men' ? 'The Gentleman’s Ledger' : 'The Petal Program'}
            text="Every plan includes our loyalty program. Points never expire while your membership is active."
          />
          <RevealGroup className="grid-4">
            {loyalty.map((l, i) => (
              <RevealItem key={l.t}>
                <div className="card" style={{ padding: 30, height: '100%' }}>
                  <span style={{ fontFamily: 'Marcellus, serif', fontSize: 26, color: 'var(--accent)' }}>{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="display h-sm" style={{ marginTop: 12 }}>
                    {l.t}
                  </h3>
                  <p style={{ marginTop: 10, fontSize: 14 }}>{l.d}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal dir="up">
            <div className="gift-band">
              <div>
                <h3>Gift a Membership</h3>
                <p>Three, six or twelve months of standing appointments — the rare gift that gets used every single month.</p>
                <div style={{ marginTop: 24 }}>
                  <BtnLink to={`${c.base}/contact`} variant="solid">
                    Talk to Concierge
                  </BtnLink>
                </div>
              </div>
              <div className="art">
                <div className="card-mock">
                  FACELOOK
                  <small>Membership · 6 Months</small>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand img={c.about.img2} title="Stop Booking. Start Belonging." btnTo={`${c.base}/booking`} />
    </>
  );
}
