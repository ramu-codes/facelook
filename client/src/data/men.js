const IMG = '/images/men';

export const menContent = {
  key: 'men',
  base: '/men',
  worldName: "Men's Atelier",
  tagline: 'Sharp. Composed. Unhurried.',
  heroTitle: ['The Art of', 'Modern Grooming'],
  heroSub:
    'A dark, quiet room. A hot towel. A blade in a steady hand. FACELOOK 2.0 for Men is a grooming atelier built on ritual, precision and time honoured craft.',
  heroImage: `${IMG}/hero-beard.jpg`,
  marquee: ['Precision Fades', 'Royal Shaves', 'Beard Sculpting', 'Hot Towel Ritual', 'Executive Grooming', 'Since 2012'],

  about: {
    title: 'A Grooming House Built on Ritual',
    text: 'What began as a two–chair studio in Bandra is now the most quietly obsessive grooming atelier in the country. We built FACELOOK 2.0 for Men around one belief — a haircut is not a transaction, it is a ritual. Every visit begins with a consultation, ends with a hot towel, and is measured in millimetres.',
    points: [
      'Master barbers with 10+ years behind the chair',
      'Single-client suites for uninterrupted focus',
      'Blade work, clipper craft and classic scissor cutting',
      'Grooming programs designed around your calendar',
    ],
    img1: `${IMG}/about-1.jpg`,
    img2: `${IMG}/about-2.jpg`,
    founder: 'Arjun Malhotra',
    founderRole: 'Founder & Master Barber',
  },

  stats: [
    { n: 14, suffix: '+', label: 'Years of Craft' },
    { n: 42, suffix: 'K', label: 'Gentlemen Served' },
    { n: 28, suffix: '', label: 'Master Barbers' },
    { n: 9, suffix: '', label: 'Ateliers in India' },
  ],

  services: [
    { slug: 'haircut', name: 'Hair Cut', desc: 'Consultation-led scissor and clipper cutting, finished with a straight-razor neckline.', price: 850, img: `${IMG}/service-haircut.jpg`, popular: true, duration: '45 min' },
    { slug: 'hair-styling', name: 'Hair Styling', desc: 'Editorial styling with premium matte and gloss finishes for events and shoots.', price: 650, img: `${IMG}/service-comb.jpg`, popular: false, duration: '30 min' },
    { slug: 'hair-wash', name: 'Hair Wash & Rinse', desc: 'Deep-cleanse wash with scalp massage and cold-pressed tonic finish.', price: 450, img: `${IMG}/service-cut-2.jpg`, popular: false, duration: '20 min' },
    { slug: 'hair-coloring', name: 'Hair Coloring', desc: 'Grey blending, global colour and low-key dimensional work that reads natural.', price: 2400, img: `${IMG}/service-clipper-2.jpg`, popular: false, duration: '90 min' },
    { slug: 'beard-styling', name: 'Beard Styling', desc: 'Architecture for the beard — mapped, sculpted and oiled to your face shape.', price: 700, img: `${IMG}/service-beard-trim.jpg`, popular: true, duration: '35 min' },
    { slug: 'shaving', name: 'Royal Shave', desc: 'The classic ritual: pre-shave oil, twin hot towels, straight razor, cold finish.', price: 950, img: `${IMG}/service-shave.jpg`, popular: true, duration: '40 min' },
    { slug: 'facial', name: 'Gentlemen’s Facial', desc: 'Deep-cleanse facial engineered for beard-bearing skin and city exposure.', price: 1800, img: `${IMG}/service-beard-2.jpg`, popular: false, duration: '60 min' },
    { slug: 'massage', name: 'Massage Therapy', desc: 'Shoulder, neck and back release performed in a private suite.', price: 1600, img: `${IMG}/interior-1.jpg`, popular: false, duration: '45 min' },
    { slug: 'head-massage', name: 'Head Massage', desc: 'Old-school champi reimagined with warm oils and pressure-point work.', price: 550, img: `${IMG}/service-clipper.jpg`, popular: false, duration: '25 min' },
  ],

  pricing: [
    {
      group: 'Cutting & Styling',
      rows: [
        { name: 'Signature Hair Cut', note: 'Consultation, cut, wash & finish', price: '₹850' },
        { name: 'Skin Fade / Precision Fade', note: 'Zero-gap clipper artistry', price: '₹950' },
        { name: 'Kids Cut (under 12)', note: 'Gentle, patient, lollipop included', price: '₹550' },
        { name: 'Event Styling', note: 'Weddings, shoots, boardrooms', price: '₹650' },
      ],
    },
    {
      group: 'Beard & Shave',
      rows: [
        { name: 'Beard Sculpt & Line-up', note: 'Mapped to facial structure', price: '₹700' },
        { name: 'Royal Hot Towel Shave', note: 'The full 40-minute ritual', price: '₹950' },
        { name: 'Beard Colour & Blend', note: 'Natural grey management', price: '₹1,100' },
        { name: 'Luxury Beard Spa', note: 'Steam, exfoliation, oil therapy', price: '₹1,400' },
      ],
    },
    {
      group: 'Skin & Body',
      rows: [
        { name: 'Gentlemen’s Facial', note: 'For beard-bearing, city-worn skin', price: '₹1,800' },
        { name: 'Charcoal De-Tan Cleanup', note: 'Brightening & detox', price: '₹1,200' },
        { name: 'Head Massage (Champi)', note: 'Warm oil, pressure-point work', price: '₹550' },
        { name: 'Back & Shoulder Release', note: '45 minutes, private suite', price: '₹1,600' },
      ],
    },
  ],

  stylists: [
    { name: 'Arjun Malhotra', role: 'Master Barber & Founder', img: `${IMG}/stylist-1.jpg`, exp: '16 yrs', featured: true, specialty: 'Classic scissor work, royal shaves' },
    { name: 'Kabir Sethi', role: 'Fade Specialist', img: `${IMG}/stylist-4.jpg`, exp: '9 yrs', featured: false, specialty: 'Skin fades, afro-textured hair' },
    { name: 'Rohan D’Souza', role: 'Beard Architect', img: `${IMG}/stylist-3.jpg`, exp: '11 yrs', featured: false, specialty: 'Beard design, colour blending' },
    { name: 'Ishaan Verma', role: 'Senior Stylist', img: `${IMG}/stylist-2.jpg`, exp: '8 yrs', featured: false, specialty: 'Editorial styling, long-form cuts' },
  ],

  gallery: [
    { img: `${IMG}/gallery-1.jpg`, cap: 'Clipper craft', size: 'tall' },
    { img: `${IMG}/interior-2.jpg`, cap: 'The Bandra atelier', size: 'wide' },
    { img: `${IMG}/service-shave.jpg`, cap: 'Royal shave ritual', size: '' },
    { img: `${IMG}/gallery-3.jpg`, cap: 'Finish & detail', size: '' },
    { img: `${IMG}/service-haircut.jpg`, cap: 'Scissor precision', size: '' },
    { img: `${IMG}/interior-3.jpg`, cap: 'Mirror row', size: 'tall' },
    { img: `${IMG}/gallery-2.jpg`, cap: 'Steady hands', size: '' },
    { img: `${IMG}/about-3.jpg`, cap: 'Comb & blade', size: 'wide' },
    { img: `${IMG}/service-kids.jpg`, cap: 'First haircuts', size: '' },
  ],

  beforeAfter: { before: `${IMG}/about-2.jpg`, after: `${IMG}/service-haircut.jpg` },

  videos: [
    { title: 'Inside the Bandra Atelier', poster: `${IMG}/interior-1.jpg`, dur: '2:41' },
    { title: 'The Royal Shave, Step by Step', poster: `${IMG}/service-shave.jpg`, dur: '4:05' },
    { title: 'Fade Craft with Kabir', poster: `${IMG}/service-clipper.jpg`, dur: '3:18' },
    { title: 'Client Stories — Vikram', poster: `${IMG}/stylist-1.jpg`, dur: '1:56' },
  ],

  products: [
    { name: 'Matte Clay Pomade', brand: 'FL Grooming', price: 1250, mrp: 1500, img: `${IMG}/gallery-3.jpg`, tag: 'Bestseller', sponsored: false },
    { name: 'Beard Elixir No. 7', brand: 'FL Grooming', price: 950, mrp: null, img: `${IMG}/service-beard-trim.jpg`, tag: null, sponsored: false },
    { name: 'Charcoal Face Wash', brand: 'Urban Alchemy', price: 780, mrp: 920, img: `${IMG}/service-beard-2.jpg`, tag: 'Sponsored', sponsored: true },
    { name: 'Sandalwood Shave Cream', brand: 'FL Grooming', price: 690, mrp: null, img: `${IMG}/service-shave.jpg`, tag: null, sponsored: false },
    { name: 'Argan Hair Serum', brand: 'Maison Homme', price: 1450, mrp: 1800, img: `${IMG}/service-comb.jpg`, tag: 'Sponsored', sponsored: true },
    { name: 'Daily Scalp Tonic', brand: 'FL Grooming', price: 850, mrp: null, img: `${IMG}/service-cut-2.jpg`, tag: 'New', sponsored: false },
  ],

  memberships: [
    { name: 'The Regular', price: 1999, per: '/month', featured: false, perks: ['1 signature cut every month', '10% off all services', 'Priority weekday booking', 'Complimentary hot towel finish'] },
    { name: 'The Gentleman', price: 3999, per: '/month', featured: true, tag: 'Most Chosen', perks: ['2 services of your choice monthly', '15% off services & products', 'Dedicated master barber', 'Priority booking, all hours', 'Birthday royal shave on the house'] },
    { name: 'The Chairman', price: 7999, per: '/month', featured: false, perks: ['Unlimited cuts & beard work', '20% off everything', 'Private suite, every visit', 'At-home visits (2/quarter)', 'Concierge WhatsApp line'] },
  ],

  offers: [
    { off: '20%', title: 'First Chair Visit', desc: 'New to the atelier? Your first signature cut comes with 20% off and a beard consult.', code: 'FRESH20', img: `${IMG}/service-haircut.jpg` },
    { off: '₹500', title: 'Festival Grooming Pack', desc: 'Cut + royal shave + head massage bundle. This season only.', code: 'FESTIVE', img: `${IMG}/service-shave.jpg` },
    { off: 'FREE', title: 'Birthday Ritual', desc: 'A complimentary hot-towel shave in your birthday week. Our gift, every year.', code: 'BDAYKING', img: `${IMG}/hero-beard.jpg` },
    { off: '2X', title: 'Referral Rewards', desc: 'Send a friend to the chair — you both earn double loyalty points on the next visit.', code: 'BROCODE', img: `${IMG}/gallery-1.jpg` },
  ],

  testimonials: [
    { text: 'I have had haircuts in Milan, London and Dubai. Nothing comes close to the calm precision of this room. It is the only appointment I never move.', who: 'Vikram Oberoi', role: 'CEO, Meridian Capital', img: `${IMG}/stylist-2.jpg` },
    { text: 'Rohan mapped my beard to my jawline like an architect. Three months in and strangers ask who does my grooming. I do not tell them.', who: 'Aditya Rao', role: 'Film Producer', img: `${IMG}/stylist-3.jpg` },
    { text: 'The Chairman membership pays for itself in sanity. Private suite, same barber, zero small talk unless I start it. Perfect.', who: 'Farhan Qureshi', role: 'Surgeon', img: `${IMG}/stylist-1.jpg` },
    { text: 'Took my son for his first haircut. They treated a nervous six-year-old like a visiting dignitary. Customers for life.', who: 'Nikhil Bhatia', role: 'Architect', img: `${IMG}/gallery-3.jpg` },
  ],

  awards: [
    { yr: 2025, title: 'Best Luxury Men’s Salon — India', org: 'Vogue Beauty Awards', desc: 'National winner across 200+ nominated grooming houses.' },
    { yr: 2024, title: 'Barber Team of the Year', org: 'India Salon Awards', desc: 'Recognised for craft standards and apprentice program.' },
    { yr: 2023, title: 'Design Excellence — Retail Interiors', org: 'AD Design Awards', desc: 'For the espresso-and-bronze Bandra flagship atelier.' },
    { yr: 2022, title: 'Customer Experience Gold', org: 'CX Hospitality Council', desc: '98.4% satisfaction across 40,000+ annual appointments.' },
  ],

  faqs: [
    { q: 'Do I need an appointment or can I walk in?', a: 'We hold a small number of walk-in chairs at every atelier, but appointments are strongly recommended — evenings and weekends book out 3–4 days ahead. Members enjoy priority slots at all hours.' },
    { q: 'How long does a signature cut take?', a: 'Plan for 45 minutes. We do not double-book chairs, so your slot is yours entirely — consultation, cut, wash and styling included, never rushed.' },
    { q: 'Can I request the same barber every time?', a: 'Absolutely — and we encourage it. Great grooming is a relationship. Gentleman and Chairman members get a dedicated master barber as part of their plan.' },
    { q: 'What is the Royal Shave exactly?', a: 'A 40-minute ritual: pre-shave oil, two hot towels, lather brush, single-blade straight razor, cold towel and balm. It is our most-booked service for a reason.' },
    { q: 'Do you handle wedding and event grooming?', a: 'Yes — we run groom programs that start 90 days before the wedding: skin prep, beard architecture, colour correction and a day-of styling team at your venue.' },
    { q: 'What is your cancellation policy?', a: 'Free rescheduling up to 4 hours before your slot. No-shows are charged 50% to protect our barbers’ time.' },
  ],

  blogs: [
    { title: 'The Fade Is Not a Trend. It Is a Discipline.', excerpt: 'Why the best fades in the country take 40 minutes, and what your barber sees that you do not.', img: `${IMG}/service-clipper.jpg`, date: 'Jul 08, 2026', cat: 'Craft' },
    { title: 'A Gentleman’s Guide to Beard Oil', excerpt: 'Argan, jojoba, sandalwood — what actually works, what is marketing, and how to build a 60-second routine.', img: `${IMG}/service-beard-trim.jpg`, date: 'Jun 24, 2026', cat: 'Grooming' },
    { title: 'What Your Grey Says About You (Keep It)', excerpt: 'The case for blending, not erasing — and how low-contrast colour became our most requested service.', img: `${IMG}/stylist-3.jpg`, date: 'Jun 02, 2026', cat: 'Colour' },
  ],

  trending: ['Skin Fade', 'Textured Crop', 'Classic Pompadour', 'Beard Sculpt', 'Grey Blend', 'Buzz + Line-up'],

  aiSuggestion: {
    prompt: 'Oval face · thick straight hair · minimal styling time',
    result: 'A <b>textured crop with a mid skin-fade</b> suits your proportions — low maintenance, sharp for 4–5 weeks. Pair with matte clay. Kabir Sethi is our fade specialist; Tuesdays are quietest.',
  },
};
