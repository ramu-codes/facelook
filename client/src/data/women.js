const IMG = '/images/women';

export const womenContent = {
  key: 'women',
  base: '/women',
  worldName: "Women's Maison",
  tagline: 'Soft light. Slow beauty.',
  heroTitle: ['Where Beauty', 'Takes Its Time'],
  heroSub:
    'Champagne light, rose-gold detail and hands that know their craft. FACELOOK 2.0 for Women is a beauty maison where every ritual — hair, skin, bridal — unfolds without hurry.',
  heroImage: `${IMG}/hero-blonde.jpg`,
  marquee: ['Bridal Couture', 'Balayage Artistry', 'Luxury Spa Rituals', 'Skin Alchemy', 'Nail Ateliers', 'Since 2012'],

  about: {
    title: 'A Maison Devoted to Slow Beauty',
    text: 'FACELOOK 2.0 for Women grew from a simple refusal — to treat beauty as an assembly line. Our maison is built like a home: warm light, quiet rooms, unhurried hands. Colourists, aestheticians and bridal artists work side by side so your whole ritual lives under one roof.',
    points: [
      'L’Oréal & Kérastase certified colour studio',
      'Private bridal suites with natural light',
      'Dermatologist-designed skin programs',
      'Organic spa rituals and aromatherapy',
    ],
    img1: `${IMG}/service-blowdry.jpg`,
    img2: `${IMG}/service-styling.jpg`,
    founder: 'Meera Kapoor',
    founderRole: 'Founder & Creative Director',
  },

  stats: [
    { n: 14, suffix: '+', label: 'Years of Artistry' },
    { n: 56, suffix: 'K', label: 'Clients Adored' },
    { n: 34, suffix: '', label: 'Master Artists' },
    { n: 9, suffix: '', label: 'Maisons in India' },
  ],

  services: [
    { slug: 'haircut', name: 'Hair Cut & Design', desc: 'Face-framing, precision-led cutting tailored to texture, lifestyle and light.', price: 1200, img: `${IMG}/service-blowdry.jpg`, popular: true, duration: '60 min' },
    { slug: 'hair-spa', name: 'Hair Spa Ritual', desc: 'Steam-infused repair ritual with Kérastase masques and scalp therapy.', price: 1800, img: `${IMG}/service-wash.jpg`, popular: true, duration: '75 min' },
    { slug: 'hair-coloring', name: 'Hair Coloring', desc: 'Balayage, babylights and glosses mixed to your skin’s undertone.', price: 3500, img: `${IMG}/hero-hair.jpg`, popular: true, duration: '150 min' },
    { slug: 'bridal-makeup', name: 'Bridal Makeup', desc: 'Couture bridal artistry with trials, draping and a day-of touch-up kit.', price: 15000, img: `${IMG}/service-bridal.jpg`, popular: true, duration: '3 hrs' },
    { slug: 'facial', name: 'Signature Facial', desc: 'Layered actives, lymphatic massage and LED therapy for lasting glow.', price: 2800, img: `${IMG}/service-facial.jpg`, popular: false, duration: '75 min' },
    { slug: 'cleanup', name: 'Glow Cleanup', desc: 'A 40-minute reset — exfoliation, extraction and hydration, no downtime.', price: 1100, img: `${IMG}/service-glow.jpg`, popular: false, duration: '40 min' },
    { slug: 'skin-treatment', name: 'Skin Treatment', desc: 'Dermat-designed peels and brightening programs for pigmentation and texture.', price: 3800, img: `${IMG}/service-skin.jpg`, popular: false, duration: '60 min' },
    { slug: 'waxing', name: 'Waxing Rituals', desc: 'Rica and liposoluble waxes with post-care ceramide therapy.', price: 900, img: `${IMG}/service-spa.jpg`, popular: false, duration: '45 min' },
    { slug: 'threading', name: 'Threading & Brows', desc: 'Brow mapping and precision threading for your natural arch.', price: 250, img: `${IMG}/service-threading.jpg`, popular: false, duration: '15 min' },
    { slug: 'nail-art', name: 'Nail Art Studio', desc: 'Gel systems, chrome, French couture and seasonal editorial sets.', price: 1400, img: `${IMG}/service-nails.jpg`, popular: false, duration: '60 min' },
    { slug: 'spa', name: 'Luxury Spa', desc: 'Full-body aromatherapy rituals in candlelit private suites.', price: 4500, img: `${IMG}/service-spa-2.jpg`, popular: false, duration: '90 min' },
  ],

  pricing: [
    {
      group: 'Hair Rituals',
      rows: [
        { name: 'Cut & Design', note: 'Consultation, cut, blow-dry finish', price: '₹1,200' },
        { name: 'Kérastase Hair Spa', note: 'Steam ritual & scalp therapy', price: '₹1,800' },
        { name: 'Balayage / Babylights', note: 'Includes gloss & Olaplex', price: '₹6,500' },
        { name: 'Global Colour', note: 'Ammonia-free luxury colour', price: '₹3,500' },
      ],
    },
    {
      group: 'Skin & Glow',
      rows: [
        { name: 'Signature Facial', note: 'Actives, massage, LED therapy', price: '₹2,800' },
        { name: 'Glow Cleanup', note: '40-minute reset', price: '₹1,100' },
        { name: 'Brightening Peel', note: 'Dermat-designed program', price: '₹3,800' },
        { name: 'Threading & Brow Mapping', note: 'Precision arch design', price: '₹250' },
      ],
    },
    {
      group: 'Bridal & Occasion',
      rows: [
        { name: 'Bridal Makeup Couture', note: 'Trial, draping, touch-up kit', price: '₹15,000' },
        { name: 'Engagement / Reception', note: 'HD or airbrush artistry', price: '₹9,500' },
        { name: 'Bridesmaid Package', note: 'Hair + makeup, per person', price: '₹5,500' },
        { name: 'Full Bridal Program', note: '90-day skin + hair + trial journey', price: '₹45,000' },
      ],
    },
  ],

  stylists: [
    { name: 'Meera Kapoor', role: 'Creative Director & Founder', img: `${IMG}/hero-curly.jpg`, exp: '15 yrs', featured: true, specialty: 'Bridal couture, editorial styling' },
    { name: 'Anaya Sharma', role: 'Master Colourist', img: `${IMG}/hero-hair.jpg`, exp: '10 yrs', featured: false, specialty: 'Balayage, colour correction' },
    { name: 'Ritika Nair', role: 'Skin Alchemist', img: `${IMG}/service-glow.jpg`, exp: '9 yrs', featured: false, specialty: 'Peels, glow programs, LED' },
    { name: 'Zoya Fernandes', role: 'Bridal Artist', img: `${IMG}/service-bridal.jpg`, exp: '8 yrs', featured: false, specialty: 'HD & airbrush bridal makeup' },
  ],

  gallery: [
    { img: `${IMG}/hero-hair.jpg`, cap: 'Colour story', size: 'tall' },
    { img: `${IMG}/interior-1.jpg`, cap: 'The Juhu maison', size: 'wide' },
    { img: `${IMG}/service-bridal.jpg`, cap: 'Bridal couture', size: '' },
    { img: `${IMG}/service-nails.jpg`, cap: 'Nail atelier', size: '' },
    { img: `${IMG}/service-blowdry.jpg`, cap: 'The blow-dry bar', size: '' },
    { img: `${IMG}/hero-curly.jpg`, cap: 'Texture, celebrated', size: 'tall' },
    { img: `${IMG}/service-mask.jpg`, cap: 'Skin rituals', size: '' },
    { img: `${IMG}/gallery-tools.jpg`, cap: 'Tools of the craft', size: 'wide' },
    { img: `${IMG}/product-flatlay.jpg`, cap: 'The edit', size: '' },
  ],

  beforeAfter: { before: `${IMG}/service-wash.jpg`, after: `${IMG}/hero-hair.jpg` },

  videos: [
    { title: 'Inside the Juhu Maison', poster: `${IMG}/interior-1.jpg`, dur: '2:12' },
    { title: 'A Balayage Story with Anaya', poster: `${IMG}/hero-hair.jpg`, dur: '3:47' },
    { title: 'Bridal Diaries — Sana’s Big Day', poster: `${IMG}/service-bridal.jpg`, dur: '5:02' },
    { title: 'The Signature Facial, Explained', poster: `${IMG}/service-facial.jpg`, dur: '2:58' },
  ],

  products: [
    { name: 'Rose Quartz Face Roller', brand: 'FL Beauty', price: 1450, mrp: 1800, img: `${IMG}/product-flatlay.jpg`, tag: 'Bestseller', sponsored: false },
    { name: 'Silk Repair Hair Masque', brand: 'FL Beauty', price: 1650, mrp: null, img: `${IMG}/service-wash.jpg`, tag: null, sponsored: false },
    { name: 'Vitamin C Glow Serum', brand: 'Lumière Paris', price: 2200, mrp: 2600, img: `${IMG}/service-skin.jpg`, tag: 'Sponsored', sponsored: true },
    { name: 'Champagne Body Polish', brand: 'FL Beauty', price: 1150, mrp: null, img: `${IMG}/service-spa.jpg`, tag: null, sponsored: false },
    { name: 'Pro Brush Collection', brand: 'Atelier Beauté', price: 3400, mrp: 4200, img: `${IMG}/product-brushes.jpg`, tag: 'Sponsored', sponsored: true },
    { name: 'Overnight Bloom Cream', brand: 'FL Beauty', price: 1950, mrp: null, img: `${IMG}/service-facial.jpg`, tag: 'New', sponsored: false },
  ],

  memberships: [
    { name: 'The Glow', price: 2499, per: '/month', featured: false, perks: ['1 ritual of your choice monthly', '10% off all services', 'Priority weekday booking', 'Complimentary brow shaping'] },
    { name: 'The Muse', price: 4999, per: '/month', featured: true, tag: 'Most Loved', perks: ['2 rituals of your choice monthly', '15% off services & products', 'Dedicated artist & colourist', 'Quarterly complimentary hair spa', 'Birthday glow facial on the house'] },
    { name: 'The Icon', price: 9999, per: '/month', featured: false, perks: ['Unlimited hair & glow rituals', '20% off everything', 'Private suite, every visit', 'At-home services (2/quarter)', 'Bridal-week concierge access'] },
  ],

  offers: [
    { off: '25%', title: 'First Ritual Welcome', desc: 'Your first visit to the maison — 25% off any hair or glow ritual.', code: 'BELLE25', img: `${IMG}/service-blowdry.jpg` },
    { off: '₹999', title: 'Festive Glow Package', desc: 'Cleanup + blow-dry + brow design, bundled for the season.', code: 'SHIMMER', img: `${IMG}/service-glow.jpg` },
    { off: 'FREE', title: 'Birthday Bloom', desc: 'A complimentary glow facial during your birthday week. Our love, every year.', code: 'BDAYQUEEN', img: `${IMG}/hero-pink.jpg` },
    { off: '2X', title: 'Bring Your Person', desc: 'Refer a friend — you both earn double loyalty petals on your next ritual.', code: 'SOULSIS', img: `${IMG}/service-styling.jpg` },
  ],

  testimonials: [
    { text: 'Anaya studied my skin tone in daylight before mixing a single bowl of colour. My balayage looks like I was born lucky. This is artistry.', who: 'Shreya Menon', role: 'Fashion Editor', img: `${IMG}/hero-curly.jpg` },
    { text: 'I did my entire bridal journey here — 90 days of skin, hair trials, the works. On the day, I cried, my mother cried, and my makeup did not move.', who: 'Sana Merchant', role: 'Bride, Dec 2025', img: `${IMG}/service-bridal.jpg` },
    { text: 'The Muse membership is my therapy budget. One Sunday a month, phone off, hair spa on. Non-negotiable.', who: 'Divya Krishnan', role: 'Startup Founder', img: `${IMG}/hero-hair.jpg` },
    { text: 'I have sensitive, reactive skin and had given up on facials. Ritika built me a program that transformed it in four months. I trust her completely.', who: 'Pooja Shetty', role: 'Physician', img: `${IMG}/service-glow.jpg` },
  ],

  awards: [
    { yr: 2025, title: 'Best Luxury Salon & Spa — West India', org: 'Vogue Beauty Awards', desc: 'Winner across 300+ nominated maisons and spas.' },
    { yr: 2024, title: 'Bridal Studio of the Year', org: 'WeddingSutra Honours', desc: 'For 400+ flawless bridal journeys delivered.' },
    { yr: 2023, title: 'Colour Studio Excellence', org: 'L’Oréal Colour Trophy', desc: 'National finalist, balayage & creative colour.' },
    { yr: 2022, title: 'Wellness Experience Gold', org: 'CX Hospitality Council', desc: '98.9% satisfaction across 55,000+ annual rituals.' },
  ],

  faqs: [
    { q: 'How far in advance should I book a bridal package?', a: 'Ideally 90 days before your wedding — our full bridal program includes skin preparation, two hair trials and a makeup trial. Peak season (Nov–Feb) books out months ahead, so reach out early.' },
    { q: 'Do you use ammonia-free colour?', a: 'Yes. Our colour studio works with L’Oréal INOA and Kérastase systems, and every colour service includes a bond-protection step. Patch tests are complimentary and encouraged.' },
    { q: 'Can I book a private suite?', a: 'Muse and Icon members enjoy private suites on every visit; all guests can reserve one for bridal, spa and colour rituals at a small supplement, subject to availability.' },
    { q: 'What if I am not sure which facial is right for me?', a: 'Begin with our 15-minute skin consultation — it is free. Ritika’s team will analyse your skin under diagnostic light and design a program rather than sell you a menu.' },
    { q: 'Do you offer at-home services?', a: 'Icon members receive two at-home rituals per quarter, and bridal-day teams travel to your venue. Standard appointments happen in the maison, where our equipment lives.' },
    { q: 'What is your cancellation policy?', a: 'Free rescheduling up to 4 hours before your ritual. No-shows are charged 50% to honour our artists’ time.' },
  ],

  blogs: [
    { title: 'Balayage, Babylights or Gloss? A Love Letter to Dimension', excerpt: 'How to choose the colour technique your hair actually wants — explained by our master colourist.', img: `${IMG}/hero-hair.jpg`, date: 'Jul 11, 2026', cat: 'Colour' },
    { title: 'The 90-Day Bridal Skin Countdown', excerpt: 'A dermatologist-designed timeline for glass skin on your wedding day — no last-minute panic facials.', img: `${IMG}/service-bridal.jpg`, date: 'Jun 28, 2026', cat: 'Bridal' },
    { title: 'Why Your Hair Spa Should Bore You', excerpt: 'The science of slow: what 75 unhurried minutes of steam and scalp work actually does to your hair.', img: `${IMG}/service-wash.jpg`, date: 'Jun 07, 2026', cat: 'Rituals' },
  ],

  trending: ['Butterfly Layers', 'Glass Skin Facial', 'Chrome Nails', 'Copper Balayage', 'Korean Hair Spa', 'Soft Bridal Glam'],

  aiSuggestion: {
    prompt: 'Heart-shaped face · fine wavy hair · humid climate',
    result: 'Soft <b>butterfly layers with a curtain fringe</b> flatter your face shape and add body without weight. Ask Anaya for a gloss in warm chestnut. Book a Korean hair spa monthly for humidity control.',
  },
};
