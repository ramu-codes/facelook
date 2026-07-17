import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bookingsRouter, { setDbReady } from './routes/bookings.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/facelook';

app.use(cors());
app.use(express.json());

/* ---- MongoDB (optional — falls back to in-memory storage) ---- */
mongoose
  .connect(MONGO_URI, { serverSelectionTimeoutMS: 4000 })
  .then(() => {
    setDbReady(true);
    console.log('✓ MongoDB connected —', MONGO_URI);
  })
  .catch(() => {
    setDbReady(false);
    console.log('⚠ MongoDB not reachable — using in-memory store (bookings reset on restart).');
  });

app.use('/api/bookings', bookingsRouter);

/* ---- Contact messages (in-memory demo) ---- */
const messages = [];
app.post('/api/contact', (req, res) => {
  const { name, email, phone, message, world } = req.body || {};
  if (!name || !email || !message) return res.status(400).json({ error: 'name, email and message are required' });
  messages.push({ name, email, phone, message, world, at: new Date().toISOString() });
  res.status(201).json({ ok: true });
});

app.get('/api/health', (_req, res) => res.json({ ok: true, service: 'facelook-api' }));

app.listen(PORT, () => console.log(`FACELOOK API running on http://localhost:${PORT}`));
