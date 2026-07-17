import { useSalon } from '../context/SalonContext.jsx';
import { PageHero, Reveal, RevealGroup, RevealItem, SectionHead, ParallaxImg, Counter, CtaBand, BtnLink } from '../components/ui.jsx';
import { StylistCard } from '../components/cards.jsx';

const values = [
  { t: 'Craft Before Speed', d: 'No chair is double-booked. Ever. Your hour belongs to you and the artist working on you.' },
  { t: 'Honest Counsel', d: 'If a treatment will not serve you, we will say so — and suggest what will. Trust outlives tickets.' },
  { t: 'Quiet Luxury', d: 'No hard selling, no noise, no rush. Warm towels, warmer people, and rooms designed to lower your pulse.' },
  { t: 'Mastery, Maintained', d: 'Every artist trains 100+ hours a year. Techniques evolve; our standards only tighten.' },
];

export default function About() {
  const c = useSalon();
  return (
    <>
      <PageHero title="About the House" crumb={c.worldName} img={c.about.img1} note={c.about.text.slice(0, 130) + '…'} />

      <section className="section textured">
        <div className="container editorial-split">
          <div>
            <SectionHead eyebrow="Since 2012" title={c.about.title} text={c.about.text} />
            <Reveal dir="up">
              <ul className="check-list">
                {c.about.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal dir="up" delay={0.15}>
              <div className="sign-row">
                <span className="sig">{c.about.founder.split(' ')[0]}</span>
                <span className="who">
                  <b>{c.about.founder}</b>
                  <small>{c.about.founderRole}</small>
                </span>
              </div>
            </Reveal>
          </div>
          <div className="imgs">
            <ParallaxImg src={c.about.img2} className="main" speed={8} />
            <Reveal dir="scale" delay={0.2} className="float">
              <img src={c.about.img1} alt="" loading="lazy" />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section on-dark textured">
        <div className="container">
          <div className="stats-band">
            {c.stats.map((s) => (
              <Reveal dir="up" key={s.label} className="stat">
                <div className="num">
                  <Counter n={s.n} suffix={s.suffix} />
                </div>
                <div className="lbl">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section on-cream">
        <div className="container">
          <SectionHead center eyebrow="What We Believe" title="The House Rules" />
          <RevealGroup className="grid-2">
            {values.map((v, i) => (
              <RevealItem key={v.t}>
                <div className="card" style={{ padding: 'clamp(26px, 3vw, 40px)' }}>
                  <span className="svc-idx" style={{ fontFamily: 'Marcellus, serif', color: 'var(--accent)', letterSpacing: 2 }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="display h-md" style={{ marginTop: 10 }}>
                    {v.t}
                  </h3>
                  <p style={{ marginTop: 12 }}>{v.d}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            center
            eyebrow="The Seniors"
            title="Led by Obsessives"
            text="The people who set the standard, train the floor and still take clients every week."
          />
          <RevealGroup className="grid-4">
            {c.stylists.map((st) => (
              <RevealItem key={st.name}>
                <StylistCard st={st} />
              </RevealItem>
            ))}
          </RevealGroup>
          <Reveal dir="up" style={{ textAlign: 'center', marginTop: 50 }}>
            <BtnLink to={`${c.base}/stylists`} variant="outline">
              Meet the Full Team <span className="arr">→</span>
            </BtnLink>
          </Reveal>
        </div>
      </section>

      <CtaBand img={c.about.img2} title="Experience the House Yourself" btnTo={`${c.base}/booking`} />
    </>
  );
}
