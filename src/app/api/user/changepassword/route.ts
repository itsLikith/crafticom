import { NextResponse } from 'next/server';
import dbConnect from '../../../../lib/mongodb';
import User from '../../../../models/User';
import argon2 from 'argon2';

export async function PATCH(req: Request) {
  await dbConnect();
  const { email, newpassword } = await req.json();
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json(
                { error: 'User does not exist' },
                { status: 404 },
            );
        }
        const hashedPassword = await argon2.hash(newpassword);
        user.password = hashedPassword;
        await user.save();
        return NextResponse.json({ message: 'Password updated successfully' });
    } catch (error: any) {
        console.error(error);
        return NextResponse.json(
            { error: 'Internal Server Error', details: error.message },
            { status: 500 },
        );
    }
}