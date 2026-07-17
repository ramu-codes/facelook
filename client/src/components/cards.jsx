import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useSalon } from '../context/SalonContext.jsx';

/* ---------------- Service card ---------------- */
export function ServiceCard({ svc, idx }) {
  const { base } = useSalon();
  return (
    <Link to={`${base}/booking?service=${svc.slug}`} className="card svc-card" data-cursor="hover">
      <div className="img-frame">
        <img src={svc.img} alt={svc.name} loading="lazy" />
        <div className="veil" />
      </div>
      <div className="svc-body">
        <span className="svc-idx">{String(idx + 1).padStart(2, '0')}</span>
        <h3>{svc.name}</h3>
        <p>{svc.desc}</p>
        <div className="svc-price">
          From ₹{svc.price.toLocaleString('en-IN')} · {svc.duration}
        </div>
      </div>
    </Link>
  );
}

/* ---------------- Stylist card ---------------- */
export function StylistCard({ st }) {
  return (
    <div className="stylist-card" data-cursor="hover">
      <div className="img-wrap">
        <div className="img-frame" style={{ aspectRatio: '3 / 3.8' }}>
          <img src={st.img} alt={st.name} loading="lazy" />
        </div>
        <div className="socials">
          <span>ig</span>
          <span>fb</span>
          <span>yt</span>
        </div>
        {st.featured ? (
          <span
            className="tag"
            style={{
              position: 'absolute',
              top: 16,
              left: 16,
              zIndex: 2,
              fontSize: 10,
              fontWeight: 800,
              letterSpacing: 2,
              textTransform: 'uppercase',
              padding: '7px 14px',
              background: 'var(--accent)',
              color: 'var(--accent-ink)',
              borderRadius: 'var(--radius-chip)',
            }}
          >
            Featured
          </span>
        ) : null}
      </div>
      <div className="who">
        <h3>{st.name}</h3>
        <div className="role">
          {st.role} · {st.exp}
        </div>
      </div>
    </div>
  );
}

/* ---------------- Testimonial card ---------------- */
export function TestimonialCard({ t }) {
  return (
    <figure className="testi-card">
      <span className="quote-mark">“</span>
      <p>{t.text}</p>
      <figcaption className="who">
        <span className="av">
          <img src={t.img} alt={t.who} loading="lazy" />
        </span>
        <span>
          <b>{t.who}</b>
          <small>{t.role}</small>
          <div className="stars">★★★★★</div>
        </span>
      </figcaption>
    </figure>
  );
}

/* ---------------- Blog card ---------------- */
export function BlogCard({ b }) {
  const { base } = useSalon();
  return (
    <Link to={`${base}/blogs`} className="card blog-card" data-cursor="hover">
      <div className="img-frame">
        <img src={b.img} alt={b.title} loading="lazy" />
        <div className="veil" />
      </div>
      <div className="body">
        <div className="meta">
          <span>{b.cat}</span>
          <span>{b.date}</span>
        </div>
        <h3>{b.title}</h3>
        <p>{b.excerpt}</p>
      </div>
    </Link>
  );
}

/* ---------------- Product card ---------------- */
export function ProductCard({ p }) {
  return (
    <div className="card prod-card" data-cursor="hover">
      {p.tag ? <span className={`tag ${p.sponsored ? 'sponsored' : ''}`}>{p.tag}</span> : null}
      <div className="img-frame">
        <img src={p.img} alt={p.name} loading="lazy" />
      </div>
      <div className="body">
        <div className="brand">{p.brand}</div>
        <h3>{p.name}</h3>
        <div className="price">
          {p.mrp ? <s>₹{p.mrp.toLocaleString('en-IN')}</s> : null}₹{p.price.toLocaleString('en-IN')}
        </div>
        <div className="add">Add to Bag +</div>
      </div>
    </div>
  );
}

/* ---------------- Offer card ---------------- */
export function OfferCard({ o }) {
  return (
    <div className="offer-card" data-cursor="hover">
      <img src={o.img} alt="" loading="lazy" />
      <div className="inner">
        <div className="off">{o.off}</div>
        <h3>{o.title}</h3>
        <p>{o.desc}</p>
        <span className="code">CODE · {o.code}</span>
      </div>
    </div>
  );
}

/* ---------------- Video card + modal ---------------- */
export function VideoCard({ v }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="video-card" onClick={() => setOpen(true)} data-cursor="hover">
        <img src={v.poster} alt={v.title} loading="lazy" />
        <span className="pulse" />
        <span className="play" />
        <div className="cap">
          {v.title}
          <div style={{ fontSize: 11, letterSpacing: 2, marginTop: 6, opacity: 0.7, fontFamily: 'Outfit, sans-serif', fontWeight: 600 }}>
            WATCH · {v.dur}
          </div>
        </div>
      </div>
      <AnimatePresence>
        {open ? (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <button className="close">Close ✕</button>
            <motion.div
              initial={{ scale: 0.92, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.94, y: 10 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              style={{ width: 'min(920px, 92vw)' }}
            >
              <div className="video-card" style={{ cursor: 'default' }}>
                <img src={v.poster} alt={v.title} />
                <div className="cap">
                  {v.title}
                  <div style={{ fontSize: 12, marginTop: 8, opacity: 0.75, fontFamily: 'Outfit, sans-serif' }}>
                    Connect your video host (YouTube / Vimeo embed) here in production.
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

/* ---------------- FAQ accordion item ---------------- */
export function FaqItem({ f, open, onToggle }) {
  return (
    <div className={`faq-item ${open ? 'open' : ''}`}>
      <button className="faq-q" onClick={onToggle} aria-expanded={open}>
        {f.q}
        <span className="ic">+</span>
      </button>
      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            className="faq-a"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <p>{f.a}</p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

/* ---------------- Before / After slider ---------------- */
export function BeforeAfter({ before, after }) {
  const ref = useRef(null);
  const [pos, setPos] = useState(50);
  const onMove = (clientX) => {
    const r = ref.current.getBoundingClientRect();
    const p = Math.max(4, Math.min(96, ((clientX - r.left) / r.width) * 100));
    setPos(p);
  };
  return (
    <div
      className="ba-wrap"
      ref={ref}
      style={{ '--ba': `${pos}%` }}
      onPointerMove={(e) => e.buttons === 1 && onMove(e.clientX)}
      onPointerDown={(e) => onMove(e.clientX)}
      data-cursor="hover"
    >
      <img src={before} alt="Before" />
      <img className="ba-after" src={after} alt="After" />
      <span className="ba-tag left">Before</span>
      <span className="ba-tag right">After</span>
      <div className="ba-handle" />
    </div>
  );
}
