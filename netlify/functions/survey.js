// Netlify serverless function
exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    // Parse the request body
    const data = JSON.parse(event.body);
    
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

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        success: true,
        message: 'Thank you for your feedback!'
      })
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        success: false,
        message: 'An error occurred while saving your submission.'
      })
    };
  }
};

