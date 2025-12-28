# Step-by-Step Setup Instructions

## Step 1: Install Node.js

You need Node.js to run the backend server. Choose one method:

### Option A: Download from Official Website (Easiest)
1. Go to https://nodejs.org/
2. Download the **LTS version** (recommended)
3. Run the installer and follow the instructions
4. Restart your terminal

### Option B: Install with Homebrew (if you have it)
```bash
brew install node
```

### Verify Installation
Open Terminal and run:
```bash
node --version
npm --version
```
You should see version numbers (e.g., `v18.17.0` and `9.6.7`)

---

## Step 2: Install Project Dependencies

1. Open Terminal
2. Navigate to your project folder:
   ```bash
   cd /Users/luna/Documents/KogniPlay
   ```

3. Install the required packages:
   ```bash
   npm install
   ```
   
   This will create a `node_modules` folder and install Express and CORS.

---

## Step 3: Start the Server

Run this command:
```bash
npm start
```

You should see:
```
Server running on http://localhost:3000
Survey endpoint: http://localhost:3000/api/survey
```

**Keep this terminal window open** - the server needs to keep running!

---

## Step 4: Test the Survey

1. Open your web browser
2. Go to: `http://localhost:3000/survey.html`
3. Fill out the survey form
4. Click "Submit Feedback"
5. You should be redirected to the thank-you page

---

## Step 5: View Submissions

Survey responses are saved in `survey-submissions.json` in your project folder.

You can also view them via the API:
- Open: `http://localhost:3000/api/submissions` in your browser

---

## Troubleshooting

### "command not found: node"
- Node.js is not installed. Go back to Step 1.

### "Port 3000 is already in use"
- Another program is using port 3000. Either:
  - Stop that program, OR
  - Change the port in `server.js` (line 6: `const PORT = process.env.PORT || 3000;`)

### "Cannot find module 'express'"
- Run `npm install` again in the project folder.

### Form submission doesn't work
- Make sure the server is running (Step 3)
- Check the browser console (F12) for errors
- Make sure you're accessing the page through `http://localhost:3000/survey.html` (not `file://`)

---

## Stopping the Server

Press `Ctrl + C` in the terminal where the server is running.

---

## Next Steps for Production

When you're ready to deploy:

1. **Choose a hosting service:**
   - Heroku (free tier available)
   - Railway
   - Render
   - DigitalOcean
   - AWS/Google Cloud

2. **Update the API URL in survey.html:**
   - Change the API endpoint to your production server URL

3. **Consider using a database:**
   - For production, use MongoDB, PostgreSQL, or similar instead of JSON file



