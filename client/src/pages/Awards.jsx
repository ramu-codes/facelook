import { useSalon } from '../context/SalonContext.jsx';
import { PageHero, SectionHead, Reveal, CtaBand } from '../components/ui.jsx';

export default function Awards() {
  const c = useSalon();
  return (
    <>
      <PageHero
        title="Awards & Press"
        crumb={c.worldName}
        img={c.about.img2}
        note="Recognition we are proud of — and the standard it obliges us to keep."
      />

      <section className="section textured">
        <div className="container" style={{ maxWidth: 980 }}>
          <SectionHead eyebrow="The Shelf" title="Years of Recognition" />
          {c.awards.map((a) => (
            <Reveal dir="up" key={a.title}>
              <div className="award-row">
                <span className="yr">{a.yr}</span>
                <div>
                  <h3>{a.title}</h3>
                  <p>{a.desc}</p>
                </div>
                <span className="org">{a.org}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section on-cream">
        <div className="container" style={{ textAlign: 'center', maxWidth: 760 }}>
          <SectionHead
            center
            eyebrow="As Featured In"
            title="Vogue · GQ · Elle · Architectural Digest"
            text="Our ateliers and artists appear regularly in national beauty and design press. For press enquiries, write to press@facelook.in."
          />
        </div>
      </section>

      <CtaBand img={c.about.img1} title="Award-Winning Hands. Your Head." btnTo={`${c.base}/booking`} />
    </>
  );
}
