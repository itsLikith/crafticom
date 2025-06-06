import { NextResponse } from 'next/server';
import { signToken } from '../../../lib/jwt';

export async function POST(req: Request) {
  const { email, password } = await req.json();

  if (email === 'user@example.com' && password === '1234') {
    const token = signToken({ email });
    const res = NextResponse.json({ success: true });

    res.cookies.set('token', token, {
      httpOnly: true,
      secure: true,
      maxAge: 60 * 60 * 24,
      path: '/',
    });

    return res;
  }

  return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
}
