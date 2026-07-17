import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { useSalon } from '../context/SalonContext.jsx';
import { branches } from '../data/shared.js';
import {
  Reveal,
  RevealGroup,
  RevealItem,
  SectionHead,
  BtnLink,
  Counter,
  Marquee,
  ParallaxImg,
  SplitTitle,
  CtaBand,
} from '../components/ui.jsx';
import { ServiceCard, StylistCard, TestimonialCard, BlogCard, OfferCard, BeforeAfter } from '../components/cards.jsx';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const c = useSalon();
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.home-hero .bg img',
        { scale: 1.22 },
        { scale: 1.06, duration: 2.2, ease: 'power3.out' }
      );
      gsap.to('.home-hero .bg img', {
        yPercent: 14,
        ease: 'none',
        scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: true },
      });
    }, heroRef);
    return () => ctx.revert();
  }, [c.key]);

  const popular = c.services.filter((s) => s.popular).slice(0, 3);
  const nearBranch = branches.find((b) => b.near);

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="home-hero" ref={heroRef}>
        <div className="bg">
          <img src={c.heroImage} alt={`${c.worldName} hero`} />
        </div>
        <div className="container hero-content">
          <Reveal dir="up">
            <span className="hero-eyebrow">{c.worldName}</span>
          </Reveal>
          <SplitTitle lines={c.heroTitle} className="display h-hero" />
          <Reveal dir="up" delay={0.5}>
            <p className="hero-sub">{c.heroSub}</p>
          </Reveal>
          <Reveal dir="up" delay={0.65}>
            <div className="hero-ctas">
              <BtnLink to={`${c.base}/booking`} variant="solid">
                Reserve Your Ritual <span className="arr">→</span>
              </BtnLink>
              <BtnLink to={`${c.base}/services`} variant="ghost-light">
                Explore Services
              </BtnLink>
            </div>
          </Reveal>
        </div>
        <div className="hero-meta">
          <div className="container row">
            <span className="item">
              <b>Est. 2012</b> Fourteen years of craft
            </span>
            <span className="item">
              <b>9 Locations</b> Mumbai · Bengaluru · Delhi
            </span>
            <span className="item">
              <b>{c.tagline}</b> The house philosophy
            </span>
            <span className="item">
              <b>★ 4.9</b> 12,000+ verified reviews
            </span>
          </div>
        </div>
        <div className="scroll-hint">Scroll</div>
      </section>

      <Marquee items={c.marquee} />

      {/* ================= ABOUT ================= */}
      <section className="section textured">
        <div className="container editorial-split">
          <div className="imgs">
            <ParallaxImg src={c.about.img1} alt="Inside the salon" className="main" speed={8} />
            <Reveal dir="scale" delay={0.2} className="float">
              <img src={c.about.img2} alt="Craft detail" loading="lazy" />
            </Reveal>
            <div className="badge">
              Est · 2012 · Luxury Unisex House ·
            </div>
          </div>
          <div>
            <Reveal dir="up">
              <span className="eyebrow">The House</span>
            </Reveal>
            <Reveal dir="up" delay={0.08}>
              <h2 className="display h-lg" style={{ marginTop: 14 }}>
                {c.about.title}
              </h2>
            </Reveal>
            <Reveal dir="up" delay={0.16}>
              <p className="lead" style={{ marginTop: 20 }}>
                {c.about.text}
              </p>
            </Reveal>
            <Reveal dir="up" delay={0.22}>
              <ul className="check-list">
                {c.about.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal dir="up" delay={0.3}>
              <div className="sign-row">
                <span className="sig">{c.about.founder.split(' ')[0]}</span>
                <span className="who">
                  <b>{c.about.founder}</b>
                  <small>{c.about.founderRole}</small>
                </span>
              </div>
            </Reveal>
            <Reveal dir="up" delay={0.36} style={{ marginTop: 34 }}>
              <BtnLink to={`${c.base}/about`} variant="outline">
                Our Story <span className="arr">→</span>
              </BtnLink>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= POPULAR SERVICES ================= */}
      <section className="section on-cream">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 30, flexWrap: 'wrap' }}>
            <SectionHead eyebrow="Signature Rituals" title="Most Loved Services" text="The rituals our regulars refuse to give up — each one unhurried, each one exact." />
            <Reveal dir="up" style={{ marginBottom: 70 }}>
              <BtnLink to={`${c.base}/services`} variant="outline">
                All Services
              </BtnLink>
            </Reveal>
          </div>
          <RevealGroup className="grid-3">
            {popular.map((s, i) => (
              <RevealItem key={s.slug}>
                <ServiceCard svc={s} idx={i} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="section on-dark textured">
        <div className="container">
          <div className="stats-band">
            {c.stats.map((s) => (
              <Reveal dir="up" key={s.label} className="stat">
                <div className="num">
                  <Counter n={s.n} suffix={s.suffix} />
                </div>
                <div className="lbl">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TRENDING + AI ================= */}
      <section className="section">
        <div className="container grid-2" style={{ alignItems: 'start' }}>
          <div>
            <SectionHead
              eyebrow="Trending Now"
              title={c.key === 'men' ? 'Cuts Everyone Is Asking For' : 'Looks Everyone Is Asking For'}
              text="Live from our chairs — the styles trending across all nine locations this month."
            />
            <Reveal dir="up">
              <div className="chip-row">
                {c.trending.map((t, i) => (
                  <span className={`chip ${i === 0 ? 'active' : ''}`} key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal dir="up" delay={0.15} style={{ marginTop: 40 }}>
              <div className="branch-card">
                <h3>
                  {nearBranch.name}, {nearBranch.city} <span className="near">Nearest to you</span>
                </h3>
                <p>{nearBranch.address}</p>
                <div className="hours">{nearBranch.hours}</div>
              </div>
            </Reveal>
          </div>
          <Reveal dir="left">
            <div className="ai-panel">
              <span className="ai-chip">AI Style Concierge</span>
              <h3 className="display h-md">Not sure what suits you?</h3>
              <p style={{ marginTop: 12 }}>
                Our AI concierge studies your face shape, hair texture and routine, then recommends a look — refined by a human
                stylist before you sit down.
              </p>
              <div className="ai-result">
                <div style={{ fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--ink-mute)', marginBottom: 8 }}>
                  You · {c.aiSuggestion.prompt}
                </div>
                <span dangerouslySetInnerHTML={{ __html: c.aiSuggestion.result }} />
              </div>
              <div style={{ marginTop: 26 }}>
                <BtnLink to={`${c.base}/booking`} variant="solid">
                  Try It At Your Visit
                </BtnLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= OFFERS PREVIEW ================= */}
      <section className="section on-cream">
        <div className="container">
          <SectionHead center eyebrow="Private Offers" title="This Season at the House" />
          <RevealGroup className="grid-2">
            {c.offers.slice(0, 2).map((o) => (
              <RevealItem key={o.code}>
                <OfferCard o={o} />
              </RevealItem>
            ))}
          </RevealGroup>
          <Reveal dir="up" style={{ marginTop: 40 }}>
            <div className="gift-band">
              <div>
                <h3>Give Someone an Hour of Stillness</h3>
                <p>
                  FACELOOK gift cards from ₹1,000 — redeemable across both worlds, all nine locations, every ritual on the menu.
                </p>
                <div style={{ marginTop: 24 }}>
                  <BtnLink to={`${c.base}/offers`} variant="solid">
                    Gift Cards & Vouchers
                  </BtnLink>
                </div>
              </div>
              <div className="art">
                <div className="card-mock">
                  FACELOOK
                  <small>Gift Card · ₹5,000</small>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= STYLISTS PREVIEW ================= */}
      <section className="section">
        <div className="container">
          <SectionHead
            center
            eyebrow={c.key === 'men' ? 'Master Barbers' : 'Master Artists'}
            title="The Hands You Are In"
            text="Recruited for craft, retained for character. Meet the seniors of the house."
          />
          <RevealGroup className="grid-4">
            {c.stylists.map((st) => (
              <RevealItem key={st.name}>
                <StylistCard st={st} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* ================= BEFORE / AFTER + TESTIMONIAL ================= */}
      <section className="section on-dark textured">
        <div className="container grid-2" style={{ alignItems: 'center' }}>
          <div>
            <SectionHead
              dark
              eyebrow="Proof, Not Promises"
              title="Before & After"
              text="Drag the handle. Real clients, real chairs, zero retouching."
            />
            <Reveal dir="up">
              <BeforeAfter before={c.beforeAfter.before} after={c.beforeAfter.after} />
            </Reveal>
          </div>
          <Reveal dir="left" delay={0.1}>
            <TestimonialCard t={c.testimonials[0]} />
            <div style={{ marginTop: 24 }}>
              <BtnLink to={`${c.base}/testimonials`} variant="outline">
                All Client Stories <span className="arr">→</span>
              </BtnLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= INSTAGRAM ================= */}
      <section className="section on-cream" style={{ paddingBottom: 60 }}>
        <div className="container">
          <SectionHead center eyebrow="@facelook.2.0" title="From Our Instagram" />
          <RevealGroup className="insta-strip" stagger={0.06}>
            {c.gallery.slice(0, 6).map((g) => (
              <RevealItem className="ig" key={g.img}>
                <img src={g.img} alt={g.cap} loading="lazy" />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* ================= BLOG PREVIEW ================= */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 30, flexWrap: 'wrap' }}>
            <SectionHead eyebrow="The Journal" title="Notes from the Chair" />
            <Reveal dir="up" style={{ marginBottom: 70 }}>
              <BtnLink to={`${c.base}/blogs`} variant="outline">
                All Stories
              </BtnLink>
            </Reveal>
          </div>
          <RevealGroup className="grid-3">
            {c.blogs.map((b) => (
              <RevealItem key={b.title}>
                <BlogCard b={b} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <CtaBand
        img={c.about.img1}
        title={c.key === 'men' ? 'Your Chair Is Waiting. Take the Hour.' : 'Your Ritual Is Waiting. Take the Hour.'}
        btnTo={`${c.base}/booking`}
      />
    </>
  );
}
