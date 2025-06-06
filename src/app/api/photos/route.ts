// Placeholder API route for photo management
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  // TODO: upload to S3 and return info
  return NextResponse.json({ success: true });
}
