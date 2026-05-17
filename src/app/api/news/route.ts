import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { NewsArticle } from '@/models/NewsArticle';

// Use Next.js caching feature (ISR pattern via Route Handlers)
export const revalidate = 600; // Revalidate every 10 minutes

export async function GET() {
  try {
    await connectDB();
    const articles = await NewsArticle.find({})
      .sort({ publishedAt: -1 })
      .select('-content'); // Exclude large content body for the listing

    return NextResponse.json({ success: true, data: articles }, { status: 200 });
  } catch (error) {
    console.error('News Fetch Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
