export const branches = [
  { id: 'bandra', name: 'Bandra West', city: 'Mumbai', address: '14 Hill Road, Bandra West, Mumbai 400050', phone: '+91 98200 14001', hours: 'Tue–Sun · 10am – 9pm', near: true },
  { id: 'juhu', name: 'Juhu', city: 'Mumbai', address: '2 Silver Beach Road, Juhu, Mumbai 400049', phone: '+91 98200 14002', hours: 'Tue–Sun · 10am – 9pm', near: false },
  { id: 'indiranagar', name: 'Indiranagar', city: 'Bengaluru', address: '100 Ft Road, Indiranagar, Bengaluru 560038', phone: '+91 98200 14003', hours: 'Tue–Sun · 10am – 9pm', near: false },
  { id: 'gk2', name: 'Greater Kailash II', city: 'New Delhi', address: 'M Block Market, GK II, New Delhi 110048', phone: '+91 98200 14004', hours: 'Tue–Sun · 10am – 9pm', near: false },
];

export const timeSlots = [
  '10:00 AM', '10:45 AM', '11:30 AM', '12:15 PM', '01:00 PM', '01:45 PM',
  '02:30 PM', '03:15 PM', '04:00 PM', '04:45 PM', '05:30 PM', '06:15 PM',
  '07:00 PM', '07:45 PM', '08:30 PM',
];

// deterministic pseudo-random "unavailable" slots per date
export function unavailableFor(dateStr) {
  let h = 0;
  for (let i = 0; i < dateStr.length; i++) h = (h * 31 + dateStr.charCodeAt(i)) % 997;
  const out = new Set();
  for (let i = 0; i < 4; i++) out.add((h + i * 7) % timeSlots.length);
  return out;
}

export const navPages = [
  { to: '', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/stylists', label: 'Stylists' },
  {
    label: 'Gallery',
    children: [
      { to: '/gallery', label: 'Photo Gallery' },
      { to: '/videos', label: 'Video Gallery' },
    ],
  },
  {
    label: 'More',
    children: [
      { to: '/products', label: 'Products' },
      { to: '/membership', label: 'Membership' },
      { to: '/offers', label: 'Offers' },
      { to: '/testimonials', label: 'Testimonials' },
      { to: '/awards', label: 'Awards' },
      { to: '/faqs', label: 'FAQs' },
      { to: '/blogs', label: 'Blogs' },
    ],
  },
  { to: '/contact', label: 'Contact' },
];

export const flatPages = [
  { to: '', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/stylists', label: 'Stylists' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/videos', label: 'Video Gallery' },
  { to: '/products', label: 'Products' },
  { to: '/membership', label: 'Membership' },
  { to: '/offers', label: 'Offers' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/awards', label: 'Awards' },
  { to: '/faqs', label: 'FAQs' },
  { to: '/blogs', label: 'Blogs' },
  { to: '/booking', label: 'Booking' },
  { to: '/contact', label: 'Contact' },
];
