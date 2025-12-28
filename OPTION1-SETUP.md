# ✅ Option 1 Setup: Keep Current Site + Use Vercel API

## What This Does

- ✅ Your site stays at `www.kogniplay.com` (no changes)
- ✅ Survey form uses Vercel's serverless API
- ✅ No DNS changes needed
- ✅ No downtime

---

## Step-by-Step Instructions

### Step 1: Deploy to Vercel

**Using Vercel Website (Easiest):**

1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login (use GitHub)
3. Click **"Add New..." → "Project"**
4. **Import your GitHub repository** (or push code to GitHub first)
5. Click **"Deploy"**

**Or Using CLI:**
```bash
cd /Users/luna/Documents/KogniPlay
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
npm install -g vercel
vercel login
vercel
```

**You'll get a URL like:** `https://kogniplay-xxxxx.vercel.app` or `https://kogniplay.vercel.app`

---

### Step 2: Update Survey Form with Vercel URL

After deployment, you'll have a Vercel URL. Update `survey.html`:

1. **Open:** `survey.html`
2. **Find line ~270** (look for the `apiUrl` assignment)
3. **Replace** `kogniplay.vercel.app` with your actual Vercel URL:

```javascript
} else if (window.location.hostname.includes('kogniplay.com')) {
  // Your domain - use Vercel API
  apiUrl = 'https://YOUR-VERCEL-URL.vercel.app/api/survey';
  //                    ^^^^^^^^^^^^^^^^^^^^
  //                    Replace with your actual Vercel URL
}
```

**Example:**
If your Vercel URL is `kogniplay-abc123.vercel.app`, change it to:
```javascript
apiUrl = 'https://kogniplay-abc123.vercel.app/api/survey';
```

---

### Step 3: Upload Updated survey.html

Upload the updated `survey.html` to your current hosting (GitHub Pages, etc.):

**If using GitHub Pages:**
```bash
git add survey.html
git commit -m "Update survey to use Vercel API"
git push
```

**If using FTP/other hosting:**
- Upload `survey.html` to replace the existing file

---

### Step 4: Test

1. Visit: `www.kogniplay.com/survey.html`
2. Fill out the form
3. Submit
4. Should redirect to thank-you page ✅

---

## How It Works

```
User visits: www.kogniplay.com/survey.html
    ↓
Form detects: "I'm on kogniplay.com"
    ↓
Form calls: https://kogniplay.vercel.app/api/survey
    ↓
Vercel serverless function processes submission
    ↓
Returns success
    ↓
User redirected to thank-you.html
```

---

## Troubleshooting

### Form doesn't submit
- Check browser console (F12) for errors
- Verify Vercel URL is correct in `survey.html`
- Make sure Vercel deployment is live

### CORS error
- The Vercel function already has CORS enabled
- If issues persist, check Vercel function logs

### "Cannot connect to API"
- Verify Vercel URL is correct
- Check that Vercel deployment succeeded
- Test Vercel URL directly: `https://your-vercel-url.vercel.app/api/survey`

---

## What Gets Deployed to Vercel

- ✅ `api/survey.js` - Serverless function (the API)
- ✅ Other files (but you won't use them, just the API)

**Your main site files stay on your current hosting!**

---

## Benefits

✅ **No downtime** - Your site keeps working
✅ **No DNS changes** - Domain stays where it is
✅ **Serverless API** - No server to maintain
✅ **Easy to update** - Just update survey.html file

---

## Next Steps After Setup

1. ✅ Deploy to Vercel
2. ✅ Update Vercel URL in survey.html
3. ✅ Upload survey.html to your hosting
4. ✅ Test the form
5. ✅ Done!

---

## Need to Switch Later?

If you want to move everything to Vercel later:
- Just follow Option 2 in `DOMAIN-SETUP.md`
- Your survey will already be configured!

