import { NextRequest, NextResponse } from 'next/server';

export default async function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  const { pathname } = request.nextUrl;

  const authRoutes = ['/login', '/signup', '/'];
  const isAuthRoute = authRoutes.includes(pathname);
  const isProtectedRoute =
    pathname.startsWith('/craftizen') ||
    pathname.startsWith('/artisan') ||
    pathname.startsWith('/admin');

  try {
    if (token) {
      const userCookie = request.cookies.get('userRole')?.value;

      if (!userCookie) {
        // If token exists but no user role, something is wrong. Clear cookies and redirect to login.
        const response = NextResponse.redirect(new URL('/', request.url));
        response.cookies.delete('token');
        response.cookies.delete('userRole');
        return response;
      }

      const userRole = userCookie; // userRole cookie contains the role string directly

      if (isAuthRoute) {
        let redirectUrl = '/';
        if (userRole === 'craftizen') {
          redirectUrl = '/craftizen/home';
        } else if (userRole === 'artisan') {
          redirectUrl = '/artisan/home';
        } else if (userRole === 'admin') {
          redirectUrl = '/admin/dashboard';
        }
        return NextResponse.redirect(new URL(redirectUrl, request.url));
      }

      const isCraftizenAccessingArtisan =
        userRole === 'craftizen' && pathname.startsWith('/artisan');
      const isArtisanAccessingCraftizen =
        userRole === 'artisan' && pathname.startsWith('/craftizen');
      const isNonAdminAccessingAdmin =
        userRole !== 'admin' && pathname.startsWith('/admin');

      if (
        isCraftizenAccessingArtisan ||
        isArtisanAccessingCraftizen ||
        isNonAdminAccessingAdmin
      ) {
        return NextResponse.redirect(new URL('/', request.url));
      }

      return NextResponse.next();
    }

    if (isProtectedRoute) {
      return NextResponse.redirect(new URL('/', request.url));
    }

    return NextResponse.next();
  } catch (error) {
    console.error('Token verification failed:', error);
    const response = NextResponse.redirect(new URL('/', request.url));
    response.cookies.delete('token');
    return response;
  }
}

// This configuration applies the middleware to specific routes
export const config = {
  matcher: [
    '/admin/:path*',
    '/craftizen/:path*',
    '/artisan/:path*',
    '/login',
    '/signup',
    '/',
  ],
};
