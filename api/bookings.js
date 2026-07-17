// api/bookings.js  — Vercel Serverless Function
// Replaces server/routes/bookings.js
// Supports optional MongoDB Atlas via MONGO_URI env variable.
// Falls back to in-memory store when MongoDB is unavailable.

let mongoose;
let Booking;
let dbReady = false;

// ── MongoDB model (lazy-loaded only when MONGO_URI is set) ──────────────────
async function initDb() {
  if (!process.env.MONGO_URI) return;
  if (dbReady) return;
  try {
    mongoose = (await import('mongoose')).default;
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGO_URI, { serverSelectionTimeoutMS: 4000 });
    }
    const schema = new mongoose.Schema({
      world:   String,
      branch:  String,
      service: String,
      stylist: String,
      date:    String,
      time:    String,
      name:    String,
      phone:   String,
      price:   Number,
      reference: String,
      at: { type: Date, default: Date.now },
    });
    Booking = mongoose.models.Booking || mongoose.model('Booking', schema);
    dbReady = true;
  } catch {
    dbReady = false;
  }
}

// ── In-memory fallback ──────────────────────────────────────────────────────
const memStore = [];

// ── Helper: generate reference ──────────────────────────────────────────────
function genRef() {
  return 'FL-' + Math.random().toString(36).slice(2, 8).toUpperCase();
}

// ── Handler ─────────────────────────────────────────────────────────────────
export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(204).end();

  await initDb();

  // GET /api/bookings
  if (req.method === 'GET') {
    if (dbReady) {
      const all = await Booking.find().sort({ at: -1 }).limit(200);
      return res.json(all);
    }
    return res.json(memStore);
  }

  // POST /api/bookings
  if (req.method === 'POST') {
    const { world, branch, service, stylist, date, time, name, phone, price } = req.body || {};
    if (!name || !phone || !service || !date || !time) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    const reference = genRef();
    const doc = { world, branch, service, stylist, date, time, name, phone, price, reference, at: new Date().toISOString() };

    if (dbReady) {
      const saved = await new Booking(doc).save();
      return res.status(201).json({ ok: true, reference: saved.reference, id: saved._id });
    }
    memStore.push(doc);
    return res.status(201).json({ ok: true, reference });
  }

  res.status(405).json({ error: 'Method not allowed' });
}
