# 🚀 Deploy to Vercel - Step by Step

## Method 1: Using Vercel CLI (Recommended)

### Step 1: Install Vercel CLI

Open a **new Terminal window** and run:

```bash
cd /Users/luna/Documents/KogniPlay

# Load Node.js (if using nvm)
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Install Vercel CLI globally
npm install -g vercel
```

### Step 2: Login to Vercel

```bash
vercel login
```

This will:
- Open your browser
- Ask you to login (GitHub, GitLab, or email)
- Authorize Vercel

### Step 3: Deploy Your Site

```bash
cd /Users/luna/Documents/KogniPlay
vercel
```

You'll be asked:
1. **Set up and deploy?** → Type `Y` and press Enter
2. **Which scope?** → Select your account
3. **Link to existing project?** → Type `N` (first time)
4. **What's your project's name?** → Press Enter (uses "KogniPlay")
5. **In which directory is your code located?** → Press Enter (uses `./`)

Vercel will:
- ✅ Detect your files
- ✅ Deploy your site
- ✅ Set up the serverless function automatically
- ✅ Give you a URL like: `https://kogniplay.vercel.app`

### Step 4: Test Your Survey

1. Visit your Vercel URL
2. Go to `/survey.html`
3. Fill out and submit the form
4. It should work! 🎉

### Step 5: (Optional) Add Custom Domain

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click on your project
3. Go to **Settings** → **Domains**
4. Add your custom domain

---

## Method 2: Using Vercel Website (Easier, No CLI)

### Step 1: Push to GitHub (if not already)

1. Create a GitHub repository
2. Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/kogniplay.git
   git push -u origin main
   ```

### Step 2: Import to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **"Add New..."** → **"Project"**
3. **Import Git Repository** → Select your GitHub repo
4. Click **"Import"**

### Step 3: Configure Project

Vercel will auto-detect:
- ✅ Framework: Other (static site)
- ✅ Build Command: (leave empty)
- ✅ Output Directory: `.` (current directory)

**Just click "Deploy"!**

### Step 4: Wait for Deployment

- Takes about 1-2 minutes
- You'll see a success message
- Your site is live! 🎉

---

## What Gets Deployed

✅ **Static files:**
- `index.html`
- `survey.html`
- `kogni-method.html`
- `thank-you.html`
- All assets (CSS, images, JS)

✅ **Serverless function:**
- `api/survey.js` → Automatically becomes `/api/survey` endpoint
- No server needed!
- Runs on-demand

---

## After Deployment

### Your Survey Will Work At:
- `https://your-project.vercel.app/survey.html`

### The API Endpoint:
- `https://your-project.vercel.app/api/survey`

### View Your Site:
- Go to your Vercel dashboard
- Click on your project
- See your live URL

---

## Updating Your Site

### Using CLI:
```bash
vercel --prod
```

### Using Website:
- Just push to GitHub
- Vercel auto-deploys on every push!

---

## Troubleshooting

### "Command not found: vercel"
- Make sure you installed it: `npm install -g vercel`
- Make sure Node.js is loaded (if using nvm)

### "Function not found"
- Make sure `api/survey.js` exists
- Check `vercel.json` configuration

### "CORS error"
- The serverless function already has CORS enabled
- If issues persist, check browser console

### Survey form doesn't work
- Make sure you're accessing via the Vercel URL (not `file://`)
- Check browser console (F12) for errors
- Verify the API endpoint is correct

---

## Next Steps

1. **Test the survey** on your live site
2. **Add custom domain** (optional)
3. **Set up automatic deployments** (already done if using GitHub)
4. **Monitor submissions** (you'll need to add database/email later)

---

## Need Help?

- Vercel Docs: https://vercel.com/docs
- Vercel Support: https://vercel.com/support

