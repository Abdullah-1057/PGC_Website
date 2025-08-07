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
    })

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Return success response
    return NextResponse.json({ 
      message: 'Message received successfully',
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
