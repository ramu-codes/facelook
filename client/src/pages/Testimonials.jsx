import { useSalon } from '../context/SalonContext.jsx';
import { PageHero, SectionHead, Reveal, RevealGroup, RevealItem, Counter, CtaBand } from '../components/ui.jsx';
import { TestimonialCard } from '../components/cards.jsx';

export default function Testimonials() {
  const c = useSalon();
  return (
    <>
      <PageHero
        title="Client Stories"
        crumb={c.worldName}
        img={c.testimonials[0].img}
        note="Unedited words from verified visits. We publish the hard ones too — ask the desk."
      />

      <section className="section textured">
        <div className="container">
          <SectionHead eyebrow="In Their Words" title="Why They Keep Coming Back" />
          <RevealGroup className="grid-2">
            {c.testimonials.map((t) => (
              <RevealItem key={t.who}>
                <TestimonialCard t={t} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="section on-dark textured">
        <div className="container">
          <div className="stats-band">
            <Reveal dir="up" className="stat">
              <div className="num">
                <Counter n={4} />
                <span style={{ fontSize: '0.5em' }}>.9</span>
              </div>
              <div className="lbl">Average Rating</div>
            </Reveal>
            <Reveal dir="up" className="stat">
              <div className="num">
                <Counter n={12} suffix="K" />
              </div>
              <div className="lbl">Verified Reviews</div>
            </Reveal>
            <Reveal dir="up" className="stat">
              <div className="num">
                <Counter n={92} suffix="%" />
              </div>
              <div className="lbl">Return Within 60 Days</div>
            </Reveal>
            <Reveal dir="up" className="stat">
              <div className="num">
                <Counter n={98} suffix="%" />
              </div>
              <div className="lbl">Would Recommend</div>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand img={c.testimonials[1].img} title="Come Write Your Own Review" btnTo={`${c.base}/booking`} />
    </>
  );
}
