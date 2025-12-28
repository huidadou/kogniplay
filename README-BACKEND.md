# Backend Setup for KogniPlay Survey

This backend server handles survey form submissions and saves them to a JSON file.

## Setup Instructions

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the server:**
   ```bash
   npm start
   ```
   
   The server will run on `http://localhost:3000`

3. **Access the survey:**
   - Open `http://localhost:3000/survey.html` in your browser
   - Submit the form and responses will be saved to `survey-submissions.json`

## API Endpoints

- **POST `/api/survey`** - Submit survey responses
  - Accepts JSON data with all survey fields
  - Saves to `survey-submissions.json`
  - Returns success/error response

- **GET `/api/submissions`** - View all submissions (for admin use)
  - Returns JSON array of all submissions

## Production Deployment

For production, you'll need to:

1. **Deploy the server** to a hosting service (Heroku, Railway, Render, etc.)
2. **Update the API URL** in `survey.html` to point to your production server
3. **Set environment variables** if needed (PORT, etc.)
4. **Consider using a database** instead of JSON file for production (MongoDB, PostgreSQL, etc.)

## File Structure

- `server.js` - Express server handling API requests
- `survey-submissions.json` - Stores all survey responses (created automatically)
- `package.json` - Node.js dependencies
- `.gitignore` - Excludes node_modules and submissions file from git

## Notes

- The server also serves static files, so you can access your HTML pages through it
- Survey submissions are stored with timestamps
- The JSON file is created automatically on first submission



