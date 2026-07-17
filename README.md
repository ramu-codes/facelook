# FACELOOK 2.0 — Luxury Unisex Salon

A full-stack React + Node.js salon website featuring two themed worlds (Men's Atelier & Women's Maison) with service booking, gallery, stylists, membership, and more.

## ✨ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18, Vite, Framer Motion, GSAP, Three.js, Lenis |
| Routing | React Router DOM v6 |
| Backend (prod) | Vercel Serverless Functions |
| Backend (local dev) | Node.js / Express |
| Database | MongoDB (optional) — in-memory fallback included |

---

## 🚀 Deploy to Vercel (One-Click)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import this repo
3. Vercel auto-detects `vercel.json` — no settings needed, just click **Deploy**

### Optional: Add MongoDB Atlas (for persistent bookings)
1. Create a free cluster at [mongodb.com/atlas](https://www.mongodb.com/atlas)
2. In Vercel project → **Settings → Environment Variables**, add:
   ```
   MONGO_URI = mongodb+srv://user:pass@cluster.mongodb.net/facelook
   ```
3. Redeploy — bookings will now persist across sessions.

---

## 💻 Local Development

### Prerequisites
- Node.js 18+
- npm

### Run the Frontend

```bash
cd client
npm install
npm run dev
# → http://localhost:5173
```

### Run the Backend (optional — frontend works without it)

```bash
cd server
cp .env.example .env   # edit MONGO_URI if needed
npm install
npm run dev
# → http://localhost:5000
```

The Vite dev server proxies `/api/*` requests to `localhost:5000` automatically.

---

## 📁 Project Structure

```
facelook/
├── client/          # React SPA (Vite)
│   ├── src/
│   │   ├── pages/   # Route-level page components
│   │   ├── components/
│   │   ├── context/ # SalonContext (men/women theme)
│   │   ├── hooks/
│   │   ├── data/    # Static data (services, stylists, etc.)
│   │   └── styles/  # Global CSS
│   └── vite.config.js
├── api/             # Vercel Serverless Functions
│   ├── bookings.js
│   ├── contact.js
│   └── health.js
├── server/          # Express server (local dev only)
└── vercel.json      # Vercel deployment config
```

---

## 📄 License

MIT — feel free to use this as a template.
