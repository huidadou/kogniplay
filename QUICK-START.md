# Quick Start - Install Node.js & Run Server

## Method 1: Automatic Installation (Recommended)

Run this command in Terminal:

```bash
cd /Users/luna/Documents/KogniPlay
./install-node.sh
```

Then continue with Step 2 below.

---

## Method 2: Manual Installation

### Step 1: Install Node.js

1. **Open your web browser**
2. **Go to:** https://nodejs.org/
3. **Click** "Download Node.js (LTS)" - the green button
4. **Open the downloaded file** (it will be a `.pkg` file)
5. **Follow the installer** - just click "Continue" and "Install"
6. **Enter your password** when prompted
7. **Close and reopen Terminal** (important!)

### Step 2: Verify Installation

Open Terminal and run:
```bash
node --version
npm --version
```

You should see version numbers. If you see "command not found", restart Terminal.

### Step 3: Install Dependencies

```bash
cd /Users/luna/Documents/KogniPlay
npm install
```

### Step 4: Start the Server

```bash
npm start
```

You should see:
```
Server running on http://localhost:3000
```

**Keep this terminal open!**

### Step 5: Test the Survey

1. Open your browser
2. Go to: `http://localhost:3000/survey.html`
3. Fill out and submit the form

---

## Troubleshooting

**"command not found: node"**
- Node.js isn't installed or Terminal wasn't restarted
- Restart Terminal and try again
- Or install Node.js from nodejs.org

**"Port 3000 is already in use"**
- Another program is using that port
- Change the port in `server.js` (line 6) to something else like `3001`

**"Cannot find module 'express'"**
- Run `npm install` again

---

## Need Help?

If you're stuck, you can also use a simpler solution:
- Use a form service like Formspree (no backend needed)
- Or I can help you set up a different backend solution

