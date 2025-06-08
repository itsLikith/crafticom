import { NextResponse } from 'next/server';
import dbConnect from '../../../../lib/mongodb';

export async function GET() {
  await dbConnect();
  return NextResponse.json({ message: 'MongoDB Connected!' });
}
