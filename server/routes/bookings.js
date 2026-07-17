import { Router } from 'express';
import Booking from '../models/Booking.js';

const router = Router();

let dbReady = false;
export function setDbReady(v) {
  dbReady = v;
}

/* In-memory fallback so the demo works without MongoDB */
const memory = [];

function makeReference() {
  return 'FL-' + Math.random().toString(36).slice(2, 8).toUpperCase();
}

function validate(body) {
  const required = ['world', 'branch', 'service', 'stylist', 'date', 'time', 'name', 'phone'];
  const missing = required.filter((k) => !body || !body[k]);
  return missing.length ? `Missing fields: ${missing.join(', ')}` : null;
}

/* POST /api/bookings — create */
router.post('/', async (req, res) => {
  const err = validate(req.body);
  if (err) return res.status(400).json({ error: err });

  const doc = { ...req.body, reference: makeReference(), status: 'confirmed' };
  try {
    if (dbReady) {
      const saved = await Booking.create(doc);
      return res.status(201).json({ reference: saved.reference, id: saved._id });
    }
  } catch (e) {
    console.error('Mongo write failed, using memory:', e.message);
  }
  memory.push({ ...doc, createdAt: new Date().toISOString() });
  res.status(201).json({ reference: doc.reference, stored: 'memory' });
});

/* GET /api/bookings — list (admin/demo) */
router.get('/', async (_req, res) => {
  try {
    if (dbReady) {
      const all = await Booking.find().sort({ createdAt: -1 }).limit(200);
      return res.json(all);
    }
  } catch (e) {
    /* fall through */
  }
  res.json(memory.slice().reverse());
});

/* GET /api/bookings/:reference — lookup */
router.get('/:reference', async (req, res) => {
  const ref = req.params.reference.toUpperCase();
  try {
    if (dbReady) {
      const found = await Booking.findOne({ reference: ref });
      if (found) return res.json(found);
      return res.status(404).json({ error: 'Booking not found' });
    }
  } catch (e) {
    /* fall through */
  }
  const found = memory.find((b) => b.reference === ref);
  if (found) return res.json(found);
  res.status(404).json({ error: 'Booking not found' });
});

export default router;
