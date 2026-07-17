import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useSalon } from '../context/SalonContext.jsx';
import { PageHero, SectionHead, Reveal, RevealGroup, RevealItem, CtaBand } from '../components/ui.jsx';
import { BeforeAfter } from '../components/cards.jsx';

export default function Gallery() {
  const c = useSalon();
  const [open, setOpen] = useState(null);
  return (
    <>
      <PageHero
        title="Gallery"
        crumb={c.worldName}
        img={c.gallery[1].img}
        note="Rooms, rituals and results — photographed as they are, in the light we actually work in."
      />

      <section className="section textured">
        <div className="container">
          <SectionHead eyebrow="The Frames" title="Inside the House" />
          <RevealGroup className="gallery-grid" stagger={0.06}>
            {c.gallery.map((g) => (
              <RevealItem className={`g-item ${g.size}`} key={g.img}>
                <div className="g-item" style={{ height: '100%' }} onClick={() => setOpen(g)} data-cursor="hover">
                  <img src={g.img} alt={g.cap} loading="lazy" />
                  <div className="cap">{g.cap}</div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="section on-dark textured">
        <div className="container" style={{ maxWidth: 900 }}>
          <SectionHead center dark eyebrow="Real Results" title="Before & After" text="Drag the handle — real clients, zero retouching." />
          <Reveal dir="up">
            <BeforeAfter before={c.beforeAfter.before} after={c.beforeAfter.after} />
          </Reveal>
        </div>
      </section>

      <AnimatePresence>
        {open ? (
          <motion.div className="lightbox" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(null)}>
            <button className="close">Close ✕</button>
            <motion.img
              src={open.img}
              alt={open.cap}
              initial={{ scale: 0.9, y: 24 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.94 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            />
          </motion.div>
        ) : null}
      </AnimatePresence>

      <CtaBand img={c.gallery[0].img} title="Be the Next Frame on This Wall" btnTo={`${c.base}/booking`} />
    </>
  );
}
