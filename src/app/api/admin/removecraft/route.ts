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
    const { name } = body;

    if (!name) {
      return NextResponse.json(
        { error: 'Craft name is required' },
        { status: 400 },
      );
    }

    const craft = await Craft.findOne({ name: name });
    if (!craft) {
      return NextResponse.json({ error: 'Craft not found' }, { status: 404 });
    }

    await Craft.deleteOne({ name: name });

    return NextResponse.json(
      { message: 'Craft removed successfully' },
      { status: 200 },
    );
  } catch (error) {
    console.error('Error removing craft:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}
