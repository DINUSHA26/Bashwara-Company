import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { SparePart } from '@/models/SparePart';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const condition = searchParams.get('condition');
    const category = searchParams.get('category');
    const search = searchParams.get('search');

    await connectDB();

    const query: any = { isAvailable: true };

    if (condition) query.condition = condition;
    if (category) query.category = category;
    if (search) {
      query.partName = { $regex: search, $options: 'i' };
    }

    const parts = await SparePart.find(query).sort({ createdAt: -1 }).limit(50);

    return NextResponse.json({ success: true, data: parts }, { status: 200 });
  } catch (error) {
    console.error('Spare Parts Fetch Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
