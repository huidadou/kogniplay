# Push Your Commits - Quick Guide

## You Have 2 Commits Ready to Push:
1. `2408ca9` - Add survey form with Vercel serverless API support
2. `01a5aa0` - Add survey form with Vercel serverless API

---

## Method 1: Terminal (Recommended)

Open Terminal and run:

```bash
cd /Users/luna/Documents/KogniPlay
git push origin main
```

**When prompted:**
- **Username:** `huidadou` (or your GitHub username)
- **Password:** Use a **Personal Access Token** (not your GitHub password)

### To Create a Personal Access Token:
1. Go to: https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Name: "KogniPlay Push"
4. Select: `repo` scope
5. Click "Generate token"
6. **Copy the token** (you'll only see it once!)
7. Use it as the password when pushing

---

## Method 2: GitHub Desktop

1. **Open GitHub Desktop**
2. **File → Add Local Repository**
3. **Browse to:** `/Users/luna/Documents/KogniPlay`
4. **Add Repository**
5. You should now see "2 commits to push"
6. Click **"Push origin"**

---

## Method 3: VS Code

1. Open VS Code
2. Open folder: `/Users/luna/Documents/KogniPlay`
3. Click Source Control icon (left sidebar)
4. You should see "2 commits" to push
5. Click "..." menu → "Push"

---

## After Pushing

Once pushed, your GitHub repo will be updated and:
- ✅ `survey.html` will be live
- ✅ `api/survey.js` will be on GitHub
- ✅ Your site will use the Vercel API

---

## Quick Test Command

After pushing, verify with:
```bash
git log origin/main --oneline -3
```

You should see your 2 commits there!

