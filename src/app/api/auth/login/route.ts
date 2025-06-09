import { NextResponse } from 'next/server';
import dbConnect from '../../../../lib/mongodb';
import User from '../../../../models/User';
import argon2 from 'argon2';
import { signToken } from '../../../../lib/jwt';

export async function POST(req: Request) {
  try {
    await dbConnect();
    const { email, password } = await req.json();
    const user = await User.findOne({ email }).select('+password');
    if (!user) {
      return NextResponse.json(
        { error: 'User does not exist' },
        { status: 404 },
      );
    }
    const isPasswordValid = await argon2.verify(user.password, password);
    if (!isPasswordValid) {
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 },
      );
    }

    // Sign JWT with user data (await is required)
    const token = await signToken({
      email: user.email,
      role: user.role,
      name: user.name,
    });

    // Set JWT as HTTP-only cookie
    const response = NextResponse.json(
      {
        message: 'Login successful',
        user: {
          email: user.email,
          role: user.role,
          name: user.name,
        },
      },
      { status: 200 },
    );
    response.cookies.set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24, // 1 day
    });

    return response;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error);
      return NextResponse.json(
        { error: 'Internal Server Error', details: error.message },
        { status: 500 },
      );
    }
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 },
    );
  }
}
