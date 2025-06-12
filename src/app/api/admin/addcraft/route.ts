import { NextResponse, NextRequest } from 'next/server';
import { verifyToken } from '../../../../lib/jwt';
import Craft from '../../../../models/Craft';

export async function POST(req: NextRequest) {
  const token =
    req.cookies.get('token')?.value ||
    req.headers.get('Authorization')?.replace('Bearer ', '');
  if (!token) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  }

  try {
    const user = await verifyToken(token);
    if (user.role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    const body = await req.json();
    const { name, bgImage, description } = body;

    if (!name || !bgImage || !description) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 },
      );
    }

    const newCraft = new Craft({ name, bgImage, description });
    await newCraft.save();

    return NextResponse.json(
      { message: 'Craft added successfully', craft: newCraft },
      { status: 201 },
    );
  } catch (error) {
    console.error('Error adding craft:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}
