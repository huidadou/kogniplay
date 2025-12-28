const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;
const SUBMISSIONS_FILE = path.join(__dirname, 'survey-submissions.json');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname)); // Serve static files

// Initialize submissions file if it doesn't exist
async function initSubmissionsFile() {
  try {
    await fs.access(SUBMISSIONS_FILE);
  } catch {
    await fs.writeFile(SUBMISSIONS_FILE, JSON.stringify([], null, 2));
  }
}

// Survey submission endpoint
app.post('/api/survey', async (req, res) => {
  try {
    const submission = {
      timestamp: new Date().toISOString(),
      ...req.body
    };

    // Read existing submissions
    let submissions = [];
    try {
      const data = await fs.readFile(SUBMISSIONS_FILE, 'utf8');
      submissions = JSON.parse(data);
    } catch (err) {
      // File doesn't exist or is empty, start with empty array
      submissions = [];
    }

    // Add new submission
    submissions.push(submission);

    // Save to file
    await fs.writeFile(SUBMISSIONS_FILE, JSON.stringify(submissions, null, 2));

    // Return success response
    res.status(200).json({ 
      success: true, 
      message: 'Thank you for your feedback!' 
    });
  } catch (error) {
    console.error('Error saving submission:', error);
    res.status(500).json({ 
      success: false, 
      message: 'An error occurred while saving your submission.' 
    });
  }
});

// Optional: Endpoint to view submissions (for admin use)
app.get('/api/submissions', async (req, res) => {
  try {
    const data = await fs.readFile(SUBMISSIONS_FILE, 'utf8');
    const submissions = JSON.parse(data);
    res.json(submissions);
  } catch (error) {
    res.status(500).json({ error: 'Could not read submissions' });
  }
});

// Start server
async function startServer() {
  await initSubmissionsFile();
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Survey endpoint: http://localhost:${PORT}/api/survey`);
  });
}

startServer();



