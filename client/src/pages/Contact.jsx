import { useState } from 'react';
import { useSalon } from '../context/SalonContext.jsx';
import { branches } from '../data/shared.js';
import { PageHero, SectionHead, Reveal, RevealGroup, RevealItem, CtaBand } from '../components/ui.jsx';

export default function Contact() {
  const c = useSalon();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const submit = async (e) => {
    e.preventDefault();
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, world: c.key }),
      });
    } catch (err) {
      /* offline is fine for demo */
    }
    setSent(true);
  };

  return (
    <>
      <PageHero
        title="Contact"
        crumb={c.worldName}
        img={c.about.img2}
        note="A human answers within business hours — usually within the hour."
      />

      <section className="section textured">
        <div className="container grid-2" style={{ alignItems: 'start' }}>
          <div>
            <SectionHead eyebrow="Write to Us" title="Questions, Requests, Ideas" />
            {sent ? (
              <Reveal dir="scale">
                <div className="confirm-card" style={{ textAlign: 'center' }}>
                  <div className="success-mark">✓</div>
                  <h3 className="display h-md">Message Received</h3>
                  <p style={{ marginTop: 12 }}>
                    Thank you, {form.name || 'friend'} — the concierge will write back to {form.email || 'you'} shortly.
                  </p>
                </div>
              </Reveal>
            ) : (
              <Reveal dir="up">
                <form onSubmit={submit} style={{ display: 'grid', gap: 20 }}>
                  <div className="grid-2" style={{ gap: 20 }}>
                    <div className="field">
                      <label>Name</label>
                      <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" />
                    </div>
                    <div className="field">
                      <label>Phone</label>
                      <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+91" />
                    </div>
                  </div>
                  <div className="field">
                    <label>Email</label>
                    <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" />
                  </div>
                  <div className="field">
                    <label>Message</label>
                    <textarea rows={5} required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="How can the house help?" />
                  </div>
                  <button className="btn btn-solid" type="submit" style={{ justifySelf: 'start' }}>
                    Send Message <span className="arr">→</span>
                  </button>
                </form>
              </Reveal>
            )}
          </div>

          <div>
            <SectionHead eyebrow="Find Us" title="Nine Doors, Four Cities" />
            <RevealGroup className="grid-2" stagger={0.08}>
              {branches.map((b) => (
                <RevealItem key={b.id}>
                  <div className="branch-card">
                    <h3>
                      {b.name} {b.near ? <span className="near">Nearest</span> : null}
                    </h3>
                    <p>{b.address}</p>
                    <p style={{ marginTop: 6 }}>{b.phone}</p>
                    <div className="hours">{b.hours}</div>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </section>

      <section className="section on-cream" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal dir="up">
            <div className="map-band">
              <div style={{ textAlign: 'center' }}>
                <div className="eyebrow no-line" style={{ justifyContent: 'center' }}>
                  Map
                </div>
                <p style={{ marginTop: 10, maxWidth: 420 }}>
                  Drop your Google Maps embed here in production — <code>&lt;iframe src="maps.google.com/…" /&gt;</code>
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand img={c.about.img1} title="Or Skip the Email. Book the Chair." btnTo={`${c.base}/booking`} />
    </>
  );
}
