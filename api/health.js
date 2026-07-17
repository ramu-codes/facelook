// api/health.js  — Vercel Serverless Function
// Simple health-check endpoint: GET /api/health

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json({ ok: true, service: 'facelook-api', ts: new Date().toISOString() });
}
