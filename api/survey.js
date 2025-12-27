// Vercel serverless function
// This file automatically becomes available at /api/survey

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Parse the request body
    const data = req.body;
    
    // Add timestamp
    const submission = {
      timestamp: new Date().toISOString(),
      ...data
    };

    // Here you can:
    // 1. Save to a database (MongoDB, Supabase, etc.)
    // 2. Send to an email service (SendGrid, etc.)
    // 3. Save to cloud storage (AWS S3, etc.)
    // 4. Send to a webhook
    
    // For now, we'll just return success
    // In production, you'd save to a database
    
    console.log('Survey submission:', submission);

    // Return success response
    return res.status(200).json({
      success: true,
      message: 'Thank you for your feedback!'
    });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({
      success: false,
      message: 'An error occurred while saving your submission.'
    });
  }
}

