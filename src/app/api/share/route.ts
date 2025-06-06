// Placeholder API route for generating share links
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const token = Math.random().toString(36).slice(2);
  return NextResponse.json({ url: `/share/${token}` });
}
