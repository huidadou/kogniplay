# 📤 Update GitHub with Survey Changes

## ✅ Survey.html is Ready!

Your `survey.html` is already configured with:
- ✅ Vercel URL: `https://kogniplay.vercel.app/api/survey`
- ✅ Auto-detects when on `kogniplay.com` domain
- ✅ Ready to commit and push

---

## ⚠️ Disk Space Issue

Your disk is 99% full, which prevents git commits. You need to free up space first.

### Quick Ways to Free Space:

1. **Empty Trash**
   - Right-click Trash → Empty Trash

2. **Clear Browser Cache**
   - Chrome: Settings → Privacy → Clear browsing data
   - Safari: Develop → Empty Caches

3. **Delete Large Files**
   - Check Downloads folder
   - Check Desktop for large files
   - Use: `du -sh ~/Downloads/* | sort -h` to find large files

4. **Clear System Cache**
   ```bash
   sudo rm -rf ~/Library/Caches/*
   ```

5. **Check for Large Files**
   ```bash
   # Find files larger than 100MB
   find ~ -size +100M -type f 2>/dev/null | head -20
   ```

---

## After Freeing Space: Commit & Push

Once you have at least 1-2GB free space:

### Step 1: Check Status
```bash
cd /Users/luna/Documents/KogniPlay
git status
```

### Step 2: Add Files
```bash
git add survey.html api/ vercel.json index.html kogni-method.html thank-you.html .gitignore
```

### Step 3: Commit
```bash
git commit -m "Add survey form with Vercel serverless API"
```

### Step 4: Push
```bash
git push origin main
```

---

## What Gets Updated

After pushing:
- ✅ `survey.html` - Survey form with Vercel API
- ✅ `api/survey.js` - Serverless function
- ✅ `vercel.json` - Vercel configuration
- ✅ Updated navigation links in `index.html` and `kogni-method.html`

---

## Test After Update

1. Visit: `www.kogniplay.com/survey.html`
2. Fill out the form
3. Submit
4. Should redirect to thank-you page ✅

The form will automatically call: `https://kogniplay.vercel.app/api/survey`

---

## Quick Command (After Freeing Space)

```bash
cd /Users/luna/Documents/KogniPlay
git add survey.html api/ vercel.json index.html kogni-method.html thank-you.html .gitignore
git commit -m "Add survey form with Vercel serverless API"
git push
```

---

## Need Help?

If you need help freeing space or have issues, let me know!

