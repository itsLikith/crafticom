import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from './lib/jwt';

export function middleware(request: NextRequest) {
  const token =
    request.cookies.get('token')?.value ||
    request.headers.get('Authorization')?.replace('Bearer ', '');

  // If no token, redirect to login for protected routes
  if (!token) {
    if (
      request.nextUrl.pathname.startsWith('/craftizen') ||
      request.nextUrl.pathname.startsWith('/artisan')
    ) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
    return NextResponse.next();
  }

  try {
    const user: any = verifyToken(token);

    // If user is on login or signup and already authenticated, redirect to their home
    if (
      request.nextUrl.pathname === '/login' ||
      request.nextUrl.pathname === '/signup' ||
      request.nextUrl.pathname === '/'
    ) {
      if (user.role === 'craftizen') {
        return NextResponse.redirect(new URL('/craftizen/home', request.url));
      }
      if (user.role === 'artisan') {
        return NextResponse.redirect(new URL('/artisan/home', request.url));
      }
    }

    // Allow access to protected routes
    return NextResponse.next();
  } catch {
    // Invalid token, redirect to login
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

export const config = {
  matcher: [
    // Protect everything except login, signup, api, _next, static, favicon.ico, and the root landing page
    '/((?!login|signup|forgotpassword|api|_next|static|favicon.ico$|$).*)',
  ],
};
