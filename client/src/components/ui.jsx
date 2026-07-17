import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import { Link } from 'react-router-dom';

/* ---------------- Reveal: luxury fade/slide on scroll ---------------- */
const revealVariants = {
  hidden: (dir) => ({
    opacity: 0,
    y: dir === 'up' ? 46 : 0,
    x: dir === 'left' ? -46 : dir === 'right' ? 46 : 0,
    scale: dir === 'scale' ? 0.94 : 1,
  }),
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Reveal({ children, dir = 'up', delay = 0, className, as = 'div', ...rest }) {
  const M = motion[as] || motion.div;
  return (
    <M
      className={className}
      custom={dir}
      variants={revealVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </M>
  );
}

/* ---------------- Staggered children reveal ---------------- */
export function RevealGroup({ children, className, stagger = 0.12 }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger } } }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({ children, className }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
      }}
    >
      {children}
    </motion.div>
  );
}

/* ---------------- Section heading block ---------------- */
export function SectionHead({ eyebrow, title, text, center = false, dark = false }) {
  return (
    <div className={`section-head ${center ? 'center' : ''}`}>
      <Reveal dir="up">
        <span className="eyebrow">{eyebrow}</span>
      </Reveal>
      <Reveal dir="up" delay={0.08}>
        <h2 className={`display h-lg ${dark ? 'on-dark' : ''}`}>{title}</h2>
      </Reveal>
      {text ? (
        <Reveal dir="up" delay={0.16}>
          <p>{text}</p>
        </Reveal>
      ) : null}
    </div>
  );
}

/* ---------------- Magnetic button ---------------- */
export function Magnetic({ children, strength = 0.35 }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const move = (e) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2);
      const y = e.clientY - (r.top + r.height / 2);
      gsap.to(el, { x: x * strength, y: y * strength, duration: 0.5, ease: 'power3.out' });
    };
    const leave = () => gsap.to(el, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1, 0.4)' });
    el.addEventListener('pointermove', move);
    el.addEventListener('pointerleave', leave);
    return () => {
      el.removeEventListener('pointermove', move);
      el.removeEventListener('pointerleave', leave);
    };
  }, [strength]);
  return (
    <span ref={ref} style={{ display: 'inline-block' }} data-cursor="hover">
      {children}
    </span>
  );
}

export function BtnLink({ to, variant = 'solid', children }) {
  return (
    <Magnetic>
      <Link className={`btn btn-${variant}`} to={to}>
        {children}
      </Link>
    </Magnetic>
  );
}

/* ---------------- Animated counter ---------------- */
export function Counter({ n, suffix = '', duration = 2 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let raf;
    const tick = (t) => {
      const p = Math.min(1, (t - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - p, 4);
      setVal(Math.round(n * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, n, duration]);
  return (
    <span ref={ref}>
      {val}
      <sup>{suffix}</sup>
    </span>
  );
}

/* ---------------- Marquee strip ---------------- */
export function Marquee({ items }) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {doubled.map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>
    </div>
  );
}

/* ---------------- Parallax image (GSAP scrub) ---------------- */
export function ParallaxImg({ src, alt = '', className = '', speed = 12, ratio }) {
  const wrap = useRef(null);
  const img = useRef(null);
  useEffect(() => {
    if (!wrap.current || !img.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        img.current,
        { yPercent: -speed },
        {
          yPercent: speed,
          ease: 'none',
          scrollTrigger: { trigger: wrap.current, start: 'top bottom', end: 'bottom top', scrub: true },
        }
      );
    });
    return () => ctx.revert();
  }, [speed]);
  return (
    <div className={`img-frame ${className}`} ref={wrap} style={ratio ? { aspectRatio: ratio } : undefined}>
      <img ref={img} src={src} alt={alt} loading="lazy" style={{ scale: '1.18' }} />
    </div>
  );
}

/* ---------------- Split-text heading (GSAP) ---------------- */
export function SplitTitle({ lines = [], className = '' }) {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    const chars = ref.current.querySelectorAll('.ch');
    const ctx = gsap.context(() => {
      gsap.from(chars, {
        yPercent: 110,
        opacity: 0,
        duration: 1.1,
        ease: 'power4.out',
        stagger: 0.024,
        delay: 0.25,
      });
    });
    return () => ctx.revert();
  }, []);
  const renderWords = (line) =>
    line.split(' ').map((word, wi) => (
      <span key={wi} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
        {word.split('').map((c, i) => (
          <span className="ch" key={i} style={{ display: 'inline-block' }}>
            {c}
          </span>
        ))}
        {wi < line.split(' ').length - 1 ? <span className="ch" style={{ display: 'inline-block' }}>&nbsp;</span> : null}
      </span>
    ));
  return (
    <h1 className={className} ref={ref}>
      {lines.map((line, li) => (
        <span key={li} style={{ display: 'block', overflow: 'hidden' }}>
          {li === 1 ? <span className="accent-line">{renderWords(line)}</span> : renderWords(line)}
        </span>
      ))}
    </h1>
  );
}

/* ---------------- Page hero for inner pages ---------------- */
export function PageHero({ title, crumb, img, note }) {
  return (
    <header className="page-hero">
      <div className="bg">
        <ParallaxHeroImg src={img} />
      </div>
      <div className="container" style={{ position: 'relative', zIndex: 3 }}>
        <Reveal dir="up">
          <div className="crumb">
            {crumb} <span>—</span> <span>{title}</span>
          </div>
        </Reveal>
        <Reveal dir="up" delay={0.1}>
          <h1 className="display h-xl">{title}</h1>
        </Reveal>
        {note ? (
          <Reveal dir="up" delay={0.18}>
            <p className="hero-note">{note}</p>
          </Reveal>
        ) : null}
      </div>
    </header>
  );
}

function ParallaxHeroImg({ src }) {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.to(ref.current, {
        yPercent: 18,
        ease: 'none',
        scrollTrigger: { trigger: ref.current, start: 'top top', end: 'bottom top', scrub: true },
      });
      gsap.from(ref.current, { scale: 1.18, duration: 1.6, ease: 'power3.out' });
    });
    return () => ctx.revert();
  }, []);
  return <img ref={ref} src={src} alt="" />;
}

/* ---------------- CTA band ---------------- */
export function CtaBand({ img, title, btnTo, btnLabel = 'Book Your Visit' }) {
  return (
    <section className="cta-band">
      <img className="bg" src={img} alt="" loading="lazy" />
      <div className="inner container">
        <Reveal dir="up">
          <h2 className="display h-xl">{title}</h2>
        </Reveal>
        <Reveal dir="up" delay={0.15}>
          <BtnLink to={btnTo} variant="solid">
            {btnLabel} <span className="arr">→</span>
          </BtnLink>
        </Reveal>
      </div>
    </section>
  );
}
