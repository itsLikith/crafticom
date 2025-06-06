import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from './lib/jwt';

export function middleware(request: NextRequest) {
  const token =
    request.cookies.get('token')?.value ||
    request.headers.get('Authorization')?.replace('Bearer ', '');

  if (!token) return NextResponse.redirect(new URL('/login', request.url));

  try {
    verifyToken(token);
    return NextResponse.next();
  } catch {
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }
}

export const config = {
  matcher: [
    // Protect everything except login, signup, api, _next, static, favicon.ico, and the root landing page
    '/((?!login|signup|forgotpassword|api|_next|static|favicon.ico$|$).*)',
  ],
};
