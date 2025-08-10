import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password, remember } = body;

    // Forward the request to your external backend
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL;
    const response = await axios.post(`${backendUrl}/api/auth/login`, {
      email,
      password,
    });

    // Check if login was successful
    if (response.data.success && response.data.statusCode === 201) {
      const { token, user } = response.data.data;

      // Create the response
      const nextResponse = NextResponse.json(response.data);

      // Set secure HTTP-only cookies
      const cookieOptions = {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax' as const,
        path: '/',
        maxAge: remember ? 7 * 24 * 60 * 60 * 1000 : 24 * 60 * 60 * 1000, // 7 days or 1 day
      };

      // Set the token cookie
      nextResponse.cookies.set('token', token, cookieOptions);

      // Set the user role cookie
      nextResponse.cookies.set('userRole', user.role, cookieOptions);

      return nextResponse;
    } else {
      return NextResponse.json(response.data, { status: 400 });
    }
  } catch (error: any) {
    console.error('Login API error:', error);

    if (error.response) {
      return NextResponse.json(
        error.response.data || { message: 'Login failed' },
        { status: error.response.status },
      );
    }

    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 },
    );
  }
}
