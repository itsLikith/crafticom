import { NextResponse, NextRequest } from 'next/server';
import { verifyToken } from '../../../../../lib/jwt';
import User from '../../../../../models/User';  // Add this import

export async function PATCH(req: NextRequest) {
  const token =
    req.headers.get('Authorization')?.replace('Bearer ', '') ||
    req.cookies.get('token')?.value;

  if (!token) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  }
  
  try {
    const decodedToken = await verifyToken(token);
    if (!decodedToken) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
    }

    // Find the user document using the email from decoded token
    const user = await User.findOne({ email: decodedToken.email });
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Toggle between craftizen and artisan roles
    const newRole = user.role === 'craftizen' ? 'artisan' : 'craftizen';
    
    // Update the user's role
    await User.updateOne(
      { _id: user._id },
      { $set: { role: newRole } }
    );

    return NextResponse.json({ 
      message: 'Role updated successfully',
      newRole: newRole 
    }, { status: 200 });

  } catch (error) {
    console.error('Error changing role:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }    
}

