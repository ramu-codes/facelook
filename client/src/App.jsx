import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Routes, Route, Outlet, useLocation, useParams, Navigate } from 'react-router-dom';
import { SalonProvider, useSalon } from './context/SalonContext.jsx';
import { useLenisScroll } from './hooks/useLenisScroll.js';
import { Navbar, Footer, Preloader, CustomCursor, ScrollToTop } from './components/chrome.jsx';

import Landing from './pages/Landing.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Pricing from './pages/Pricing.jsx';
import Stylists from './pages/Stylists.jsx';
import Gallery from './pages/Gallery.jsx';
import VideoGallery from './pages/VideoGallery.jsx';
import Products from './pages/Products.jsx';
import Membership from './pages/Membership.jsx';
import Offers from './pages/Offers.jsx';
import Testimonials from './pages/Testimonials.jsx';
import Awards from './pages/Awards.jsx';
import Faqs from './pages/Faqs.jsx';
import Blogs from './pages/Blogs.jsx';
import Booking from './pages/Booking.jsx';
import Contact from './pages/Contact.jsx';

/* Themed layout for a world (men / women) */
function WorldLayout() {
  const { world } = useParams();
  if (world !== 'men' && world !== 'women') return <Navigate to="/" replace />;
  return (
    <SalonProvider world={world}>
      <WorldShell />
    </SalonProvider>
  );
}

function WorldShell() {
  const c = useSalon();
  useLenisScroll();
  useEffect(() => {
    document.title = `FACELOOK 2.0 — ${c.worldName}`;
  }, [c.worldName]);
  return (
    <div className="theme-root" data-theme={c.key}>
      <Navbar />
      <PageFade>
        <Outlet />
      </PageFade>
      <Footer />
    </div>
  );
}

/* Soft luxury page transition */
function PageFade({ children }) {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -16 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}

export default function App() {
  const [loaded, setLoaded] = useState(false);
  return (
    <>
      {!loaded ? <Preloader onDone={() => setLoaded(true)} /> : null}
      <CustomCursor />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/:world" element={<WorldLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="stylists" element={<Stylists />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="videos" element={<VideoGallery />} />
          <Route path="products" element={<Products />} />
          <Route path="membership" element={<Membership />} />
          <Route path="offers" element={<Offers />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="awards" element={<Awards />} />
          <Route path="faqs" element={<Faqs />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="booking" element={<Booking />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="." replace />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
