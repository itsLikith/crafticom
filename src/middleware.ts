import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from './lib/jwt';
import type { JWTPayload } from 'jose';

export default async function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  const { pathname } = request.nextUrl;

  const authRoutes = ['/login', '/signup', '/'];
  const isAuthRoute = authRoutes.includes(pathname);
  const isProtectedRoute =
    pathname.startsWith('/craftizen') || pathname.startsWith('/artisan');

  try {
    if (token) {
      const user = (await verifyToken(token)) as JWTPayload;

      if (isAuthRoute) {
        let redirectUrl = '/';
        if (user.role === 'craftizen') {
          redirectUrl = '/craftizen/home';
        } else if (user.role === 'artisan') {
          redirectUrl = '/artisan/home';
        } else if (user.role === 'admin') {
          redirectUrl = '/admin/dashboard';
        }
        return NextResponse.redirect(new URL(redirectUrl, request.url));
      }

      const isCraftizenAccessingArtisan =
        user.role === 'craftizen' && pathname.startsWith('/artisan');
      const isArtisanAccessingCraftizen =
        user.role === 'artisan' && pathname.startsWith('/craftizen');

      if (isCraftizenAccessingArtisan || isArtisanAccessingCraftizen) {
        return NextResponse.redirect(new URL('/login', request.url));
      }

      return NextResponse.next();
    }

    if (isProtectedRoute) {
      return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();
  } catch (error) {
    console.error('Token verification failed:', error);
    const response = NextResponse.redirect(new URL('/login', request.url));
    response.cookies.delete('token');
    return response;
  }
}

export const config = {
  matcher: [
    '/craftizen/:path*',
    '/artisan/:path*',
    '/admin/:path*',
    '/login',
    '/signup',
    '/',
  ],
};
