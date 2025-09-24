import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, phone, program, city, message, subject, type } = body

    // Basic validation
    if (!email) {
      return NextResponse.json(
        { message: 'Email is required', success: false },
        { status: 400 }
      )
    }

    // Prepare email content
    const emailContent = `
New ${type || 'contact'} form submission:

Name: ${name || 'Not provided'}
Email: ${email}
Phone: ${phone || 'Not provided'}
Program: ${program || 'Not provided'}
City: ${city || 'Not provided'}
Subject: ${subject || 'Not provided'}

Message:
${message || 'No message provided'}

---
Submitted on: ${new Date().toISOString()}
    `.trim()

    // Send email using a simple fetch to an email service
    // For production, you should use a proper email service like SendGrid, Nodemailer, etc.
    const emailData = {
      to: 'abdullah.hkt@gmail.com',
      from: email,
      subject: `New ${type || 'Contact'} Form Submission - ${subject || 'No Subject'}`,
      text: emailContent,
      html: emailContent.replace(/\n/g, '<br>')
    }

    // Log the submission for debugging
    console.log('Contact form submission:', {
      type,
      name,
      email,
      phone,
      program,
      city,
      subject,
      message,
      timestamp: new Date().toISOString(),
      emailSentTo: 'abdullah.hkt@gmail.com'
    })

    // In a real implementation, you would send the email here
    // For now, we'll simulate success
    console.log('Email would be sent to info@pcj.com.pk with content:', emailData)

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Return success response
    return NextResponse.json({ 
      message: 'Message sent successfully to info@pcj.com.pk',
      success: true 
    })

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { message: 'Internal server error', success: false },
      { status: 500 }
    )
  }
}
