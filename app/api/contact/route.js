import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Make sure we run on Node.js (SMTP not supported on Edge)
export const runtime = 'nodejs'
// Force dynamic for API routes
export const dynamic = 'force-dynamic'

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, phone, program, city, message, subject, type } = body

    // Basic validation
    if (!email || !name || !message) {
      return NextResponse.json(
        { message: 'Name, email and message are required.', success: false },
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

    // Create transporter using Outlook/Office 365 SMTP
    const transporter = nodemailer.createTransport({
      host: 'smtp.office365.com',
      port: 587,
      secure: false, // TLS will be upgraded on 587
      requireTLS: true, // important for O365
      auth: {
        user: process.env.EMAIL_USER, // Your Outlook email (info@pcj.com.pk)
        pass: process.env.EMAIL_PASS  // Your Outlook password or app password
      }
    })

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender (your Gmail)
      to: 'info@pcj.com.pk', // Recipient
      replyTo: email, // Reply to the person who submitted the form
      subject: `New ${type || 'Contact'} Form Submission - ${subject || 'No Subject'}`,
      text: emailContent,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            New ${type || 'Contact'} Form Submission
          </h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name || 'Not provided'}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Program:</strong> ${program || 'Not provided'}</p>
            <p><strong>City:</strong> ${city || 'Not provided'}</p>
            <p><strong>Subject:</strong> ${subject || 'Not provided'}</p>
          </div>
          
          <div style="background: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 5px;">
            <h3 style="color: #333; margin-top: 0;">Message:</h3>
            <p style="white-space: pre-wrap;">${message || 'No message provided'}</p>
          </div>
          
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
            Submitted on: ${new Date().toISOString()}
          </div>
        </div>
      `
    }

    // Send email
    await transporter.sendMail(mailOptions)

    // Log the submission for debugging
    console.log('Contact form submission sent successfully:', {
      type,
      name,
      email,
      phone,
      program,
      city,
      subject,
      message,
      timestamp: new Date().toISOString(),
      emailSentTo: 'info@pcj.com.pk'
    })

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
