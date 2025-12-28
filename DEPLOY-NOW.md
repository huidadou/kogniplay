# 🚀 Deploy to Vercel Now - Option 1

## Your GitHub Repo
✅ Already connected: `https://github.com/huidadou/kogniplay.git`

## Quick Deployment (Choose One)

---

## Method 1: Vercel Website (Easiest - 2 minutes)

### Step 1: Commit and Push Changes

```bash
cd /Users/luna/Documents/KogniPlay
git add survey.html api/ vercel.json .gitignore
git commit -m "Add survey form with Vercel serverless API"
git push
```

### Step 2: Deploy on Vercel Website

1. **Go to:** https://vercel.com
2. **Sign up/Login** (use GitHub - it's easiest)
3. **Click:** "Add New..." → "Project"
4. **Import Git Repository:**
   - You'll see: `huidadou/kogniplay`
   - Click **"Import"**
5. **Configure Project:**
   - Framework Preset: **Other** (or leave default)
   - Root Directory: `./` (default)
   - Build Command: (leave empty)
   - Output Directory: `./` (default)
6. **Click:** "Deploy"
7. **Wait 1-2 minutes** for deployment
8. **Copy your Vercel URL** (e.g., `kogniplay-abc123.vercel.app`)

### Step 3: Update survey.html with Vercel URL

After you get your Vercel URL, update `survey.html` line 273:

```javascript
// Change this:
apiUrl = 'https://kogniplay.vercel.app/api/survey';

// To your actual Vercel URL:
apiUrl = 'https://YOUR-VERCEL-URL.vercel.app/api/survey';
```

Then commit and push:
```bash
git add survey.html
git commit -m "Update survey to use Vercel API endpoint"
git push
```

### Step 4: Upload to Your Current Hosting

Upload the updated `survey.html` to your current hosting (GitHub Pages, etc.)

---

## Method 2: Vercel CLI

### Step 1: Install and Login

```bash
cd /Users/luna/Documents/KogniPlay

# Load Node.js
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Install Vercel CLI
npm install -g vercel

# Login
vercel login
```

### Step 2: Deploy

```bash
vercel
```

Follow prompts:
- Set up and deploy? → **Y**
- Which scope? → Select your account
- Link to existing project? → **N** (first time)
- Project name? → Press Enter (uses "kogniplay")
- Directory? → Press Enter (uses `./`)

### Step 3: Get Your URL

After deployment, you'll see:
```
✅ Production: https://kogniplay-xxxxx.vercel.app
```

Copy this URL!

### Step 4: Update survey.html

Same as Method 1, Step 3 above.

---

## After Deployment Checklist

- [ ] Deployed to Vercel
- [ ] Got Vercel URL
- [ ] Updated line 273 in `survey.html` with Vercel URL
- [ ] Committed and pushed updated `survey.html`
- [ ] Uploaded `survey.html` to current hosting
- [ ] Tested: `www.kogniplay.com/survey.html`

---

## What Happens Next

1. ✅ Vercel deploys your site (including `api/survey.js`)
2. ✅ You get a Vercel URL
3. ✅ You update `survey.html` to use that URL
4. ✅ When someone visits `www.kogniplay.com/survey.html`:
   - Form loads from your current hosting
   - Form submits to Vercel API
   - Works perfectly! 🎉

---

## Need Help?

- Vercel Docs: https://vercel.com/docs
- Your repo: https://github.com/huidadou/kogniplay

