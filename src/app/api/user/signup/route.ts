import { NextResponse } from 'next/server';
import dbConnect from '../../../../lib/mongodb';
import User from '../../../../models/User';
import argon2 from 'argon2';

export async function POST(req: Request) {
  try {
    await dbConnect();
    const { name, phoneNumber, email, password } = await req.json();
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: 'User already exists' },
        { status: 409 },
      );
    }
    const hashedPassword = await argon2.hash(password);
    const newUser = new User({
      name,
      phoneNumber,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    return NextResponse.json(
      { message: 'User created successfully' },
      { status: 201 },
    );
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
