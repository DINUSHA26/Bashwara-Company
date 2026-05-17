import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { Career } from '@/models/Career';

// Cache careers listing for an hour
export const revalidate = 3600;

export async function GET() {
  try {
    await connectDB();
    const activeJobs = await Career.find({ isActive: true })
      .sort({ createdAt: -1 });

    return NextResponse.json({ success: true, data: activeJobs }, { status: 200 });
  } catch (error) {
    console.error('Careers Fetch Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
