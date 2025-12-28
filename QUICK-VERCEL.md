# ⚡ Quick Vercel Deployment

## Fastest Way (Using Website - No CLI Needed)

### 1. Push to GitHub

If you haven't already, create a GitHub repo and push your code:

```bash
cd /Users/luna/Documents/KogniPlay
git init
git add .
git commit -m "Initial commit"
# Create a repo on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/kogniplay.git
git push -u origin main
```

### 2. Deploy on Vercel

1. **Go to:** https://vercel.com
2. **Sign up/Login** (use GitHub - easiest)
3. **Click "Add New..." → "Project"**
4. **Import your GitHub repository**
5. **Click "Import"**
6. **Click "Deploy"** (Vercel auto-detects everything!)

### 3. Done! 🎉

Your site is live at: `https://your-project.vercel.app`

Test your survey at: `https://your-project.vercel.app/survey.html`

---

## Using CLI (Alternative)

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
cd /Users/luna/Documents/KogniPlay
vercel

# Follow the prompts!
```

---

## What Happens

✅ Your static site is deployed
✅ `api/survey.js` becomes a serverless function
✅ Survey form works automatically
✅ No server needed!

---

## That's It!

Your survey is now live and working. Every time you push to GitHub, Vercel automatically redeploys your site.

