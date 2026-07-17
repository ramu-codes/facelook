import { useState } from 'react';
import { useSalon } from '../context/SalonContext.jsx';
import { PageHero, SectionHead, Reveal, CtaBand, BtnLink } from '../components/ui.jsx';
import { FaqItem } from '../components/cards.jsx';

export default function Faqs() {
  const c = useSalon();
  const [open, setOpen] = useState(0);
  return (
    <>
      <PageHero
        title="FAQs"
        crumb={c.worldName}
        img={c.about.img1}
        note="Straight answers to the questions we hear most. Anything else — the concierge line is always open."
      />

      <section className="section textured">
        <div className="container" style={{ maxWidth: 860 }}>
          <SectionHead eyebrow="Good Questions" title="Before You Visit" />
          {c.faqs.map((f, i) => (
            <Reveal dir="up" key={f.q}>
              <FaqItem f={f} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
            </Reveal>
          ))}
          <Reveal dir="up" style={{ marginTop: 50, textAlign: 'center' }}>
            <p className="body-mute" style={{ marginBottom: 20 }}>
              Still curious? Ask a human.
            </p>
            <BtnLink to={`${c.base}/contact`} variant="outline">
              Contact the Concierge <span className="arr">→</span>
            </BtnLink>
          </Reveal>
        </div>
      </section>

      <CtaBand img={c.about.img2} title="The Best Answers Happen in the Chair" btnTo={`${c.base}/booking`} />
    </>
  );
}
