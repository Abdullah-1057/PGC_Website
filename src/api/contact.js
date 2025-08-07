// API route handler for contact form submissions
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, phone, program, city, message, subject, type } = req.body;

    // Basic validation
    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    // Log the submission (in a real app, you'd save to database or send email)
    console.log('Contact form submission:', {
      type,
      name,
      email,
      phone,
      program,
      city,
      subject,
      message,
      timestamp: new Date().toISOString()
    });

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Return success response
    return res.status(200).json({ 
      message: 'Message received successfully',
      success: true 
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ 
      message: 'Internal server error',
      success: false 
    });
  }
}
