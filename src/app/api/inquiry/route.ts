import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { Inquiry } from '@/models/Inquiry';
import { inquirySchema } from '@/lib/validations/inquiry.schema';

async function verifyRecaptcha(token: string): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  if (!secretKey) return false;

  const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;
  try {
    const res = await fetch(url, { method: 'POST' });
    const data = await res.json();
    return data.success;
  } catch (error) {
    return false;
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // 1. Validate Input via Zod
    const validatedData = inquirySchema.parse(body);

    // 2. Verify reCAPTCHA
    const isHuman = await verifyRecaptcha(validatedData.recaptchaToken);
    if (!isHuman) {
      return NextResponse.json({ error: 'reCAPTCHA verification failed.' }, { status: 400 });
    }

    // 3. Save to MongoDB
    await connectDB();
    const newInquiry = new Inquiry({
      sector: validatedData.sector,
      senderName: validatedData.senderName,
      senderEmail: validatedData.senderEmail,
      contactNo: validatedData.contactNo,
      message: validatedData.message,
      metaData: validatedData.metaData,
    });

    await newInquiry.save();

    return NextResponse.json({ success: true, message: 'Inquiry submitted successfully.' }, { status: 201 });
  } catch (error: any) {
    if (error.name === 'ZodError') {
      return NextResponse.json({ error: 'Validation Error', details: error.errors }, { status: 400 });
    }
    console.error('Inquiry Submission Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
