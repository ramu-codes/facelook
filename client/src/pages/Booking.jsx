import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useSearchParams, Link } from 'react-router-dom';
import { useSalon } from '../context/SalonContext.jsx';
import { branches, timeSlots, unavailableFor } from '../data/shared.js';
import { PageHero, Reveal } from '../components/ui.jsx';

const STEPS = ['World', 'Branch', 'Service', 'Stylist', 'Date', 'Time', 'Confirm'];

const stepAnim = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, x: -60, transition: { duration: 0.35 } },
};

function nextDays(n = 14) {
  const out = [];
  const d = new Date();
  for (let i = 1; i <= n; i++) {
    const dd = new Date(d);
    dd.setDate(d.getDate() + i);
    out.push({
      iso: dd.toISOString().slice(0, 10),
      label: dd.toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' }),
      closed: dd.getDay() === 1, // Mondays closed
    });
  }
  return out;
}

export default function Booking() {
  const c = useSalon();
  const [params] = useSearchParams();
  const preService = params.get('service');

  const [step, setStep] = useState(0);
  const [sel, setSel] = useState({
    world: c.key,
    branch: null,
    service: preService ? c.services.find((s) => s.slug === preService) || null : null,
    stylist: null,
    date: null,
    time: null,
    name: '',
    phone: '',
  });
  const [status, setStatus] = useState('idle'); // idle | sending | done
  const [ref, setRef] = useState('');

  const days = useMemo(() => nextDays(14), []);
  const blocked = useMemo(() => (sel.date ? unavailableFor(sel.date) : new Set()), [sel.date]);

  const canNext = [
    !!sel.world,
    !!sel.branch,
    !!sel.service,
    !!sel.stylist,
    !!sel.date,
    !!sel.time,
    sel.name.trim().length > 1 && sel.phone.trim().length >= 10,
  ][step];

  const confirm = async () => {
    setStatus('sending');
    const booking = {
      world: sel.world,
      branch: sel.branch.name,
      service: sel.service.name,
      stylist: sel.stylist.name,
      date: sel.date,
      time: sel.time,
      name: sel.name,
      phone: sel.phone,
      price: sel.service.price,
    };
    let reference = 'FL-' + Math.random().toString(36).slice(2, 8).toUpperCase();
    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(booking),
      });
      if (res.ok) {
        const data = await res.json();
        reference = data.reference || reference;
      }
    } catch (err) {
      /* API offline — demo confirmation still shown */
    }
    setRef(reference);
    setStatus('done');
  };

  return (
    <>
      <PageHero
        title="Book Your Ritual"
        crumb={c.worldName}
        img={c.heroImage}
        note="Seven small steps. Your slot is held for you the moment you confirm."
      />

      <section className="section textured">
        <div className="container booking-shell">
          {/* progress */}
          <Reveal dir="up">
            <div className="book-progress">
              {STEPS.map((s, i) => (
                <div className={`p-step ${i < step ? 'done' : ''} ${i === step ? 'active' : ''}`} key={s}>
                  <div className="p-dot">
                    {i < step ? '✓' : i + 1}
                    <span className="p-lbl">{s}</span>
                  </div>
                  {i < STEPS.length - 1 ? (
                    <div className="p-line">
                      <i />
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </Reveal>

          <AnimatePresence mode="wait">
            {status === 'done' ? (
              <motion.div key="done" {...stepAnim}>
                <div className="confirm-card" style={{ textAlign: 'center' }}>
                  <div className="success-mark">✓</div>
                  <h3 className="display h-lg">See You Soon, {sel.name.split(' ')[0]}</h3>
                  <p style={{ marginTop: 14 }}>
                    Your ritual is reserved. A confirmation has been sent by SMS to {sel.phone}.
                  </p>
                  <div style={{ margin: '30px auto 0', maxWidth: 460, textAlign: 'left' }}>
                    <div className="row">
                      <span>Reference</span>
                      <b>{ref}</b>
                    </div>
                    <div className="row">
                      <span>Ritual</span>
                      <b>{sel.service.name}</b>
                    </div>
                    <div className="row">
                      <span>Artist</span>
                      <b>{sel.stylist.name}</b>
                    </div>
                    <div className="row">
                      <span>Where</span>
                      <b>
                        {sel.branch.name}, {sel.branch.city}
                      </b>
                    </div>
                    <div className="row">
                      <span>When</span>
                      <b>
                        {sel.date} · {sel.time}
                      </b>
                    </div>
                    <div className="row">
                      <span>Estimated</span>
                      <b>₹{sel.service.price.toLocaleString('en-IN')}</b>
                    </div>
                  </div>
                  <div style={{ marginTop: 34, display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Link className="btn btn-outline" to={c.base}>
                      Back to Home
                    </Link>
                    <Link className="btn btn-solid" to={`${c.base}/membership`}>
                      Save 15% With Membership
                    </Link>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div key={step} {...stepAnim}>
                {/* STEP 0 — world */}
                {step === 0 ? (
                  <div className="choice-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
                    {[
                      { k: 'women', t: 'Women’s Maison', d: 'Hair, skin, bridal, spa & nail rituals.' },
                      { k: 'men', t: 'Men’s Atelier', d: 'Cuts, shaves, beard work & grooming.' },
                    ].map((w) => (
                      <button
                        key={w.k}
                        className={`choice-card ${sel.world === w.k ? 'selected' : ''}`}
                        onClick={() => setSel({ ...sel, world: w.k })}
                      >
                        <b>{w.t}</b>
                        <small>{w.d}</small>
                        {sel.world === w.k && c.key !== w.k ? (
                          <small style={{ color: 'var(--accent-deep)', marginTop: 10 }}>
                            Tip: switch to the {w.k === 'men' ? "Men's" : "Women's"} world for its full menu — this booking will
                            still work.
                          </small>
                        ) : null}
                      </button>
                    ))}
                  </div>
                ) : null}

                {/* STEP 1 — branch */}
                {step === 1 ? (
                  <div className="choice-grid">
                    {branches.map((b) => (
                      <button key={b.id} className={`choice-card ${sel.branch?.id === b.id ? 'selected' : ''}`} onClick={() => setSel({ ...sel, branch: b })}>
                        <b>
                          {b.name}
                          {b.near ? '  ·  nearest' : ''}
                        </b>
                        <small>
                          {b.city} — {b.address}
                        </small>
                        <small style={{ color: 'var(--accent-deep)' }}>{b.hours}</small>
                      </button>
                    ))}
                  </div>
                ) : null}

                {/* STEP 2 — service */}
                {step === 2 ? (
                  <div className="choice-grid">
                    {c.services.map((s) => (
                      <button key={s.slug} className={`choice-card ${sel.service?.slug === s.slug ? 'selected' : ''}`} onClick={() => setSel({ ...sel, service: s })}>
                        <b>{s.name}</b>
                        <small>{s.duration}</small>
                        <span className="pr">From ₹{s.price.toLocaleString('en-IN')}</span>
                      </button>
                    ))}
                  </div>
                ) : null}

                {/* STEP 3 — stylist */}
                {step === 3 ? (
                  <div className="choice-grid">
                    {c.stylists.map((st) => (
                      <button key={st.name} className={`choice-card ${sel.stylist?.name === st.name ? 'selected' : ''}`} onClick={() => setSel({ ...sel, stylist: st })}>
                        <img src={st.img} alt={st.name} />
                        <b>{st.name}</b>
                        <small>
                          {st.role} · {st.exp}
                        </small>
                        {st.featured ? <small style={{ color: 'var(--accent-deep)' }}>★ Recommended for you</small> : null}
                      </button>
                    ))}
                  </div>
                ) : null}

                {/* STEP 4 — date */}
                {step === 4 ? (
                  <div className="slot-grid">
                    {days.map((d) => (
                      <button
                        key={d.iso}
                        className={`slot ${sel.date === d.iso ? 'selected' : ''} ${d.closed ? 'disabled' : ''}`}
                        onClick={() => setSel({ ...sel, date: d.iso, time: null })}
                      >
                        {d.label}
                      </button>
                    ))}
                  </div>
                ) : null}

                {/* STEP 5 — time */}
                {step === 5 ? (
                  <div className="slot-grid">
                    {timeSlots.map((t, i) => (
                      <button
                        key={t}
                        className={`slot ${sel.time === t ? 'selected' : ''} ${blocked.has(i) ? 'disabled' : ''}`}
                        onClick={() => setSel({ ...sel, time: t })}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                ) : null}

                {/* STEP 6 — confirm */}
                {step === 6 ? (
                  <div className="confirm-card">
                    <h3 className="display h-md" style={{ marginBottom: 20 }}>
                      Almost Done — Who Is This For?
                    </h3>
                    <div className="grid-2" style={{ gap: 20, marginBottom: 26 }}>
                      <div className="field">
                        <label>Full Name</label>
                        <input value={sel.name} onChange={(e) => setSel({ ...sel, name: e.target.value })} placeholder="Your name" />
                      </div>
                      <div className="field">
                        <label>Phone</label>
                        <input value={sel.phone} onChange={(e) => setSel({ ...sel, phone: e.target.value })} placeholder="10-digit mobile" />
                      </div>
                    </div>
                    <div className="row">
                      <span>Ritual</span>
                      <b>
                        {sel.service?.name} · {sel.service?.duration}
                      </b>
                    </div>
                    <div className="row">
                      <span>Artist</span>
                      <b>{sel.stylist?.name}</b>
                    </div>
                    <div className="row">
                      <span>Where</span>
                      <b>
                        {sel.branch?.name}, {sel.branch?.city}
                      </b>
                    </div>
                    <div className="row">
                      <span>When</span>
                      <b>
                        {sel.date} · {sel.time}
                      </b>
                    </div>
                    <div className="row">
                      <span>Estimated</span>
                      <b>₹{sel.service?.price.toLocaleString('en-IN')}</b>
                    </div>
                  </div>
                ) : null}

                {/* nav */}
                <div className="book-nav">
                  <button className="btn btn-outline" disabled={step === 0} style={{ opacity: step === 0 ? 0.35 : 1 }} onClick={() => setStep(Math.max(0, step - 1))}>
                    ← Back
                  </button>
                  {step < 6 ? (
                    <button className="btn btn-solid" disabled={!canNext} style={{ opacity: canNext ? 1 : 0.4 }} onClick={() => canNext && setStep(step + 1)}>
                      Continue →
                    </button>
                  ) : (
                    <button className="btn btn-solid" disabled={!canNext || status === 'sending'} style={{ opacity: canNext ? 1 : 0.4 }} onClick={() => canNext && confirm()}>
                      {status === 'sending' ? 'Reserving…' : 'Confirm Booking ✓'}
                    </button>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
