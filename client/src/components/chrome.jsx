import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link, NavLink, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { useSalon } from '../context/SalonContext.jsx';
import { navPages, flatPages, branches } from '../data/shared.js';
import { Magnetic } from './ui.jsx';

/* ---------------- Preloader ---------------- */
export function Preloader({ onDone }) {
  const [pct, setPct] = useState(0);
  const [gone, setGone] = useState(false);
  useEffect(() => {
    let v = 0;
    const id = setInterval(() => {
      v = Math.min(100, v + Math.random() * 16 + 6);
      setPct(Math.floor(v));
      if (v >= 100) {
        clearInterval(id);
        setTimeout(() => {
          setGone(true);
          onDone && onDone();
        }, 450);
      }
    }, 120);
    return () => clearInterval(id);
  }, [onDone]);
  return (
    <AnimatePresence>
      {!gone ? (
        <motion.div className="preloader" exit={{ yPercent: -100, transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } }}>
          <div className="mark">
            <motion.div
              className="word"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              FACE<em>LOOK</em>
            </motion.div>
            <div className="bar">
              <motion.i style={{ scaleX: pct / 100 }} />
            </div>
            <div className="pct">{pct}% — TWO WORLDS, ONE HOUSE OF CRAFT</div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

/* ---------------- Custom cursor ---------------- */
export function CustomCursor() {
  const dot = useRef(null);
  const ring = useRef(null);
  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return;
    let shown = false;
    const xd = gsap.quickTo(dot.current, 'x', { duration: 0.08, ease: 'power2.out' });
    const yd = gsap.quickTo(dot.current, 'y', { duration: 0.08, ease: 'power2.out' });
    const xr = gsap.quickTo(ring.current, 'x', { duration: 0.35, ease: 'power3.out' });
    const yr = gsap.quickTo(ring.current, 'y', { duration: 0.35, ease: 'power3.out' });
    const move = (e) => {
      if (!shown) {
        shown = true;
        dot.current && (dot.current.style.opacity = '1');
        ring.current && (ring.current.style.opacity = '1');
      }
      xd(e.clientX);
      yd(e.clientY);
      xr(e.clientX);
      yr(e.clientY);
      const hover = e.target.closest('a, button, [data-cursor="hover"]');
      ring.current && ring.current.classList.toggle('hovering', !!hover);
    };
    window.addEventListener('pointermove', move);
    return () => window.removeEventListener('pointermove', move);
  }, []);
  return (
    <>
      <div className="cursor-dot" ref={dot} style={{ opacity: 0 }} />
      <div className="cursor-ring" ref={ring} style={{ opacity: 0 }} />
    </>
  );
}

/* ---------------- Navbar ---------------- */
export function Navbar() {
  const { base, key, worldName } = useSalon();
  const [scrolled, setScrolled] = useState(false);
  const [hiddenUp, setHiddenUp] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY = useRef(0);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 60);
      setHiddenUp(y > 420 && y > lastY.current);
      lastY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const other = key === 'men' ? { to: '/women', label: "Women's World" } : { to: '/men', label: "Men's World" };

  return (
    <>
     <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container-wide nav-inner">
          <Link to={base} className="nav-logo" data-cursor="hover">
            <span className="word">
              FACE<em>LOOK</em>
            </span>
            <span className="sub">{worldName} · 2.0</span>
          </Link>

          <ul className="nav-links">
            {navPages.map((p) => (
              <li key={p.label}>
                {p.children ? (
                  <>
                    <button className="nav-item" type="button">
                      {p.label} <span style={{ fontSize: 8, verticalAlign: 2 }}>▾</span>
                    </button>
                    <div className="nav-drop">
                      {p.children.map((c) => (
                        <Link key={c.to} to={base + c.to}>
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <NavLink to={base + p.to} end={p.to === ''} className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                    {p.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>

          <div className="nav-cta">
            <Link className="switch-world" to={other.to} data-cursor="hover">
              <span className="dot" /> {other.label}
            </Link>
            <Magnetic>
              <Link className="btn btn-solid" to={`${base}/booking`} style={{ padding: '13px 26px' }}>
                Book Now
              </Link>
            </Magnetic>
            <button className={`nav-burger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            className="mobile-menu"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          >
            {flatPages.map((p, i) => (
              <motion.div
                key={p.to}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 + i * 0.04, duration: 0.5 }}
              >
                <Link to={base + p.to} onClick={() => setMenuOpen(false)}>
                  {p.label} <small>{String(i + 1).padStart(2, '0')}</small>
                </Link>
              </motion.div>
            ))}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} style={{ marginTop: 30 }}>
              <Link to={other.to} className="switch-world" style={{ display: 'inline-flex' }}>
                <span className="dot" /> Switch to {other.label}
              </Link>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

/* ---------------- Footer ---------------- */
export function Footer() {
  const { base, key, worldName } = useSalon();
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link to={base} className="nav-logo">
              <span className="word">
                FACE<em>LOOK</em>
              </span>
              <span className="sub">{worldName} · 2.0</span>
            </Link>
            <p className="brand-note">
              A luxury unisex salon house. Two worlds — one devoted to the modern gentleman, one to slow, elegant beauty — under a
              single roof of craft.
            </p>
            <div className="newsletter">
              <input placeholder="Your email for private offers" aria-label="Email" />
              <button>Join</button>
            </div>
          </div>
          <div>
            <h4>Explore</h4>
            <ul className="f-links">
              {['About', 'Services', 'Pricing', 'Stylists', 'Gallery', 'Blogs'].map((l) => (
                <li key={l}>
                  <Link to={`${base}/${l.toLowerCase()}`}>{l}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Client Care</h4>
            <ul className="f-links">
              <li>
                <Link to={`${base}/booking`}>Book Appointment</Link>
              </li>
              <li>
                <Link to={`${base}/membership`}>Membership</Link>
              </li>
              <li>
                <Link to={`${base}/offers`}>Offers & Gift Cards</Link>
              </li>
              <li>
                <Link to={`${base}/faqs`}>FAQs</Link>
              </li>
              <li>
                <Link to={`${base}/contact`}>Contact</Link>
              </li>
              <li>
                <Link to={key === 'men' ? '/women' : '/men'}>Switch World</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Flagship Atelier</h4>
            <ul className="f-links" style={{ gap: 14 }}>
              <li>{branches[0].address}</li>
              <li>{branches[0].phone}</li>
              <li>{branches[0].hours}</li>
              <li style={{ display: 'flex', gap: 10 }}>
                {['IG', 'FB', 'YT', 'X'].map((s) => (
                  <a
                    key={s}
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    style={{
                      width: 38,
                      height: 38,
                      border: '1px solid var(--line-dark)',
                      borderRadius: '50%',
                      display: 'grid',
                      placeItems: 'center',
                      fontSize: 10,
                      fontWeight: 800,
                      letterSpacing: 1,
                    }}
                  >
                    {s}
                  </a>
                ))}
              </li>
            </ul>
          </div>
        </div>
        <div className="big-word">Facelook</div>
        <div className="footer-bottom">
          <span>© {year} FACELOOK 2.0 — Luxury Unisex Salon. All rights reserved.</span>
          <span>Crafted with patience in India · Privacy · Terms</span>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- Scroll to top on route change ---------------- */
export function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}
