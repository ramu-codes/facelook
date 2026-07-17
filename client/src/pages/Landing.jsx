import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Particles from '../components/Particles.jsx';

const titleAnim = {
  hidden: { opacity: 0, y: 60 },
  show: (d) => ({ opacity: 1, y: 0, transition: { duration: 1.1, delay: d, ease: [0.22, 1, 0.36, 1] } }),
};

export default function Landing() {
  const navigate = useNavigate();
  const [leaving, setLeaving] = useState(null); // 'men' | 'women'

  const enter = (world) => {
    if (leaving) return;
    setLeaving(world);
    setTimeout(() => navigate(`/${world}`), 850);
  };

  return (
    <motion.div className="landing" exit={{ opacity: 0 }}>
      {/* WOMEN — LEFT */}
      <motion.section
        className="landing-side women"
        onClick={() => enter('women')}
        initial={{ x: '-4%', opacity: 0 }}
        animate={leaving === 'women' ? { flex: 30 } : leaving === 'men' ? { flex: 0.0001, opacity: 0 } : { x: 0, opacity: 1 }}
        transition={{ duration: leaving ? 0.85 : 1.2, ease: [0.76, 0, 0.24, 1] }}
        data-cursor="hover"
      >
        <img className="bgimg" src="/images/women/hero-blonde.jpg" alt="Women's luxury salon" />
        <div className="shade" />
        <Particles color="#eec3c3" count={180} />
        <div className="side-inner">
          <motion.span className="side-eyebrow" variants={titleAnim} initial="hidden" animate="show" custom={0.4}>
            The Maison
          </motion.span>
          <motion.h2 variants={titleAnim} initial="hidden" animate="show" custom={0.55}>
            Women’s <em style={{ fontStyle: 'italic' }}>Salon</em>
          </motion.h2>
          <motion.p className="side-sub" variants={titleAnim} initial="hidden" animate="show" custom={0.7}>
            Rose-gold light, slow rituals, couture hair and skin artistry.
          </motion.p>
          <motion.div variants={titleAnim} initial="hidden" animate="show" custom={0.85}>
            <span className="btn btn-ghost-light">Enter Women’s World →</span>
          </motion.div>
        </div>
      </motion.section>

      {/* MEN — RIGHT */}
      <motion.section
        className="landing-side men"
        onClick={() => enter('men')}
        initial={{ x: '4%', opacity: 0 }}
        animate={leaving === 'men' ? { flex: 30 } : leaving === 'women' ? { flex: 0.0001, opacity: 0 } : { x: 0, opacity: 1 }}
        transition={{ duration: leaving ? 0.85 : 1.2, ease: [0.76, 0, 0.24, 1] }}
        data-cursor="hover"
      >
        <img className="bgimg" src="/images/men/hero-beard.jpg" alt="Men's luxury grooming atelier" />
        <div className="shade" />
        <Particles color="#c8a97e" count={180} />
        <div className="side-inner">
          <motion.span className="side-eyebrow" variants={titleAnim} initial="hidden" animate="show" custom={0.4}>
            The Atelier
          </motion.span>
          <motion.h2 variants={titleAnim} initial="hidden" animate="show" custom={0.55}>
            Men’s Salon
          </motion.h2>
          <motion.p className="side-sub" variants={titleAnim} initial="hidden" animate="show" custom={0.7}>
            Dark wood, hot towels, blade craft and editorial precision.
          </motion.p>
          <motion.div variants={titleAnim} initial="hidden" animate="show" custom={0.85}>
            <span className="btn btn-ghost-light">Enter Men’s World →</span>
          </motion.div>
        </div>
      </motion.section>

      {/* CENTER EMBLEM */}
      <motion.div
        className="landing-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={leaving ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: leaving ? 0 : 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="divider-v" />
        <div className="emblem">
          <div>
            <div className="f">F</div>
            <small>2.0</small>
          </div>
        </div>
        <div className="divider-v" />
      </motion.div>

      <motion.div
        className="landing-tag"
        initial={{ opacity: 0 }}
        animate={{ opacity: leaving ? 0 : 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        Facelook 2.0 — Luxury Unisex Salon · Choose Your World
      </motion.div>
    </motion.div>
  );
}
