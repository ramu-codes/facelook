import { useSalon } from '../context/SalonContext.jsx';
import { PageHero, SectionHead, Reveal, RevealGroup, RevealItem, CtaBand, BtnLink } from '../components/ui.jsx';
import { ServiceCard } from '../components/cards.jsx';

export default function Services() {
  const c = useSalon();
  return (
    <>
      <PageHero
        title="Services"
        crumb={c.worldName}
        img={c.services[0].img}
        note="Every service begins with a consultation and ends with a finish worthy of the mirror. Prices are starting points — your artist will confirm before beginning."
      />

      <section className="section textured">
        <div className="container">
          <SectionHead
            eyebrow="The Menu"
            title={c.key === 'men' ? 'Grooming, Done Properly' : 'Rituals for Hair, Skin & Soul'}
            text="Tap any ritual to reserve it. Popular services are marked by our regulars, not by us."
          />
          <RevealGroup className="grid-3" stagger={0.08}>
            {c.services.map((s, i) => (
              <RevealItem key={s.slug}>
                <ServiceCard svc={s} idx={i} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="section on-dark textured">
        <div className="container" style={{ textAlign: 'center' }}>
          <SectionHead
            center
            dark
            eyebrow="Not Sure Where to Start?"
            title="Book a Free 15-Minute Consultation"
            text="Sit with a senior artist, talk through your hair, skin and routine — then decide. No charge, no obligation."
          />
          <Reveal dir="up">
            <BtnLink to={`${c.base}/booking`} variant="solid">
              Reserve a Consultation <span className="arr">→</span>
            </BtnLink>
          </Reveal>
        </div>
      </section>

      <CtaBand img={c.services[1].img} title="Take the First Step. The Chair Does the Rest." btnTo={`${c.base}/booking`} />
    </>
  );
}
