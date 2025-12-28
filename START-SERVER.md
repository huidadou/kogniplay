# 🚀 Start the Server

## Quick Start

**Open a NEW Terminal window** and run:

```bash
cd /Users/luna/Documents/KogniPlay
./setup-and-run.sh
```

This will:
1. Install dependencies (first time only)
2. Start the server
3. Show you the URL to access the survey

---

## Manual Steps (if script doesn't work)

### Step 1: Open Terminal
Open a **new Terminal window** (important - new window!)

### Step 2: Navigate to project
```bash
cd /Users/luna/Documents/KogniPlay
```

### Step 3: Load Node.js
```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```

### Step 4: Install dependencies (first time only)
```bash
npm install
```

### Step 5: Start server
```bash
npm start
```

You should see:
```
Server running on http://localhost:3000
Survey endpoint: http://localhost:3000/api/survey
```

### Step 6: Test the survey
1. Open your browser
2. Go to: **http://localhost:3000/survey.html**
3. Fill out and submit the form

---

## What to Expect

- ✅ Server starts on port 3000
- ✅ Survey form works at `/survey.html`
- ✅ Submissions saved to `survey-submissions.json`
- ✅ Thank you page after submission

---

## Stop the Server

Press **Ctrl + C** in the terminal where the server is running.

---

## Troubleshooting

**"command not found: npm"**
- Open a NEW terminal window
- Run the nvm load command from Step 3 above

**"Port 3000 is already in use"**
- Another program is using that port
- Change port in `server.js` line 6 to `3001` or another number

**"Cannot find module 'express'"**
- Run `npm install` again

