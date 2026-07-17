import { useSalon } from '../context/SalonContext.jsx';
import { PageHero, SectionHead, Reveal, RevealGroup, RevealItem, CtaBand } from '../components/ui.jsx';
import { StylistCard } from '../components/cards.jsx';

export default function Stylists() {
  const c = useSalon();
  const featured = c.stylists.find((s) => s.featured) || c.stylists[0];
  return (
    <>
      <PageHero
        title={c.key === 'men' ? 'Master Barbers' : 'Master Artists'}
        crumb={c.worldName}
        img={featured.img}
        note="Recruited for craft, retained for character. Request any artist by name when you book."
      />

      <section className="section textured">
        <div className="container editorial-split">
          <div className="imgs">
            <Reveal dir="scale" className="main img-frame" style={{ aspectRatio: '4 / 4.8' }}>
              <img src={featured.img} alt={featured.name} />
            </Reveal>
          </div>
          <div>
            <SectionHead
              eyebrow="Featured This Month"
              title={featured.name}
              text={`${featured.role} — ${featured.exp} behind the chair. Specialty: ${featured.specialty}. The most requested pair of hands in the house; book two weeks ahead for weekends.`}
            />
            <Reveal dir="up">
              <div className="chip-row">
                {featured.specialty.split(', ').map((s) => (
                  <span className="chip" key={s}>
                    {s}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section on-cream">
        <div className="container">
          <SectionHead center eyebrow="The Floor" title="Every Artist of the House" />
          <RevealGroup className="grid-4">
            {c.stylists.map((st) => (
              <RevealItem key={st.name}>
                <StylistCard st={st} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <CtaBand img={c.about.img2} title="Found Your Artist? Claim Their Chair." btnTo={`${c.base}/booking`} />
    </>
  );
}
