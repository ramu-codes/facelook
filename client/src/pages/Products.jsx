import { useSalon } from '../context/SalonContext.jsx';
import { PageHero, SectionHead, Reveal, RevealGroup, RevealItem, CtaBand, BtnLink } from '../components/ui.jsx';
import { ProductCard } from '../components/cards.jsx';

export default function Products() {
  const c = useSalon();
  return (
    <>
      <PageHero
        title="The Shop"
        crumb={c.worldName}
        img={c.products[0].img}
        note="The exact products our artists use on you — take the ritual home. Sponsored placements are always labelled."
      />

      <section className="section textured">
        <div className="container">
          <SectionHead
            eyebrow="Take It Home"
            title="Curated by the House"
            text="We stock only what we use on the floor. If it is on this shelf, an artist fought for it."
          />
          <RevealGroup className="grid-3">
            {c.products.map((p) => (
              <RevealItem key={p.name}>
                <ProductCard p={p} />
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
            eyebrow="Members Save More"
            title="15–20% Off Every Product, Every Day"
            text="Membership pricing applies automatically at checkout — in-house or from your phone."
          />
          <Reveal dir="up">
            <BtnLink to={`${c.base}/membership`} variant="solid">
              Explore Membership <span className="arr">→</span>
            </BtnLink>
          </Reveal>
        </div>
      </section>

      <CtaBand img={c.products[1].img} title="Ask Your Artist What Your Hair Actually Needs" btnTo={`${c.base}/booking`} />
    </>
  );
}
