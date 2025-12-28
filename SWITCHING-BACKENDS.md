# Switching Between Serverless and Server-Based Backend

## ✅ It's Super Easy!

The form only needs to know **where to send data**. Switching is just changing one URL.

---

## Current Setup

**Serverless Mode** (default):
- Uses: `/api/survey` (relative path)
- Works with: Vercel, Netlify, or any serverless platform
- No server needed 24/7

**Server-Based Mode** (for testing):
- Uses: `http://localhost:3000/api/survey`
- Requires: `server.js` running locally

---

## How to Switch

### Option 1: Use Serverless (Recommended)

**Already set up!** Just deploy to Vercel or Netlify:

1. **Deploy to Vercel:**
   ```bash
   npm install -g vercel
   vercel
   ```
   - The `api/survey.js` file will automatically work
   - Form will use `/api/survey` endpoint

2. **Deploy to Netlify:**
   - Connect your GitHub repo
   - Netlify will detect the `api/` folder
   - Form will use `/api/survey` endpoint

**No code changes needed!** ✅

---

### Option 2: Switch to Server-Based

**Edit `survey.html`** (around line 250):

**Change this:**
```javascript
const apiUrl = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
  ? 'http://localhost:3000/api/survey'
  : '/api/survey';  // Serverless
```

**To this:**
```javascript
// Server-based (always use your server)
const apiUrl = 'https://your-server-domain.com/api/survey';
```

**Or for local testing:**
```javascript
const apiUrl = 'http://localhost:3000/api/survey';
```

That's it! ✅

---

## Comparison

| Feature | Serverless | Server-Based |
|---------|-----------|--------------|
| **24/7 Server Needed** | ❌ No | ✅ Yes |
| **Cost** | Free tier available | Varies |
| **Setup Complexity** | Easy (just deploy) | Medium (need hosting) |
| **Scalability** | Auto-scales | Manual scaling |
| **Best For** | Production sites | Full control needed |

---

## Quick Reference

### Serverless Endpoints:
- Vercel: `/api/survey` (auto-detected)
- Netlify: `/api/survey` (auto-detected)
- AWS Lambda: Your Lambda URL
- Cloudflare Workers: Your Worker URL

### Server-Based Endpoints:
- Local: `http://localhost:3000/api/survey`
- Production: `https://yourdomain.com/api/survey`
- Railway: `https://your-app.railway.app/api/survey`
- Render: `https://your-app.onrender.com/api/survey`

---

## Recommendation

**Start with Serverless** (Vercel/Netlify):
- ✅ Free
- ✅ No maintenance
- ✅ Easy to switch later if needed

**Switch to Server-Based** if you need:
- Custom database logic
- Complex processing
- More control over data storage

---

## Files Created

- `api/survey.js` - Serverless function (works with Vercel/Netlify)
- `vercel.json` - Vercel configuration
- `server.js` - Server-based backend (already exists)

Both can coexist! Just change the URL in `survey.html` to switch between them.

