# 🌐 Setting Up Your Domain with Vercel

## Your Current Setup

You have: `www.kogniplay.com` (likely on GitHub Pages or similar)

## Three Options

---

## Option 1: Keep Existing Site, Use Vercel API Only (Recommended)

**Best if:** You want to keep your current hosting but use Vercel for the survey API.

### How it works:
- Your main site stays at `www.kogniplay.com` (current hosting)
- Deploy just the API to Vercel
- Survey form calls Vercel's API endpoint

### Setup:

1. **Deploy to Vercel** (creates: `kogniplay.vercel.app`)

2. **Update `survey.html`** to use Vercel's API:
   ```javascript
   // Change this line in survey.html (around line 260):
   const apiUrl = 'https://kogniplay.vercel.app/api/survey';
   ```

3. **Upload updated `survey.html`** to your current hosting

**Result:**
- ✅ `www.kogniplay.com` - Your main site (unchanged)
- ✅ `www.kogniplay.com/survey.html` - Survey page (calls Vercel API)
- ✅ No changes to your domain settings needed

---

## Option 2: Move Everything to Vercel

**Best if:** You want to use Vercel for everything.

### How it works:
- Deploy entire site to Vercel
- Point your domain to Vercel
- Everything runs on Vercel

### Setup:

1. **Deploy to Vercel:**
   ```bash
   vercel --prod
   ```

2. **Add Custom Domain in Vercel:**
   - Go to Vercel Dashboard → Your Project → Settings → Domains
   - Add: `www.kogniplay.com`
   - Add: `kogniplay.com` (optional, for non-www)

3. **Update DNS Records:**
   - Go to your domain registrar (where you bought kogniplay.com)
   - Add CNAME record:
     - Name: `www`
     - Value: `cname.vercel-dns.com`
   - Or add A record (Vercel will show you the IP)

4. **Wait for DNS propagation** (5-60 minutes)

**Result:**
- ✅ `www.kogniplay.com` - Points to Vercel
- ✅ `www.kogniplay.com/survey.html` - Works on Vercel
- ✅ All your pages on Vercel

---

## Option 3: Deploy to Vercel, Keep Domain on Current Host

**Best if:** You want to test Vercel first before switching.

### How it works:
- Deploy to Vercel (creates: `kogniplay.vercel.app`)
- Keep your domain pointing to current hosting
- Access Vercel version via: `kogniplay.vercel.app`

### Setup:

1. **Deploy to Vercel** (no domain changes needed)

2. **Test at:** `https://kogniplay.vercel.app/survey.html`

3. **When ready, switch to Option 2**

**Result:**
- ✅ `www.kogniplay.com` - Still on current hosting
- ✅ `kogniplay.vercel.app` - Vercel version (for testing)
- ✅ Easy to switch later

---

## Which Option Should You Choose?

### Choose Option 1 if:
- ✅ You're happy with current hosting
- ✅ You just want the survey to work
- ✅ You don't want to change DNS

### Choose Option 2 if:
- ✅ You want everything on Vercel
- ✅ You want better performance
- ✅ You're okay updating DNS

### Choose Option 3 if:
- ✅ You want to test first
- ✅ You're not sure yet
- ✅ You want both versions running

---

## Important Notes

⚠️ **Deploying to Vercel does NOT automatically replace your existing site**

- Vercel creates a NEW deployment
- Your existing site stays live until you change DNS
- You can test Vercel version without affecting current site

---

## Quick Answer

**Yes, `www.kogniplay.com/survey.html` will still work!**

- If you choose **Option 1**: It keeps working, just uses Vercel API
- If you choose **Option 2**: It moves to Vercel (after DNS update)
- If you choose **Option 3**: Both versions work (current + Vercel)

---

## Need Help?

- Vercel Domain Docs: https://vercel.com/docs/concepts/projects/domains
- DNS Help: Contact your domain registrar

