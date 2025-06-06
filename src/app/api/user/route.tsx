import { cookies } from 'next/headers';
import { verifyToken } from '../../../lib/jwt'; // Adjust the import path as necessary
import { NextResponse } from 'next/server';

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;

  if (!token) return NextResponse.json({ user: null });

  try {
    const user = verifyToken(token);
    return NextResponse.json({ user });
  } catch {
    return NextResponse.json({ user: null });
  }
}
