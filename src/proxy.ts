import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Very basic edge-compatible rate limiting setup
const ratelimitMap = new Map<string, { count: number; lastReset: number }>();

function applyRateLimit(ip: string) {
  const WINDOW_MS = 60000; // 1 minute
  const MAX_REQUESTS = 10;
  
  const now = Date.now();
  const record = ratelimitMap.get(ip) || { count: 0, lastReset: now };

  if (now - record.lastReset > WINDOW_MS) {
    record.count = 1;
    record.lastReset = now;
  } else {
    record.count++;
  }

  ratelimitMap.set(ip, record);

  const isRateLimited = record.count > MAX_REQUESTS;
  return { isRateLimited, limit: MAX_REQUESTS, remaining: Math.max(0, MAX_REQUESTS - record.count) };
}

export function proxy(request: NextRequest) {
  // Only apply rate limiting to POST API routes
  if (request.nextUrl.pathname.startsWith('/api/') && request.method === 'POST') {
    // In production on Vercel, x-real-ip or x-forwarded-for contains the IP
    const ip = request.headers.get('x-forwarded-for') || request.ip || '127.0.0.1';
    
    const { isRateLimited, limit, remaining } = applyRateLimit(ip);

    if (isRateLimited) {
      return new NextResponse('Too Many Requests', {
        status: 429,
        headers: {
          'X-RateLimit-Limit': limit.toString(),
          'X-RateLimit-Remaining': '0',
          'Retry-After': '60',
        },
      });
    }

    const response = NextResponse.next();
    response.headers.set('X-RateLimit-Limit', limit.toString());
    response.headers.set('X-RateLimit-Remaining', remaining.toString());
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/api/:path*',
};
