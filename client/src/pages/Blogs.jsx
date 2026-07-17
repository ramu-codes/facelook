import { useSalon } from '../context/SalonContext.jsx';
import { PageHero, SectionHead, Reveal, RevealGroup, RevealItem, CtaBand } from '../components/ui.jsx';
import { BlogCard } from '../components/cards.jsx';

export default function Blogs() {
  const c = useSalon();
  return (
    <>
      <PageHero
        title="The Journal"
        crumb={c.worldName}
        img={c.blogs[0].img}
        note="Notes from the chair — written by our artists, not a content agency."
      />

      <section className="section textured">
        <div className="container">
          <SectionHead eyebrow="Latest" title="Craft, Explained Slowly" />
          <RevealGroup className="grid-3">
            {c.blogs.map((b) => (
              <RevealItem key={b.title}>
                <BlogCard b={b} />
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal dir="up" style={{ marginTop: 60 }}>
            <div className="gift-band">
              <div>
                <h3>The Sunday Edit</h3>
                <p>One email a week — a technique explained, a product verdict, and the trend we are politely declining.</p>
              </div>
              <div>
                <div className="newsletter" style={{ border: '1px solid var(--line-dark)', borderRadius: 'var(--radius-btn)', display: 'flex', overflow: 'hidden', position: 'relative' }}>
                  <input placeholder="you@example.com" aria-label="Email" style={{ flex: 1, background: 'transparent', border: 'none', outline: 'none', padding: '16px 20px', color: '#fff', fontFamily: 'inherit' }} />
                  <button style={{ background: 'var(--accent)', color: 'var(--accent-ink)', padding: '0 26px', fontSize: 11, fontWeight: 800, letterSpacing: 2, textTransform: 'uppercase' }}>
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand img={c.blogs[1].img} title="Enough Reading. Book the Chair." btnTo={`${c.base}/booking`} />
    </>
  );
}
