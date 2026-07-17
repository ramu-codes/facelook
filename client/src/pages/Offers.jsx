import { useSalon } from '../context/SalonContext.jsx';
import { PageHero, SectionHead, Reveal, RevealGroup, RevealItem, CtaBand, BtnLink } from '../components/ui.jsx';
import { OfferCard } from '../components/cards.jsx';

export default function Offers() {
  const c = useSalon();
  return (
    <>
      <PageHero
        title="Offers & Gift Cards"
        crumb={c.worldName}
        img={c.offers[0].img}
        note="Quiet generosity, no fine-print traps. Codes apply at booking or at the desk."
      />

      <section className="section textured">
        <div className="container">
          <SectionHead eyebrow="Live Now" title="This Season’s Privileges" />
          <RevealGroup className="grid-2">
            {c.offers.map((o) => (
              <RevealItem key={o.code}>
                <OfferCard o={o} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="section on-cream">
        <div className="container">
          <Reveal dir="up">
            <div className="gift-band">
              <div>
                <h3>Gift Cards, From ₹1,000</h3>
                <p>
                  Redeemable across both worlds and all nine locations. Delivered instantly by email or as a pressed card in our
                  signature envelope.
                </p>
                <div style={{ marginTop: 24 }}>
                  <BtnLink to={`${c.base}/contact`} variant="solid">
                    Buy a Gift Card
                  </BtnLink>
                </div>
              </div>
              <div className="art">
                <div className="card-mock">
                  FACELOOK
                  <small>Gift Card · You Choose</small>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand img={c.offers[1].img} title="A Good Offer Is Just a Reason to Begin" btnTo={`${c.base}/booking`} />
    </>
  );
}
